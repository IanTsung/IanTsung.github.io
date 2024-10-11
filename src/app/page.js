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
import TechStackList from './components/TechStack/TechStackList';

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  const bgColorClass = darkMode ? 'bg-[#121212]' : 'bg-slate-50';

  return (
    <main className={`flex min-h-screen flex-col ${bgColorClass}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection darkMode={darkMode}/>
        <div className="flex flex-col xl:flex-row">
          <AboutSection darkMode={darkMode}/>
          <AchievementsSection darkMode={darkMode}/>
        </div>
        <ProjectsSection darkMode={darkMode}/>
        <TechStackList />
        <EmailSection darkMode={darkMode}/>
      </div>
      <Footer darkMode={darkMode}/>
      <HireMeButton darkMode={darkMode}/>
    </main>
  );
}
