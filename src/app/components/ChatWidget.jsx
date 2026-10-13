"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  MAX_INPUT_CHARS,
  SUGGESTED_QUESTIONS,
  readTextStream,
  toApiMessages,
  validateInput,
} from "./chat-client";

const ENDPOINT = process.env.NEXT_PUBLIC_CHAT_ENDPOINT;

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Feature is off until the Worker endpoint is configured for this build.
  if (!ENDPOINT) return null;

  const updateLast = (fn) =>
    setMessages((prev) => [...prev.slice(0, -1), fn(prev[prev.length - 1])]);

  const send = async (text) => {
    if (pending || validateInput(text)) return;
    const history = [...toApiMessages(messages), { role: "user", content: text.trim() }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setDraft("");
    setPending(true);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      await readTextStream(res, (chunk) =>
        updateLast((m) => ({ ...m, content: m.content + chunk }))
      );
    } catch (err) {
      updateLast(() => ({ role: "assistant", content: err.message, error: true }));
    } finally {
      setPending(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(draft);
  };

  const tooLong = draft.trim().length > MAX_INPUT_CHARS;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat with Ian's AI twin"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-50 bottom-24 right-4 left-4 sm:left-auto sm:right-8 sm:w-[380px] h-[min(560px,calc(100dvh-8rem))] flex flex-col rounded-3xl bg-apple-surface border border-apple-line-strong shadow-2xl overflow-hidden"
          >
            <header className="flex items-center justify-between px-5 py-4 border-b border-apple-line">
              <div>
                <p className="text-sm font-semibold text-apple-text">Ask Ian&apos;s AI twin</p>
                <p className="text-xs text-apple-dim">
                  AI answers based on my portfolio. It can make mistakes.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="p-1.5 rounded-full text-apple-dim hover:text-apple-text hover:bg-apple-tint-b transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col justify-end gap-2">
                  <p className="text-sm text-apple-dim mb-2">
                    Hi! I&apos;m an AI version of Ian. Ask me about my work, skills or experience.
                  </p>
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="text-left text-sm px-4 py-2.5 rounded-2xl border border-apple-line text-apple-text hover:bg-apple-tint-b transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              ) : (
                messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <p
                      className={`max-w-[85%] whitespace-pre-wrap text-sm leading-relaxed px-4 py-2.5 rounded-2xl ${
                        m.role === "user"
                          ? "bg-apple-blue text-white rounded-br-md"
                          : m.error
                            ? "bg-apple-tint-b text-apple-dim italic rounded-bl-md"
                            : "bg-apple-elev text-apple-text rounded-bl-md"
                      }`}
                    >
                      {m.content || <span className="inline-block animate-pulse">…</span>}
                    </p>
                  </div>
                ))
              )}
            </div>

            <form onSubmit={onSubmit} className="p-3 border-t border-apple-line">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                      onSubmit(e);
                    }
                  }}
                  placeholder="Ask me anything about my work…"
                  aria-label="Message"
                  className="flex-1 resize-none max-h-32 bg-apple-tint-b border border-apple-line rounded-2xl px-4 py-2.5 text-sm text-apple-text placeholder:text-apple-dim focus:outline-none focus:border-apple-blue"
                />
                <button
                  type="submit"
                  disabled={pending || validateInput(draft) !== null}
                  aria-label="Send"
                  className="shrink-0 p-2.5 rounded-full bg-apple-blue text-white hover:bg-apple-blue-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <PaperAirplaneIcon className="w-4 h-4" />
                </button>
              </div>
              {tooLong && (
                <p className="text-xs text-red-500 mt-1.5 px-1">
                  Please keep it under {MAX_INPUT_CHARS} characters.
                </p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with Ian's AI twin"}
        aria-expanded={open}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 w-14 h-14 rounded-full bg-apple-blue text-white flex items-center justify-center shadow-blue-glow hover:bg-apple-blue-hover transition-colors"
      >
        {open ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        )}
      </motion.button>
    </>
  );
};

export default ChatWidget;
