import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

// DM Sans - premium, modern, sophisticated (Google alternative to Satoshi)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aeopic | Custom Software Development",
    template: "%s | Aeopic",
  },
  description:
    "Customer-tailored web applications, AI-powered tools, marketing, and eCommerce solutions.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Aeopic | Custom Software Development",
    description:
      "Customer-tailored web applications, AI-powered tools, marketing, and eCommerce solutions.",
    url: "https://aeopic.com",
    siteName: "Aeopic",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">{children}</div>
        </TooltipProvider>
      </body>
    </html>
  );
}
