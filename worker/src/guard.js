// Pure request-validation logic for the chat Worker. No Workers APIs here,
// so it runs under Vitest in plain Node.

export const MAX_MESSAGE_CHARS = 1000;
export const MAX_HISTORY_MESSAGES = 12;

export function parseAllowedOrigins(raw) {
  return (raw || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
}

export function isAllowedOrigin(origin, allowed) {
  return Boolean(origin) && allowed.includes(origin);
}

/**
 * Validates the client-supplied conversation and trims it to the most recent
 * MAX_HISTORY_MESSAGES. Returns { ok: true, messages } or { ok: false, error }.
 */
export function sanitizeMessages(body) {
  const messages = body?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return { ok: false, error: "messages must be a non-empty array" };
  }

  for (let i = 0; i < messages.length; i++) {
    const m = messages[i];
    const expectedRole = i % 2 === 0 ? "user" : "assistant";
    if (!m || m.role !== expectedRole) {
      return { ok: false, error: "messages must alternate user/assistant, starting with user" };
    }
    if (typeof m.content !== "string" || m.content.trim() === "") {
      return { ok: false, error: "message content must be a non-empty string" };
    }
    if (m.role === "user" && m.content.length > MAX_MESSAGE_CHARS) {
      return { ok: false, error: `message exceeds ${MAX_MESSAGE_CHARS} characters` };
    }
  }

  if (messages[messages.length - 1].role !== "user") {
    return { ok: false, error: "last message must be from the user" };
  }

  let trimmed = messages.slice(-MAX_HISTORY_MESSAGES);
  if (trimmed[0].role !== "user") trimmed = trimmed.slice(1);

  return {
    ok: true,
    messages: trimmed.map((m) => ({ role: m.role, content: m.content })),
  };
}
