import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Service Areas | Web Design & Marketing in Texas | Aeopic",
  description:
    "Aeopic serves businesses across Texas including College Station, Bryan, Manor, Montgomery County, Conroe, Magnolia, and Tomball with custom web design and marketing services.",
  openGraph: {
    title: "Service Areas | Web Design & Marketing in Texas | Aeopic",
    description:
      "Aeopic serves businesses across Texas including College Station, Bryan, Manor, Montgomery County, Conroe, Magnolia, and Tomball with custom web design and marketing services.",
    url: "https://aeopic.com/locations",
    siteName: "Aeopic",
    type: "website",
  },
};

const locations = [
  {
    slug: "college-station",
    city: "College Station",
    region: "Brazos Valley",
    description:
      "Custom web solutions for businesses in the heart of Aggieland.",
  },
  {
    slug: "bryan",
    city: "Bryan",
    region: "Brazos Valley",
    description:
      "Web design and marketing for Bryan's growing business community.",
  },
  {
    slug: "manor",
    city: "Manor",
    region: "Austin Metro",
    description:
      "Digital solutions for Manor's fast-growing small business scene.",
  },
  {
    slug: "montgomery-county",
    city: "Montgomery County",
    region: "Greater Houston",
    description:
      "Serving the entire Montgomery County area with custom software.",
  },
  {
    slug: "conroe",
    city: "Conroe",
    region: "Montgomery County",
    description:
      "Web applications and marketing for Conroe's thriving businesses.",
  },
  {
    slug: "magnolia",
    city: "Magnolia",
    region: "Montgomery County",
    description:
      "Custom platforms for Magnolia's local service providers.",
  },
  {
    slug: "tomball",
    city: "Tomball",
    region: "Northwest Houston",
    description:
      "Digital growth solutions for Tomball's business community.",
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#F5F3FF] to-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-[#726AFF]">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#726AFF] border border-[#726AFF] px-3 py-1">
                Service Areas
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A] mb-6">
              Web Design & Marketing Across Texas
            </h1>
            <p className="text-lg md:text-xl text-[#525252] leading-relaxed max-w-2xl">
              We build custom web applications and run targeted marketing
              campaigns for businesses throughout Texas. Local knowledge, expert
              execution.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group block border border-[#E5E5E5] p-6 hover:border-[#726AFF] hover:shadow-[0_20px_60px_-20px_rgba(114,106,255,0.15)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#726AFF]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
                      {location.region}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#726AFF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h2 className="text-2xl font-bold text-[#0A0A0A] mb-2 group-hover:text-[#726AFF] transition-colors">
                  {location.city}
                </h2>
                <p className="text-[#525252] text-sm leading-relaxed">
                  {location.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] mb-4">
                Based in Houston, Serving All of Texas
              </h2>
              <p className="text-[#525252] text-lg leading-relaxed mb-6">
                While our office is in Houston, we work with businesses across
                the state. Custom web applications, marketing campaigns, and
                ongoing support—wherever you are.
              </p>
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-semibold text-white bg-[#726AFF] hover:opacity-90 transition-opacity"
              >
                <Link href="/get-started" className="flex items-center gap-3">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-white p-8 border-t-4 border-[#726AFF] shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_20px_60px_-20px_rgba(114,106,255,0.15)]">
              <div className="flex items-start gap-4 mb-4">
                <Building2 className="w-6 h-6 text-[#726AFF]" />
                <div>
                  <p className="font-bold text-[#0A0A0A]">Aeopic LLC</p>
                  <p className="text-[#525252]">
                    1919 Taylor St Ste F
                    <br />
                    Houston, TX 77007
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#A3A3A3]">
                admin@aeopic.com • Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aeopic",
            description:
              "Custom web applications and marketing services for Texas businesses",
            url: "https://aeopic.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1919 Taylor St Ste F",
              addressLocality: "Houston",
              addressRegion: "TX",
              postalCode: "77007",
              addressCountry: "US",
            },
            areaServed: locations.map((loc) => ({
              "@type": "City",
              name: loc.city,
            })),
            email: "admin@aeopic.com",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
