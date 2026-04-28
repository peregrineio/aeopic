import { Metadata } from "next";
import { LocationPageTemplate } from "@/components/locations/location-page-template";

export const metadata: Metadata = {
  title: "Web Design & Marketing in Montgomery County, TX | Aeopic",
  description:
    "Custom web applications, AI tools, and marketing services for Montgomery County businesses. Serving Conroe, The Woodlands, Magnolia, and surrounding areas.",
  keywords: [
    "web design Montgomery County TX",
    "marketing Montgomery County Texas",
    "web development The Woodlands",
    "SEO Conroe TX",
    "custom software Montgomery County",
    "The Woodlands web design",
  ],
  openGraph: {
    title: "Web Design & Marketing in Montgomery County, TX | Aeopic",
    description:
      "Custom web applications, AI tools, and marketing services for Montgomery County businesses.",
    url: "https://aeopic.com/locations/montgomery-county",
    siteName: "Aeopic",
    type: "website",
  },
};

export default function MontgomeryCountyPage() {
  return (
    <>
      <LocationPageTemplate
        city="Montgomery County"
        slug="montgomery-county"
        region="Greater Houston"
        heroHeadline="Web Design & Marketing in Montgomery County"
        heroSubheadline="Custom software solutions for one of Texas's fastest-growing counties. From Conroe to The Woodlands, we build platforms that drive growth."
        localDescription="Montgomery County represents one of the most dynamic business environments in Texas. From the established corporate presence in The Woodlands to the rapidly expanding communities in Conroe, Magnolia, and Willis, businesses here need digital solutions that match their ambition. Aeopic builds custom web applications, runs targeted marketing campaigns, and provides the technical infrastructure that helps Montgomery County businesses compete and grow."
        nearbyAreas={[
          "Conroe",
          "The Woodlands",
          "Magnolia",
          "Willis",
          "Montgomery",
          "New Caney",
          "Spring",
          "Tomball",
        ]}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aeopic - Montgomery County",
            description:
              "Custom web applications and marketing services for Montgomery County, TX businesses",
            url: "https://aeopic.com/locations/montgomery-county",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1919 Taylor St Ste F",
              addressLocality: "Houston",
              addressRegion: "TX",
              postalCode: "77007",
              addressCountry: "US",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Montgomery County",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            email: "admin@aeopic.com",
            priceRange: "$$",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 30.3079,
                longitude: -95.4583,
              },
              geoRadius: "80000",
            },
          }),
        }}
      />
    </>
  );
}
