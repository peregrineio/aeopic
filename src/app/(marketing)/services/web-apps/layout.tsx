import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web App Development",
  description:
    "Full-stack custom web applications and platforms built around your workflow — CRMs, client portals, dashboards, and internal tools. Houston-based, remote-friendly.",
  alternates: { canonical: "/services/web-apps" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
