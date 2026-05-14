"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    readingTime: string;
    image?: string;
    author: string;
  };
  authorName?: string;
  index: number;
}

const categoryLabels: Record<string, string> = {
  "case-study": "Case Study",
  "problem-solution": "Problem / Solution",
  engineering: "Engineering",
  industry: "Industry Insights",
  process: "Behind the Scenes",
};

const categoryBorderColors: Record<string, string> = {
  "case-study": "#50FA7B",
  engineering: "#8BE9FD",
  "problem-solution": "#FFB86C",
  industry: "#F1FA8C",
  process: "#FF79C6",
};

export function BlogCard({ post, authorName, index }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const borderColor = categoryBorderColors[post.category] || "#726AFF";

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.08,
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{ y: -4 }}
        className="group h-full bg-white/[0.03] border border-white/[0.06] border-l-[3px] rounded-xl p-5 hover:bg-white/[0.05] hover:border-white/[0.1] hover:shadow-lg hover:shadow-[#726AFF]/5 transition-all duration-300"
        style={{ borderLeftColor: borderColor }}
      >
        {/* Category badge */}
        <span
          className="inline-block font-mono text-[0.6rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded"
          style={{
            color: borderColor,
            backgroundColor: `${borderColor}15`,
          }}
        >
          {categoryLabels[post.category] || post.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-heading font-bold text-white tracking-[-0.02em] line-clamp-2 group-hover:text-[#726AFF] transition-colors duration-300 mt-3">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/40 mt-2 leading-relaxed line-clamp-2">
          {post.description}
        </p>

        {/* Author row */}
        <div className="flex items-center gap-2 mt-4 text-xs text-white/25 font-mono">
          <div className="w-6 h-6 rounded-full bg-[#726AFF]/10 flex items-center justify-center shrink-0">
            <span className="text-[#726AFF] text-[0.5rem] font-heading font-bold">
              {authorName
                ?.split(" ")
                .map((n) => n[0])
                .join("") || "A"}
            </span>
          </div>
          <span className="text-white/40">{authorName || post.author}</span>
          <span>·</span>
          <span>{formattedDate}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </motion.article>
    </Link>
  );
}
