"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const HeroSection = ({ darkMode }) => {

	const textColor = darkMode ? "text-white" : "text-slate-900";
	const buttonColor = darkMode ? "bg-[#121212] hover:bg-slate-800" : "bg-slate-50 hover:bg-gray-200";
	const imgColor = darkMode ? "bg-[#181818]" : "bg-slate-200";
	
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div 
					initial={{ opacity: 0, scale: 0.5 }} 
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
				>
					<h1 className={`mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold ${textColor}`}>
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary-500 to-secondary-500">
							Hello, I'm{" "}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								'Ian',
								1000,
								'Web Developer',
								1000,
								'Full-stack Developer',
								1000,
								'Cloud Specialist',
								1000
							]}
							wrapper="span"
							speed={20}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div>
						<a href="/Cong_CV.pdf" download>
							<button className={`px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 my-3 ${textColor} font-semibold`}>
								<span className={`flex justify-center rounded-full px-5 py-2 ${buttonColor}`}>
									Download CV
									<ArrowDownTrayIcon className="rounded-full ml-1 w-5 h-5" />
								</span>
							</button>
						</a>
					</div>
				</motion.div>
				<motion.div 
					initial={{ opacity: 0, scale: 0.5 }} 
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-5 place-self-center mt-4 lg:mt-0"
				>
					<div className={`rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ${imgColor}`}>
						<Image
							src="/images/hero-image.png"
							alt="hero image"
							layout="fill"
							objectFit="cover"
							className="rounded-full"
						// className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						// width={275}
						// height={275}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default HeroSection