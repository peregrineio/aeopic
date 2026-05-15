import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowUpRight, Building2, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllLocationSlugs, getLocationData } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Service Areas | Web Design & Marketing in Texas | Aeopic",
  description:
    "Aeopic serves businesses across Texas including Conroe, College Station, Montgomery County, Tomball, Bryan, Magnolia, and Manor with custom web design and marketing services.",
  openGraph: {
    title: "Service Areas | Web Design & Marketing in Texas | Aeopic",
    description:
      "Aeopic serves businesses across Texas with custom web design and marketing services.",
    url: "https://aeopic.com/locations",
    siteName: "Aeopic",
    type: "website",
  },
};

const locationSlugs = getAllLocationSlugs();

export default function LocationsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0F1226]">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-[#726AFF] rounded-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#726AFF] border border-[#726AFF]/40 px-3 py-1 rounded">
                Service Areas
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Web Design & Marketing Across Texas
            </h1>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">
              We build custom web applications and run targeted marketing
              campaigns for businesses throughout Texas. Local knowledge, expert
              execution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0a0e1a]">
        <div className="container-site">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationSlugs.map((slug) => {
              const loc = getLocationData(slug)!;
              return (
                <Link
                  key={slug}
                  href={`/locations/${slug}`}
                  className="group relative block rounded-xl overflow-hidden border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={loc.hero.image}
                      alt={loc.city}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0F1226]/60 group-hover:bg-[#0F1226]/50 transition-colors" />
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{ background: loc.colors.gradient }}
                    />

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span
                        className="text-[10px] font-mono uppercase tracking-[0.15em] mb-2"
                        style={{ color: loc.colors.secondary }}
                      >
                        {loc.hero.tagline}
                      </span>
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-1">
                            {loc.city}
                          </h2>
                          <span className="text-xs text-white/40 font-mono">
                            {loc.region}
                          </span>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-white/[0.03]">
                    <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
                      {loc.hero.subheadline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0F1226]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Based in Houston, Serving All of Texas
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                While our office is in Houston, we work with businesses across
                the state. Custom web applications, marketing campaigns, and
                ongoing support — wherever you are.
              </p>
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-semibold text-white bg-[#726AFF] hover:bg-[#5B54D6] transition-colors"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-2xl p-8">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
                Contact Info
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Building2 className="w-5 h-5 mt-0.5 text-[#726AFF]" />
                  <div>
                    <p className="font-medium text-white">Aeopic LLC</p>
                    <p className="text-sm text-white/50">
                      1919 Taylor St Ste F
                      <br />
                      Houston, TX 77007
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#726AFF]" />
                  <a
                    href="mailto:contact@aeopic.com"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    contact@aeopic.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-[#726AFF]" />
                  <span className="text-white/50">
                    Response within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            areaServed: locationSlugs.map((slug) => {
              const loc = getLocationData(slug)!;
              return {
                "@type": "City",
                name: loc.city,
              };
            }),
            email: "contact@aeopic.com",
          }),
        }}
      />
    </>
  );
}
