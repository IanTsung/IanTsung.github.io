"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Weather App",
    gitUrl: "https://github.com/IanTsung1999/weather-app",
    description: "A responsive weather application built with React.js.",
    image: "/images/projects/weather-app.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "React Weather App",
    gitUrl: "https://github.com/IanTsung1999/weather-app",
    description: "A responsive weather application built with React.js.",
    image: "/images/projects/weather-app.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "React Weather App",
    gitUrl: "https://github.com/IanTsung1999/weather-app",
    description: "A responsive weather application built with React.js.",
    image: "/images/projects/weather-app.png",
    tag: ["All", "Web"],
  },
];

const TAGS = ["All", "Web", "Mobile"];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = projectsData.filter((p) => p.tag.includes(tag));

  return (
    <section id="projects" className="py-32 md:py-40 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="apple-eyebrow text-center mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="apple-heading text-center text-4xl md:text-5xl lg:text-6xl mb-12"
        >
          Projects worth a look
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center gap-2 mb-16"
        >
          {TAGS.map((t) => (
            <ProjectTag
              key={t}
              tag={t}
              isSelected={tag === t}
              onClick={setTag}
            />
          ))}
        </motion.div>

        <motion.ul
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard
                  gitUrl={p.gitUrl}
                  imgUrl={p.image}
                  title={p.title}
                  description={p.description}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
