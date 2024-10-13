"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TechStackList from './TechStack/TechStackList';

const SkillsSection = ({ darkMode }) => {

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const textColor = darkMode ? "text-white" : "text-slate-800";

	return (
		<section id="skills">
			<h2 className={`text-center text-4xl font-bold mt-4 mb-12 ${textColor}`}>
				Skills
			</h2>
			<TechStackList darkMode={darkMode}/>
		</section>
	)
}

export default SkillsSection