"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, BrainCircuit, Palette, BriefcaseBusiness, Terminal, Laptop, Layers, ChevronRight } from "lucide-react";
import { SkillCategory } from "../../types/portfolio";

interface SkillsTabProps {
  categories: SkillCategory[];
}

export const SkillsTab: React.FC<SkillsTabProps> = ({ categories }) => {
  const [activeTitle, setActiveTitle] = useState<string>(categories[0]?.title || "");

  const handleToggle = (title: string) => {
    setActiveTitle((prev) => (prev === title ? "" : title));
  };

  const iconsMap: Record<string, React.ReactNode> = {
    Development: <Code2 className="h-4 w-4" />,
    "AI and Data": <BrainCircuit className="h-4 w-4" />,
    "Design and Content": <Palette className="h-4 w-4" />,
    "Business and Operations": <BriefcaseBusiness className="h-4 w-4" />,
    "Automation and AI Coding Tools": <Terminal className="h-4 w-4" />,
    Productivity: <Laptop className="h-4 w-4" />,
    "Expanding Tools & Technologies": <Layers className="h-4 w-4" />,
  };

  return (
    <div className="space-y-4">
      {/* Tab Banner */}
      <div className="flex items-center justify-center border border-[#28333D] bg-[#19232D] px-4 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider text-[#78B9AF]">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4" />
          <span>SKILLS & TECHNOLOGIES</span>
        </div>
      </div>

      {/* Timeline Rail Container */}
      <div className="relative py-2 space-y-4">
        {/* Continuous Rail Line */}
        <div className="absolute left-[13px] sm:left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#78B9AF]/50 via-[#28333D] to-[#28333D]" />

        {categories.map((cat) => {
          const isOpen = activeTitle === cat.title;

          return (
            <div key={cat.title} className="relative group">
              {/* Premium Circular Vector Node on the Rail */}
              <button
                type="button"
                onClick={() => handleToggle(cat.title)}
                className={`absolute left-[2px] sm:left-[4px] top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer focus:outline-none ${
                  isOpen
                    ? "border-[#78B9AF] bg-[#1E3035] text-[#78B9AF] shadow-[0_0_12px_rgba(120,185,175,0.4)]"
                    : "border-[#28333D] bg-[#121923] text-[#9AA8B8] group-hover:border-[#78B9AF]/70 group-hover:text-[#E8EDF3]"
                }`}
                aria-label={`Toggle ${cat.title} skills`}
              >
                <ChevronRight
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isOpen ? "rotate-90 text-[#78B9AF]" : "text-[#9AA8B8] group-hover:text-[#E8EDF3]"
                  }`}
                />
              </button>

              {/* Interactive Accordion Card */}
              <div
                onClick={() => handleToggle(cat.title)}
                className={`ml-9 sm:ml-11 cursor-pointer rounded-xl border p-4 sm:p-5 transition-all select-none ${
                  isOpen
                    ? "border-[#78B9AF]/70 bg-[#16222E] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                    : "border-[#28333D] bg-[#121923] hover:border-[#3A4754] hover:bg-[#151D28]"
                }`}
              >
                {/* Header: Title with Icon only */}
                <div className="font-mono text-sm sm:text-base font-bold text-[#E8EDF3] flex items-center gap-2.5">
                  <span className="text-[#78B9AF]">
                    {iconsMap[cat.title] || <Cpu className="h-4 w-4" />}
                  </span>
                  <span>{cat.title}</span>
                </div>

                {/* Animated Expanded Details Area without tags */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3.5 mt-3 border-t border-[#28333D] space-y-3">
                        <p className="font-sans text-xs sm:text-sm text-[#9AA8B8] leading-relaxed">
                          {cat.description}
                        </p>

                        {/* Clean inline skills list */}
                        <div className="pt-1 text-xs font-mono text-[#78B9AF] leading-relaxed">
                          {cat.skills.join("  ·  ")}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
