import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & Electrical Company Software",
  description:
    "Get found, get booked, get paid. Custom websites and software for plumbing & electrical contractors — online booking, automated invoicing, reviews, and customer portals.",
  alternates: { canonical: "/industries/plumbing-electrical" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
