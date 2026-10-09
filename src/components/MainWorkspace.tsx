"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Minus, Square, X } from "lucide-react";
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
    <div className="min-h-screen bg-[#090D12] p-3 sm:p-5 md:p-8 flex flex-col items-center justify-start text-[#E8EDF3]">
      {/* Outer Retro Digital Workspace Window Frame */}
      <div className="w-full max-w-6xl rounded-2xl border border-[#28333D] bg-[#121923] shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
        {/* Top Window Titlebar */}
        <header className="border-b border-[#28333D] bg-[#16202C] px-4 py-3 sm:px-6 flex items-center justify-between gap-3 select-none">
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

          {/* Right: Window Controls & Replay Intro */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={onReplayIntro}
              title="Replay typewriter intro"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#28333D] bg-[#19232D] text-[#9AA8B8] hover:border-[#78B9AF] hover:text-[#E8EDF3] transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span className="hidden sm:inline">Intro</span>
            </button>

            <div className="hidden sm:flex items-center gap-1">
              <span className="flex h-5 w-5 items-center justify-center rounded border border-[#28333D] bg-[#19232D] text-[#9AA8B8]">
                <Minus className="h-2.5 w-2.5" />
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded border border-[#28333D] bg-[#19232D] text-[#9AA8B8]">
                <Square className="h-2.5 w-2.5" />
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded border border-[#28333D] bg-[#19232D] text-[#9AA8B8]">
                <X className="h-2.5 w-2.5" />
              </span>
            </div>
          </div>
        </header>

        {/* Top Navigation Tabs Bar — ONLY ON TOP, RIGHT-ALIGNED */}
        <nav
          className="border-b border-[#28333D] bg-[#121923] px-4 py-2.5 sm:px-6 md:px-8 overflow-x-auto no-scrollbar flex items-center justify-end gap-2"
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
                    ? "border border-[#78B9AF] bg-[#1E3035] text-[#E8EDF3] shadow-xs"
                    : "border border-[#28333D] bg-[#19232D] text-[#9AA8B8] hover:text-[#E8EDF3] hover:border-[#3A4754]"
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
        <footer className="border-t border-[#28333D] bg-[#16202C] px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-[#9AA8B8]">
          <div>
            © 2026 {data.name} · Verified portfolio records
          </div>
          <div className="flex items-center gap-3 text-[#78B9AF]">
            <span className="font-semibold text-[#E6B357]">AI GENERALIST</span>
            <span>·</span>
            <span>QDelta Technologies</span>
          </div>
        </footer>
      </div>
    </div>
  );
};
