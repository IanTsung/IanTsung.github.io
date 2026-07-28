"use client";
import React, { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import { ArrowDownTrayIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 240], [1, 0]);
  const scrollTranslateY = useTransform(scrollY, [0, 240], [0, 24]);

  const enter = useMotionValue(0);
  const hintOpacity = useTransform(
    [enter, scrollOpacity],
    ([e, s]) => e * s
  );

  useEffect(() => {
    const controls = animate(enter, 1, {
      delay: 0.9,
      duration: 0.6,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [enter]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial glow behind the copy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 55%, rgb(var(--apple-blue-rgb) / 0.14), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="apple-heading text-apple-text text-[44px] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Software
          <br />
          <span className="bg-gradient-to-b from-apple-text to-apple-text/60 bg-clip-text text-transparent">
            Redefined
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg md:text-xl lg:text-2xl text-apple-dim max-w-2xl mx-auto leading-snug"
        >
          Full-stack engineer crafting clean, scalable systems.
          Currently building serverless products at Viva Leisure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary inline-flex items-center gap-1"
          >
            See my work
            <span aria-hidden="true">›</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/Cong_CV.pdf"
            className="btn-ghost inline-flex items-center gap-2"
          >
            Download CV
            <ArrowDownTrayIcon className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          style={{ opacity: hintOpacity, y: scrollTranslateY }}
          className="mt-24 hidden md:flex flex-col items-center gap-2 text-apple-dim"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDownIcon className="w-4 h-4 scroll-hint" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
