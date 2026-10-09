"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface IntroScreenProps {
  onEnter: () => void;
  roles: string[];
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter, roles }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "completed">("typing");
  const [showEnterButton, setShowEnterButton] = useState(false);

  // Reduced motion support
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setRoleIndex(roles.length - 1);
        setDisplayedText(roles[roles.length - 1]);
        setPhase("completed");
        setShowEnterButton(true);
      }
    }
  }, [roles]);

  // Main typewriter state machine
  useEffect(() => {
    if (phase === "completed") {
      const timer = setTimeout(() => {
        setShowEnterButton(true);
      }, 350);
      return () => clearTimeout(timer);
    }

    const currentTarget = roles[roleIndex];
    const isFinalRole = roleIndex === roles.length - 1;

    if (phase === "typing") {
      if (displayedText.length < currentTarget.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length + 1));
        }, 65); // Natural typing rhythm
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current role
        if (isFinalRole) {
          setPhase("completed");
        } else {
          setPhase("pausing");
        }
      }
    } else if (phase === "pausing") {
      // Natural pause to read the displayed role before deleting
      const timeout = setTimeout(() => {
        setPhase("deleting");
      }, 850);
      return () => clearTimeout(timeout);
    } else if (phase === "deleting") {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, 35); // Deleting is slightly faster than typing
        return () => clearTimeout(timeout);
      } else {
        // Completely deleted, move to next role
        const timeout = setTimeout(() => {
          setRoleIndex((prev) => prev + 1);
          setPhase("typing");
        }, 220);
        return () => clearTimeout(timeout);
      }
    }
  }, [phase, displayedText, roleIndex, roles]);

  // Keyboard shortcut listener (Enter, Space, Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        e.preventDefault();
        onEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEnter]);

  const isFinalActive = roleIndex === roles.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.985, filter: "blur(6px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col justify-between overflow-hidden bg-[#090D12] text-[#E8EDF3] select-none"
    >
      {/* Background with moody pixel landscape & ambient vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/intro-bg.jpg"
          alt="Atmospheric intro landscape"
          fill
          priority
          className="object-cover object-bottom opacity-35 mix-blend-screen scale-100 sm:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-[#090D12]/75 to-[#090D12]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,13,18,0.85)_100%)]" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-12 md:px-16 border-b border-[#28333D]/60 bg-[#121923]/40 backdrop-blur-xs">
        <div className="flex items-center gap-3">
          {/* Subtle Window Dots */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D9534F]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F0AD4E]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#5CB85C]/80" />
          </div>

          <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#E8EDF3] ml-1">
            QA / PORTFOLIO.EXE
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#9AA8B8]">
            <span>v1.0</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#78B9AF] animate-pulse" />
          </div>

          <button
            onClick={onEnter}
            aria-label="Skip animation and enter portfolio"
            className="rounded border border-[#28333D] bg-[#121923]/80 px-2.5 py-1 font-mono text-xs text-[#9AA8B8] transition-colors hover:border-[#E6B357] hover:text-[#E8EDF3] cursor-pointer"
          >
            Skip [Esc]
          </button>
        </div>
      </header>

      {/* Center Stage: Single Centered Role with Smooth Typing & Deletion */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl flex flex-col items-center text-center">
          {/* Dedicated Fixed Height Slot for Centered Role */}
          <div className="h-24 sm:h-28 flex items-center justify-center">
            <h1
              className={`font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-200 ${
                isFinalActive
                  ? "text-[#E6B357] drop-shadow-[0_0_20px_rgba(230,179,87,0.35)]"
                  : "text-[#E8EDF3]"
              }`}
            >
              <span>{displayedText}</span>
              <span className="inline-block w-3 h-8 sm:h-10 ml-1.5 bg-[#E6B357] align-middle animate-pulse" />
            </h1>
          </div>

          {/* Action Area: Revealed ONLY after AI Generalist finishes typing */}
          <div className="h-28 flex flex-col items-center justify-center mt-4">
            <AnimatePresence>
              {showEnterButton && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <motion.button
                    onClick={onEnter}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-center gap-3 rounded-lg border border-[#28333D] bg-[#121923]/90 px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-[#E8EDF3] transition-all duration-200 hover:border-[#E6B357] hover:bg-[#19232D] hover:text-[#FFFFFF] hover:shadow-[0_0_20px_rgba(230,179,87,0.2)] focus:outline-none focus:ring-2 focus:ring-[#E6B357]/60 cursor-pointer"
                  >
                    <span>ENTER</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 text-[#E6B357]" />
                  </motion.button>

                  <p className="mt-3.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9AA8B8]">
                    CLICK TO ENTER MY PORTFOLIO
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Bottom Footer Tagline */}
      <footer className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-12 md:px-16 text-xs font-mono text-[#9AA8B8]/80 border-t border-[#28333D]/40 bg-[#090D12]/60">
        <div className="tracking-widest uppercase text-[11px]">
          IDEAS / AUTOMATE / CREATE / GROW
        </div>
        <div className="hidden sm:inline-block text-[11px]">
          Mohammed Qaisuddin • AI Generalist
        </div>
      </footer>
    </motion.div>
  );
};
