"use client";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Qixin Web App",
    gitUrl: "https://qixin.com.au/",
    description:
      "QiXin Web is a real estate platform for building your dream home or collaborating with experts.",
    image: "./images/projects/Qixin.png",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 2,
    title: "Qixin Web App",
    gitUrl: "https://qixin.com.au/",
    description:
      "QiXin Web is a real estate platform for building your dream home or collaborating with experts.",
    image: "./images/projects/Qixin.png",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 3,
    title: "Qixin Web App",
    gitUrl: "https://qixin.com.au/",
    description:
      "QiXin Web is a real estate platform for building your dream home or collaborating with experts.",
    image: "./images/projects/Qixin.png",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 4,
    title: "React Weather App",
    gitUrl: "https://github.com/IanTsung1999/weather-app",
    description: "a weather application using React.js",
    image: "./images/projects/weather-app.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "React Weather App",
    gitUrl: "https://github.com/IanTsung1999/weather-app",
    description: "a weather application using React.js",
    image: "./images/projects/weather-app.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "React Weather App",
    gitUrl: "https://github.com/IanTsung1999/weather-app",
    description: "a weather application using React.js",
    image: "./images/projects/weather-app.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textColor = darkMode ? "text-white" : "text-slate-800";

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className={`text-center text-4xl font-bold mt-4 mb-12 ${textColor}`}>
        Projects
      </h2>
      <div
        className={`flex flex-row justify-center items-center gap-4 sm:gap-6 py-6 mb-12 ${textColor}`}
      >
        <ProjectTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 lg:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: index * 0.5 }}
          >
            <ProjectCard
              key={project.id}
              gitUrl={project.gitUrl}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
