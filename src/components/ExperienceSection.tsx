"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building, MapPin, Calendar, ChevronRight, Sparkles } from "lucide-react";
import { ExperienceItem } from "../types/portfolio";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  const [activeExp, setActiveExp] = useState<string>(experiences[0]?.id || "");

  return (
    <section id="experience" className="py-14 sm:py-20 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#78B9AF]/30 bg-[#78B9AF]/10 font-mono text-xs font-semibold text-[#78B9AF] mb-3">
          <Briefcase className="h-3.5 w-3.5" />
          <span>CAREER TRACK & LEADERSHIP</span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E8EDF3] tracking-tight">
          Experience & Venture Leadership
        </h2>
        <p className="mt-2 font-sans text-xs sm:text-sm text-[#9AA8B8] max-w-2xl">
          Track record of founding digital ventures, managing agency operations, delivering web solutions, and machine learning workflows.
        </p>
      </div>

      {/* Modern Railway Timeline */}
      <div className="relative pl-4 sm:pl-8 space-y-6">
        {/* Continuous Left Vertical Gradient Rail */}
        <div className="absolute left-[15px] sm:left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#78B9AF] via-[#28333D] to-[#28333D]/30" />

        {experiences.map((exp, idx) => {
          const isFounder = exp.type === "Venture";
          const isActive = activeExp === exp.id;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Glowing Node on Rail */}
              <div
                className={`absolute left-[-5px] sm:left-[11px] top-5 z-10 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${
                  isFounder
                    ? "border-[#E6B357] bg-[#1E3035] text-[#E6B357] shadow-[0_0_15px_rgba(230,179,87,0.4)]"
                    : "border-[#78B9AF] bg-[#121923] text-[#78B9AF] group-hover:border-[#78B9AF] group-hover:shadow-[0_0_12px_rgba(120,185,175,0.35)]"
                }`}
              >
                {isFounder ? (
                  <Sparkles className="h-3 w-3" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-[#78B9AF]" />
                )}
              </div>

              {/* Experience Card */}
              <div
                onClick={() => setActiveExp(activeExp === exp.id ? "" : exp.id)}
                className={`rounded-3xl border p-5 sm:p-6 transition-all duration-200 cursor-pointer backdrop-blur-xl ${
                  isFounder
                    ? "border-[#E6B357]/40 bg-[#121923]/80 shadow-[0_12px_36px_rgba(230,179,87,0.08)]"
                    : "border-[#28333D]/80 bg-[#121923]/70 hover:border-[#3A4754] hover:bg-[#151D28]/80 shadow-[0_12px_36px_rgba(0,0,0,0.3)]"
                }`}
              >
                {/* Header Row: Role, Organization, Location, Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-mono text-base sm:text-lg font-bold text-[#E8EDF3]">
                        {exp.role}
                      </h3>
                      {isFounder && (
                        <span className="px-2 py-0.5 rounded-full border border-[#E6B357]/40 bg-[#E6B357]/10 font-mono text-[10px] font-bold text-[#E6B357]">
                          Founder
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-2 font-mono text-xs text-[#78B9AF]">
                      <span>{exp.organization}</span>
                      <span className="text-[#28333D]">·</span>
                      <span className="text-[#9AA8B8] flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-[#78B9AF]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#9AA8B8] shrink-0">
                    <Calendar className="h-3.5 w-3.5 text-[#78B9AF]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3.5 font-sans text-xs sm:text-sm text-[#9AA8B8] leading-relaxed">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[#28333D]/60">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md border border-[#28333D]/80 bg-[#16202C]/60 font-mono text-[10px] text-[#E8EDF3]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
