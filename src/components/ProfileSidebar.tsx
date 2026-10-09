"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import profilePic from "../../public/images/qais-new.jpg";
import { PortfolioData } from "../types/portfolio";

interface ProfileSidebarProps {
  data: PortfolioData;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="w-full rounded-2xl border border-[#28333D] bg-[#121923] p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col gap-5 select-none">
      {/* Profile Photo & Title Card */}
      <div className="flex flex-col items-center text-center">
        {/* Name Header */}
        <h2 className="font-mono text-lg sm:text-xl font-bold tracking-wider text-[#E8EDF3] uppercase mb-3">
          {data.name}
        </h2>

        {/* Framed Photo with refined dark border */}
        <div className="relative h-48 w-48 sm:h-52 sm:w-52 overflow-hidden rounded-2xl border-2 border-[#28333D] bg-[#19232D] shadow-[0_0_25px_rgba(0,0,0,0.5)]">
          <Image
            src={profilePic}
            alt={data.name}
            fill
            sizes="(max-width: 768px) 192px, 208px"
            priority
            placeholder="blur"
            className="object-cover object-top"
          />
        </div>

        {/* Identity & Location */}
        <div className="mt-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#78B9AF]/30 bg-[#78B9AF]/10 font-mono text-xs font-semibold tracking-widest text-[#78B9AF] uppercase">
            <Sparkles className="h-3 w-3" />
            <span>{data.identity}</span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-1.5 text-xs font-mono text-[#9AA8B8]">
            <MapPin className="h-3.5 w-3.5 text-[#78B9AF]" />
            <span>{data.location}</span>
          </div>
        </div>
      </div>

      {/* Contact Section Directly Below Photo */}
      <div className="rounded-xl border border-[#28333D] bg-[#19232D]/90 overflow-hidden shadow-inner">
        {/* Dark Header Banner */}
        <div className="flex items-center justify-center border-b border-[#28333D] bg-[#16202C] px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#78B9AF]">
          <span>CONTACT & PROFILES</span>
        </div>

        {/* Contact Links & Details */}
        <div className="p-3.5 space-y-2.5 font-mono text-xs text-[#E8EDF3]">
          {/* Email row with copy action */}
          <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg border border-[#28333D] bg-[#121923] hover:border-[#3A4754] transition-colors">
            <div className="flex items-center gap-2.5 min-w-0">
              <Mail className="h-4 w-4 text-[#78B9AF] shrink-0" />
              <span className="truncate text-[11px] text-[#E8EDF3]">
                {data.socials.email}
              </span>
            </div>
            <button
              onClick={handleCopyEmail}
              title={copied ? "Copied to clipboard!" : "Copy email address"}
              className={`p-1.5 rounded-md border transition-all cursor-pointer shrink-0 ${
                copied
                  ? "border-[#78B9AF] bg-[#78B9AF]/20 text-[#78B9AF]"
                  : "border-[#28333D] bg-[#19232D] text-[#9AA8B8] hover:border-[#78B9AF] hover:text-[#78B9AF]"
              }`}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-[#78B9AF]" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>

          {/* Venture Website */}
          <a
            href={data.socials.qdelta}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-2.5 rounded-lg border border-[#28333D] bg-[#121923] hover:border-[#78B9AF]/70 hover:bg-[#15232A] transition-all"
          >
            <div className="flex items-center gap-2.5">
              <Globe className="h-4 w-4 text-[#78B9AF] shrink-0" />
              <div>
                <span className="text-[11px] font-semibold text-[#E8EDF3] block">qdelta.in</span>
                <span className="text-[9px] text-[#9AA8B8] block">Tech Venture</span>
              </div>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#9AA8B8] group-hover:text-[#78B9AF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Premium Branded Social Profiles */}
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-2.5 rounded-lg border border-[#28333D] bg-[#121923] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 transition-all"
            >
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 fill-current text-[#78B9AF] group-hover:text-[#0A66C2] transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span className="text-[11px] font-semibold text-[#E8EDF3]">LinkedIn</span>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#9AA8B8] group-hover:text-[#E8EDF3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub */}
            <a
              href={data.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-2.5 rounded-lg border border-[#28333D] bg-[#121923] hover:border-[#78B9AF]/60 hover:bg-[#78B9AF]/10 transition-all"
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

          {/* Live Availability Status Pill with subtle glow */}
          <div className="pt-2 border-t border-[#28333D]">
            <div className="flex items-center gap-2.5 rounded-lg border border-[#78B9AF]/30 bg-[#162728] px-3 py-2.5 text-xs text-[#78B9AF] shadow-[0_0_15px_rgba(120,185,175,0.08)]">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#78B9AF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#78B9AF] shadow-[0_0_8px_#78B9AF]"></span>
              </span>
              <div className="min-w-0">
                <span className="font-mono text-[11px] font-semibold tracking-wide text-[#E8EDF3] block truncate">
                  Available for Work
                </span>
                <span className="font-mono text-[10px] text-[#78B9AF] block truncate">
                  Freelance & Full-time Remote
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
