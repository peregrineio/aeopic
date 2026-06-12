import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chamber Software (ChamberMaster Alternative)",
  description:
    "Stop paying $5,000+/year for software you don't own. One integrated platform for chambers of commerce — member management, events, billing, directory, and analytics.",
  alternates: { canonical: "/industries/chambers-of-commerce" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
