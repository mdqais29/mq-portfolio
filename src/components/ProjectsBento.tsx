"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  BrainCircuit,
  Globe,
  Layout,
  FileText,
  Layers,
  CheckCircle,
} from "lucide-react";
import { ProjectItem } from "../types/portfolio";

interface ProjectsBentoProps {
  projects: ProjectItem[];
}

export const ProjectsBento: React.FC<ProjectsBentoProps> = ({ projects }) => {
  // Mini interactive tester state for the AI Sentiment Analyser
  const [inputText, setInputText] = useState("This AI automation workflow saved our team 15 hours every week.");
  const [sentimentScore, setSentimentScore] = useState<{
    label: "POSITIVE" | "NEUTRAL" | "NEGATIVE";
    compound: number;
    pos: number;
    neu: number;
    neg: number;
  }>({
    label: "POSITIVE",
    compound: 0.88,
    pos: 88,
    neu: 10,
    neg: 2,
  });

  const analyzeSentiment = (text: string) => {
    setInputText(text);
    const lower = text.toLowerCase();
    const positiveWords = ["great", "saved", "fast", "love", "reliable", "dependable", "excellent", "clean", "good", "best", "effective", "modern"];
    const negativeWords = ["slow", "bug", "bad", "error", "terrible", "unreliable", "failed", "broken", "hate", "ugly"];

    let posCount = 0;
    let negCount = 0;

    positiveWords.forEach((w) => {
      if (lower.includes(w)) posCount += 1;
    });
    negativeWords.forEach((w) => {
      if (lower.includes(w)) negCount += 1;
    });

    if (posCount > negCount) {
      setSentimentScore({
        label: "POSITIVE",
        compound: 0.85,
        pos: 82,
        neu: 14,
        neg: 4,
      });
    } else if (negCount > posCount) {
      setSentimentScore({
        label: "NEGATIVE",
        compound: -0.72,
        pos: 6,
        neu: 18,
        neg: 76,
      });
    } else {
      setSentimentScore({
        label: "NEUTRAL",
        compound: 0.05,
        pos: 20,
        neu: 65,
        neg: 15,
      });
    }
  };

  const gsaProject = projects.find((p) => p.id === "gsa-website") || projects[0];
  const aiProject = projects.find((p) => p.id === "ai-sentiment") || projects[1];
  const flowdeskProject = projects.find((p) => p.id === "flowdesk") || projects[2];
  const laundryProject = projects.find((p) => p.id === "fresh-laundry") || projects[3];
  const pdfProject = projects.find((p) => p.id === "pretty-good-pdf") || projects[4];
  const qdeltaProject = projects.find((p) => p.id === "qdelta-website") || projects[5];

  return (
    <section id="projects" className="py-14 sm:py-20 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#78B9AF]/30 bg-[#78B9AF]/10 font-mono text-xs font-semibold text-[#78B9AF] mb-3">
          <FolderGit2 className="h-3.5 w-3.5" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E8EDF3] tracking-tight">
          Featured Projects & Production Systems
        </h2>
        <p className="mt-2 font-sans text-xs sm:text-sm text-[#9AA8B8] max-w-2xl">
          Six focused digital applications covering modern Next.js web applications, natural language processing models, client management tools, and UI/UX systems.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {/* Bento 1: Global Safety Academy (Large Feature Card - 8 cols) */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-12 lg:col-span-7 rounded-3xl border border-[#28333D]/80 bg-[#121923]/70 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
        >
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#78B9AF]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#78B9AF]/18 transition-all" />

          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#78B9AF]/40 bg-[#1E3035]/60 font-mono text-[11px] font-semibold text-[#78B9AF]">
                <Globe className="h-3 w-3" />
                <span>Web Application</span>
              </span>

              <a
                href={gsaProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#78B9AF] hover:text-[#E8EDF3] group-hover:translate-x-0.5 transition-all"
              >
                <span>Live Site</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <h3 className="font-mono text-xl sm:text-2xl font-bold text-[#E8EDF3] tracking-tight group-hover:text-[#78B9AF] transition-colors">
              {gsaProject.title}
            </h3>

            <p className="mt-3 font-sans text-xs sm:text-sm text-[#9AA8B8] leading-relaxed">
              {gsaProject.description} Engineered with smooth animations, responsive hierarchy, and optimized performance for a safety training institute.
            </p>

            {/* Architecture Highlights Pill */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "React", "Responsive Design", "Custom Animations"].map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg border border-[#28333D]/80 bg-[#16202C]/60 font-mono text-[10px] text-[#E8EDF3]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Launch Bar */}
          <div className="mt-8 pt-4 border-t border-[#28333D]/60 flex items-center justify-between">
            <span className="font-mono text-xs text-[#9AA8B8]">globalsafetyacademy.com</span>
            <a
              href={gsaProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#78B9AF] bg-[#78B9AF]/15 font-mono text-xs font-bold text-[#78B9AF] hover:bg-[#78B9AF] hover:text-[#090D12] transition-colors cursor-pointer"
            >
              <span>Visit Website</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Bento 2: AI Sentiment Analyser with Live Interactive Demo (5 cols) */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-12 lg:col-span-5 rounded-3xl border border-[#E6B357]/40 bg-[#121923]/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
        >
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#E6B357]/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#E6B357]/40 bg-[#E6B357]/10 font-mono text-[11px] font-semibold text-[#E6B357]">
                <BrainCircuit className="h-3 w-3" />
                <span>AI & NLP Model</span>
              </span>

              <a
                href={aiProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-xs text-[#E6B357] hover:underline"
              >
                <span>Live App</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <h3 className="font-mono text-lg sm:text-xl font-bold text-[#E8EDF3] tracking-tight">
              {aiProject.title}
            </h3>

            <p className="mt-2 font-sans text-xs text-[#9AA8B8]">
              Text sentiment classifier utilizing VADER and lexicon-based NLP with per-model reliability scoring.
            </p>

            {/* Interactive Live Mini Playground */}
            <div className="mt-4 rounded-2xl border border-[#28333D]/80 bg-[#16202C]/80 p-3.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-[#9AA8B8] mb-2">
                <span>Interactive Tester:</span>
                <span
                  className={`font-bold ${
                    sentimentScore.label === "POSITIVE"
                      ? "text-[#5CB85C]"
                      : sentimentScore.label === "NEGATIVE"
                      ? "text-[#D9534F]"
                      : "text-[#E6B357]"
                  }`}
                >
                  ● {sentimentScore.label}
                </span>
              </div>

              {/* Sample Prompts */}
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                <button
                  type="button"
                  onClick={() => analyzeSentiment("This AI system is remarkably fast and dependable.")}
                  className="px-2 py-1 rounded bg-[#121923] border border-[#28333D] text-[10px] text-[#9AA8B8] hover:text-[#E8EDF3] hover:border-[#78B9AF]"
                >
                  "Fast & dependable"
                </button>
                <button
                  type="button"
                  onClick={() => analyzeSentiment("The pipeline encountered terrible bugs and failed.")}
                  className="px-2 py-1 rounded bg-[#121923] border border-[#28333D] text-[10px] text-[#9AA8B8] hover:text-[#E8EDF3] hover:border-[#D9534F]"
                >
                  "Terrible bugs"
                </button>
              </div>

              {/* Live Confidence Bar */}
              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between text-[#9AA8B8]">
                  <span>Positive: {sentimentScore.pos}%</span>
                  <span>Negative: {sentimentScore.neg}%</span>
                </div>
                <div className="h-1.5 w-full bg-[#121923] rounded-full overflow-hidden flex">
                  <div style={{ width: `${sentimentScore.pos}%` }} className="bg-[#5CB85C]" />
                  <div style={{ width: `${sentimentScore.neu}%` }} className="bg-[#E6B357]" />
                  <div style={{ width: `${sentimentScore.neg}%` }} className="bg-[#D9534F]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#28333D]/60 flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#9AA8B8]">Python · VADER NLP</span>
            <a
              href={aiProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold text-[#E6B357] hover:underline inline-flex items-center gap-1"
            >
              <span>Launch App</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </motion.div>

        {/* Bento 3: FlowDesk (4 cols) */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-6 lg:col-span-4 rounded-3xl border border-[#28333D]/80 bg-[#121923]/70 backdrop-blur-xl p-6 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#28333D] bg-[#16202C] font-mono text-[10px] text-[#78B9AF]">
                <Layout className="h-3 w-3" />
                <span>Tool & Utility</span>
              </span>
              <a
                href={flowdeskProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#78B9AF] hover:underline inline-flex items-center gap-1"
              >
                <span>Demo</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <h3 className="font-mono text-lg font-bold text-[#E8EDF3]">
              {flowdeskProject.title}
            </h3>

            <p className="mt-2 font-sans text-xs text-[#9AA8B8] leading-relaxed">
              {flowdeskProject.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {["React", "UI/UX", "Client CRM"].map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded border border-[#28333D] bg-[#19232D] font-mono text-[10px] text-[#9AA8B8]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#28333D]/60 flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#9AA8B8]">flowdesk123.netlify.app</span>
            <a
              href={flowdeskProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold text-[#78B9AF] hover:underline"
            >
              Open ↗
            </a>
          </div>
        </motion.div>

        {/* Bento 4: QDelta Technologies (4 cols) */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-6 lg:col-span-4 rounded-3xl border border-[#78B9AF]/40 bg-[#121923]/70 backdrop-blur-xl p-6 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#78B9AF]/40 bg-[#78B9AF]/10 font-mono text-[10px] text-[#78B9AF]">
                <Sparkles className="h-3 w-3" />
                <span>Founder Venture</span>
              </span>
              <a
                href={qdeltaProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#78B9AF] hover:underline inline-flex items-center gap-1"
              >
                <span>qdelta.in</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <h3 className="font-mono text-lg font-bold text-[#E8EDF3]">
              {qdeltaProject.title}
            </h3>

            <p className="mt-2 font-sans text-xs text-[#9AA8B8] leading-relaxed">
              {qdeltaProject.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Brand Venture", "Next.js", "AI Solutions"].map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded border border-[#28333D] bg-[#19232D] font-mono text-[10px] text-[#9AA8B8]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#28333D]/60 flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#78B9AF]">Venture Website</span>
            <a
              href={qdeltaProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold text-[#78B9AF] hover:underline"
            >
              Visit ↗
            </a>
          </div>
        </motion.div>

        {/* Bento 5: Fresh Laundry UI/UX Case Study (4 cols) */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-6 lg:col-span-4 rounded-3xl border border-[#28333D]/80 bg-[#121923]/70 backdrop-blur-xl p-6 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#28333D] bg-[#16202C] font-mono text-[10px] text-[#9AA8B8]">
                <Layers className="h-3 w-3 text-[#E6B357]" />
                <span>UI/UX & Design</span>
              </span>
              <a
                href={laundryProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#E6B357] hover:underline inline-flex items-center gap-1"
              >
                <span>Figma</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <h3 className="font-mono text-lg font-bold text-[#E8EDF3]">
              {laundryProject.title}
            </h3>

            <p className="mt-2 font-sans text-xs text-[#9AA8B8] leading-relaxed">
              {laundryProject.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Figma", "Design System", "User Flows"].map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded border border-[#28333D] bg-[#19232D] font-mono text-[10px] text-[#9AA8B8]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#28333D]/60 flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#9AA8B8]">Case Study File</span>
            <a
              href={laundryProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold text-[#E6B357] hover:underline"
            >
              View in Figma ↗
            </a>
          </div>
        </motion.div>

        {/* Bento 6: Pretty Good PDF (Full Width 12 cols) */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-12 rounded-3xl border border-[#28333D]/80 bg-[#121923]/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#28333D] bg-[#16202C] text-[#78B9AF]">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-lg font-bold text-[#E8EDF3]">
                  {pdfProject.title}
                </h3>
                <span className="px-2 py-0.5 rounded border border-[#28333D] bg-[#19232D] font-mono text-[10px] text-[#9AA8B8]">
                  Web Utility
                </span>
              </div>
              <p className="mt-1 font-sans text-xs text-[#9AA8B8] max-w-xl">
                {pdfProject.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={pdfProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#28333D] bg-[#16202C] font-mono text-xs font-semibold text-[#E8EDF3] hover:border-[#78B9AF] hover:text-[#78B9AF] transition-colors"
            >
              <span>prettygoodpdf.site</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
