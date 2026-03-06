import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Eye, Phone, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank You | Aeopic",
  robots: {
    index: false,
    follow: false,
  },
};

const nextSteps = [
  {
    icon: Eye,
    title: "Review",
    description: "We'll review your submission within 24 hours",
  },
  {
    icon: Phone,
    title: "Connect",
    description: "We'll schedule a discovery call to learn more",
  },
  {
    icon: FileText,
    title: "Propose",
    description: "We'll send you a detailed quote within 48 hours",
  },
];

export default function ThankYouPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white min-h-screen">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>

          {/* Headline */}
          <h1 className="mb-4">We Got Your Message!</h1>
          <p className="text-muted-foreground text-lg mb-12">
            Thanks for reaching out. Here's what happens next:
          </p>

          {/* Next Steps */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {nextSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold mb-1">{step.title}</p>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Questions Card */}
          <div className="premium-card p-6 mb-12">
            <p className="font-semibold mb-2">Have questions in the meantime?</p>
            <a
              href="mailto:hello@aeopic.com"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-4 w-4" />
              hello@aeopic.com
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              We're here to help.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/process">See How We Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
