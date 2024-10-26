"use client";
import { useSelector } from 'react-redux';
import 'devicon/devicon.min.css';
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import HireMeButton from "./components/HireMeButton";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from './components/ExperienceSection';

export default function Home() {

  const darkMode = useSelector((state) => state.darkMode);

  const bgColorClass = darkMode ? 'bg-[#121212]' : 'bg-slate-50';

  return (
    <main className={`flex min-h-screen flex-col ${bgColorClass}`} id="top">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <div className="flex flex-col xl:flex-row">
          <AboutSection />
          <AchievementsSection />
        </div>
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      <HireMeButton />
    </main>
  );
}
