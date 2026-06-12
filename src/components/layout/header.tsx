"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";

const brand = { primary: "#726AFF", dark: "#0F1226" };

const refIndustryMap: Record<string, { label: string; href: string }> = {
  "chambers-of-commerce": { label: "Chambers of Commerce", href: "/industries/chambers-of-commerce" },
  "hvac": { label: "HVAC", href: "/industries/hvac" },
  "plumbing-electrical": { label: "Plumbing & Electrical", href: "/industries/plumbing-electrical" },
  "contractors": { label: "Contractors", href: "/industries/contractors" },
  "lawn-care": { label: "Lawn Care", href: "/industries/lawn-care" },
  "medical": { label: "Medical & Dental", href: "/industries/medical" },
  "restaurants": { label: "Restaurants", href: "/industries/restaurants" },
  "law": { label: "Law Offices", href: "/industries/law" },
  "auto": { label: "Auto & Detailing", href: "/industries/auto" },
  "cleaning": { label: "Cleaning", href: "/industries/cleaning" },
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [refIndustry, setRefIndustry] = useState<{ label: string; href: string } | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )aeopic-ref=([^;]*)/);
    if (match) {
      const slug = decodeURIComponent(match[1]);
      if (refIndustryMap[slug]) {
        setRefIndustry(refIndustryMap[slug]);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setExpandedItem(null);
  }, []);

  const toggleExpanded = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHomePage = pathname === "/";

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
    exit: { opacity: 0, y: 10, transition: { duration: 0.15 } },
  };

  const subMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: [0.23, 1, 0.32, 1] as const,
        staggerChildren: 0.035,
        delayChildren: 0.05,
      },
    },
    exit: { opacity: 0, y: 6, transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] as const } },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] as const } },
  };

  /** Dark dossier dropdown panels — ledger rows, mono indexes, no icon tiles. */
  const renderDropdownContent = (
    link: (typeof navLinks)[0],
    dropdownType: "services" | "industries"
  ) => {
    const children = link.children || [];
    const isServices = dropdownType === "services";

    return (
      <motion.div
        variants={dropdownVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
        style={{ width: isServices ? "480px" : "620px" }}
      >
        <div
          className="overflow-hidden rounded-xl border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.7)]"
          style={{ background: "rgba(15,18,38,0.97)", backdropFilter: "blur(20px)" }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              {isServices ? "Services" : "Industries"}
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: brand.primary }}>
              {children.length} {isServices ? "modules" : "specializations"}
            </p>
          </div>

          {/* Ledger rows */}
          <div className={cn("py-2", !isServices && "grid grid-cols-2 gap-x-0")}>
            {children.map((child, i) => (
              <motion.div key={child.label} variants={dropdownItemVariants}>
                <Link
                  href={child.href}
                  onClick={() => setActiveDropdown(null)}
                  className="group/row flex items-baseline gap-4 px-6 py-3 transition-colors duration-200 hover:bg-white/[0.05]"
                >
                  <span
                    className="font-mono text-[11px] flex-shrink-0 transition-colors duration-200"
                    style={{ color: brand.primary }}
                  >
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white/85 group-hover/row:text-white transition-colors truncate">
                        {child.label.replace(" & Home Services", "")}
                      </span>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 flex-shrink-0 opacity-0 -translate-x-1 group-hover/row:opacity-100 group-hover/row:translate-x-0 group-hover/row:rotate-45 transition-all duration-200"
                        style={{ color: brand.primary }}
                      />
                    </span>
                    {isServices && "description" in child && (
                      <span className="block text-xs text-white/40 mt-0.5 leading-relaxed group-hover/row:text-white/55 transition-colors">
                        {child.description}
                      </span>
                    )}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Panel footer */}
          <Link
            href={isServices ? "/services" : "/industries"}
            onClick={() => setActiveDropdown(null)}
            className="group/all flex items-center justify-between px-6 py-3.5 border-t border-white/10 hover:bg-white/[0.05] transition-colors"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45 group-hover/all:text-white transition-colors">
              Index all {isServices ? "services" : "industries"}
            </span>
            <ArrowRight
              className="w-3.5 h-3.5 text-white/30 group-hover/all:translate-x-1 transition-all"
              style={{ color: brand.primary }}
            />
          </Link>
        </div>
      </motion.div>
    );
  };

  /** Route-style nav label: a purple "/" slides in on hover; active keeps it. */
  const NavLabel = ({ label, active }: { label: string; active: boolean }) => (
    <span className="relative flex items-center">
      <span
        className={cn(
          "font-mono transition-all duration-200 overflow-hidden",
          active ? "w-2.5 opacity-100" : "w-0 opacity-0 group-hover/nav:w-2.5 group-hover/nav:opacity-100"
        )}
        style={{ color: brand.primary }}
        aria-hidden
      >
        /
      </span>
      <span
        className={cn(
          "text-[13px] font-medium transition-colors duration-200",
          active ? "text-white" : "text-white/65 group-hover/nav:text-white"
        )}
      >
        {label}
      </span>
    </span>
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-white/[0.08] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]"
            : isHomePage
              ? "bg-transparent"
              : "bg-[#0F1226]"
        )}
        style={
          isScrolled
            ? { background: "rgba(15,18,38,0.85)", backdropFilter: "blur(20px)" }
            : undefined
        }
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              isScrolled ? "h-14" : "h-16 md:h-20"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Aeopic"
                width={480}
                height={128}
                className={cn(
                  "w-auto transition-all duration-300",
                  isScrolled ? "h-16" : "h-20 md:h-28"
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        "group/nav flex items-center gap-1.5 px-3 py-2 transition-all duration-200",
                        activeDropdown === link.label && "[&_span]:text-white"
                      )}
                    >
                      <NavLabel
                        label={link.label}
                        active={isActive(link.href) || activeDropdown === link.label}
                      />
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-all duration-200",
                          activeDropdown === link.label
                            ? "rotate-180 text-white"
                            : "text-white/40 group-hover/nav:text-white/70"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.label &&
                        renderDropdownContent(
                          link,
                          link.label === "Services" ? "services" : "industries"
                        )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group/nav px-3 py-2 transition-all duration-200"
                  >
                    <NavLabel label={link.label} active={isActive(link.href)} />
                  </Link>
                )
              )}
              {refIndustry && (
                <Link
                  href={refIndustry.href}
                  className={cn(
                    "ml-1 px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200 border",
                    isActive(refIndustry.href)
                      ? "text-white border-[#726AFF] bg-[#726AFF]/15"
                      : "text-white/80 border-white/25 hover:border-[#726AFF] hover:text-white"
                  )}
                >
                  {refIndustry.label}
                </Link>
              )}
            </nav>

            {/* Desktop: Login + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://portal.aeopic.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Client Portal"
                title="Client Portal"
                className="flex items-center justify-center w-9 h-9 text-white/40 hover:text-white transition-colors duration-200"
              >
                <LogIn className="w-[18px] h-[18px]" />
              </a>
              <div className="w-px h-5 bg-white/15" />
              <Link
                href="/start"
                className="group/cta inline-flex items-center gap-2 bg-[#726AFF] text-white text-[13px] font-bold px-5 py-2.5 hover:bg-[#5B54D6] transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className="text-white"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay — dossier style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-[#0F1226]">
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, white 1px, transparent 1px),
                    linear-gradient(to bottom, white 1px, transparent 1px)
                  `,
                  backgroundSize: "64px 64px",
                }}
              />
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#726AFF]/10 blur-[120px] pointer-events-none" />
            </div>

            <div className="relative h-full flex flex-col px-6 py-6">
              {/* Header: Logo and Close */}
              <motion.div
                className="flex items-center justify-between"
                custom={0}
                variants={menuItemVariants}
              >
                <Link href="/" onClick={closeMenu}>
                  <Image
                    src="/images/logo.png"
                    alt="Aeopic"
                    width={120}
                    height={36}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMenu}
                  className="text-white hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" />
                </Button>
              </motion.div>

              {/* Navigation index */}
              <nav className="flex-1 flex flex-col justify-center overflow-y-auto py-8">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">
                  Index
                </p>
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      custom={index + 1}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="border-b border-white/[0.07]"
                    >
                      {link.children ? (
                        <div>
                          <button
                            onClick={() => toggleExpanded(link.label)}
                            className="flex items-center gap-4 w-full py-3.5 text-left"
                          >
                            <span className="font-mono text-xs" style={{ color: brand.primary }}>
                              /{String(index + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={cn(
                                "flex-1 font-heading text-2xl font-bold tracking-tight transition-colors",
                                isActive(link.href) ? "text-[#9B95FF]" : "text-white"
                              )}
                            >
                              {link.label}
                            </span>
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 text-white/40 transition-transform duration-300",
                                expandedItem === link.label && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedItem === link.label && (
                              <motion.div
                                variants={subMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="overflow-hidden"
                              >
                                <div className="pb-4 pl-10 space-y-0.5">
                                  {link.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      onClick={closeMenu}
                                      className={cn(
                                        "block py-2 text-base transition-colors",
                                        isActive(child.href)
                                          ? "text-[#9B95FF]"
                                          : "text-white/60 hover:text-white"
                                      )}
                                    >
                                      {child.label.replace(" & Home Services", "")}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="flex items-center gap-4 py-3.5"
                        >
                          <span className="font-mono text-xs" style={{ color: brand.primary }}>
                            /{String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={cn(
                              "font-heading text-2xl font-bold tracking-tight transition-colors",
                              isActive(link.href) ? "text-[#9B95FF]" : "text-white"
                            )}
                          >
                            {link.label}
                          </span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Bottom: CTA + Contact */}
              <motion.div
                custom={navLinks.length + 2}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <Link
                  href="/start"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-3 w-full py-4 text-center text-lg font-bold text-white bg-[#726AFF] hover:bg-[#5B54D6] transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://portal.aeopic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 font-mono text-[11px] tracking-[0.2em] uppercase text-white/45 hover:text-white/80 transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  Client Portal
                </a>
                <a
                  href="mailto:contact@aeopic.com"
                  className="block text-center font-mono text-[11px] tracking-[0.15em] text-white/30 hover:text-white/60 transition-colors"
                >
                  contact@aeopic.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
