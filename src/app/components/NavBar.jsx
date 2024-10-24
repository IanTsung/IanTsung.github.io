"use client";
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './darkModeSlice';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const navLinks = [
	{
		title: "About",
		href: "#about"
	},
	{
		title: "Skills",
		href: "#skills"
	},
	{
		title: "Projects",
		href: "#projects"
	},
	{
		title: "Contact",
		href: "#contact"
	}
]

const NavBar = () => {

	const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

	const [navBarOpen, setNavBarOpen] = useState(false);

	const switchBorderColor = darkMode ? "border-white" : "border-slate-700";
	const bgColor = darkMode ? "bg-[#121212]" : "bg-slate-50";
	const logoColor = darkMode ? "text-white" : "text-black";
	const iconColor = darkMode ? "invert(100%) brightness(2)" : "invert(0%) brightness(0)"
	const buttonColor = darkMode ? "border-slate-200 text-slate-200 hover:text-white hover:border-white" : "border-slate-700 text-slate-700 hover:text-black hover:border-black"

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && navBarOpen) {
				setNavBarOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [navBarOpen]);

	const scrollToSection = (e, sectionId) => {
		e.preventDefault();
		const section = document.querySelector(sectionId);
		const offset = 120;
	
		if (section) {
			const top = section.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top, behavior: 'smooth' });
		}
	};

	return (
		<nav className={`fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-50 ${bgColor}`}>
			<div className="grid grid-cols-3 place-items-center w-full mx-auto px-6 py-4 md:px-20 md:py-6">
				<div className="mobile-menu block xl:hidden">
					{
						!navBarOpen ? (
							<button
								onClick={() => setNavBarOpen(true)}
								className={`flex items-center px-3 py-2 border-2 rounded ${buttonColor}`}
							>
								<Bars3Icon className="w-4 h-4 md:w-6 md:h-6" />
							</button>
						) : (
							<button
								onClick={() => setNavBarOpen(false)}
								className={`flex items-center px-3 py-2 border-2 rounded ${buttonColor}`}
							>
								<XMarkIcon className="w-4 h-4 md:w-6 md:h-6" />
							</button>
						)
					}
				</div>
				<div className="menu hidden xl:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{
							navLinks.map((link, index) => (
								<li key={index}>
									<NavLink href={link.href} title={link.title} onClick={(e) => scrollToSection(e, link.href)} />
								</li>
							))
						}
					</ul>
				</div>
				<Link href={"/"} className={`text-4xl lg:text-5xl xl:text-6xl ${logoColor} font-semibold font-zolasixx`}>
					IAN
				</Link>
				<div className="flex space-x-4 sm:space-x-8 md:space-x-12">
					<Link target='_blank' rel='noopener noreferrer' href="https://github.com/IanTsung" style={{ filter: `${iconColor}` }}>
						<Image
							src="github.svg"
							alt="github icon"
							className="w-full h-full max-w-6 max-h-6"
							width={25}
							height={25}
						/>
					</Link>
					<Link target='_blank' rel='noopener noreferrer'  href="https://www.linkedin.com/in/zhaoyancong/">
						<Image
							src="linkedin.svg"
							alt="linkedin icon"
							className="w-full h-full max-w-6 max-h-6"
							width={25}
							height={25}
						/>
					</Link>
					<button onClick={() => dispatch(toggleDarkMode())} className={`relative rounded-full border-2 p-1 transition-colors delay-200 duration-200 ease-in-out ${switchBorderColor} flex justify-center items-center w-6 h-6`}>
						<div className="absolute flex transition-opacity ease-in-out delay-200 duration-200" style={{ opacity: darkMode ? 1 : 0 }}>
							<MoonIcon className="w-3.5 h-3.5 text-white" />
						</div>
						<div className="absolute flex transition-opacity ease-in-out delay-200 duration-200" style={{ opacity: !darkMode ? 1 : 0 }}>
							<SunIcon className="w-4 h-4 text-slate-800" />
						</div>
					</button>
				</div>
			</div>
			{
				navBarOpen ? <MenuOverlay links={navLinks} /> : null
			}
		</nav>
	)
}

export default NavBar