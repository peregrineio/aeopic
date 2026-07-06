import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Contractor Software | Turnaround Management & Safety Compliance",
  description:
    "Custom platforms for industrial contractors — craft labor tracking, ISNetworld compliance, turnaround progress boards, and daily field reports. Built 20 minutes from the Ship Channel.",
  alternates: { canonical: "/industries/industrial-contracting" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
