import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Aeopic terms of service — the agreement governing use of our website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold font-heading mb-2">
          Terms of Service
        </h1>
        <p className="text-muted-foreground text-sm mb-12">
          Effective Date: May 9, 2026
        </p>

        {/* 1. Acceptance of Terms */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
          website aeopic.com and all services provided by Aeopic LLC. By
          accessing our website or engaging our services, you agree to be bound
          by these Terms. If you do not agree, do not use our website or
          services.
        </p>

        {/* 2. Services */}
        <h2 className="text-xl font-semibold mt-10 mb-4">2. Services</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Aeopic provides custom web application development, AI-powered tools,
          digital marketing, eCommerce solutions, and social media management
          for businesses.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Specific service terms, deliverables, timelines, and pricing are
          outlined in individual Service Level Agreements (SLAs) executed between
          Aeopic and each client. Where an SLA exists, its terms take precedence
          over these general Terms of Service.
        </p>

        {/* 3. Intellectual Property */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          3. Intellectual Property
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Aeopic retains ownership of all proprietary tools, frameworks,
          development processes, and reusable code libraries. Client-specific
          deliverables including custom websites, content, and designs are
          transferred to the client upon receipt of full payment as specified in
          the applicable SLA.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Aeopic brand, name, logo, and all website content are the property
          of Aeopic LLC and may not be reproduced without written permission.
        </p>

        {/* 4. User Conduct */}
        <h2 className="text-xl font-semibold mt-10 mb-4">4. User Conduct</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You agree not to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>Use the website for any unlawful purpose</li>
          <li>
            Attempt to gain unauthorized access to any part of the website or
            its systems
          </li>
          <li>Interfere with or disrupt the website or servers</li>
          <li>Transmit any malicious code, viruses, or harmful content</li>
          <li>Impersonate any person or entity</li>
        </ul>

        {/* 5. Client Accounts and Social Media Management */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          5. Client Accounts and Social Media Management
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Clients who authorize Aeopic to manage their social media accounts
          (including Facebook, Instagram, TikTok, and Google Business Profile)
          grant us permission to create, edit, schedule, publish, and remove
          content on their behalf.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Clients remain responsible for the accuracy of all business
          information they provide to us. Either party may terminate social media
          management access by providing written notice.
        </p>

        {/* 6. Payment Terms */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          6. Payment Terms
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Payment terms, amounts, and schedules are specified in individual SLAs.
          Late payments may result in service suspension as outlined in the
          applicable SLA. Applicable Texas sales tax (6.25%) will be added where
          required by law.
        </p>

        {/* 7. Limitation of Liability */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          7. Limitation of Liability
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          To the maximum extent permitted by law, Aeopic shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages
          arising from your use of our website or services. Our total aggregate
          liability is limited to the fees actually paid by you under the
          applicable SLA during the twelve months preceding the claim.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Aeopic is not responsible for changes, outages, or policy updates by
          third-party platforms including but not limited to Meta, Google,
          Stripe, and hosting providers.
        </p>

        {/* 8. Third-Party Services */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          8. Third-Party Services
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our services may integrate with or rely on third-party platforms
          including Meta (Facebook/Instagram), Google, Stripe, Vercel, and
          others. We are not responsible for the availability, accuracy, or
          policies of third-party services. Your use of third-party services is
          subject to their respective terms and privacy policies.
        </p>

        {/* 9. Termination */}
        <h2 className="text-xl font-semibold mt-10 mb-4">9. Termination</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Either party may terminate services in accordance with the terms of
          their SLA. We reserve the right to suspend or terminate access to our
          website for any user who violates these Terms. Upon termination,
          provisions regarding intellectual property, limitation of liability,
          and governing law shall survive.
        </p>

        {/* 10. Governing Law */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          10. Governing Law
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          These Terms are governed by and construed in accordance with the laws
          of the State of Texas, without regard to conflict of law principles.
          Any disputes arising under these Terms shall be resolved in the state
          or federal courts located in Harris County, Texas.
        </p>

        {/* 11. Changes to These Terms */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          11. Changes to These Terms
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We may update these Terms from time to time. Changes will be posted on
          this page with an updated effective date. Your continued use of our
          website and services after changes constitutes acceptance of the
          updated Terms.
        </p>

        {/* 12. Contact Us */}
        <h2 className="text-xl font-semibold mt-10 mb-4">12. Contact Us</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you have questions about these Terms of Service, contact us:
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
