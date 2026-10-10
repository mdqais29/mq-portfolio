"use client";

import React from "react";
import Image from "next/image";
import { PortfolioData } from "../types/portfolio";
import { CyberNavbar } from "./CyberNavbar";
import { HeroSection } from "./HeroSection";
import { ProjectsBento } from "./ProjectsBento";
import { ExperienceSection } from "./ExperienceSection";
import { SkillsBento } from "./SkillsBento";
import { CredentialsSection } from "./CredentialsSection";
import { ContactSection } from "./ContactSection";
import { CyberFooter } from "./CyberFooter";

interface MainWorkspaceProps {
  data: PortfolioData;
  onReplayIntro: () => void;
}

export const MainWorkspace: React.FC<MainWorkspaceProps> = ({
  data,
  onReplayIntro,
}) => {
  return (
    <div className="relative min-h-screen bg-[#070A0E] text-[#E8EDF3] overflow-x-hidden selection:bg-[#78B9AF] selection:text-[#090D12]">
      {/* Ambient moody pixel landscape & deep vignette background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image
          src="/images/intro-bg.jpg"
          alt="Atmospheric background landscape"
          fill
          priority
          className="object-cover object-bottom opacity-30 mix-blend-screen scale-100 sm:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A0E] via-[#070A0E]/80 to-[#070A0E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,10,14,0.9)_100%)]" />
      </div>

      {/* Floating Glass Navigation Bar */}
      <CyberNavbar onReplayIntro={onReplayIntro} />

      {/* Main Expansive Content Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
        {/* 1. Hero Section (Founder Minimalist + Cyber Telemetry) */}
        <HeroSection data={data} />

        {/* 2. Featured Projects Bento Grid with Live Interactive Demo */}
        <ProjectsBento projects={data.projects} />

        {/* 3. Career Track & Leadership Timeline */}
        <ExperienceSection experiences={data.experiences} />

        {/* 4. Skills & Capabilities Matrix Bento */}
        <SkillsBento categories={data.skillCategories} />

        {/* 5. Education, Merit & Certifications Bento */}
        <CredentialsSection
          education={data.education}
          certificates={data.certificates}
          languages={data.languages}
        />

        {/* 6. Start a Conversation / Contact Section */}
        <ContactSection data={data} />
      </main>

      {/* Cyber Footer */}
      <CyberFooter data={data} />
    </div>
  );
};
