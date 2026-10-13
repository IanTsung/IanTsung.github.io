// Pure logic for the AI twin chat widget. Kept free of React so it can be
// unit-tested in Node (see chat-client.test.js).

// Mirrors worker/src/guard.js — the Worker enforces it, this just gives the
// user feedback before a round-trip.
export const MAX_INPUT_CHARS = 1000;

export const SUGGESTED_QUESTIONS = [
  "What do you work on at Viva Leisure?",
  "What's your strongest tech stack?",
  "Which AWS certifications do you hold?",
];

/** The API only wants role + content; drop UI-only fields and empty/failed turns. */
export function toApiMessages(history) {
  return history
    .filter((m) => !m.error && m.content.trim() !== "")
    .map(({ role, content }) => ({ role, content }));
}

/** Validates the draft before sending. Returns an error string or null. */
export function validateInput(text) {
  const trimmed = text.trim();
  if (trimmed === "") return "empty";
  if (trimmed.length > MAX_INPUT_CHARS) return "too-long";
  return null;
}

/**
 * Reads a streamed text/plain fetch Response, calling onChunk with each
 * decoded piece. Throws with the server's error message on non-2xx.
 */
export async function readTextStream(response, onChunk) {
  if (!response.ok) {
    let message = "Something went wrong. Please try again.";
    try {
      const data = await response.json();
      if (data?.error) message = data.error;
    } catch {
      // non-JSON error body — keep the generic message
    }
    throw new Error(message);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    const text = decoder.decode(value, { stream: true });
    if (text) onChunk(text);
  }
  const tail = decoder.decode();
  if (tail) onChunk(tail);
}
