"use client";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { motion, useInView } from "framer-motion";
import TechStackList from "./TechStack/TechStackList";

const SkillsSection = () => {
  const darkMode = useSelector((state) => state.darkMode);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textColor = darkMode ? "text-white" : "text-slate-800";

  return (
    <section id="skills">
      <h2 className={`text-center text-4xl font-bold mt-20 mb-12 ${textColor}`}>
        Skills
      </h2>
      <TechStackList />
    </section>
  );
};

export default SkillsSection;
