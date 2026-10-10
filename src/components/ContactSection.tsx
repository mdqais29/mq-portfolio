"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  Building2,
  Globe,
  ArrowUpRight,
  Sparkles,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { PortfolioData } from "../types/portfolio";

interface ContactSectionProps {
  data: PortfolioData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI Automation / Web Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#78B9AF]/30 bg-[#78B9AF]/10 font-mono text-xs font-semibold text-[#78B9AF] mb-3">
          <Mail className="h-3.5 w-3.5" />
          <span>START A CONVERSATION</span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E8EDF3] tracking-tight">
          Let's Build Something Dependable
        </h2>
        <p className="mt-2 font-sans text-xs sm:text-sm text-[#9AA8B8] max-w-2xl">
          Available for freelance engineering contracts, full-time remote roles, AI automation architecture, and client partnerships through QDelta Technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact & Venture Details (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Direct Email Card */}
          <div className="rounded-3xl border border-[#78B9AF]/40 bg-[#121923]/80 backdrop-blur-xl p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.3)]">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#78B9AF] block mb-2">
              Direct Contact
            </span>
            <p className="text-xs font-sans text-[#9AA8B8] leading-relaxed">
              Reach out directly for freelance contracts, full-time positions, or technical collaboration.
            </p>

            <div className="mt-4 flex items-center justify-between gap-2 rounded-2xl border border-[#28333D]/80 bg-[#16202C]/80 p-3">
              <span className="font-mono text-xs font-semibold text-[#E8EDF3] truncate">
                {data.socials.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-[#121923] border border-[#28333D] hover:border-[#78B9AF] hover:text-[#78B9AF] transition-colors cursor-pointer shrink-0 text-[#9AA8B8]"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-[#78B9AF]" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>

            <a
              href={`mailto:${data.socials.email}`}
              className="mt-4 flex items-center justify-center gap-2 w-full text-center rounded-xl border border-[#78B9AF] bg-[#78B9AF] py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#090D12] hover:bg-[#8CD3C8] transition-colors cursor-pointer shadow-[0_0_20px_rgba(120,185,175,0.25)]"
            >
              <span>Launch Email Client</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* QDelta Technologies Venture Card */}
          <div className="rounded-3xl border border-[#28333D]/80 bg-[#121923]/70 backdrop-blur-xl p-6 shadow-[0_12px_36px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#78B9AF]/40 bg-[#78B9AF]/10 text-[#78B9AF]">
                <Building2 className="h-4 w-4" />
              </div>
              <span className="font-mono text-base font-bold text-[#E8EDF3]">
                QDelta Technologies
              </span>
            </div>

            <p className="text-xs text-[#9AA8B8] leading-relaxed">
              Founded & led by Mohammed Qaisuddin. Delivering custom Next.js websites, high-converting digital interfaces, and practical automated AI workflows.
            </p>

            <a
              href={data.socials.qdelta}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#78B9AF] hover:underline"
            >
              <span>Visit qdelta.in</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Direct Note Form (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl border border-[#28333D]/80 bg-[#121923]/70 backdrop-blur-xl p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2 mb-5">
            <MessageSquare className="h-4 w-4 text-[#78B9AF]" />
            <h3 className="font-mono text-base font-bold text-[#E8EDF3] uppercase tracking-wide">
              Send a Direct Note
            </h3>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-[#78B9AF]/40 bg-[#162728] p-8 text-center"
            >
              <Check className="mx-auto h-10 w-10 text-[#78B9AF] mb-3" />
              <h4 className="font-mono text-base font-bold text-[#E8EDF3] uppercase">
                Note Received!
              </h4>
              <p className="mt-2 text-xs text-[#9AA8B8] max-w-sm mx-auto">
                Thank you, {formData.name}. Mohammed will review your message and respond promptly at {formData.email}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    service: "AI Automation / Web Development",
                    message: "",
                  });
                }}
                className="mt-5 text-xs font-mono font-semibold text-[#78B9AF] underline cursor-pointer"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block uppercase text-[11px] font-semibold text-[#9AA8B8] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-[#28333D]/80 bg-[#16202C]/70 px-4 py-2.5 text-xs text-[#E8EDF3] placeholder-[#6A7885] focus:border-[#78B9AF] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block uppercase text-[11px] font-semibold text-[#9AA8B8] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-[#28333D]/80 bg-[#16202C]/70 px-4 py-2.5 text-xs text-[#E8EDF3] placeholder-[#6A7885] focus:border-[#78B9AF] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block uppercase text-[11px] font-semibold text-[#9AA8B8] mb-1.5">
                  Project Scope / Inquiry
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-xl border border-[#28333D]/80 bg-[#16202C]/70 px-4 py-2.5 text-xs text-[#E8EDF3] focus:border-[#78B9AF] focus:outline-none cursor-pointer"
                >
                  <option value="AI Automation / Web Development">
                    AI Automation & Next.js Web Development
                  </option>
                  <option value="Freelance Contract / Consulting">
                    Freelance Contract / Technical Consulting
                  </option>
                  <option value="Full-time Engineering Role">
                    Full-time Engineering / AI Generalist Role
                  </option>
                  <option value="QDelta Technologies Partnership">
                    QDelta Technologies Client Project
                  </option>
                </select>
              </div>

              <div>
                <label className="block uppercase text-[11px] font-semibold text-[#9AA8B8] mb-1.5">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your goals, project timeline, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-[#28333D]/80 bg-[#16202C]/70 px-4 py-2.5 text-xs text-[#E8EDF3] placeholder-[#6A7885] focus:border-[#78B9AF] focus:outline-none resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl border border-[#78B9AF] bg-[#78B9AF] py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#090D12] hover:bg-[#8CD3C8] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(120,185,175,0.2)]"
              >
                <span>Send Note to Mohammed</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
