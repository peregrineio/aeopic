import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & Local SEO",
  description:
    "Get found when customers search. Social media, local SEO, Google Business, and paid ads — every dollar tracked, every lead counted. Texas-based digital marketing.",
  alternates: { canonical: "/services/marketing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
