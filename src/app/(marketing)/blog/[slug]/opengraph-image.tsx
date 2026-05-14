import { ImageResponse } from "next/og";
import { getPostBySlug, getAuthor } from "@/lib/blog";

export const runtime = "edge";
export const alt = "Aeopic Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const categoryLabels: Record<string, string> = {
  "case-study": "Case Study",
  "problem-solution": "Problem / Solution",
  engineering: "Engineering",
  industry: "Industry Insights",
  process: "Behind the Scenes",
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0F1226",
            fontSize: 48,
            color: "white",
          }}
        >
          Aeopic Blog
        </div>
      ),
      { ...size }
    );
  }

  const author = getAuthor(post.author);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const [syneBold, dmSansRegular] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/syne/v22/8vIS7w4qzmVxsWxjBZRjr0FKM_04uT6kR47NCV5Z.ttf"
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAop-hSA.ttf"
    ).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0F1226",
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(114, 106, 255, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(114, 106, 255, 0.08) 0%, transparent 50%)",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Top: Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 800,
            color: "white",
            fontFamily: "Syne",
            letterSpacing: "-0.01em",
          }}
        >
          AEOPIC
        </div>

        {/* Center: Title */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: post.title.length > 60 ? 44 : 56,
              fontWeight: 700,
              color: "white",
              fontFamily: "Syne",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              maxWidth: "90%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {post.title}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          {/* Left: category + reading time + date */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                backgroundColor: "#726AFF",
                color: "white",
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "DM Sans",
                padding: "6px 16px",
                borderRadius: 50,
              }}
            >
              {categoryLabels[post.category] || post.category}
            </div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: 16,
                fontFamily: "DM Sans",
              }}
            >
              {post.readingTime} · {formattedDate}
            </div>
          </div>

          {/* Right: author + Aeopic */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: 16,
              fontFamily: "DM Sans",
            }}
          >
            {author?.name || post.author} · Aeopic
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background:
              "linear-gradient(90deg, #726AFF 0%, #5B54D6 50%, #726AFF 100%)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Syne",
          data: syneBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "DM Sans",
          data: dmSansRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
