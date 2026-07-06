import Link from "next/link";

const SECTIONS: Array<{ title: string; body: React.ReactNode }> = [
  {
    title: "Equal Opportunity Statement",
    body: (
      <>
        Aeopic LLC is an equal opportunity employer. We evaluate qualified
        applicants without regard to race, color, religion, sex, sexual
        orientation, gender identity, national origin, age, disability, veteran
        status, or any other protected characteristic under applicable federal,
        state, or local law.
      </>
    ),
  },
  {
    title: "Accessibility Accommodation",
    body: (
      <>
        Aeopic LLC is committed to providing an accessible application process.
        If you need a reasonable accommodation to apply for a position or
        participate in the hiring process, please contact us at{" "}
        <a
          href="mailto:admin@aeopic.com"
          className="font-medium text-[#726AFF] underline-offset-4 hover:underline"
        >
          admin@aeopic.com
        </a>{" "}
        and describe the specific accommodation requested. We will work with you
        to identify a solution.
      </>
    ),
  },
  {
    title: "Applicant Privacy Notice",
    body: (
      <>
        By submitting an application, you consent to Aeopic LLC collecting and
        processing the personal information you provide for the purpose of
        evaluating your candidacy. Your information will be retained for up to
        two (2) years from the date of submission and will not be shared with
        third parties except as necessary for the hiring process or as required
        by law. To request deletion of your application data, contact{" "}
        <a
          href="mailto:admin@aeopic.com"
          className="font-medium text-[#726AFF] underline-offset-4 hover:underline"
        >
          admin@aeopic.com
        </a>
        . For more information, see our{" "}
        <Link
          href="/privacy"
          className="font-medium text-[#726AFF] underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
  {
    title: "Employment Disclaimer",
    body: (
      <>
        Employment with Aeopic LLC is at-will. This means either Aeopic or the
        employee may terminate the employment relationship at any time, with or
        without cause or notice. Nothing on this page or in any communication
        during the hiring process creates a contract of employment or guarantees
        employment for any specific duration.
      </>
    ),
  },
  {
    title: "Contractor Disclaimer",
    body: (
      <>
        Contractor opportunities listed on this page are independent contractor
        engagements, not employment positions. Independent contractors are
        self-employed and responsible for their own taxes, insurance, and
        business expenses. Engagement as an independent contractor does not
        create an employer-employee relationship with Aeopic LLC.
      </>
    ),
  },
  {
    title: "General Disclaimer",
    body: (
      <>
        Listings on this page do not guarantee any position or engagement. All
        engagement types and classifications are determined in accordance with
        applicable federal, state, and local laws. Compensation ranges reflect
        good-faith estimates and may be adjusted based on location, experience,
        and qualifications.
      </>
    ),
  },
];

export function OpportunitiesLegalFooter() {
  return (
    <section className="border-t border-white/[0.07] bg-[#08080F]">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
        <h2 className="font-heading text-lg font-bold tracking-tight text-[#EDEDF0]">
          Legal &amp; Compliance
        </h2>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          Please review the following disclosures
        </p>
        <div className="mt-8 space-y-7 text-sm text-white/40">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h3 className="text-sm font-semibold text-white/70">{s.title}</h3>
              <p className="mt-1.5 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
