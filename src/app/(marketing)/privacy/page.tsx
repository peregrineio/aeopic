import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Aeopic privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold font-heading mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm mb-12">
          Effective Date: May 9, 2026
        </p>

        {/* 1. Introduction */}
        <h2 className="text-xl font-semibold mt-10 mb-4">1. Introduction</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Aeopic LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
          operates the website aeopic.com. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website or use our services.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Entity address: 1919 Taylor St, Ste F, Houston, TX 77007. Email:{" "}
          <a
            href="mailto:contact@aeopic.com"
            className="text-primary hover:underline"
          >
            contact@aeopic.com
          </a>
          .
        </p>

        {/* 2. Information We Collect */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          2. Information We Collect
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We collect three categories of information:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            <strong>Information you provide directly:</strong> Name, email
            address, phone number, and business details submitted through contact
            forms, project inquiry forms, and our chatbot.
          </li>
          <li>
            <strong>Information collected automatically:</strong> IP address,
            browser type, device information, pages visited, time spent on
            pages, and referring URL. We use Google Analytics (ID: G-61GKHKPRVG)
            for website traffic analysis.
          </li>
          <li>
            <strong>Information from third parties:</strong> When clients
            authorize us to manage their social media accounts, we may receive
            account data from platforms such as Meta (Facebook/Instagram),
            Google, and TikTok.
          </li>
        </ul>

        {/* 3. How We Use Your Information */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          3. How We Use Your Information
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            Provide and improve our services (custom web development, AI tools,
            digital marketing, eCommerce)
          </li>
          <li>Communicate about projects and services</li>
          <li>
            Manage social media accounts on clients&apos; behalf (with explicit
            authorization)
          </li>
          <li>
            Send marketing communications (with consent, opt-out available)
          </li>
          <li>Analyze website traffic and improve user experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        {/* 4. Social Media Management */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          4. Social Media Management
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          When clients authorize Aeopic to manage their social media presence on
          platforms including Facebook, Instagram, TikTok, and Google Business
          Profile, we access those accounts solely to create, schedule, publish,
          and manage content on the client&apos;s behalf.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We do not sell or share client social media data with third parties.
          Clients may revoke access at any time by providing written notice.
        </p>

        {/* 5. Cookies and Tracking Technologies */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          5. Cookies and Tracking Technologies
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We use Google Analytics to analyze website traffic and usage patterns.
          We use essential cookies required for basic site functionality. We do
          not use third-party advertising cookies or sell data to advertisers.
        </p>

        {/* 6. Data Sharing and Disclosure */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          6. Data Sharing and Disclosure
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We do not sell your personal information. We may share information with
          service providers who assist in operating our business:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>Vercel (website hosting)</li>
          <li>Stripe (payment processing)</li>
          <li>Resend (transactional email)</li>
          <li>Supabase (database infrastructure)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Each provider is bound by their own privacy policies and data
          protection obligations. We may also disclose information when required
          by law or to protect our legal rights.
        </p>

        {/* 7. Data Security */}
        <h2 className="text-xl font-semibold mt-10 mb-4">7. Data Security</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We implement industry-standard security measures including encrypted
          data transmission via HTTPS, secure authentication and access
          controls, and regular security reviews. No method of electronic
          transmission is 100% secure, but we strive to protect your
          information.
        </p>

        {/* 8. Your Rights */}
        <h2 className="text-xl font-semibold mt-10 mb-4">8. Your Rights</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of marketing communications</li>
          <li>Revoke social media management authorizations</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:contact@aeopic.com"
            className="text-primary hover:underline"
          >
            contact@aeopic.com
          </a>
          .
        </p>

        {/* 9. Children's Privacy */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          9. Children&apos;s Privacy
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our services are not directed to individuals under the age of 13. We
          do not knowingly collect personal information from children under 13.
        </p>

        {/* 10. Changes to This Policy */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          10. Changes to This Policy
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date. Your continued use
          of our website and services after changes are posted constitutes
          acceptance of the updated policy.
        </p>

        {/* 11. Contact Us */}
        <h2 className="text-xl font-semibold mt-10 mb-4">11. Contact Us</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you have questions about this Privacy Policy, contact us:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>Aeopic LLC</li>
          <li>1919 Taylor St, Ste F, Houston, TX 77007</li>
          <li>
            Email:{" "}
            <a
              href="mailto:contact@aeopic.com"
              className="text-primary hover:underline"
            >
              contact@aeopic.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+19799338032"
              className="text-primary hover:underline"
            >
              (979) 933-8032
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
