export const COOLDOWN_MS = 60 * 1000;
export const COOLDOWN_KEY = "contact:cooldown-until";
export const HONEYPOT_FIELD = "website";

const getStorage = () => {
  if (typeof globalThis === "undefined") return null;
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
};

export function isOnCooldown(now = Date.now(), storage = getStorage()) {
  if (!storage) return false;
  const raw = storage.getItem(COOLDOWN_KEY);
  if (!raw) return false;
  const until = Number(raw);
  return Number.isFinite(until) && until > now;
}

export function getCooldownRemainingMs(
  now = Date.now(),
  storage = getStorage()
) {
  if (!storage) return 0;
  const raw = storage.getItem(COOLDOWN_KEY);
  if (!raw) return 0;
  const until = Number(raw);
  if (!Number.isFinite(until)) return 0;
  return Math.max(0, until - now);
}

export function startCooldown(now = Date.now(), storage = getStorage()) {
  if (!storage) return null;
  const until = now + COOLDOWN_MS;
  storage.setItem(COOLDOWN_KEY, String(until));
  return until;
}

export function clearCooldown(storage = getStorage()) {
  storage?.removeItem(COOLDOWN_KEY);
}

export function clearCooldownIfExpired(
  now = Date.now(),
  storage = getStorage()
) {
  if (!storage) return;
  const raw = storage.getItem(COOLDOWN_KEY);
  if (!raw) return;
  const until = Number(raw);
  if (!Number.isFinite(until) || until <= now) storage.removeItem(COOLDOWN_KEY);
}

export function isHoneypotTriggered(form) {
  if (!form) return false;
  const field = form.elements?.[HONEYPOT_FIELD];
  const value = typeof field?.value === "string" ? field.value : "";
  return value.trim().length > 0;
}

export function hasValidCaptchaToken(token) {
  return typeof token === "string" && token.trim().length > 0;
}
