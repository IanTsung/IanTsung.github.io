import { describe, expect, it } from "vitest";
import {
  MAX_HISTORY_MESSAGES,
  MAX_MESSAGE_CHARS,
  isAllowedOrigin,
  parseAllowedOrigins,
  sanitizeMessages,
} from "./guard.js";

const u = (content) => ({ role: "user", content });
const a = (content) => ({ role: "assistant", content });

describe("parseAllowedOrigins / isAllowedOrigin", () => {
  const allowed = parseAllowedOrigins(" https://iantsung.github.io , http://localhost:3000,");

  it("splits and trims the env var", () => {
    expect(allowed).toEqual(["https://iantsung.github.io", "http://localhost:3000"]);
  });

  it("accepts listed origins only", () => {
    expect(isAllowedOrigin("https://iantsung.github.io", allowed)).toBe(true);
    expect(isAllowedOrigin("https://evil.example", allowed)).toBe(false);
  });

  it("rejects missing origin", () => {
    expect(isAllowedOrigin(null, allowed)).toBe(false);
    expect(isAllowedOrigin("", allowed)).toBe(false);
  });

  it("handles unset env var", () => {
    expect(parseAllowedOrigins(undefined)).toEqual([]);
  });
});

describe("sanitizeMessages", () => {
  it("accepts a single user message", () => {
    expect(sanitizeMessages({ messages: [u("hi")] })).toEqual({
      ok: true,
      messages: [u("hi")],
    });
  });

  it("strips unknown fields", () => {
    const res = sanitizeMessages({ messages: [{ ...u("hi"), cache_control: {} }] });
    expect(res.messages).toEqual([u("hi")]);
  });

  it.each([
    ["missing body", undefined],
    ["non-array", { messages: "hi" }],
    ["empty array", { messages: [] }],
    ["starts with assistant", { messages: [a("x"), u("y")] }],
    ["two users in a row", { messages: [u("x"), u("y")] }],
    ["ends with assistant", { messages: [u("x"), a("y")] }],
    ["system role", { messages: [{ role: "system", content: "x" }] }],
    ["non-string content", { messages: [{ role: "user", content: [{ type: "text" }] }] }],
    ["blank content", { messages: [u("   ")] }],
    ["too long", { messages: [u("x".repeat(MAX_MESSAGE_CHARS + 1))] }],
  ])("rejects %s", (_, body) => {
    expect(sanitizeMessages(body).ok).toBe(false);
  });

  it("allows long assistant messages (they come back from the model)", () => {
    const res = sanitizeMessages({
      messages: [u("q"), a("x".repeat(MAX_MESSAGE_CHARS * 3)), u("q2")],
    });
    expect(res.ok).toBe(true);
  });

  it("trims history and keeps it starting with a user turn", () => {
    const long = [];
    for (let i = 0; i < 20; i++) long.push(u(`q${i}`), a(`a${i}`));
    long.push(u("last"));
    const res = sanitizeMessages({ messages: long });
    expect(res.ok).toBe(true);
    expect(res.messages.length).toBeLessThanOrEqual(MAX_HISTORY_MESSAGES);
    expect(res.messages[0].role).toBe("user");
    expect(res.messages.at(-1)).toEqual(u("last"));
  });
});
