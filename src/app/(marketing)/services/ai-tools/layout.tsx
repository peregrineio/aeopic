import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools & Automation for Business",
  description:
    "Custom AI tools that fit your business — AI customer support, intelligent ticketing, knowledge-base search, predictive analytics, and process automation, built on Claude.",
  alternates: { canonical: "/services/ai-tools" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
