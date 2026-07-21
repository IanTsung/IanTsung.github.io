"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import GithubIcon from "../../../public/github.svg";
import LinkedInIcon from "../../../public/linkedin.svg";
import {
  COOLDOWN_MS,
  HONEYPOT_FIELD,
  clearCooldownIfExpired,
  getCooldownRemainingMs,
  isHoneypotTriggered,
  isOnCooldown,
  startCooldown,
} from "./contact-guard";

const inputCls =
  "w-full bg-apple-surface border border-apple-line-strong rounded-xl px-4 py-3 text-apple-text placeholder:text-apple-dim/70 outline-none focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/30 transition";

const honeypotStyle = {
  position: "absolute",
  left: "-9999px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  opacity: 0,
};

const EmailSection = () => {
  const form = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  // Restore cooldown from localStorage on mount so refresh cannot bypass it.
  useEffect(() => {
    clearCooldownIfExpired();
    if (!isOnCooldown()) return;
    setCooldown(true);
    const remaining = getCooldownRemainingMs();
    const t = setTimeout(() => setCooldown(false), remaining);
    return () => clearTimeout(t);
  }, []);

  const notify = (kind, message) =>
    toast[kind](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot: bots often auto-fill any input they can see. Silently drop.
    if (isHoneypotTriggered(form.current)) {
      return;
    }

    const fields = {
      name: form.current.from_name.value,
      email: form.current.from_email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    const empty = Object.entries(fields).filter(([, v]) => !v.trim());
    if (empty.length) {
      empty.forEach(([f]) => notify("warn", `Please enter your ${f}`));
      return;
    }

    if (isSubmitting || cooldown || isOnCooldown()) {
      notify(
        "warn",
        "You just sent an email — please wait a minute before sending another."
      );
      setCooldown(true);
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID }
      )
      .then(
        () => {
          notify("success", "Thank you for reaching out!");
          startCooldown();
          setCooldown(true);
          setTimeout(() => setCooldown(false), COOLDOWN_MS);
        },
        () =>
          notify(
            "error",
            "An error occurred sending your message, please try again"
          )
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-32 md:py-40 px-6 bg-apple-surface2"
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="apple-eyebrow mb-4">Contact</p>
            <h2 className="apple-heading text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s make
              <br />
              <span className="text-apple-dim">something great</span>
            </h2>
            <p className="mt-6 text-lg text-apple-dim max-w-md leading-relaxed">
              I&apos;m open to new opportunities, collaborations, or a quick
              chat. Drop me a note — I&apos;ll do my best to reply promptly.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/IanTsung"
                className="opacity-80 hover:opacity-100 transition-opacity"
                aria-label="GitHub"
              >
                <Image
                  src={GithubIcon}
                  alt=""
                  width={22}
                  height={22}
                  style={{ filter: "var(--icon-invert)" }}
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/zhaoyancong/"
                className="opacity-80 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <Image src={LinkedInIcon} alt="" width={22} height={22} />
              </Link>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="card p-8 md:p-10 space-y-5 relative"
          >
            {/* Honeypot — hidden from humans, tempting for bots */}
            <div style={honeypotStyle} aria-hidden="true">
              <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
              <input
                type="text"
                name={HONEYPOT_FIELD}
                id={HONEYPOT_FIELD}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-xs uppercase tracking-widest text-apple-dim"
              >
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="name"
                placeholder="John Doe"
                className={inputCls}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-xs uppercase tracking-widest text-apple-dim"
              >
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="email"
                placeholder="john@example.com"
                className={inputCls}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-xs uppercase tracking-widest text-apple-dim"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Just to say hi"
                className={inputCls}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-xs uppercase tracking-widest text-apple-dim"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Hi Ian, I'd like to talk about…"
                className={inputCls}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || cooldown}
              className={`btn-primary w-full sm:w-auto inline-flex justify-center ${
                isSubmitting || cooldown ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default EmailSection;
