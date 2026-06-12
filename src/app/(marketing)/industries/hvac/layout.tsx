import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Dispatch, Booking & Billing Software",
  description:
    "Custom software for HVAC & home service companies — visual dispatch, 24/7 online booking, automated invoicing, and customer portals. Stop losing jobs to voicemail.",
  alternates: { canonical: "/industries/hvac" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
