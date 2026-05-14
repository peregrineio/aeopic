import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllPosts, getPostBySlug, getAuthor, extractHeadings } from "@/lib/blog";
import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { BlogPostFooter } from "@/components/blog/blog-post-footer";
import { MdxContent } from "@/components/mdx/mdx-content";
import { TableOfContents } from "@/components/blog/table-of-contents";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const author = getAuthor(post.author);

  return {
    title: `${post.title} | Aeopic Blog`,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: author ? [author.name] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const author = getAuthor(post.author);
  const headings = extractHeadings(post.body);
  const showToc = post.wordCount > 1200 && headings.length > 1;

  return (
    <div className="bg-white">
      <div className="pt-32 md:pt-40 pb-16">
        <div className="max-w-[720px] mx-auto px-5">
          <BlogPostHeader
            title={post.title}
            description={post.description}
            date={post.date}
            category={post.category}
            readingTime={post.readingTime}
            authorName={author?.name || post.author}
            authorRole={author?.role || ""}
          />

          {post.image && (
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {showToc ? (
          <div className="max-w-[720px] mx-auto px-5 lg:max-w-none lg:px-0">
            <div className="lg:flex lg:justify-center lg:gap-12 lg:px-5">
              <TableOfContents headings={headings} />
              <div className="max-w-[720px] w-full">
                <article>
                  <MdxContent code={post.body} />
                </article>
                <BlogPostFooter
                  authorName={author?.name || post.author}
                  authorRole={author?.role || ""}
                  authorBio={author?.bio || ""}
                />
              </div>
              <div className="hidden lg:block w-[200px] shrink-0" />
            </div>
          </div>
        ) : (
          <div className="max-w-[720px] mx-auto px-5">
            <article>
              <MdxContent code={post.body} />
            </article>
            <BlogPostFooter
              authorName={author?.name || post.author}
              authorRole={author?.role || ""}
              authorBio={author?.bio || ""}
            />
          </div>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Person",
              name: author?.name || post.author,
              url: "https://aeopic.com/about",
            },
            publisher: {
              "@type": "Organization",
              name: "Aeopic",
              url: "https://aeopic.com",
              logo: {
                "@type": "ImageObject",
                url: "https://aeopic.com/images/aeopic-logo.png",
              },
            },
            image: post.image || "https://aeopic.com/images/og-default.jpg",
            mainEntityOfPage: `https://aeopic.com/blog/${post.slug}`,
          }),
        }}
      />
    </div>
  );
}
