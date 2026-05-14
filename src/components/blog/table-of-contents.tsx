"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    });

    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean);
    for (const el of elements) {
      observerRef.current.observe(el!);
    }

    return () => observerRef.current?.disconnect();
  }, [headings]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }

  const tocContent = (
    <nav>
      <p className="text-[0.65rem] font-mono tracking-[0.15em] uppercase text-[#A3A3A3] mb-3">
        On this page
      </p>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollTo(heading.id)}
              className={cn(
                "text-sm text-left w-full py-1 transition-colors duration-200 border-l-2",
                heading.level === 3 ? "pl-6" : "pl-3",
                activeId === heading.id
                  ? "border-[#726AFF] text-[#726AFF] font-medium"
                  : "border-transparent text-[#525252] hover:text-[#0F1226]"
              )}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <div className="hidden lg:block sticky top-24 w-[200px] shrink-0">
        {tocContent}
      </div>

      {/* Mobile: collapsible accordion */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-[#F9F9FB] rounded-xl px-4 py-3 text-sm text-[#525252]"
        >
          <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#A3A3A3]">
            On this page
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-[#9CA3AF] transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>
        {isOpen && (
          <div className="bg-[#F9F9FB] rounded-b-xl px-4 pb-4 -mt-1">
            {tocContent}
          </div>
        )}
      </div>
    </>
  );
}
