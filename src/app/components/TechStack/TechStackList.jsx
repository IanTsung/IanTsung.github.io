"use client";
import React from "react";
import { motion } from "framer-motion";
import TechStackButton from "./TechStackButton";

const buttonData = {
  Frontend: [
    { title: "HTML", color: "#E34F26", icon: "html5-plain" },
    { title: "CSS", color: "#1572B6", icon: "css3-plain" },
    { title: "TypeScript", color: "#3178C6", icon: "typescript-plain" },
    { title: "React", color: "#61DAFB", icon: "react-original" },
    { title: "Redux", color: "#764ABC", icon: "redux-original" },
    { title: "Tailwind", color: "#06B6D4", icon: "tailwindcss-original" },
    { title: "SASS", color: "#CC6699", icon: "sass-original" },
    { title: "Flutter", color: "#02569B", icon: "flutter-plain" },
    { title: "Phoenix", color: "#FD4F00", icon: "phoenix-plain" },
  ],
  Backend: [
    { title: "Node.JS", color: "#339933", icon: "nodejs-plain-wordmark" },
    { title: "Express", color: "#CCCCCC", icon: "express-original" },
    { title: "Django", color: "#44B78B", icon: "django-plain" },
    { title: "ASP.NET", color: "#8A63FF", icon: "dotnetcore-plain" },
    { title: "GraphQL", color: "#E10098", icon: "graphql-plain" },
    { title: "Dart", color: "#0175C2", icon: "dart-plain" },
    { title: "Rust", color: "#F74C00", icon: "rust-original" },
    { title: "Golang", color: "#00ADD8", icon: "go-original-wordmark" },
    { title: "Elixir", color: "#8B5CF6", icon: "elixir-plain" },
  ],
  Cloud: [
    { title: "AWS", color: "#FF9900", icon: "amazonwebservices-plain-wordmark" },
    { title: "Azure", color: "#0089D6", icon: "azure-plain" },
    { title: "GCP", color: "#4285F4", icon: "googlecloud-plain" },
  ],
  Database: [
    { title: "MongoDB", color: "#47A248", icon: "mongodb-plain" },
    { title: "DynamoDB", color: "#4053D6", icon: "dynamodb-plain" },
    { title: "PostgreSQL", color: "#4479A1", icon: "postgresql-plain" },
  ],
  DevOps: [
    { title: "Docker", color: "#2496ED", icon: "docker-plain" },
    { title: "Kubernetes", color: "#326CE5", icon: "kubernetes-plain" },
  ],
};

const TechStackList = ({ inView }) => {
  return (
    <div className="space-y-16">
      {Object.entries(buttonData).map(([category, items], groupIndex) => (
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
