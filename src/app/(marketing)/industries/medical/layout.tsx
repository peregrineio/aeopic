import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical & Dental Practice Software",
  description:
    "HIPAA-compliant software for medical & dental practices — self-service scheduling, digital intake forms, and secure patient portals. Fewer clipboards, more care.",
  alternates: { canonical: "/industries/medical" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
