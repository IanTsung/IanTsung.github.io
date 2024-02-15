"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        href: "#about"
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

const checkIsMediumScreen = () => window.innerWidth > 768;

const NavBar = () => {

    const buttonRef = useRef(null);
    const circleTextRef = useRef(null);
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [isMediumScreen, setIsMediumScreen] = useState(checkIsMediumScreen());

    useEffect(() => {
        const handleResize = () => {
            if (checkIsMediumScreen() && navBarOpen) {
                setNavBarOpen(false);
            }
            setIsMediumScreen(checkIsMediumScreen());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [navBarOpen]);

    useEffect(() => {
        if (!isMediumScreen && circleTextRef.current) {
            gsap.to(circleTextRef.current, {
                rotation: 360,
                repeat: -1,
                duration: 20,
                ease: "linear",   
            });
        }
    }, [isMediumScreen]);

    const circleText = "Data Scientist  Web Developer  Mobile Developer  ";

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]">
            <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4 md:px-20 md:py-6">
                <div className="mobile-menu block md:hidden">
                    {
                        !navBarOpen ? (
                            <button 
                                onClick={() => setNavBarOpen(true)} 
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <Bars3Icon className="w-5 h-5"/>
                            </button>
                        ) : (
                            <button 
                                onClick={() => setNavBarOpen(false)} 
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <XMarkIcon className="w-5 h-5"/>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.href} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Link href={"/"} className="text-4xl md:text-5xl text-white font-semibold">
                    IAN
                </Link>
                {!isMediumScreen && (
                    <div className="flex items-center justify-center py-5 relative">
                        <div ref={circleTextRef} className="absolute">
                            {circleText.split("").map((char, index) => (
                                <span
                                    key={index}
                                    style={{ 
                                        transform: `rotate(${-index * 360 / circleText.length}deg) translateY(34px)`,
                                        transformOrigin: "0% 0%"
                                    }}
                                    className="absolute text-[8px] text-white"
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                        <a href="/hire-me" ref={buttonRef} className="z-10 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300 ease-in-out flex items-center justify-center w-16 h-16">
                            <span className="text-md font-bold text-center leading-tight">Hire Me</span>
                        </a>
                    </div>
                )}
            </div>
            {
                navBarOpen ? <MenuOverlay links={navLinks} /> : null
            }
        </nav>
    )
}

export default NavBar