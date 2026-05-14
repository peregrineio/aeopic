"use client";

import { useState } from "react";
import { BlogHero } from "./blog-hero";
import { BlogCard } from "./blog-card";
import { NewsletterForm } from "./newsletter-form";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  image?: string;
  author: string;
}

interface Category {
  slug: string;
  label: string;
}

interface AuthorMap {
  [slug: string]: string;
}

interface BlogIndexProps {
  posts: Post[];
  featuredPost: Post | undefined;
  categories: Category[];
  authorNames: AuthorMap;
}

export function BlogIndex({
  posts,
  featuredPost,
  categories,
  authorNames,
}: BlogIndexProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const gridPosts =
    activeCategory === "all" && featuredPost
      ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
      : filteredPosts;

  return (
    <>
      {/* Hero section — dark bg */}
      <section className="bg-[#0F1226] pt-32 pb-12 md:pt-40 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none" />
        <div className="container-site relative z-10">
          {/* Header */}
          <div className="mb-12">
            <p className="text-[#726AFF] text-xs font-mono uppercase tracking-[0.2em] mb-4">
              Blog
            </p>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-[-0.025em]">
              Insights on building software that grows your business
            </h1>
          </div>

          {/* Featured post + filters */}
          <BlogHero
            featuredPost={activeCategory === "all" ? featuredPost : filteredPosts[0]}
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            authorNames={authorNames}
          />
        </div>
      </section>

      {/* Post grid — continued dark bg */}
      <section className="bg-[#0F1226] pb-20 md:pb-28">
        <div className="container-site">
          <h2 className="text-sm text-white/30 uppercase tracking-wider font-mono mb-8">
            {activeCategory === "all"
              ? `All Posts (${gridPosts.length})`
              : `${categories.find((c) => c.slug === activeCategory)?.label || activeCategory} (${gridPosts.length})`}
          </h2>

          {gridPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridPosts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  authorName={authorNames[post.author]}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-white/20 py-16 text-sm">
              No posts in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-[#0F1226] border-t border-white/[0.04]">
        <div className="container-site">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
