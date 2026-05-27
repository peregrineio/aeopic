import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description:
    "Aeopic LLC Data Processing Agreement — terms governing how we process personal data on behalf of our clients.",
  alternates: { canonical: "/legal/dpa" },
};

export default function DPAPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold font-heading mb-2">
          Data Processing Agreement
        </h1>
        <p className="text-muted-foreground text-sm mb-12">
          Effective Date: May 27, 2026
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          This Data Processing Agreement (&ldquo;DPA&rdquo;) forms part of the
          Service Level Agreement or other written agreement (&ldquo;Principal
          Agreement&rdquo;) between Aeopic LLC, a Texas limited liability
          company (&ldquo;Processor&rdquo;), and the client identified in the
          Principal Agreement (&ldquo;Controller&rdquo;). This DPA sets out the
          terms governing the processing of personal data by the Processor on
          behalf of the Controller.
        </p>

        {/* 1. Definitions */}
        <h2 className="text-xl font-semibold mt-10 mb-4">1. Definitions</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            <strong>&ldquo;Personal Data&rdquo;</strong> means any information
            relating to an identified or identifiable individual, as defined
            under applicable data protection laws including the Texas Data
            Privacy and Security Act (TDPSA).
          </li>
          <li>
            <strong>&ldquo;Processing&rdquo;</strong> means any operation
            performed on Personal Data, including collection, storage, use,
            modification, transmission, deletion, or destruction.
          </li>
          <li>
            <strong>&ldquo;Controller&rdquo;</strong> means the client entity
            that determines the purposes and means of processing Personal Data.
          </li>
          <li>
            <strong>&ldquo;Processor&rdquo;</strong> means Aeopic LLC, which
            processes Personal Data on behalf of the Controller.
          </li>
          <li>
            <strong>&ldquo;Subprocessor&rdquo;</strong> means any third party
            engaged by the Processor to process Personal Data on behalf of the
            Controller. A current list is maintained at{" "}
            <a
              href="/legal/subprocessors"
              className="text-primary hover:underline"
            >
              aeopic.com/legal/subprocessors
            </a>
            .
          </li>
          <li>
            <strong>&ldquo;Data Breach&rdquo;</strong> means any unauthorized
            access, acquisition, use, or disclosure of Personal Data.
          </li>
        </ul>

        {/* 2. Scope and Purpose */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          2. Scope and Purpose of Processing
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Processor shall process Personal Data only to the extent necessary
          to provide the services described in the Principal Agreement. The
          nature, purpose, and duration of processing, the types of Personal
          Data processed, and the categories of data subjects are as described
          in the Principal Agreement and any applicable statements of work.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Processor shall not process Personal Data for any purpose other
          than as instructed by the Controller, unless required by applicable
          law. In such a case, the Processor shall inform the Controller of the
          legal requirement before processing, unless prohibited by law.
        </p>

        {/* 3. Data Categories */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          3. Categories of Data Processed
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Depending on the services provided, the Processor may process the
          following categories of Personal Data on behalf of the Controller:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            Contact information (names, email addresses, phone numbers, mailing
            addresses)
          </li>
          <li>Account credentials (usernames, hashed passwords)</li>
          <li>
            Business records (invoices, appointment histories, project details)
          </li>
          <li>
            Communication data (messages, support tickets, chatbot interactions)
          </li>
          <li>
            Payment information (processed through PCI-compliant subprocessors;
            the Processor does not store payment card numbers)
          </li>
          <li>
            Usage data (platform access logs, feature usage, session data)
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Processor shall not process sensitive personal data (as defined by
          TDPSA) unless explicitly authorized in writing by the Controller, with
          appropriate additional safeguards in place.
        </p>

        {/* 4. Security Obligations */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          4. Security Obligations
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Processor shall implement and maintain appropriate technical and
          organizational measures to protect Personal Data against unauthorized
          or unlawful processing, accidental loss, destruction, or damage.
          These measures include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
          <li>
            Access controls with role-based permissions and multi-factor
            authentication for administrative access
          </li>
          <li>Row-level security on database records where applicable</li>
          <li>Regular security assessments of infrastructure and subprocessors</li>
          <li>
            Secure development practices including code review and dependency
            monitoring
          </li>
          <li>
            Audit logging of administrative actions and data access events
          </li>
        </ul>

        {/* 5. Subprocessor Management */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          5. Subprocessor Management
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Controller authorizes the Processor to engage the subprocessors
          listed at{" "}
          <a
            href="/legal/subprocessors"
            className="text-primary hover:underline"
          >
            aeopic.com/legal/subprocessors
          </a>
          . The Processor shall:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            Provide the Controller with at least 30 days written notice before
            engaging a new subprocessor
          </li>
          <li>
            Ensure each subprocessor is bound by data protection obligations no
            less protective than those in this DPA
          </li>
          <li>
            Remain fully liable for the acts and omissions of its subprocessors
          </li>
          <li>
            If the Controller objects to a new subprocessor within 30 days of
            notice, the parties shall work in good faith to resolve the
            objection. If resolution is not possible, the Controller may
            terminate the affected services without penalty.
          </li>
        </ul>

        {/* 6. Data Breach Notification */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          6. Data Breach Notification
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Processor shall notify the Controller without undue delay, and in
          no event later than 72 hours, after becoming aware of a Data Breach
          affecting Personal Data processed under this DPA. The notification
          shall include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>A description of the nature of the breach</li>
          <li>
            The categories and approximate number of data subjects and records
            affected
          </li>
          <li>The likely consequences of the breach</li>
          <li>
            The measures taken or proposed to address the breach and mitigate
            its effects
          </li>
          <li>
            The name and contact information of the Processor&rsquo;s point of
            contact for the incident
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Processor shall cooperate with the Controller in investigating and
          remediating the breach, and shall assist the Controller in meeting any
          notification obligations under applicable law.
        </p>

        {/* 7. Data Subject Rights */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          7. Data Subject Rights Assistance
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Processor shall assist the Controller in responding to requests
          from data subjects exercising their rights under applicable law,
          including the right to access, correct, delete, or port their Personal
          Data. The Processor shall:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            Promptly notify the Controller if it receives a request directly
            from a data subject
          </li>
          <li>
            Not respond to data subject requests directly unless authorized by
            the Controller
          </li>
          <li>
            Provide reasonable technical assistance to fulfill requests within
            the timeframes required by law
          </li>
        </ul>

        {/* 8. Data Return and Destruction */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          8. Data Return and Destruction
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Upon termination of the Principal Agreement, or upon the
          Controller&rsquo;s written request, the Processor shall:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>
            Return all Personal Data to the Controller in a commonly used,
            machine-readable format within 30 days
          </li>
          <li>
            Delete all copies of Personal Data from the Processor&rsquo;s
            systems and subprocessor systems within 90 days, unless retention
            is required by applicable law
          </li>
          <li>
            Provide written confirmation of deletion upon the Controller&rsquo;s
            request
          </li>
        </ul>

        {/* 9. Audit Rights */}
        <h2 className="text-xl font-semibold mt-10 mb-4">9. Audit Rights</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Controller may audit the Processor&rsquo;s compliance with this
          DPA up to once per year, with at least 30 days written notice. The
          Processor shall make available all information reasonably necessary to
          demonstrate compliance and shall allow for and contribute to audits
          conducted by the Controller or an independent auditor appointed by the
          Controller.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Where the Processor engages subprocessors with independent security
          certifications (SOC 2, ISO 27001, or equivalent), the Processor may
          provide the subprocessor&rsquo;s audit reports in lieu of direct audit
          access to the subprocessor&rsquo;s systems.
        </p>

        {/* 10. Liability */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          10. Liability and Indemnification
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Processor shall indemnify the Controller against any losses,
          claims, or damages arising from the Processor&rsquo;s breach of this
          DPA, subject to the limitation of liability provisions in the
          Principal Agreement. Each party&rsquo;s liability under this DPA is
          subject to the overall limitations and exclusions of liability set out
          in the Principal Agreement.
        </p>

        {/* 11. Term and Termination */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          11. Term and Termination
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This DPA shall remain in effect for the duration of the Principal
          Agreement and for as long as the Processor continues to process
          Personal Data on behalf of the Controller. The obligations of the
          Processor regarding data return, destruction, and confidentiality
          shall survive termination.
        </p>

        {/* 12. Governing Law */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          12. Governing Law
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This DPA shall be governed by and construed in accordance with the
          laws of the State of Texas, without regard to conflict of law
          principles. Any disputes arising under this DPA shall be resolved in
          accordance with the dispute resolution provisions of the Principal
          Agreement.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          Contact Information
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          For questions about this Data Processing Agreement or to request
          execution of this DPA as an exhibit to your Service Level Agreement,
          contact:
        </p>
        <div className="text-muted-foreground leading-relaxed mb-8">
          <p>Aeopic LLC</p>
          <p>1919 Taylor St, Ste F</p>
          <p>Houston, TX 77007</p>
          <p>
            Email:{" "}
            <a
              href="mailto:privacy@aeopic.com"
              className="text-primary hover:underline"
            >
              privacy@aeopic.com
            </a>
          </p>
        </div>

        {/* Related Documents */}
        <h2 className="text-xl font-semibold mt-10 mb-4">
          Related Documents
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-8">
          <li>
            <a
              href="/legal/subprocessors"
              className="text-primary hover:underline"
            >
              Subprocessor List
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
