import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subprocessor List",
  description:
    "List of third-party subprocessors used by Aeopic LLC to deliver services to clients.",
  alternates: { canonical: "/legal/subprocessors" },
};

const subprocessors = [
  {
    name: "Supabase",
    purpose: "Database, Authentication, File Storage",
    dataHandled: "Application data, user credentials, uploaded files",
    location: "United States (AWS)",
    compliance: "SOC 2 Type II, HIPAA BAA available",
  },
  {
    name: "Vercel",
    purpose: "Application Hosting, Edge Functions, CDN",
    dataHandled: "Application code, static assets, server-side logic",
    location: "United States / Global Edge",
    compliance: "SOC 2 Type II",
  },
  {
    name: "Stripe",
    purpose: "Payment Processing, Billing",
    dataHandled: "Payment card data, billing information",
    location: "United States",
    compliance: "PCI DSS Level 1, SOC 2 Type II",
  },
  {
    name: "Twilio",
    purpose: "SMS and Voice Communications",
    dataHandled: "Phone numbers, message content",
    location: "United States",
    compliance: "SOC 2 Type II, HIPAA eligible",
  },
  {
    name: "Resend",
    purpose: "Transactional Email Delivery",
    dataHandled: "Email addresses, email content",
    location: "United States",
    compliance: "SOC 2 Type II",
  },
  {
    name: "Anthropic",
    purpose: "AI Processing (Claude API)",
    dataHandled: "Prompts and conversation context",
    location: "United States",
    compliance:
      "SOC 2 Type II, ISO 27001, ISO 42001, BAA available, Zero Data Retention available",
  },
  {
    name: "SignatureAPI",
    purpose: "Electronic Signatures",
    dataHandled: "Contract data, signature records",
    location: "United States",
    compliance: "ESIGN Act and UETA compliant",
  },
  {
    name: "Google Analytics",
    purpose: "Website Traffic Analytics",
    dataHandled: "Anonymized usage data, page views, session data",
    location: "United States",
    compliance: "Google Cloud SOC 2, DPA available",
  },
];

export default function SubprocessorsPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold font-heading mb-2">
          Subprocessor List
        </h1>
        <p className="text-muted-foreground text-sm mb-12">
          Last Updated: May 27, 2026
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Aeopic LLC (&ldquo;Aeopic&rdquo;) uses the following third-party
          service providers (subprocessors) to deliver services to our clients.
          Each subprocessor has been evaluated for its security practices and
          data handling capabilities.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-10">
          This page is maintained as part of our commitment to transparency
          under applicable data protection regulations, including the Texas Data
          Privacy and Security Act (TDPSA). For questions about our
          subprocessors, contact us at{" "}
          <a
            href="mailto:privacy@aeopic.com"
            className="text-primary hover:underline"
          >
            privacy@aeopic.com
          </a>
          .
        </p>

        {/* Subprocessor Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-4 font-semibold text-foreground">
                  Subprocessor
                </th>
                <th className="text-left py-3 pr-4 font-semibold text-foreground">
                  Purpose
                </th>
                <th className="text-left py-3 pr-4 font-semibold text-foreground">
                  Data Handled
                </th>
                <th className="text-left py-3 pr-4 font-semibold text-foreground">
                  Location
                </th>
                <th className="text-left py-3 font-semibold text-foreground">
                  Compliance
                </th>
              </tr>
            </thead>
            <tbody>
              {subprocessors.map((sp) => (
                <tr
                  key={sp.name}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="py-4 pr-4 font-medium text-foreground align-top">
                    {sp.name}
                  </td>
                  <td className="py-4 pr-4 text-muted-foreground align-top">
                    {sp.purpose}
                  </td>
                  <td className="py-4 pr-4 text-muted-foreground align-top">
                    {sp.dataHandled}
                  </td>
                  <td className="py-4 pr-4 text-muted-foreground align-top">
                    {sp.location}
                  </td>
                  <td className="py-4 text-muted-foreground align-top">
                    {sp.compliance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Change Notification */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          Changes to This List
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We will notify clients of subprocessor changes as specified in
          applicable Data Processing Agreements. If you have an active DPA with
          Aeopic, you will receive written notice before any new subprocessor is
          engaged that processes your data.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Clients may object to a new subprocessor within 30 days of receiving
          notice. If an objection cannot be resolved, either party may terminate
          the affected services as described in the applicable agreement.
        </p>

        {/* Data Handling Principles */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          Our Data Handling Principles
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            All subprocessors are contractually required to maintain appropriate
            security measures.
          </li>
          <li>
            Client data is processed only for the purposes described in the
            applicable Service Level Agreement.
          </li>
          <li>
            We select subprocessors with independently audited security programs
            (SOC 2, ISO 27001, or equivalent) wherever possible.
          </li>
          <li>
            All data processing occurs within the United States unless otherwise
            specified and agreed upon with the client.
          </li>
        </ul>

        {/* Related Documents */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          Related Documents
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-8">
          <li>
            <a href="/legal/dpa" className="text-primary hover:underline">
              Data Processing Agreement
            </a>
          </li>
          <li>
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
