"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: "Education",
		id: "education",
		content: (
			<div>
				<div className='flex justify-between'>
					<h3 className="font-semibold">Australian National University</h3>
					<h3 className="font-semibold">Canberra, Australia</h3>
				</div>
				<div className='flex justify-between'>
					<p>Master of Computing</p>
					<p>2023.2 - 2024.12</p>
				</div>
    </div>
		)
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2 font-medium">
				<li>AWS Certified Developer - Associate</li>
				<li>AWS Solutions Architect - Professional (Expected)</li>
			</ul>
		)
	}
]

const AboutSection = ({ darkMode }) => {

	const textColor = darkMode ? "text-white" : "text-slate-800";

	const [tab, setTab] = useState("education");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	}

	return (
		<section id="about" className={`${textColor}`}>
			<div className="md:grid lg:grid-cols-2 gap-8 xl:gap-16 items-start py-8 px-4 sm:py-16 xl:px-0">
				<Image
					src="/images/about-image.png"
					className="rounded-2xl"
					alt="about image"
					width={500}
					height={500}
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
						About Me
					</h2>
					<p className="text-base lg:text-lg ">
						I am a full-stack web developer with a passion for creating interactive
						and responsive web applications. I have experience working with JavaScript,
						React, Redux, Node.js, Express, PostgreSQL, MongoDB, HTML, CSS, and Git. I am
						a quick learner and I am always looking to expand my knowledge and skill set.
						I am a team player and I am excited to work with others to create amazing applications.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
							darkMode={darkMode}
						>
							{" "}
							Education{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
							darkMode={darkMode}
						>
							{" "}
							Certifications{" "}
						</TabButton>
					</div>
					<div className="mt-8">
						{
							TAB_DATA.find((t) => t.id === tab).content
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection