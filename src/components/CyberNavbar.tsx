"use client";

import React, { useState, useEffect } from "react";
import { RotateCcw, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface CyberNavbarProps {
  onReplayIntro: () => void;
}

export const CyberNavbar: React.FC<CyberNavbarProps> = ({ onReplayIntro }) => {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks = [
    { id: "overview", label: "Overview" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "credentials", label: "Credentials" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-3.5 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-2xl border transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 ${
          scrolled
            ? "border-[#28333D]/90 bg-[#0C1219]/85 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.6)]"
            : "border-[#28333D]/60 bg-[#121923]/60 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
        }`}
        aria-label="Main navigation"
      >
        {/* Brand Logo / Identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("overview")}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none text-left"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#78B9AF]/40 bg-[#78B9AF]/10 text-[#78B9AF] group-hover:border-[#78B9AF] group-hover:bg-[#78B9AF]/20 transition-all">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#E8EDF3] group-hover:text-[#78B9AF] transition-colors">
                MQ PORTFOLIO
              </span>
              <span className="font-mono text-[9px] text-[#78B9AF] hidden xs:block">
                AI Generalist & Founder
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links (Pill Spy) */}
        <div className="hidden md:flex items-center gap-1 rounded-xl border border-[#28333D]/60 bg-[#0F1620]/60 p-1 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1E3035] text-[#78B9AF] border border-[#78B9AF]/40 shadow-xs"
                    : "text-[#9AA8B8] hover:text-[#E8EDF3] hover:bg-[#19232D]/50"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Replay Intro Button */}
          <button
            onClick={onReplayIntro}
            title="Replay typewriter intro"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#28333D]/80 bg-[#16202C]/60 text-xs font-mono text-[#9AA8B8] hover:border-[#78B9AF]/70 hover:text-[#E8EDF3] hover:bg-[#1A2634] transition-all cursor-pointer"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Intro</span>
          </button>

          {/* Quick Contact CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#78B9AF] bg-[#78B9AF]/15 text-xs font-mono font-semibold text-[#78B9AF] hover:bg-[#78B9AF] hover:text-[#090D12] transition-all cursor-pointer shadow-[0_0_15px_rgba(120,185,175,0.15)]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden p-2 rounded-lg border border-[#28333D] bg-[#16202C] text-[#9AA8B8] hover:text-[#E8EDF3] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-18 left-4 right-4 rounded-2xl border border-[#28333D] bg-[#0C1219]/95 backdrop-blur-2xl p-4 shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col gap-2 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="w-full text-left px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-[#E8EDF3] hover:bg-[#1E3035] hover:text-[#78B9AF] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#28333D] flex items-center justify-between gap-2 mt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono text-[#9AA8B8] hover:text-[#E8EDF3]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Replay Intro</span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-2 rounded-xl border border-[#78B9AF] bg-[#78B9AF] text-xs font-mono font-bold text-[#090D12]"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
