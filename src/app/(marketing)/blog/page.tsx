import type { Metadata } from "next";
import { getAllPosts, getFeaturedPost, getAllCategories, getAuthor } from "@/lib/blog";
import { BlogIndex } from "@/components/blog/blog-index";

export const metadata: Metadata = {
  title: "Blog | Aeopic",
  description:
    "Real engineering decisions from real client builds. Case studies, technical deep-dives, and lessons from building custom software for Texas businesses.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const categories = getAllCategories();

  const authorSlugs = [...new Set(posts.map((p) => p.author))];
  const authorNames: Record<string, string> = {};
  for (const slug of authorSlugs) {
    const author = getAuthor(slug);
    if (author) authorNames[slug] = author.name;
  }

  return (
    <BlogIndex
      posts={posts}
      featuredPost={featuredPost}
      categories={categories}
      authorNames={authorNames}
    />
  );
}
