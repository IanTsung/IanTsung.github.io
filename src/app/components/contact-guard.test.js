import { beforeEach, describe, expect, it } from "vitest";
import {
  COOLDOWN_KEY,
  COOLDOWN_MS,
  HONEYPOT_FIELD,
  clearCooldown,
  clearCooldownIfExpired,
  getCooldownRemainingMs,
  isHoneypotTriggered,
  isOnCooldown,
  startCooldown,
} from "./contact-guard.js";

const createStorage = () => {
  const store = new Map();
  return {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    _dump: () => Object.fromEntries(store),
  };
};

const createForm = (fields = {}) => ({
  elements: Object.fromEntries(
    Object.entries(fields).map(([name, value]) => [name, { value }])
  ),
});

describe("isOnCooldown", () => {
  let storage;
  beforeEach(() => {
    storage = createStorage();
  });

  it("returns false when no key is stored", () => {
    expect(isOnCooldown(1000, storage)).toBe(false);
  });

  it("returns true when stored timestamp is in the future", () => {
    storage.setItem(COOLDOWN_KEY, "2000");
    expect(isOnCooldown(1000, storage)).toBe(true);
  });

  it("returns false when stored timestamp is in the past", () => {
    storage.setItem(COOLDOWN_KEY, "500");
    expect(isOnCooldown(1000, storage)).toBe(false);
  });

  it("returns false when the stored value is not a number", () => {
    storage.setItem(COOLDOWN_KEY, "not-a-number");
    expect(isOnCooldown(1000, storage)).toBe(false);
  });

  it("returns false when storage is unavailable", () => {
    expect(isOnCooldown(1000, null)).toBe(false);
  });
});

describe("getCooldownRemainingMs", () => {
  it("returns 0 when nothing is stored", () => {
    expect(getCooldownRemainingMs(1000, createStorage())).toBe(0);
  });

  it("returns the delta when cooldown is active", () => {
    const storage = createStorage();
    storage.setItem(COOLDOWN_KEY, "5000");
    expect(getCooldownRemainingMs(1000, storage)).toBe(4000);
  });

  it("clamps to 0 when cooldown has already elapsed", () => {
    const storage = createStorage();
    storage.setItem(COOLDOWN_KEY, "500");
    expect(getCooldownRemainingMs(1000, storage)).toBe(0);
  });
});

describe("startCooldown", () => {
  it("writes now + COOLDOWN_MS to storage", () => {
    const storage = createStorage();
    startCooldown(1000, storage);
    expect(storage.getItem(COOLDOWN_KEY)).toBe(String(1000 + COOLDOWN_MS));
  });

  it("returns the expiry timestamp", () => {
    expect(startCooldown(1000, createStorage())).toBe(1000 + COOLDOWN_MS);
  });

  it("no-ops when storage is unavailable", () => {
    expect(() => startCooldown(1000, null)).not.toThrow();
  });
});

describe("clearCooldown / clearCooldownIfExpired", () => {
  let storage;
  beforeEach(() => {
    storage = createStorage();
  });

  it("clearCooldown removes the key", () => {
    storage.setItem(COOLDOWN_KEY, "2000");
    clearCooldown(storage);
    expect(storage.getItem(COOLDOWN_KEY)).toBeNull();
  });

  it("clearCooldownIfExpired keeps an active cooldown", () => {
    storage.setItem(COOLDOWN_KEY, "5000");
    clearCooldownIfExpired(1000, storage);
    expect(storage.getItem(COOLDOWN_KEY)).toBe("5000");
  });

  it("clearCooldownIfExpired removes an expired cooldown", () => {
    storage.setItem(COOLDOWN_KEY, "500");
    clearCooldownIfExpired(1000, storage);
    expect(storage.getItem(COOLDOWN_KEY)).toBeNull();
  });

  it("clearCooldownIfExpired removes a malformed value", () => {
    storage.setItem(COOLDOWN_KEY, "garbage");
    clearCooldownIfExpired(1000, storage);
    expect(storage.getItem(COOLDOWN_KEY)).toBeNull();
  });
});

describe("isHoneypotTriggered", () => {
  it("returns true when the honeypot field has any value", () => {
    const form = createForm({ [HONEYPOT_FIELD]: "http://spam.example.com" });
    expect(isHoneypotTriggered(form)).toBe(true);
  });

  it("returns false when the honeypot field is empty", () => {
    const form = createForm({ [HONEYPOT_FIELD]: "" });
    expect(isHoneypotTriggered(form)).toBe(false);
  });

  it("returns false when the honeypot field only has whitespace", () => {
    const form = createForm({ [HONEYPOT_FIELD]: "   " });
    expect(isHoneypotTriggered(form)).toBe(false);
  });

  it("returns false when the honeypot field is missing", () => {
    const form = createForm({ from_name: "Alice" });
    expect(isHoneypotTriggered(form)).toBe(false);
  });

  it("returns false when the form is null/undefined", () => {
    expect(isHoneypotTriggered(null)).toBe(false);
    expect(isHoneypotTriggered(undefined)).toBe(false);
  });
});
