"use client";

import ScrollProgress from "@/components/ui/ScrollProgress";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProject from "@/components/sections/FeaturedProject";
import TechStack from "@/components/sections/TechStack";
import SoftSkillsSection from "@/components/sections/SoftSkillsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection"; 
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationsSection from "@/components/sections/CertificationsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <ScrollProgress />
      
      <HeroSection />
      
      {/* New Tech Stack Section */}
      <TechStack />

      <SoftSkillsSection />

      {/* New Highlight Section */}
      <FeaturedProject />
      
      {/* Existing Sections for Content Completeness */}
      <ExperienceSection />
      
      <CertificationsSection />
      
      <ProjectsSection />

      {/* New Workflow */}
      <ProcessSection />

      <ContactSection />
    </main>
  );
}
