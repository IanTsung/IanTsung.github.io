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
    <main className={`flex min-h-screen flex-col ${bgColorClass} relative overflow-hidden`} id="top">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className={`absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-[120px] animate-blob ${
          darkMode
            ? 'bg-purple-700/20'
            : 'bg-purple-300/40'
        }`} />
        <div className={`absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full blur-[120px] animate-blob animation-delay-2000 ${
          darkMode
            ? 'bg-sky-700/20'
            : 'bg-sky-300/40'
        }`} />
        <div className={`absolute -bottom-32 left-1/3 h-[450px] w-[450px] rounded-full blur-[120px] animate-blob animation-delay-4000 ${
          darkMode
            ? 'bg-teal-700/15'
            : 'bg-teal-300/35'
        }`} />
        <div className={`absolute top-2/3 left-1/4 h-[350px] w-[350px] rounded-full blur-[120px] animate-blob animation-delay-3000 ${
          darkMode
            ? 'bg-fuchsia-700/15'
            : 'bg-rose-300/30'
        }`} />
      </div>

      <NavBar />
      <div className="container relative z-10 mt-24 mx-auto px-12 py-4">
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
