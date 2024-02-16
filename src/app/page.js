import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import HireMeButton from "./components/HireMeButton";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
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
