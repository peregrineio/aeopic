import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning & Pest Control Software",
  description:
    "5-star reviews but no website? Custom sites and booking software for cleaning & pest control companies — get found by new customers and book jobs online, 24/7.",
  alternates: { canonical: "/industries/cleaning" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
