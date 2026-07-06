import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Infrastructure Software | Grid, Renewables & Asset Management",
  description:
    "Custom dashboards, compliance tools, and asset management platforms for IPPs, renewable developers, and grid operators on the ERCOT grid. Built in Houston.",
  alternates: { canonical: "/industries/energy-infrastructure" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
