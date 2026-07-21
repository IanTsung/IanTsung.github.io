"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AchievementsSection from "./AchievementsSection";

const CERTIFICATIONS = [
  { title: "AWS Certified Developer", level: "Associate" },
  { title: "AWS Solutions Architect", level: "Professional" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="apple-eyebrow text-center mb-4"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="apple-heading text-center text-4xl md:text-5xl lg:text-6xl mb-6"
        >
          Building for the web.
          <br />
          <span className="text-apple-dim">Front to back.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-center text-lg md:text-xl text-apple-dim max-w-3xl mx-auto"
        >
          I&apos;m a full-stack engineer who cares about product craft,
          scalability, and code that ages well — whether it&apos;s a serverless
          backend, a React interface, or the seams in between.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mt-20 max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="card p-8 md:p-10 flex flex-col"
          >
            <p className="apple-eyebrow mb-6">Education</p>
            <h3 className="apple-heading text-2xl md:text-3xl text-apple-text">
              Master of Computing
            </h3>
            <p className="text-apple-dim mt-2 text-base md:text-lg">
              Australian National University
            </p>
            <div className="mt-auto pt-8 border-t border-apple-line flex items-center justify-between text-xs uppercase tracking-[0.18em] text-apple-dim">
              <span>Canberra, Australia</span>
              <span>2023 — 2024</span>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="card p-8 md:p-10 flex flex-col"
          >
            <p className="apple-eyebrow mb-6">Certifications</p>
            <ul className="divide-y divide-apple-line -mt-2">
              {CERTIFICATIONS.map((c) => (
                <li key={c.title} className="py-4 first:pt-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="apple-heading text-lg md:text-xl text-apple-text">
                      {c.title}
                    </h3>
                    <span className="shrink-0 text-[10px] md:text-xs uppercase tracking-[0.18em] text-apple-dim whitespace-nowrap">
                      {c.level}
                    </span>
                  </div>
                  <p className="text-apple-dim text-sm mt-1">
                    Amazon Web Services
                  </p>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <AchievementsSection />
      </div>
    </section>
  );
};

export default AboutSection;
