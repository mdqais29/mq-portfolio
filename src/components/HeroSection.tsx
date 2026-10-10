"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Globe,
  ArrowUpRight,
  Sparkles,
  ArrowDown,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import profilePic from "../../public/images/qais-new.jpg";
import { PortfolioData } from "../types/portfolio";

interface HeroSectionProps {
  data: PortfolioData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="overview" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 w-full">
      {/* Ambient background glow orb */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 w-[320px] sm:w-[540px] h-[320px] sm:h-[400px] bg-gradient-to-tr from-[#78B9AF]/15 via-[#E6B357]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Value Proposition & Engineering Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Live Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#78B9AF]/40 bg-[#78B9AF]/10 font-mono text-xs text-[#78B9AF] mb-5 backdrop-blur-sm shadow-[0_0_20px_rgba(120,185,175,0.12)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#78B9AF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#78B9AF]"></span>
            </span>
            <span className="font-semibold tracking-wide">Available for Freelance & AI Engineering</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#E8EDF3] leading-[1.15]">
            Architecting Practical{" "}
            <span className="bg-gradient-to-r from-[#78B9AF] via-[#A3E5DB] to-[#E6B357] bg-clip-text text-transparent">
              AI Solutions
            </span>{" "}
            & Modern Web Systems.
          </h1>

          {/* Bio Subtitle */}
          <p className="mt-5 font-sans text-sm sm:text-base text-[#9AA8B8] leading-relaxed max-w-2xl">
            I'm <strong className="text-[#E8EDF3] font-semibold">{data.name}</strong>, an AI Generalist and Founder of <strong className="text-[#78B9AF] font-semibold">QDelta Technologies</strong>. I build production Next.js applications, practical natural language processing models, and intelligent automated workflows that turn ideas into dependable real-world software.
          </p>

          {/* Quick Action CTA Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection("projects")}
              className="group inline-flex items-center gap-2 rounded-xl border border-[#78B9AF] bg-[#78B9AF] px-5 py-3 font-mono text-xs sm:text-sm font-bold text-[#090D12] hover:bg-[#8CD3C8] transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(120,185,175,0.3)] hover:shadow-[0_0_30px_rgba(120,185,175,0.5)]"
            >
              <span>Explore Projects</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-[#28333D]/80 bg-[#16202C]/60 backdrop-blur-md px-5 py-3 font-mono text-xs sm:text-sm font-semibold text-[#E8EDF3] hover:border-[#78B9AF]/70 hover:bg-[#1A2634] transition-all duration-200 cursor-pointer"
            >
              <Mail className="h-4 w-4 text-[#78B9AF]" />
              <span>Get in Touch</span>
            </button>

            <a
              href={data.socials.qdelta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#28333D]/60 bg-[#121923]/40 backdrop-blur-md px-4 py-3 font-mono text-xs text-[#9AA8B8] hover:border-[#E6B357]/60 hover:text-[#E6B357] transition-all duration-200"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>qdelta.in</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Telemetry Stats Strip */}
          <div className="mt-10 pt-6 border-t border-[#28333D]/60 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-lg sm:text-xl font-extrabold text-[#E8EDF3]">6+</span>
              <span className="font-mono text-[11px] text-[#9AA8B8]">Production Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-lg sm:text-xl font-extrabold text-[#78B9AF]">Founder</span>
              <span className="font-mono text-[11px] text-[#9AA8B8]">QDelta Technologies</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-lg sm:text-xl font-extrabold text-[#E6B357]">97.14%</span>
              <span className="font-mono text-[11px] text-[#9AA8B8]">Naukri Merit Percentile</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-lg sm:text-xl font-extrabold text-[#E8EDF3]">Hyderabad</span>
              <span className="font-mono text-[11px] text-[#9AA8B8]">Telangana, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: High-End Profile Bento Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-3xl border border-[#28333D]/80 bg-[#121923]/70 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center select-none overflow-hidden">
            {/* Top Card Ambient Gradient */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#78B9AF]/15 rounded-full blur-2xl pointer-events-none" />

            {/* Profile Photo Container */}
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-2xl border-2 border-[#28333D]/80 bg-[#19232D]/70 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
              <Image
                src={profilePic}
                alt={data.name}
                fill
                sizes="(max-width: 768px) 192px, 224px"
                priority
                placeholder="blur"
                className="object-cover object-top"
              />
            </div>

            {/* Profile Name & Role */}
            <div className="mt-5 text-center flex flex-col items-center">
              <h2 className="font-mono text-lg sm:text-xl font-bold tracking-wider text-[#E8EDF3] uppercase">
                {data.name}
              </h2>

              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#78B9AF]/30 bg-[#78B9AF]/10 font-mono text-xs font-semibold tracking-widest text-[#78B9AF] uppercase">
                <Sparkles className="h-3 w-3" />
                <span>{data.identity}</span>
              </div>

              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs font-mono text-[#9AA8B8]">
                <MapPin className="h-3.5 w-3.5 text-[#78B9AF]" />
                <span>{data.location}</span>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="w-full mt-6 rounded-2xl border border-[#28333D]/70 bg-[#16202C]/60 backdrop-blur-sm p-3.5 space-y-2.5 font-mono text-xs">
              {/* Email Copy Row */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl border border-[#28333D]/70 bg-[#121923]/60">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="h-4 w-4 text-[#78B9AF] shrink-0" />
                  <span className="truncate text-[11px] text-[#E8EDF3]">
                    {data.socials.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title={copied ? "Copied to clipboard!" : "Copy email address"}
                  className={`p-1.5 rounded-lg border transition-all cursor-pointer shrink-0 ${
                    copied
                      ? "border-[#78B9AF] bg-[#78B9AF]/20 text-[#78B9AF]"
                      : "border-[#28333D]/80 bg-[#19232D]/70 text-[#9AA8B8] hover:border-[#78B9AF] hover:text-[#78B9AF]"
                  }`}
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-[#78B9AF]" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {/* Social Grid (LinkedIn + GitHub) */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl border border-[#28333D]/70 bg-[#121923]/60 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/15 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 fill-current text-[#78B9AF] group-hover:text-[#0A66C2] transition-colors" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span className="text-[11px] font-semibold text-[#E8EDF3]">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#9AA8B8] group-hover:text-[#E8EDF3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={data.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl border border-[#28333D]/70 bg-[#121923]/60 hover:border-[#78B9AF]/60 hover:bg-[#78B9AF]/15 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 fill-current text-[#78B9AF] transition-colors" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                    <span className="text-[11px] font-semibold text-[#E8EDF3]">GitHub</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#9AA8B8] group-hover:text-[#E8EDF3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
