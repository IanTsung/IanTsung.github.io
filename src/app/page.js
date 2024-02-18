"use client";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import HireMeButton from "./components/HireMeButton";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  const bgColorClass = darkMode ? 'bg-[#121212]' : 'bg-white';

  return (
    <main className={`flex min-h-screen flex-col ${bgColorClass}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <div className="flex flex-col xl:flex-row">
          <AboutSection />
          <AchievementsSection />
        </div>
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      <HireMeButton />
    </main>
  );
}
