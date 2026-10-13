import { describe, expect, it } from "vitest";
import {
  MAX_INPUT_CHARS,
  readTextStream,
  toApiMessages,
  validateInput,
} from "./chat-client.js";

describe("toApiMessages", () => {
  it("strips UI-only fields", () => {
    expect(toApiMessages([{ role: "user", content: "hi", id: 1 }])).toEqual([
      { role: "user", content: "hi" },
    ]);
  });

  it("drops errored and empty turns", () => {
    expect(
      toApiMessages([
        { role: "user", content: "hi" },
        { role: "assistant", content: "oops", error: true },
        { role: "assistant", content: "" },
      ])
    ).toEqual([{ role: "user", content: "hi" }]);
  });
});

describe("validateInput", () => {
  it("rejects blank input", () => {
    expect(validateInput("   ")).toBe("empty");
  });

  it("rejects overly long input", () => {
    expect(validateInput("x".repeat(MAX_INPUT_CHARS + 1))).toBe("too-long");
  });

  it("accepts normal input", () => {
    expect(validateInput("What do you do?")).toBeNull();
  });
});

describe("readTextStream", () => {
  const streamOf = (...parts) =>
    new ReadableStream({
      start(controller) {
        for (const p of parts) controller.enqueue(new TextEncoder().encode(p));
        controller.close();
      },
    });

  it("emits each chunk in order", async () => {
    const chunks = [];
    await readTextStream(new Response(streamOf("Hel", "lo ", "你好")), (c) => chunks.push(c));
    expect(chunks.join("")).toBe("Hello 你好");
  });

  it("reassembles multi-byte characters split across chunks", async () => {
    const bytes = new TextEncoder().encode("你");
    const body = new ReadableStream({
      start(controller) {
        controller.enqueue(bytes.slice(0, 1));
        controller.enqueue(bytes.slice(1));
        controller.close();
      },
    });
    const chunks = [];
    await readTextStream(new Response(body), (c) => chunks.push(c));
    expect(chunks.join("")).toBe("你");
  });

  it("throws the server's error message on non-2xx", async () => {
    const res = new Response(JSON.stringify({ error: "slow down" }), { status: 429 });
    await expect(readTextStream(res, () => {})).rejects.toThrow("slow down");
  });

  it("falls back to a generic message for non-JSON errors", async () => {
    const res = new Response("bad gateway", { status: 502 });
    await expect(readTextStream(res, () => {})).rejects.toThrow("Something went wrong");
  });
});
