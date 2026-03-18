"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body overflow when menu is open
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

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
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
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 }
    },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : isHomePage
              ? "bg-transparent"
              : "bg-[#0F1226]"
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Aeopic"
                width={480}
                height={128}
                className="h-32 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavigationMenu delayDuration={0} skipDelayDuration={0}>
                <NavigationMenuList>
                  {navLinks.map((link) =>
                    link.children ? (
                      <NavigationMenuItem key={link.label}>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                            isScrolled
                              ? "text-foreground hover:text-primary"
                              : "text-white/90 hover:text-white",
                            isActive(link.href) && "text-[#726AFF] font-semibold"
                          )}
                        >
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50">
                          <ul className="grid w-[400px] gap-3 p-4 bg-white rounded-lg shadow-lg border z-50">
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                      isActive(child.href) && "bg-accent"
                                    )}
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {child.label}
                                    </div>
                                    {child.description && (
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {child.description}
                                      </p>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={link.label}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className={cn(
                              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                              isScrolled
                                ? "text-foreground hover:text-primary"
                                : "text-white/90 hover:text-white",
                              isActive(link.href) && "text-[#726AFF] font-semibold"
                            )}
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="cta-gradient hover:opacity-90 text-white border-0"
              >
                <Link href="/start">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  isScrolled ? "text-foreground" : "text-white"
                )}
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
            {/* Background with gradient orb */}
            <div className="absolute inset-0 bg-[#0F1226]">
              {/* Subtle purple glow orb */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#726AFF]/10 blur-[120px] pointer-events-none" />
              <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-[#726AFF]/5 blur-[100px] pointer-events-none" />
            </div>

            {/* Content */}
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

              {/* Navigation Links - Centered */}
              <nav className="flex-1 flex flex-col justify-center items-center space-y-6">
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
                            isActive(link.href) ? "text-[#726AFF]" : "text-white hover:text-white/80"
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
                                {link.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={closeMenu}
                                    className={cn(
                                      "block text-xl transition-colors border-l-2 pl-4",
                                      isActive(child.href)
                                        ? "text-[#726AFF] border-[#726AFF]"
                                        : "text-white/70 border-white/20 hover:text-white hover:border-[#726AFF]"
                                    )}
                                  >
                                    {child.label}
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
                        className={cn(
                          "block text-3xl font-semibold tracking-tight transition-colors",
                          isActive(link.href) ? "text-[#726AFF]" : "text-white hover:text-white/80"
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Bottom: CTA and Contact Info */}
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
                  className="block w-full py-4 text-center text-lg font-semibold text-white rounded-lg cta-gradient hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
                <div className="text-center space-y-1">
                  <a
                    href="mailto:contact@aeopic.com"
                    className="block text-sm text-white/50 hover:text-white/70 transition-colors"
                  >
                    contact@aeopic.com
                  </a>
                  <p className="text-sm text-white/40">Houston, Texas</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
