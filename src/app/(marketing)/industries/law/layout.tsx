import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software for Law Offices & Attorneys",
  description:
    "Automate client intake, scheduling, and document collection. Custom websites and software for law offices that turn phone tag and lost emails into booked clients.",
  alternates: { canonical: "/industries/law" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
