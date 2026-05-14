import RSS from "rss";
import { getAllPosts, getAuthor } from "@/lib/blog";

export async function GET() {
  const feed = new RSS({
    title: "Aeopic Blog",
    description: "Real engineering decisions from real client builds.",
    site_url: "https://aeopic.com",
    feed_url: "https://aeopic.com/feed.xml",
    language: "en",
    pubDate: new Date(),
    copyright: `© ${new Date().getFullYear()} Aeopic LLC`,
  });

  const posts = getAllPosts();

  for (const post of posts) {
    const author = getAuthor(post.author);
    feed.item({
      title: post.title,
      description: post.description,
      url: `https://aeopic.com/blog/${post.slug}`,
      date: new Date(post.date),
      author: author?.name || post.author,
      categories: [post.category],
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
