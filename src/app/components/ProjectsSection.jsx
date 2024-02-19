"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
	{
		id: 1,
		title: "React Weather App",
		gitUrl: "https://github.com/IanTsung1999/weather-app",
		description: "a weather application using React.js",
		image: "./images/projects/weather-app.png",
		tag: ["All", "Web", "Mobile"]
	},
	{
		id: 2,
		title: "React Weather App",
		gitUrl: "https://github.com/IanTsung1999/weather-app",
		description: "a weather application using React.js",
		image: "./images/projects/weather-app.png",
		tag: ["All", "Web", "Mobile"]
	},
	{
		id: 3,
		title: "React Weather App",
		gitUrl: "https://github.com/IanTsung1999/weather-app",
		description: "a weather application using React.js",
		image: "./images/projects/weather-app.png",
		tag: ["All", "Web", "Mobile"]
	},
]

const ProjectsSection = ({ darkMode }) => {

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
		animate: { y: 0, opacity: 1 }
	}

	return (
		<section id="projects">
			<h2 className={`text-center text-4xl font-bold mt-4 mb-12 ${textColor}`}>
				Projects
			</h2>
			<div className={`flex flex-row justify-center items-center gap-4 sm:gap-6 py-6 mb-12 ${textColor}`}>
				<ProjectTag
					onClick={handleTagChange}
					tag="All"
					isSelected={tag === "All"}
					darkMode={darkMode}
				/>
				<ProjectTag
					onClick={handleTagChange}
					tag="Web"
					isSelected={tag === "Web"}
					darkMode={darkMode}
				/>
				<ProjectTag
					onClick={handleTagChange}
					tag="Mobile"
					isSelected={tag === "Mobile"}
					darkMode={darkMode}
				/>
			</div>
			<ul
				ref={ref}
				className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12"
			>
				{
					filteredProjects.map((project, index) =>
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
								darkMode={darkMode}
							/>
						</motion.li>
					)
				}
			</ul>
		</section>
	)
}

export default ProjectsSection