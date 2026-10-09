"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, ExternalLink, Building2, MessageSquare, ArrowUpRight } from "lucide-react";
import { PortfolioData } from "../../types/portfolio";

interface ContactTabProps {
  data: PortfolioData;
}

export const ContactTab: React.FC<ContactTabProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development & Design",
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
    <div className="space-y-4">
      {/* Tab Banner */}
      <div className="flex items-center justify-center border border-[#28333D]/70 bg-[#19232D]/60 backdrop-blur-xs px-4 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider text-[#78B9AF]">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>CONTACT & INQUIRIES</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Direct Email & QDelta Venture */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick Action Card */}
          <div className="rounded-xl border border-[#28333D]/70 bg-[#121923]/65 backdrop-blur-md p-5 shadow-sm">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#78B9AF] block mb-2">
              Direct Email
            </span>

            <p className="text-xs font-sans text-[#9AA8B8]">
              Reach out directly for freelance contracts, full-time positions, or collaboration.
            </p>

            <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-[#28333D]/70 bg-[#19232D]/60 p-2.5">
              <span className="font-mono text-xs font-semibold text-[#E8EDF3] truncate">
                {data.socials.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded bg-[#121923]/60 border border-[#28333D]/70 hover:border-[#78B9AF] hover:text-[#78B9AF] transition-colors cursor-pointer shrink-0 text-[#9AA8B8]"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-[#78B9AF]" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            <a
              href={`mailto:${data.socials.email}`}
              className="mt-3 flex items-center justify-center gap-2 w-full text-center rounded-lg border border-[#78B9AF] bg-[#1E3035]/80 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#E8EDF3] hover:bg-[#78B9AF] hover:text-[#090D12] transition-colors"
            >
              <span>Launch Mail Client</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* QDelta Technologies Venture Card */}
          <div className="rounded-xl border border-[#28333D]/70 bg-[#121923]/65 backdrop-blur-md p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#78B9AF]" />
              <span className="font-mono text-sm font-bold text-[#E8EDF3]">
                QDelta Technologies
              </span>
            </div>

            <p className="mt-2.5 text-xs text-[#9AA8B8] leading-relaxed">
              Founded and led by Mohammed Qaisuddin. Delivers custom websites, modern interfaces, and practical AI automated workflows for clients.
            </p>

            <a
              href={data.socials.qdelta}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#78B9AF] hover:underline"
            >
              <span>Visit qdelta.in</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Inquiry Message Form */}
        <div className="lg:col-span-7 rounded-xl border border-[#28333D]/70 bg-[#121923]/65 backdrop-blur-md p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-4 w-4 text-[#78B9AF]" />
            <h3 className="font-mono text-base font-bold text-[#E8EDF3] uppercase tracking-wide">
              Send a Direct Note
            </h3>
          </div>

          {submitted ? (
            <div className="rounded-lg border border-[#78B9AF]/40 bg-[#162728] p-6 text-center">
              <Check className="mx-auto h-8 w-8 text-[#78B9AF] mb-2" />
              <h4 className="font-mono text-sm font-bold text-[#E8EDF3] uppercase">
                Note Received!
              </h4>
              <p className="mt-1 text-xs text-[#9AA8B8]">
                Thank you, {formData.name}. Mohammed will review your note and respond promptly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    service: "Web Development & Design",
                    message: "",
                  });
                }}
                className="mt-4 text-xs font-mono font-semibold text-[#78B9AF] underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
              <div>
                <label className="block uppercase text-[11px] font-semibold text-[#9AA8B8] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-[#28333D]/70 bg-[#19232D]/60 backdrop-blur-xs px-3.5 py-2 text-xs text-[#E8EDF3] placeholder-[#6A7885] focus:border-[#78B9AF] focus:outline-none"
                />
              </div>

              <div>
                <label className="block uppercase text-[11px] font-semibold text-[#9AA8B8] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-[#28333D]/70 bg-[#19232D]/60 backdrop-blur-xs px-3.5 py-2 text-xs text-[#E8EDF3] placeholder-[#6A7885] focus:border-[#78B9AF] focus:outline-none"
                />
              </div>

              <div>
                <label className="block uppercase text-[11px] font-semibold text-[#9AA8B8] mb-1">
                  Project Area
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full rounded-lg border border-[#28333D]/70 bg-[#19232D]/60 backdrop-blur-xs px-3.5 py-2 text-xs text-[#E8EDF3] focus:border-[#78B9AF] focus:outline-none cursor-pointer"
                >
                  <option value="Web Development & Design">
                    Next.js Web Development / Website
                  </option>
                  <option value="AI Integration & Automation">
                    Practical AI & NLP Automation Workflows
                  </option>
                  <option value="UI/UX & Product Design">
                    UI/UX Design Case Studies & Systems
                  </option>
                  <option value="Consulting / QDelta Technologies">
                    General Collaboration / QDelta Technologies
                  </option>
                </select>
              </div>

              <div>
                <label className="block uppercase text-[11px] font-semibold text-[#9AA8B8] mb-1">
                  Message Details
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your goals or project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-[#28333D]/70 bg-[#19232D]/60 backdrop-blur-xs px-3.5 py-2 text-xs text-[#E8EDF3] placeholder-[#6A7885] focus:border-[#78B9AF] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg border border-[#78B9AF] bg-[#1E3035]/80 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#E8EDF3] hover:bg-[#78B9AF] hover:text-[#090D12] transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Send Note</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
