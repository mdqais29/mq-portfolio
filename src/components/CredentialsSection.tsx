"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Globe2,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  Star,
} from "lucide-react";
import { EducationItem, CertificateItem } from "../types/portfolio";

interface CredentialsSectionProps {
  education: EducationItem[];
  certificates: CertificateItem[];
  languages: { language: string; level: string }[];
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({
  education,
  certificates,
  languages,
}) => {
  return (
    <section id="credentials" className="py-14 sm:py-20 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#78B9AF]/30 bg-[#78B9AF]/10 font-mono text-xs font-semibold text-[#78B9AF] mb-3">
          <Award className="h-3.5 w-3.5" />
          <span>CREDENTIALS & MERIT</span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E8EDF3] tracking-tight">
          Education, Merit Percentiles & Certifications
        </h2>
        <p className="mt-2 font-sans text-xs sm:text-sm text-[#9AA8B8] max-w-2xl">
          Academic foundation in Information Technology combined with verified professional credentials in Generative AI, machine learning, and UI/UX design.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Education & Languages (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#78B9AF] flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span>Academic Background</span>
          </h3>

          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-3xl border border-[#28333D]/80 bg-[#121923]/70 backdrop-blur-xl p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-mono text-base font-bold text-[#E8EDF3]">
                    {edu.degree}
                  </h4>
                  <span className="font-mono text-xs text-[#9AA8B8] shrink-0">
                    {edu.period}
                  </span>
                </div>

                <div className="mt-1 font-mono text-xs text-[#78B9AF] flex items-center justify-between">
                  <span>{edu.institution}</span>
                  <span className="text-[#E8EDF3] font-semibold">{edu.grade}</span>
                </div>

                <div className="mt-3.5 pt-3 border-t border-[#28333D]/60 space-y-1.5">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-sans text-[#9AA8B8]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#78B9AF] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages Matrix */}
          <div className="rounded-3xl border border-[#28333D]/80 bg-[#121923]/70 backdrop-blur-xl p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-[#E8EDF3] mb-3">
              <Globe2 className="h-4 w-4 text-[#78B9AF]" />
              <span>Language Proficiencies</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {languages.map((lang, lIdx) => (
                <div
                  key={lIdx}
                  className="rounded-xl border border-[#28333D]/70 bg-[#16202C]/60 p-2.5 text-center"
                >
                  <div className="font-mono text-xs font-semibold text-[#E8EDF3]">
                    {lang.language}
                  </div>
                  <div className="text-[10px] font-mono text-[#78B9AF] mt-0.5">
                    {lang.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Verified Certifications (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#E6B357] flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Verified Professional Certifications</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, cIdx) => {
              const isNaukri = cert.id === "naukri-young-turks";
              const isOracle = cert.id === "oracle-genai";

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: cIdx * 0.05 }}
                  className={`rounded-2xl border p-5 flex flex-col justify-between backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.25)] ${
                    isNaukri
                      ? "border-[#E6B357]/60 bg-[#121923]/85 sm:col-span-2 shadow-[0_0_25px_rgba(230,179,87,0.12)]"
                      : isOracle
                      ? "border-[#78B9AF]/50 bg-[#121923]/80"
                      : "border-[#28333D]/80 bg-[#121923]/70 hover:border-[#3A4754]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs text-[#78B9AF] font-semibold">
                        {cert.issuer}
                      </span>
                      {cert.badge && (
                        <span
                          className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                            isNaukri
                              ? "bg-[#E6B357]/20 border border-[#E6B357] text-[#E6B357]"
                              : "bg-[#16202C] border border-[#28333D] text-[#9AA8B8]"
                          }`}
                        >
                          {cert.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-mono text-sm font-bold text-[#E8EDF3] leading-snug">
                      {cert.title}
                    </h4>

                    {cert.details && (
                      <p className="mt-2 font-sans text-xs text-[#9AA8B8] leading-relaxed">
                        {cert.details}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[#28333D]/60 flex items-center justify-between text-[11px] font-mono text-[#9AA8B8]">
                    <span>Verified Credential</span>
                    <span>{cert.year}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
