import { posts, authors } from "#site/content";

export function getAllPosts() {
  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug && !post.draft);
}

export function getFeaturedPost() {
  const published = getAllPosts();
  return published.find((post) => post.featured) || published[0];
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.category === category);
}

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export function extractHeadings(body: string) {
  const headings: { id: string; text: string; level: 2 | 3 }[] = [];
  const regex = /r\.h([23]),\{id:"([^"]+)",children:(?:n\(r\.a,\{href:"[^"]*",children:"([^"]+)"\}\)|"([^"]+)")/g;
  let match;
  while ((match = regex.exec(body)) !== null) {
    headings.push({
      level: parseInt(match[1]) as 2 | 3,
      id: match[2],
      text: match[3] || match[4],
    });
  }
  return headings;
}

export function getAllCategories() {
  return [
    { slug: "case-study", label: "Case Studies" },
    { slug: "problem-solution", label: "Problem / Solution" },
    { slug: "engineering", label: "Engineering" },
    { slug: "industry", label: "Industry Insights" },
    { slug: "process", label: "Behind the Scenes" },
  ];
}
