"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronDown } from "lucide-react";
import { PortfolioData, TabId } from "../../types/portfolio";

interface AboutTabProps {
  data: PortfolioData;
  onNavigateTab?: (tab: TabId) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ data }) => {
  const [activeSection, setActiveSection] = useState<string>("focus");

  const handleToggle = (id: string) => {
    setActiveSection((prev) => (prev === id ? "" : id));
  };

  const sections = [
    {
      id: "focus",
      title: "Core Engineering & Direction",
      content:
        "I approach technology as an AI Generalist — connecting modern web architecture with practical machine learning and automated pipelines. Rather than focusing on theoretical hype, my priority is shipping responsive, production-ready software, clean interfaces, and automated workflows that deliver tangible value.",
    },
    {
      id: "deliverables",
      title: "What I Build & Deliver",
      content:
        "Building end-to-end digital solutions: from high-performance Next.js web applications and interactive analytics dashboards to natural language sentiment models and operational automation pipelines in Make and n8n. Every project is crafted with a deep focus on performance, thoughtful user experience, and maintainable code.",
    },
    {
      id: "ventures",
      title: "Venture & Active Leadership",
      content:
        "As Founder & CEO of QDelta Technologies, I partner with businesses and founders to architect custom web applications, digital presence, and intelligent operational workflows. Concurrently, as Operations Manager at WTS Nova, I coordinate cross-functional agency execution and technical delivery.",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Tab Banner */}
      <div className="flex items-center justify-center border border-[#28333D] bg-[#19232D] px-4 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider text-[#78B9AF]">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>ABOUT ME</span>
        </div>
      </div>

      {/* Unified Single Block Container */}
      <div className="rounded-2xl border border-[#28333D] bg-[#121923] p-5 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
        {/* Main Headline */}
        <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#E8EDF3] leading-snug">
          {data.bioIntro}
        </h1>

        {/* Bio Paragraph */}
        <p className="mt-4 font-sans text-xs sm:text-sm text-[#9AA8B8] leading-relaxed max-w-3xl">
          {data.bioExtended}
        </p>

        {/* Integrated Narrative Sections Inside the Same Block */}
        <div className="mt-6 pt-6 border-t border-[#28333D] space-y-3">
          {sections.map((sec) => {
            const isOpen = activeSection === sec.id;

            return (
              <div
                key={sec.id}
                onClick={() => handleToggle(sec.id)}
                className={`cursor-pointer rounded-xl border p-4 sm:p-4.5 transition-all select-none ${
                  isOpen
                    ? "border-[#78B9AF]/70 bg-[#16222E] shadow-sm"
                    : "border-[#28333D] bg-[#19232D]/70 hover:border-[#3A4754] hover:bg-[#19232D]"
                }`}
              >
                {/* Header Row: Title on Left, Animated Chevron on Right */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-mono text-sm sm:text-base font-bold text-[#E8EDF3]">
                    {sec.title}
                  </h3>

                  {/* Circular Chevron Toggle Button */}
                  <div
                    className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "border-[#78B9AF] bg-[#1E3035] text-[#78B9AF] shadow-[0_0_10px_rgba(120,185,175,0.3)]"
                        : "border-[#28333D] bg-[#121923] text-[#9AA8B8]"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#78B9AF]" : "text-[#9AA8B8]"
                      }`}
                    />
                  </div>
                </div>

                {/* Animated Expanded Details Area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3.5 mt-3 border-t border-[#28333D]">
                        <p className="font-sans text-xs sm:text-sm text-[#9AA8B8] leading-relaxed">
                          {sec.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
