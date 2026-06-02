"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Bot,
  Megaphone,
  ShoppingCart,
  Thermometer,
  Wrench,
  HardHat,
  Leaf,
  Stethoscope,
  UtensilsCrossed,
  Scale,
  Car,
  SprayCan,
  Building2,
  ArrowRight,
  LogIn,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";

const serviceIcons: Record<string, React.ElementType> = {
  "Custom Web Apps": LayoutDashboard,
  "AI Integrated Operating Systems": Bot,
  "Marketing & SEO": Megaphone,
  eCommerce: ShoppingCart,
};

const industryIcons: Record<string, React.ElementType> = {
  "HVAC & Home Services": Thermometer,
  "Plumbing & Electrical": Wrench,
  "Contractors & Remodeling": HardHat,
  "Lawn Care & Landscaping": Leaf,
  "Medical & Dental": Stethoscope,
  Restaurants: UtensilsCrossed,
  "Law Offices": Scale,
  "Auto & Detailing": Car,
  "Cleaning & Pest Control": SprayCan,
  "Chambers of Commerce": Building2,
};

const brand = {
  primary: "#726AFF",
  primarySoft: "#8B5CF6",
  lavender: "#C4B5FD",
  lavenderLight: "#DDD6FE",
  purpleBg: "#F5F3FF",
};

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

  // Animation variants
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
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
    exit: { opacity: 0, y: 10, transition: { duration: 0.15 } },
  };

  const subMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1] as const,
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: 4,
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const },
    },
  };

  const renderDropdownContent = (
    link: (typeof navLinks)[0],
    dropdownType: "services" | "industries"
  ) => {
    const icons =
      dropdownType === "services" ? serviceIcons : industryIcons;
    const children = link.children || [];

    if (dropdownType === "services") {
      return (
        <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
          style={{ width: "520px" }}
        >
          <div
            className="rounded-2xl border border-gray-200/80 shadow-xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, white 0%, ${brand.purpleBg} 100%)`,
              boxShadow: `0 25px 50px -12px rgba(114, 106, 255, 0.15), 0 0 0 1px rgba(114, 106, 255, 0.05)`,
            }}
          >
            <div className="px-6 py-4 border-b border-gray-100">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-400 font-medium">
                Our Services
              </p>
            </div>
            <div className="grid grid-cols-2 gap-1 p-2">
              {children.map((child) => {
                const Icon = icons[child.label] || LayoutDashboard;
                return (
                  <motion.div key={child.label} variants={dropdownItemVariants}>
                    <Link
                      href={child.href}
                      onClick={() => setActiveDropdown(null)}
                      className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white"
                      style={{ boxShadow: "0 0 0 0 transparent" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 4px 20px -4px rgba(114, 106, 255, 0.2)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                        style={{
                          background: `linear-gradient(135deg, ${brand.purpleBg} 0%, ${brand.lavenderLight} 100%)`,
                        }}
                      >
                        <Icon
                          className="w-5 h-5 transition-colors duration-200"
                          style={{ color: brand.primary }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#726AFF] transition-colors">
                            {child.label}
                          </span>
                          <ArrowRight
                            className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            style={{ color: brand.primary }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {child.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div className="px-6 py-4 border-t border-gray-100 bg-white/50">
              <Link
                href="/services"
                onClick={() => setActiveDropdown(null)}
                className="group flex items-center justify-between text-sm"
              >
                <span className="font-medium text-gray-600 group-hover:text-[#726AFF] transition-colors">
                  View all services
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#726AFF] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </motion.div>
      );
    }

    // Industries: 3-column mega menu
    return (
      <motion.div
        variants={dropdownVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
        style={{ width: "680px" }}
      >
        <div
          className="rounded-2xl border border-gray-200/80 shadow-xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, white 0%, ${brand.purpleBg} 100%)`,
            boxShadow: `0 25px 50px -12px rgba(114, 106, 255, 0.15), 0 0 0 1px rgba(114, 106, 255, 0.05)`,
          }}
        >
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-400 font-medium">
              Industries We Serve
            </p>
            <span
              className="text-[0.6rem] px-2 py-1 rounded-full font-medium"
              style={{ background: brand.purpleBg, color: brand.primary }}
            >
              10 Specializations
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1 p-2">
            {children.map((child) => {
              const Icon = icons[child.label] || Wrench;
              return (
                <motion.div key={child.label} variants={dropdownItemVariants}>
                  <Link
                    href={child.href}
                    onClick={() => setActiveDropdown(null)}
                    className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white"
                    style={{ boxShadow: "0 0 0 0 transparent" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 4px 20px -4px rgba(114, 106, 255, 0.2)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{
                        background: `linear-gradient(135deg, ${brand.purpleBg} 0%, ${brand.lavenderLight} 100%)`,
                      }}
                    >
                      <Icon
                        className="w-4 h-4 transition-colors duration-200"
                        style={{ color: brand.primary }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#726AFF] transition-colors truncate">
                      {child.label.replace(" & Home Services", "")}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="px-6 py-4 border-t border-gray-100 bg-white/50">
            <Link
              href="/industries"
              onClick={() => setActiveDropdown(null)}
              className="group flex items-center justify-between text-sm"
            >
              <span className="font-medium text-gray-600 group-hover:text-[#726AFF] transition-colors">
                Explore all industries
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#726AFF] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-black/[0.04]"
            : isHomePage
              ? "bg-transparent"
              : "bg-[#0F1226]"
        )}
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
            <nav className="hidden lg:flex items-center gap-0.5">
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
                        "flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200",
                        isScrolled
                          ? "text-gray-600 hover:text-gray-900 hover:bg-black/[0.04]"
                          : "text-white/75 hover:text-white hover:bg-white/[0.08]",
                        isActive(link.href) && "text-[#726AFF]",
                        activeDropdown === link.label &&
                          (isScrolled
                            ? "text-gray-900 bg-black/[0.04]"
                            : "text-white bg-white/[0.08]")
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
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
                    className={cn(
                      "px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200",
                      isScrolled
                        ? "text-gray-600 hover:text-gray-900 hover:bg-black/[0.04]"
                        : "text-white/75 hover:text-white hover:bg-white/[0.08]",
                      isActive(link.href) && "text-[#726AFF]"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
              {refIndustry && (
                <Link
                  href={refIndustry.href}
                  className={cn(
                    "px-3 py-1.5 text-[13px] font-semibold rounded-lg transition-all duration-200 border",
                    isScrolled
                      ? "text-[#726AFF] border-[#726AFF]/30 hover:bg-[#726AFF]/5"
                      : "text-white border-white/30 hover:bg-white/[0.08]",
                    isActive(refIndustry.href) && "bg-[#726AFF]/10 border-[#726AFF]/50"
                  )}
                >
                  {refIndustry.label}
                </Link>
              )}
            </nav>

            {/* Desktop: Login icon + CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://portal.aeopic.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Client Portal"
                className={cn(
                  "flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200",
                  isScrolled
                    ? "text-gray-400 hover:text-[#726AFF] hover:bg-black/[0.04]"
                    : "text-white/40 hover:text-white hover:bg-white/[0.08]"
                )}
              >
                <LogIn className="w-[18px] h-[18px]" />
              </a>
              <div
                className={cn(
                  "w-px h-5",
                  isScrolled ? "bg-gray-200" : "bg-white/15"
                )}
              />
              <Link
                href="/start"
                className="bg-[#726AFF] text-white text-[13px] font-semibold px-5 py-2 rounded-xl hover:bg-[#5B54D6] transition-all duration-200 shadow-sm shadow-[#726AFF]/20"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className={cn(isScrolled ? "text-foreground" : "text-white")}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
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
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#726AFF]/10 blur-[120px] pointer-events-none" />
              <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-[#726AFF]/5 blur-[100px] pointer-events-none" />
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

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center items-center space-y-6 overflow-y-auto py-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    custom={index + 1}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full max-w-xs text-center"
                  >
                    {link.children ? (
                      <div>
                        <button
                          onClick={() => toggleExpanded(link.label)}
                          className={cn(
                            "flex items-center justify-center gap-2 w-full text-3xl font-semibold tracking-tight transition-colors",
                            isActive(link.href)
                              ? "text-[#726AFF]"
                              : "text-white hover:text-white/80"
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "h-6 w-6 transition-transform duration-300",
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
                              <div className="pt-4 space-y-3">
                                {link.children.map((child) => {
                                  const icons =
                                    link.label === "Services"
                                      ? serviceIcons
                                      : industryIcons;
                                  const Icon = icons[child.label] || Wrench;
                                  return (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      onClick={closeMenu}
                                      className={cn(
                                        "flex items-center gap-3 text-lg transition-colors px-4 py-2 rounded-lg",
                                        isActive(child.href)
                                          ? "text-[#726AFF] bg-[#726AFF]/10"
                                          : "text-white/70 hover:text-white hover:bg-white/5"
                                      )}
                                    >
                                      <Icon className="w-5 h-5 flex-shrink-0" />
                                      <span>
                                        {child.label.replace(
                                          " & Home Services",
                                          ""
                                        )}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={cn(
                          "block text-3xl font-semibold tracking-tight transition-colors",
                          isActive(link.href)
                            ? "text-[#726AFF]"
                            : "text-white hover:text-white/80"
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
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
                  className="block w-full py-4 text-center text-lg font-semibold text-white rounded-xl cta-gradient hover:opacity-90 transition-opacity shadow-lg shadow-[#726AFF]/30"
                >
                  Get Started
                </Link>
                <a
                  href="https://portal.aeopic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-white/50 hover:text-white/80 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Client Portal
                </a>
                <div className="text-center space-y-1">
                  <a
                    href="mailto:contact@aeopic.com"
                    className="block text-sm text-white/40 hover:text-white/60 transition-colors"
                  >
                    contact@aeopic.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
