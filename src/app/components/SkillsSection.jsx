"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TechStackList from "./TechStack/TechStackList";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 md:py-40 px-6 bg-apple-surface2">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="apple-eyebrow text-center mb-4"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="apple-heading text-center text-4xl md:text-5xl lg:text-6xl mb-4"
        >
          A well-stocked toolbox.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-center text-lg md:text-xl text-apple-dim max-w-2xl mx-auto mb-20"
        >
          Languages, frameworks and platforms I reach for — across the whole stack.
        </motion.p>

        <TechStackList inView={isInView} />
      </div>
    </section>
  );
};

export default SkillsSection;
