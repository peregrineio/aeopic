import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Software | Shop Floor Scheduling, MES & Quality",
  description:
    "Custom MES, production scheduling, digital work orders, and quality management platforms for fabrication shops and manufacturers in Houston and Texas.",
  alternates: { canonical: "/industries/manufacturing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
