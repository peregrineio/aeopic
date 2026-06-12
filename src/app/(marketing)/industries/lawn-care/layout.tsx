import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lawn Care & Landscaping Software",
  description:
    "Run routes, customers, and billing from one platform — not five apps. Custom software for lawn care & landscaping companies that want to scale without the chaos.",
  alternates: { canonical: "/industries/lawn-care" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
