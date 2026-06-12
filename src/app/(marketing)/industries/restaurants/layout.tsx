import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Online Ordering Software",
  description:
    "Stop giving 30% to DoorDash. Own your online ordering with custom restaurant software — direct orders, reservations, and customer data that belongs to you.",
  alternates: { canonical: "/industries/restaurants" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
