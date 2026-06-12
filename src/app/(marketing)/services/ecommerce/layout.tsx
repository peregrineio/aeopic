import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eCommerce Development Built to Convert",
  description:
    "Sell products, subscriptions, and services online with a custom eCommerce platform designed to convert and scale with your business. Houston-based, remote-friendly.",
  alternates: { canonical: "/services/ecommerce" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
