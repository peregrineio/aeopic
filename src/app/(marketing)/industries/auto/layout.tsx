import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Repair & Detailing Software",
  description:
    "Custom software for auto repair & detailing shops — online booking, real-time status updates, and customer portals so clients never have to call to check on their car.",
  alternates: { canonical: "/industries/auto" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
