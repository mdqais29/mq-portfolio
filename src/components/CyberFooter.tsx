"use client";

import React from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { PortfolioData } from "../types/portfolio";

interface CyberFooterProps {
  data: PortfolioData;
}

export const CyberFooter: React.FC<CyberFooterProps> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 sm:mt-24 border-t border-[#28333D]/60 bg-[#0C1219]/80 backdrop-blur-xl py-8 sm:py-10 w-full select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9AA8B8]">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-md border border-[#78B9AF]/40 bg-[#78B9AF]/10 text-[#78B9AF]">
            <Sparkles className="h-3 w-3" />
          </div>
          <span className="font-bold text-[#E8EDF3]">MQ PORTFOLIO</span>
          <span className="text-[#28333D]">·</span>
          <span>AI Generalist & Founder</span>
        </div>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex items-center gap-4">
          <span className="text-[#9AA8B8]">© 2026 Md Qais Portfolio</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#28333D] bg-[#16202C] text-[#9AA8B8] hover:border-[#78B9AF] hover:text-[#E8EDF3] transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
