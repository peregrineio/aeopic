import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Agents | Autonomous Business Agents | Aeopic",
  description:
    "Custom AI agent development for Texas businesses. Lead qualification, voice AI, document processing, multi-agent orchestration. TRAIGA-compliant. Built on production frameworks.",
  alternates: {
    canonical: "/services/ai-agents",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
