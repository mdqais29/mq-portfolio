"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { ExperienceItem } from "../../types/portfolio";

interface ExperienceTabProps {
  experiences: ExperienceItem[];
}

export const ExperienceTab: React.FC<ExperienceTabProps> = ({ experiences }) => {
  const [activeId, setActiveId] = useState<string>(experiences[0]?.id || "");

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="space-y-4">
      {/* Tab Banner */}
      <div className="flex items-center justify-center border border-[#28333D]/70 bg-[#19232D]/60 backdrop-blur-xs px-4 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider text-[#78B9AF]">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4" />
          <span>EXPERIENCE</span>
        </div>
      </div>

      {/* Timeline Container with Left Rail */}
      <div className="relative py-2 space-y-4">
        {/* Continuous Vertical Timeline Line */}
        <div className="absolute left-[13px] sm:left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#78B9AF]/50 via-[#28333D]/60 to-[#28333D]/40" />

        {experiences.map((exp) => {
          const isOpen = activeId === exp.id;
          const displayOrg =
            exp.organization === "Freelance / Self-Initiated"
              ? "Freelance"
              : exp.organization;

          return (
            <div key={exp.id} className="relative group">
              {/* Premium Circular Vector Node on the Rail */}
              <button
                type="button"
                onClick={() => handleToggle(exp.id)}
                className={`absolute left-[2px] sm:left-[4px] top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer focus:outline-none ${
                  isOpen
                    ? "border-[#78B9AF] bg-[#1E3035]/80 text-[#78B9AF] shadow-[0_0_12px_rgba(120,185,175,0.4)]"
                    : "border-[#28333D]/80 bg-[#121923]/60 text-[#9AA8B8] group-hover:border-[#78B9AF]/70 group-hover:text-[#E8EDF3]"
                }`}
                aria-label={`Toggle ${exp.role} details`}
              >
                <ChevronRight
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isOpen ? "rotate-90 text-[#78B9AF]" : "text-[#9AA8B8] group-hover:text-[#E8EDF3]"
                  }`}
                />
              </button>

              {/* Interactive Experience Card Item */}
              <div
                onClick={() => handleToggle(exp.id)}
                className={`ml-9 sm:ml-11 cursor-pointer rounded-xl border p-4 sm:p-5 transition-all select-none ${
                  isOpen
                    ? "border-[#78B9AF]/70 bg-[#16222E]/80 backdrop-blur-xs shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                    : "border-[#28333D]/70 bg-[#121923]/60 hover:border-[#3A4754] hover:bg-[#151D28]/80 backdrop-blur-xs"
                }`}
              >
                {/* Header: Role and clean metadata line */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-mono text-sm sm:text-base font-bold text-[#E8EDF3]">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-[#9AA8B8]">
                    {exp.period}
                  </span>
                </div>

                <div className="mt-1 flex items-center justify-between text-xs font-mono text-[#78B9AF]">
                  <span>{displayOrg}</span>
                  <span className="text-[#9AA8B8] text-[11px]">{exp.location}</span>
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
                      <div className="pt-3.5 mt-3 border-t border-[#28333D]/60">
                        <p className="font-sans text-xs sm:text-sm text-[#9AA8B8] leading-relaxed">
                          {exp.description}
                        </p>
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
