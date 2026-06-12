import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software for Contractors & Remodelers",
  description:
    "Turn the project photos on your phone into a website that wins jobs. Custom sites, portfolios, lead capture, and project tools for contractors & remodeling companies.",
  alternates: { canonical: "/industries/contractors" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
