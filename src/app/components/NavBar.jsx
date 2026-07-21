"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && navBarOpen) setNavBarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navBarOpen]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setNavBarOpen(false);
    const section = document.querySelector(sectionId);
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-apple-bg/72 backdrop-blur-xl backdrop-saturate-150 border-b border-apple-line"
          : "bg-apple-bg/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-[1024px] mx-auto flex items-center justify-between h-12 px-6">
        <Link
          href="/"
          onClick={(e) => scrollToSection(e, "#top")}
          className="text-apple-text font-zolasixx text-2xl tracking-wider hover:opacity-80 transition-opacity"
        >
          IAN
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                title={link.title}
                onClick={(e) => scrollToSection(e, link.href)}
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/IanTsung"
            className="opacity-80 hover:opacity-100 transition-opacity"
            aria-label="GitHub"
          >
            <Image
              src="/github.svg"
              alt=""
              width={18}
              height={18}
              style={{ filter: "var(--icon-invert)" }}
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/zhaoyancong/"
            className="opacity-80 hover:opacity-100 transition-opacity"
            aria-label="LinkedIn"
          >
            <Image src="/linkedin.svg" alt="" width={18} height={18} />
          </Link>
          <button
            onClick={toggleTheme}
            className="text-apple-text/80 hover:text-apple-text transition-colors"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <SunIcon className="w-4 h-4" />
            ) : (
              <MoonIcon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setNavBarOpen((v) => !v)}
            className="lg:hidden text-apple-text hover:opacity-80 transition-opacity ml-1"
            aria-label={navBarOpen ? "Close menu" : "Open menu"}
          >
            {navBarOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      <MenuOverlay
        links={navLinks}
        isOpen={navBarOpen}
        onNavigate={scrollToSection}
      />
    </nav>
  );
};

export default NavBar;
