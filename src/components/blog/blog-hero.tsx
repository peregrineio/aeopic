"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  author: string;
}

interface Category {
  slug: string;
  label: string;
}

interface BlogHeroProps {
  featuredPost: Post | undefined;
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  authorNames: Record<string, string>;
}

const categoryGradients: Record<string, string> = {
  "case-study": "from-[#726AFF]/30 via-[#5B54D6]/20 to-[#4338CA]/30",
  engineering: "from-[#3B82F6]/30 via-[#0EA5E9]/20 to-[#06B6D4]/30",
  "problem-solution": "from-[#F97316]/30 via-[#F59E0B]/20 to-[#D97706]/30",
  industry: "from-[#10B981]/30 via-[#059669]/20 to-[#047857]/30",
  process: "from-[#EC4899]/30 via-[#DB2777]/20 to-[#BE185D]/30",
};

const categoryPillColors: Record<string, { text: string; bg: string }> = {
  "case-study": { text: "#726AFF", bg: "rgba(114,106,255,0.12)" },
  engineering: { text: "#8BE9FD", bg: "rgba(139,233,253,0.12)" },
  "problem-solution": { text: "#FFB86C", bg: "rgba(255,184,108,0.12)" },
  industry: { text: "#50FA7B", bg: "rgba(80,250,123,0.12)" },
  process: { text: "#FF79C6", bg: "rgba(255,121,198,0.12)" },
};

const categoryLabels: Record<string, string> = {
  "case-study": "Case Study",
  "problem-solution": "Problem & Solution",
  engineering: "Engineering",
  industry: "Industry Insights",
  process: "Behind the Scenes",
};

export function BlogHero({
  featuredPost,
  categories,
  activeCategory,
  onCategoryChange,
  authorNames,
}: BlogHeroProps) {
  const formattedDate = featuredPost
    ? new Date(featuredPost.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div>
      {/* Featured post card */}
      {featuredPost && (
        <Link href={`/blog/${featuredPost.slug}`} className="group block mb-10">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
          >
            {/* Hero image area */}
            <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
              <Image
                src="/images/blog-hero.jpg"
                alt="Aeopic blog"
                fill
                className="object-cover"
                priority
              />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-40",
                  categoryGradients[featuredPost.category] ||
                    categoryGradients["case-study"]
                )}
              />
            </div>

            {/* Content area */}
            <div className="p-6 md:p-8">
              {/* Category pill */}
              <span
                className="inline-block text-[0.65rem] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded"
                style={{
                  color:
                    categoryPillColors[featuredPost.category]?.text || "#726AFF",
                  backgroundColor:
                    categoryPillColors[featuredPost.category]?.bg ||
                    "rgba(114,106,255,0.12)",
                }}
              >
                {categoryLabels[featuredPost.category] ||
                  featuredPost.category}
              </span>

              {/* Title */}
              <h2 className="text-xl md:text-3xl font-heading font-bold text-white tracking-[-0.025em] mt-4 group-hover:text-[#726AFF] transition-colors duration-300">
                {featuredPost.title}
              </h2>

              {/* Description */}
              <p className="text-white/50 text-base md:text-lg mt-3 leading-relaxed line-clamp-2">
                {featuredPost.description}
              </p>

              {/* Meta + CTA row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-3">
                <div className="flex items-center gap-2 text-sm text-white/30 font-mono">
                  <span>
                    {authorNames[featuredPost.author] || featuredPost.author}
                  </span>
                  <span>·</span>
                  <span>{formattedDate}</span>
                  <span>·</span>
                  <span>{featuredPost.readingTime}</span>
                </div>
                <span className="text-[#726AFF] text-sm font-semibold group-hover:underline">
                  Read Article →
                </span>
              </div>
            </div>
          </motion.article>
        </Link>
      )}

      {/* Category filter pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => onCategoryChange("all")}
          className={cn(
            "shrink-0 px-4 py-2 rounded-full text-sm transition-all",
            activeCategory === "all"
              ? "bg-[#726AFF] text-white"
              : "bg-white/[0.04] text-white/40 hover:bg-white/[0.08] hover:text-white/60"
          )}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onCategoryChange(cat.slug)}
            className={cn(
              "shrink-0 px-4 py-2 rounded-full text-sm transition-all",
              activeCategory === cat.slug
                ? "bg-[#726AFF] text-white"
                : "bg-white/[0.04] text-white/40 hover:bg-white/[0.08] hover:text-white/60"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
