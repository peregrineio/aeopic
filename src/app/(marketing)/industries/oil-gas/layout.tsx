import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oil & Gas Operations Software | Custom Platforms for E&P",
  description:
    "Custom production dashboards, AFE tracking, compliance automation, and field operations platforms for independent operators and mid-market E&P companies in Houston and Texas.",
  alternates: { canonical: "/industries/oil-gas" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
