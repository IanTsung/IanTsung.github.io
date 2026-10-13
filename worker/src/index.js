import OpenAI from "openai";
import { isAllowedOrigin, parseAllowedOrigins, sanitizeMessages } from "./guard.js";
import { SYSTEM_PROMPT } from "./persona.js";

const REFUSAL_REPLY =
  "Sorry, that's not something I can help with. Feel free to ask about my work, skills or experience!";
const ERROR_REPLY =
  "Something went wrong on my end. Please try again in a moment, or reach me through the contact form.";

const json = (status, data, headers = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...headers, "Content-Type": "application/json" },
  });

const worker = {
  async fetch(request, env, ctx) {
    const origin = request.headers.get("Origin");
    if (!isAllowedOrigin(origin, parseAllowedOrigins(env.ALLOWED_ORIGINS))) {
      return json(403, { error: "Forbidden" });
    }

    const cors = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      Vary: "Origin",
    };

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST" || new URL(request.url).pathname !== "/chat") {
      return json(404, { error: "Not found" }, cors);
    }

    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
    const { success } = await env.CHAT_LIMITER.limit({ key: ip });
    if (!success) {
      return json(429, { error: "You're sending messages too quickly. Try again in a minute." }, cors);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json(400, { error: "Invalid JSON" }, cors);
    }
    const result = sanitizeMessages(body);
    if (!result.ok) return json(400, { error: result.error }, cors);

    const { readable, writable } = new TransformStream();
    ctx.waitUntil(streamReply(env, result.messages, writable));

    return new Response(readable, {
      headers: {
        ...cors,
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  },
};

export default worker;

async function streamReply(env, messages, writable) {
  const writer = writable.getWriter();
  const encoder = new TextEncoder();
  let wroteText = false;
  let refused = false;

  try {
    const client = new OpenAI({ apiKey: env.OPENAI_API_KEY });
    const stream = await client.responses.create({
      model: env.MODEL,
      instructions: SYSTEM_PROMPT,
      input: messages,
      // Answers are a few sentences; the cap bounds cost per request (reasoning included).
      max_output_tokens: 2048,
      ...(env.EFFORT ? { reasoning: { effort: env.EFFORT } } : {}),
      store: false,
      stream: true,
    });

    for await (const event of stream) {
      if (event.type === "response.output_text.delta") {
        await writer.write(encoder.encode(event.delta));
        wroteText = true;
      } else if (event.type === "response.refusal.delta") {
        refused = true;
      } else if (event.type === "response.failed" || event.type === "error") {
        console.error("OpenAI stream failed", JSON.stringify(event));
      }
    }

    if (!wroteText) await writer.write(encoder.encode(refused ? REFUSAL_REPLY : ERROR_REPLY));
  } catch (err) {
    if (err instanceof OpenAI.RateLimitError) {
      console.error("OpenAI rate limit hit", err.status);
    } else if (err instanceof OpenAI.APIError) {
      console.error(`OpenAI API error ${err.status}:`, err.message);
    } else {
      console.error("Unexpected error", err);
    }
    if (!wroteText) await writer.write(encoder.encode(ERROR_REPLY));
  } finally {
    await writer.close();
  }
}
