import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics & Supply Chain Software | Freight, Warehouse & Visibility",
  description:
    "Custom logistics platforms for freight brokers, 3PLs, and supply chain operators in Houston — shipment tracking, document management, and warehouse integration.",
  alternates: { canonical: "/industries/logistics" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
