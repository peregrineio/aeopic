"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approximately 60vh)
      const scrollThreshold = window.innerHeight * 0.6;
      const hasScrolledPastHero = window.scrollY > scrollThreshold;

      // Check if form is in viewport
      const formSection = document.getElementById("estimate-form");
      if (formSection) {
        const rect = formSection.getBoundingClientRect();
        const formInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsFormVisible(formInView);
      }

      setIsVisible(hasScrolledPastHero);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById("estimate-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Don't show if not scrolled past hero or if form is visible
  if (!isVisible || isFormVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-3 px-4"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Button
        onClick={scrollToForm}
        size="lg"
        className="w-full cta-gradient text-white hover:opacity-90 py-5 rounded-full text-base font-medium group"
      >
        Get Your Free Consultation
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
