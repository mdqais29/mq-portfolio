"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, ChevronRight, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../../types/portfolio";

interface ProjectsTabProps {
  projects: ProjectItem[];
}

export const ProjectsTab: React.FC<ProjectsTabProps> = ({ projects }) => {
  const [activeId, setActiveId] = useState<string>(projects[0]?.id || "");

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="space-y-4">
      {/* Tab Banner */}
      <div className="flex items-center justify-center border border-[#28333D] bg-[#19232D] px-4 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider text-[#78B9AF]">
        <div className="flex items-center gap-2">
          <FolderGit2 className="h-4 w-4" />
          <span>PROJECTS</span>
        </div>
      </div>

      {/* Timeline Rail Container */}
      <div className="relative py-2 space-y-4">
        {/* Continuous Rail Line */}
        <div className="absolute left-[13px] sm:left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#78B9AF]/50 via-[#28333D] to-[#28333D]" />

        {projects.map((proj) => {
          const isOpen = activeId === proj.id;
          const isFigma = proj.category === "UI/UX & Design";

          return (
            <div key={proj.id} className="relative group">
              {/* Premium Circular Vector Node on the Rail */}
              <button
                type="button"
                onClick={() => handleToggle(proj.id)}
                className={`absolute left-[2px] sm:left-[4px] top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer focus:outline-none ${
                  isOpen
                    ? "border-[#78B9AF] bg-[#1E3035] text-[#78B9AF] shadow-[0_0_12px_rgba(120,185,175,0.4)]"
                    : "border-[#28333D] bg-[#121923] text-[#9AA8B8] group-hover:border-[#78B9AF]/70 group-hover:text-[#E8EDF3]"
                }`}
                aria-label={`Toggle ${proj.title} details`}
              >
                <ChevronRight
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isOpen ? "rotate-90 text-[#78B9AF]" : "text-[#9AA8B8] group-hover:text-[#E8EDF3]"
                  }`}
                />
              </button>

              {/* Interactive Accordion Card */}
              <div
                onClick={() => handleToggle(proj.id)}
                className={`ml-9 sm:ml-11 cursor-pointer rounded-xl border p-4 sm:p-5 transition-all select-none ${
                  isOpen
                    ? "border-[#78B9AF]/70 bg-[#16222E] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                    : "border-[#28333D] bg-[#121923] hover:border-[#3A4754] hover:bg-[#151D28]"
                }`}
              >
                {/* Clean Header: Title on Left, Link on Right */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-mono text-sm sm:text-base font-bold text-[#E8EDF3]">
                    {proj.title}
                  </h3>

                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/link shrink-0 inline-flex items-center gap-1 font-mono text-xs text-[#78B9AF] hover:text-[#E8EDF3] transition-colors"
                  >
                    <span>{isFigma ? "Figma" : "Live Demo"}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#9AA8B8] group-hover/link:text-[#78B9AF] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                  </a>
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
                      <div className="pt-3.5 mt-3 border-t border-[#28333D]">
                        <p className="font-sans text-xs sm:text-sm text-[#9AA8B8] leading-relaxed">
                          {proj.description}
                        </p>

                        {/* Action Link Button */}
                        <div className="mt-4 pt-1">
                          <a
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 rounded-lg border border-[#78B9AF] bg-[#1E3035] px-4 py-2 font-mono text-xs font-semibold uppercase text-[#E8EDF3] hover:bg-[#78B9AF] hover:text-[#090D12] transition-colors"
                          >
                            <span>
                              {isFigma ? "View Case Study" : "Visit Project"}
                            </span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
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
