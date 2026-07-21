"use client";
import "devicon/devicon.min.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import HireMeButton from "./components/HireMeButton";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-apple-bg text-apple-text overflow-x-hidden"
      id="top"
    >
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EmailSection />
      <Footer />
      <HireMeButton />
    </main>
  );
}
