"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Back End Developer",
    company: "Viva Leisure",
    companyIcon: "/work/viva_leisure.jpg",
    duration: "Oct 2024 — Present",
    description:
      "Serverless backend engineering with AWS CDK and TypeScript. Building the platform behind Australia's fastest-growing health clubs.",
    skills: ["AWS CDK", "TypeScript", "Serverless", "DynamoDB"],
  },
  {
    title: "Research Assistant",
    company: "Mandala Partners",
    companyIcon: "/work/mandala_partners.jpg",
    duration: "Feb 2024 — Jun 2024",
    description:
      "Built a zero-shot learning tool for economic analysis of corporate documents on AWS SageMaker.",
    skills: ["AWS SageMaker", "Python", "NLP", "Zero-shot Learning"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 md:py-40 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="apple-eyebrow text-center mb-4"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="apple-heading text-center text-4xl md:text-5xl lg:text-6xl mb-20"
        >
          Where I&apos;ve been
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
