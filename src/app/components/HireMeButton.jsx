"use client";
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from "gsap";

const circleText = "Full Stack Developer  Web Developer  Cloud Specialist  ";

const HireMeButton = () => {

	const darkMode = useSelector((state) => state.darkMode);

	const circularColor = darkMode ? "text-white" : "text-black";
	const bgColor = darkMode ? "bg-slate-100 text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-700";

	const buttonRef = useRef(null);
	const circleTextRef = useRef(null);

	useEffect(() => {
		if (circleTextRef.current) {
			gsap.to(circleTextRef.current, {
				rotation: 360,
				repeat: -1,
				duration: 20,
				ease: "linear",
			});
		}
	}, []);

	return (
		<div className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 flex items-center justify-center z-50">
			<div className="relative flex justify-center items-center">
				<div ref={circleTextRef} className="absolute">
					{circleText.split("").map((char, index) => (
						<span
							key={index}
							style={{
								transform: `rotate(${-index * 360 / circleText.length}deg) translateY(34px)`,
								transformOrigin: "0% 0%"
							}}
							className={`absolute text-[8px] font-mono ${circularColor}`}
						>
							{char}
						</span>
					))}
				</div>
				<a href="mailto:zhaoyan.ian.cong@gmail.com" ref={buttonRef} className={`rounded-full transition duration-300 ease-in-out flex items-center justify-center w-16 h-16 ${bgColor}`}>
					<span className="text-lg font-bold font-mono text-center leading-tight">HIRE ME</span>
				</a>
			</div>
		</div>
	);
};

export default HireMeButton;
