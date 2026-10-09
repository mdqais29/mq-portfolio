"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { PortfolioData, TabId } from "../types/portfolio";
import { ProfileSidebar } from "./ProfileSidebar";
import { AboutTab } from "./tabs/AboutTab";
import { ExperienceTab } from "./tabs/ExperienceTab";
import { ProjectsTab } from "./tabs/ProjectsTab";
import { EducationTab } from "./tabs/EducationTab";
import { SkillsTab } from "./tabs/SkillsTab";
import { CertificatesTab } from "./tabs/CertificatesTab";
import { ContactTab } from "./tabs/ContactTab";

interface MainWorkspaceProps {
  data: PortfolioData;
  onReplayIntro: () => void;
}

export const MainWorkspace: React.FC<MainWorkspaceProps> = ({
  data,
  onReplayIntro,
}) => {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  const tabs: { id: TabId; label: string }[] = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "education", label: "EDUCATION" },
    { id: "skills", label: "SKILLS" },
    { id: "certificates", label: "CERTIFICATES" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090D12] p-3 sm:p-5 md:p-8 flex flex-col items-center justify-start text-[#E8EDF3]">
      {/* Background with moody pixel landscape & ambient vignette (matching Intro screen) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image
          src="/images/intro-bg.jpg"
          alt="Atmospheric background landscape"
          fill
          priority
          className="object-cover object-bottom opacity-35 mix-blend-screen scale-100 sm:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-[#090D12]/75 to-[#090D12]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,13,18,0.85)_100%)]" />
      </div>

      {/* Outer Retro Digital Workspace Window Frame */}
      <div className="relative z-10 w-full max-w-6xl rounded-2xl border border-[#28333D]/70 bg-[#121923]/75 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
        {/* Top Window Titlebar */}
        <header className="border-b border-[#28333D]/60 bg-[#16202C]/65 backdrop-blur-md px-4 py-3 sm:px-6 flex items-center justify-between gap-3 select-none">
          {/* Left: Window Action Dots & App Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D9534F]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F0AD4E]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5CB85C]/80" />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#E8EDF3]">
                QA / PORTFOLIO.EXE
              </span>
            </div>
          </div>

          {/* Right: Replay Intro */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={onReplayIntro}
              title="Replay typewriter intro"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#28333D]/80 bg-[#19232D]/70 backdrop-blur-xs text-[#9AA8B8] hover:border-[#78B9AF] hover:text-[#E8EDF3] transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span className="hidden sm:inline">Intro</span>
            </button>
          </div>
        </header>

        {/* Top Navigation Tabs Bar — ONLY ON TOP, RIGHT-ALIGNED */}
        <nav
          className="border-b border-[#28333D]/60 bg-[#121923]/45 backdrop-blur-md px-4 py-2.5 sm:px-6 md:px-8 overflow-x-auto no-scrollbar flex items-center justify-end gap-2"
          aria-label="Main Navigation Tabs"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleSelectTab(tab.id)}
                className={`shrink-0 flex items-center px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold tracking-wider transition-all cursor-pointer select-none ${
                  isActive
                    ? "border border-[#78B9AF] bg-[#1E3035]/85 text-[#E8EDF3] shadow-xs backdrop-blur-xs"
                    : "border border-[#28333D]/80 bg-[#19232D]/60 text-[#9AA8B8] hover:text-[#E8EDF3] hover:border-[#3A4754] hover:bg-[#19232D]/80 backdrop-blur-xs"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Split Layout: Left Profile | Right Content Area */}
        <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Profile Card + Contact Details (No tabs underneath) */}
          <div className="lg:col-span-4 xl:col-span-4">
            <ProfileSidebar data={data} />
          </div>

          {/* Right Column: Tab Viewport */}
          <main className="lg:col-span-8 xl:col-span-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="w-full"
              >
                {activeTab === "about" && (
                  <AboutTab data={data} onNavigateTab={handleSelectTab} />
                )}
                {activeTab === "experience" && (
                  <ExperienceTab experiences={data.experiences} />
                )}
                {activeTab === "projects" && (
                  <ProjectsTab projects={data.projects} />
                )}
                {activeTab === "education" && (
                  <EducationTab
                    education={data.education}
                    languages={data.languages}
                  />
                )}
                {activeTab === "skills" && (
                  <SkillsTab categories={data.skillCategories} />
                )}
                {activeTab === "certificates" && (
                  <CertificatesTab certificates={data.certificates} />
                )}
                {activeTab === "contact" && <ContactTab data={data} />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        {/* Bottom Window Footer */}
        <footer className="border-t border-[#28333D]/60 bg-[#16202C]/65 backdrop-blur-md px-4 py-3 sm:px-6 md:px-8 flex items-center justify-end font-mono text-[11px] text-[#9AA8B8]">
          <div>
            © 2026 {data.name}
          </div>
        </footer>
      </div>
    </div>
  );
};
