import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software for Growing Businesses | Custom Platforms",
  description:
    "Custom operations platforms for growing businesses with 50-500 employees. Replace disconnected SaaS tools with one unified system you own. Houston-based.",
  alternates: { canonical: "/industries/enterprise-smb" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
