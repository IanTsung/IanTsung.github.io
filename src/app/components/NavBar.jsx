"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
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

const NavBar = () => {

    const [navBarOpen, setNavBarOpen] = useState(false);

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

    return (
        <nav className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212]">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-6 py-4 md:px-20 md:py-6">
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
                <Link href={"/"} className="text-4xl lg:text-5xl xl:text-6xl text-white font-semibold font-zolasixx">
                    IAN
                </Link>
                <div className="flex space-x-4 sm:space-x-8 md:space-x-12">
                    <Link href="https://github.com/IanTsung1999" style={{ filter: "invert(100%) brightness(2)" }}>
                        <Image 
                            src="github.svg"
                            alt="github icon"
                            width={25}
                            height={25}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/zhaoyancong/">
                        <Image 
                            src="linkedin.svg"
                            alt="linkedin icon"
                            width={25}
                            height={25}
                        />
                    </Link>
                </div>
            </div>
            {
                navBarOpen ? <MenuOverlay links={navLinks} /> : null
            }
        </nav>
    )
}

export default NavBar