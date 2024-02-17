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
	}
]

const ProjectsSection = () => {

	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

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
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-12">
				Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-4 sm:gap-6 py-6 mb-12">
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
				className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12"
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
							/>
						</motion.li>
					)
				}
			</ul>
		</section>
	)
}

export default ProjectsSection