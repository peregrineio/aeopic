import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
        className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">{children}</div>
        </TooltipProvider>
      </body>
    </html>
  );
}
