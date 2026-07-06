import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oilfield Services Software | Field Tickets, Dispatch & Job Costing",
  description:
    "Custom platforms for oilfield service companies — digital field tickets, crew dispatch, job costing, certification tracking, and customer portals. Built in Houston for well-site operations.",
  alternates: { canonical: "/industries/oilfield-services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
