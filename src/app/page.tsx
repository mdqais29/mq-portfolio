"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { IntroScreen } from "../components/IntroScreen";
import { MainWorkspace } from "../components/MainWorkspace";
import { portfolioData } from "../data/portfolioData";

export default function Home() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Check if the visitor already entered in this browser session
    const enteredBefore = sessionStorage.getItem("qais_portfolio_entered");
    if (enteredBefore === "true") {
      setHasEntered(true);
    }
  }, []);

  const handleEnterPortfolio = () => {
    setHasEntered(true);
    try {
      sessionStorage.setItem("qais_portfolio_entered", "true");
    } catch {
      // Ignore storage errors in restricted contexts
    }
  };

  const handleReplayIntro = () => {
    setHasEntered(false);
  };

  if (!mounted) {
    // Initial mount fallback to avoid hydration mismatches
    return (
      <div className="min-h-screen bg-[#0A0D12] flex items-center justify-center font-mono text-xs text-[#64748B]">
        Initializing...
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-[#090D12]">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <IntroScreen
            key="intro-screen"
            onEnter={handleEnterPortfolio}
            roles={portfolioData.typewriterRoles}
          />
        ) : (
          <MainWorkspace
            key="main-workspace"
            data={portfolioData}
            onReplayIntro={handleReplayIntro}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
