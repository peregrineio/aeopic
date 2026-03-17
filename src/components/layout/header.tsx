"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Determine if we're on the homepage (which has a dark hero)
  const isHomePage = pathname === "/";

  return (
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
                          isActive(link.href) && "text-primary"
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
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                            isScrolled
                              ? "text-foreground hover:text-primary"
                              : "text-white/90 hover:text-white",
                            isActive(link.href) && "text-primary"
                          )}
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </Link>
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

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Image
                      src="/images/logo.png"
                      alt="Aeopic"
                      width={140}
                      height={42}
                      className="h-9 w-auto"
                    />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  <nav className="flex-1">
                    <Accordion type="single" collapsible className="w-full">
                      {navLinks.map((link, index) =>
                        link.children ? (
                          <AccordionItem
                            key={link.label}
                            value={`item-${index}`}
                            className="border-b"
                          >
                            <AccordionTrigger className="text-base font-medium hover:no-underline">
                              {link.label}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-2 pl-4">
                                {link.children.map((child) => (
                                  <SheetClose asChild key={child.label}>
                                    <Link
                                      href={child.href}
                                      className={cn(
                                        "block py-2 text-sm text-muted-foreground hover:text-primary transition-colors",
                                        isActive(child.href) && "text-primary"
                                      )}
                                    >
                                      {child.label}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <div key={link.label} className="border-b">
                            <SheetClose asChild>
                              <Link
                                href={link.href}
                                className={cn(
                                  "flex py-4 text-base font-medium hover:text-primary transition-colors",
                                  isActive(link.href) && "text-primary"
                                )}
                              >
                                {link.label}
                              </Link>
                            </SheetClose>
                          </div>
                        )
                      )}
                    </Accordion>
                  </nav>

                  <div className="pt-6 border-t">
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="w-full cta-gradient hover:opacity-90 text-white border-0"
                      >
                        <Link href="/start">Get Started</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
