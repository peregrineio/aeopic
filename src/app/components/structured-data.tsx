export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aeopic.com",
    "name": "Aeopic",
    "description": "Custom software development, AI-powered tools, marketing services, and eCommerce solutions in Houston, TX",
    "url": "https://aeopic.com",
    "telephone": "+1-979-933-8032",
    "email": "contact@aeopic.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1919 Taylor St Ste F",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77007",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7604,
      "longitude": -95.3698
    },
    "areaServed": {
      "@type": "City",
      "name": "Houston"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://linkedin.com/company/aeopic"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aeopic",
    "url": "https://aeopic.com",
    "logo": "https://aeopic.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-979-933-8032",
      "contactType": "sales",
      "email": "contact@aeopic.com",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
