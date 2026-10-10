"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Code2,
  BrainCircuit,
  Terminal,
  Palette,
  BriefcaseBusiness,
  Layers,
  Sparkles,
} from "lucide-react";
import { SkillCategory } from "../types/portfolio";

interface SkillsBentoProps {
  categories: SkillCategory[];
}

export const SkillsBento: React.FC<SkillsBentoProps> = ({ categories }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Development: <Code2 className="h-5 w-5 text-[#78B9AF]" />,
    "AI and Data": <BrainCircuit className="h-5 w-5 text-[#E6B357]" />,
    "Automation and AI Coding Tools": <Terminal className="h-5 w-5 text-[#5CB85C]" />,
    "Design and Content": <Palette className="h-5 w-5 text-[#78B9AF]" />,
    "Business and Operations": <BriefcaseBusiness className="h-5 w-5 text-[#E8EDF3]" />,
    "Expanding Tools & Technologies": <Layers className="h-5 w-5 text-[#E6B357]" />,
  };

  return (
    <section id="skills" className="py-14 sm:py-20 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#78B9AF]/30 bg-[#78B9AF]/10 font-mono text-xs font-semibold text-[#78B9AF] mb-3">
          <Cpu className="h-3.5 w-3.5" />
          <span>TECHNICAL MATRIX</span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E8EDF3] tracking-tight">
          AI Systems & Engineering Stack
        </h2>
        <p className="mt-2 font-sans text-xs sm:text-sm text-[#9AA8B8] max-w-2xl">
          Modular capabilities across full-stack development, natural language processing, visual prototyping, and agentic task orchestration.
        </p>
      </div>

      {/* Bento Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {categories.map((cat, idx) => {
          const isExpanding = cat.status === "expanding";

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              whileHover={{ y: -3 }}
              className={`rounded-3xl border p-6 flex flex-col justify-between backdrop-blur-xl transition-all duration-200 shadow-[0_12px_36px_rgba(0,0,0,0.3)] ${
                isExpanding
                  ? "border-[#E6B357]/40 bg-[#121923]/80"
                  : "border-[#28333D]/80 bg-[#121923]/70 hover:border-[#3A4754] hover:bg-[#151D28]/80"
              }`}
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#28333D]/80 bg-[#16202C]">
                      {iconMap[cat.title] || <Cpu className="h-5 w-5 text-[#78B9AF]" />}
                    </div>
                    <h3 className="font-mono text-base font-bold text-[#E8EDF3]">
                      {cat.title}
                    </h3>
                  </div>

                  {isExpanding && (
                    <span className="px-2 py-0.5 rounded-full border border-[#E6B357]/40 bg-[#E6B357]/10 font-mono text-[9px] font-bold text-[#E6B357]">
                      Expanding
                    </span>
                  )}
                </div>

                <p className="font-sans text-xs text-[#9AA8B8] leading-relaxed mb-4">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#28333D]/60">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg border border-[#28333D]/80 bg-[#16202C]/70 font-mono text-xs text-[#E8EDF3] hover:border-[#78B9AF] hover:text-[#78B9AF] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
