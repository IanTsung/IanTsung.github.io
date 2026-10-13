"use client";
import React from "react";
import { motion } from "framer-motion";
import TechStackButton from "./TechStackButton";
import { techStack } from "../../../data/profile";

const TechStackList = ({ inView }) => {
  return (
    <div className="space-y-16">
      {Object.entries(techStack).map(([category, items], groupIndex) => (
        <div key={category}>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + groupIndex * 0.05 }}
            className="text-xs uppercase tracking-[0.2em] text-apple-dim"
          >
            {category}
          </motion.h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-12 md:gap-y-20 pt-16 md:pt-24">
            {items.map((btn, i) => (
              <motion.li
                key={btn.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + groupIndex * 0.05 + i * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TechStackButton {...btn} />
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechStackList;
