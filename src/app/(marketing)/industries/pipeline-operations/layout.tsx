import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline Operations Software | Integrity Management & Compliance",
  description:
    "Custom integrity management, PHMSA compliance, ROW tracking, and field inspection platforms for midstream pipeline operators. Built in Houston for the Gulf Coast corridor.",
  alternates: { canonical: "/industries/pipeline-operations" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
