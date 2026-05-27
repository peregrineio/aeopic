import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Aeopic privacy policy — how we collect, use, and protect your data under TDPSA and applicable law.",
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
          Effective Date: May 27, 2026
        </p>

        {/* 1. Introduction */}
        <h2 className="text-xl font-semibold mt-10 mb-4">1. Introduction</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Aeopic LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
          operates the website aeopic.com and provides custom software
          development, AI-integrated platform, digital marketing, and eCommerce
          services. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our website or use our
          services.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This policy is provided in compliance with the Texas Data Privacy and
          Security Act (TDPSA), effective July 1, 2024, and other applicable
          data protection laws.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Aeopic LLC, 1919 Taylor St, Ste F, Houston, TX 77007. Email:{" "}
          <a
            href="mailto:privacy@aeopic.com"
            className="text-primary hover:underline"
          >
            privacy@aeopic.com
          </a>
          .
        </p>

        {/* 2. Information We Collect */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          2. Information We Collect
        </h2>

        <h3 className="text-lg font-medium mt-6 mb-3">
          2.1 Personal Data You Provide
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            <strong>Contact information:</strong> Name, email address, phone
            number, and business details submitted through contact forms,
            project inquiry forms, and our chatbot.
          </li>
          <li>
            <strong>Account information:</strong> Login credentials for client
            platforms we build and manage.
          </li>
          <li>
            <strong>Business records:</strong> Project details, invoices,
            communications, and documents shared during service delivery.
          </li>
          <li>
            <strong>Payment information:</strong> Billing details processed
            through Stripe. We do not store payment card numbers on our systems.
          </li>
        </ul>

        <h3 className="text-lg font-medium mt-6 mb-3">
          2.2 Information Collected Automatically
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            IP address, browser type, device information, operating system
          </li>
          <li>Pages visited, time spent on pages, referring URL</li>
          <li>
            Website analytics collected via Google Analytics (ID: G-61GKHKPRVG)
          </li>
        </ul>

        <h3 className="text-lg font-medium mt-6 mb-3">
          2.3 Information from Third Parties
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          When clients authorize us to manage their social media accounts, we
          may receive account data from platforms such as Meta
          (Facebook/Instagram), Google, and TikTok.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-3">
          2.4 Sensitive Personal Data
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Under the TDPSA, &ldquo;sensitive data&rdquo; includes precise
          geolocation, racial or ethnic origin, religious beliefs, health data,
          biometric data, and data of known children. We do not intentionally
          collect sensitive personal data through our website. If our services
          require processing sensitive data on behalf of a client (such as
          health information for a healthcare platform), we do so only with
          explicit written consent and under the terms of a separate Data
          Processing Agreement.
        </p>

        {/* 3. How We Use Your Information */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          3. How We Use Your Information
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            Provide and improve our services (custom web development,
            AI-integrated platforms, digital marketing, eCommerce)
          </li>
          <li>Communicate about projects and services</li>
          <li>
            Manage social media accounts on clients&apos; behalf (with explicit
            authorization)
          </li>
          <li>
            Send marketing communications (with consent; opt-out available in
            every message)
          </li>
          <li>Analyze website traffic and improve user experience</li>
          <li>Process payments and maintain billing records</li>
          <li>Comply with legal obligations</li>
        </ul>

        {/* 4. AI in Our Services */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          4. Artificial Intelligence in Our Services
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Aeopic uses AI technology (Anthropic Claude) in the delivery of
          certain services, including AI-integrated operating systems built for
          clients and internal development assistance. Here is how we handle
          data in AI features:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            <strong>What data is sent to AI providers:</strong> Only the prompts
            and context necessary to generate responses. We do not send entire
            client databases or customer lists to AI providers.
          </li>
          <li>
            <strong>Data retention by AI providers:</strong> Our primary AI
            provider (Anthropic) offers zero data retention options for
            sensitive workloads. Data sent via the API is not used to train AI
            models.
          </li>
          <li>
            <strong>Human oversight:</strong> AI outputs are used to assist, not
            replace, human judgment. All AI-generated content or decisions are
            subject to human review.
          </li>
          <li>
            <strong>No autonomous decisions:</strong> AI does not make
            autonomous decisions about individuals or their personal data
            without human involvement.
          </li>
          <li>
            <strong>Client opt-out:</strong> Clients may request that their
            platform data not be processed through AI features. Contact us to
            discuss alternative service delivery.
          </li>
        </ul>

        {/* 5. Social Media Management */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          5. Social Media Management
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

        {/* 6. Cookies and Tracking */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          6. Cookies and Tracking Technologies
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We use Google Analytics to analyze website traffic and usage patterns.
          We use essential cookies required for basic site functionality. We do
          not use third-party advertising cookies and we do not sell data to
          advertisers.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong>Global Privacy Control (GPC):</strong> We recognize and honor
          the Global Privacy Control signal. If your browser or device sends a
          GPC signal, we will treat it as a valid opt-out request for the sale
          or sharing of personal data and targeted advertising, as required by
          the TDPSA.
        </p>

        {/* 7. Data Sharing */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          7. Data Sharing and Disclosure
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong>
            We do not sell your personal data. We do not share your personal
            data for targeted advertising purposes.
          </strong>
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We share information with service providers (subprocessors) who assist
          in operating our business, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>Supabase (database and authentication infrastructure)</li>
          <li>Vercel (application hosting and CDN)</li>
          <li>Stripe (payment processing)</li>
          <li>Twilio (SMS communications)</li>
          <li>Resend (transactional email delivery)</li>
          <li>Anthropic (AI processing)</li>
          <li>Google Analytics (website analytics)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A complete list of our subprocessors, including their purposes,
          locations, and compliance certifications, is available at{" "}
          <a
            href="/legal/subprocessors"
            className="text-primary hover:underline"
          >
            aeopic.com/legal/subprocessors
          </a>
          .
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Each subprocessor is contractually bound to maintain appropriate data
          protection standards. We may also disclose information when required
          by law, court order, or to protect our legal rights.
        </p>

        {/* 8. Data Retention */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          8. Data Retention
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We retain personal data only as long as necessary for the purposes
          described in this policy:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            <strong>Contact form submissions:</strong> Retained for 2 years from
            submission, then deleted unless a business relationship is
            established.
          </li>
          <li>
            <strong>Client project data:</strong> Retained for the duration of
            the service agreement plus 1 year after termination, unless the
            client requests earlier deletion.
          </li>
          <li>
            <strong>Payment and billing records:</strong> Retained for 7 years
            as required by tax and accounting regulations.
          </li>
          <li>
            <strong>Website analytics data:</strong> Google Analytics data is
            retained for 14 months per Google&apos;s default retention settings.
          </li>
          <li>
            <strong>Marketing communications:</strong> Contact information is
            retained until you opt out, at which point it is removed within 30
            days.
          </li>
        </ul>

        {/* 9. Data Security */}
        <h2 className="text-xl font-semibold mt-10 mb-4">9. Data Security</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We implement technical and organizational security measures including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
          <li>
            Role-based access controls with multi-factor authentication for
            administrative access
          </li>
          <li>Row-level security on database records</li>
          <li>Regular security assessments of infrastructure and subprocessors</li>
          <li>
            Subprocessors with independent security certifications (SOC 2 Type
            II, ISO 27001)
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          No method of electronic transmission or storage is completely secure.
          While we strive to protect your information, we cannot guarantee
          absolute security.
        </p>

        {/* 10. Your Rights Under TDPSA */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          10. Your Rights Under the TDPSA
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you are a Texas resident, the Texas Data Privacy and Security Act
          provides you with the following rights:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            <strong>Right to access:</strong> You may request confirmation of
            whether we process your personal data and obtain a copy of that
            data.
          </li>
          <li>
            <strong>Right to correction:</strong> You may request that we
            correct inaccurate personal data.
          </li>
          <li>
            <strong>Right to deletion:</strong> You may request that we delete
            your personal data.
          </li>
          <li>
            <strong>Right to data portability:</strong> You may request a copy
            of your personal data in a portable, readily usable format.
          </li>
          <li>
            <strong>Right to opt out of targeted advertising:</strong> We do not
            engage in targeted advertising. If we begin doing so in the future,
            we will provide a clear opt-out mechanism.
          </li>
          <li>
            <strong>Right to opt out of data sales:</strong> We do not sell your
            personal data.
          </li>
          <li>
            <strong>Right to opt out of profiling:</strong> We do not engage in
            profiling that produces legal or similarly significant effects.
          </li>
          <li>
            <strong>Right to non-discrimination:</strong> We will not
            discriminate against you for exercising any of these rights.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:privacy@aeopic.com"
            className="text-primary hover:underline"
          >
            privacy@aeopic.com
          </a>
          . We will respond to verified requests within 45 days. If we need
          additional time, we will notify you within the initial 45-day period
          and may extend by up to 45 additional days.
        </p>

        {/* 11. Right to Appeal */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          11. Right to Appeal
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If we decline to take action on your privacy request, you have the
          right to appeal that decision. To submit an appeal, email{" "}
          <a
            href="mailto:privacy@aeopic.com"
            className="text-primary hover:underline"
          >
            privacy@aeopic.com
          </a>{" "}
          with the subject line &ldquo;Privacy Appeal&rdquo; and include a
          description of the original request and the reason for your appeal.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We will respond to appeals within 60 days. If we deny the appeal, we
          will provide a written explanation and instructions for how to contact
          the Texas Attorney General if you wish to file a complaint.
        </p>

        {/* 12. Data Protection Assessments */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          12. Data Protection Assessments
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As required by the TDPSA, Aeopic conducts data protection assessments
          for processing activities that present a heightened risk of harm to
          consumers, including processing of sensitive data and processing for
          purposes of targeted advertising or profiling. Assessment records are
          maintained internally and made available to the Texas Attorney
          General upon request.
        </p>

        {/* 13. Children's Privacy */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          13. Children&apos;s Privacy
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our services are not directed to individuals under the age of 13. We
          do not knowingly collect personal information from children under 13.
          If we become aware that we have collected personal data from a child
          under 13, we will take steps to delete that information promptly.
        </p>

        {/* 14. Changes */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          14. Changes to This Policy
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date. For material
          changes, we will provide notice through our website or by email to
          active clients. Your continued use of our website and services after
          changes are posted constitutes acceptance of the updated policy.
        </p>

        {/* 15. Related Documents */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          15. Related Documents
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            <a href="/legal/dpa" className="text-primary hover:underline">
              Data Processing Agreement
            </a>
          </li>
          <li>
            <a
              href="/legal/subprocessors"
              className="text-primary hover:underline"
            >
              Subprocessor List
            </a>
          </li>
          <li>
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>

        {/* 16. Contact Us */}
        <h2 className="text-xl font-semibold mt-10 mb-4">16. Contact Us</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you have questions about this Privacy Policy or wish to exercise
          your data rights, contact us:
        </p>
        <div className="text-muted-foreground leading-relaxed mb-4 space-y-1">
          <p>Aeopic LLC</p>
          <p>1919 Taylor St, Ste F, Houston, TX 77007</p>
          <p>
            Privacy inquiries:{" "}
            <a
              href="mailto:privacy@aeopic.com"
              className="text-primary hover:underline"
            >
              privacy@aeopic.com
            </a>
          </p>
          <p>
            General inquiries:{" "}
            <a
              href="mailto:contact@aeopic.com"
              className="text-primary hover:underline"
            >
              contact@aeopic.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+19799338032"
              className="text-primary hover:underline"
            >
              (979) 933-8032
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
