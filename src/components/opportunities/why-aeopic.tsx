const VALUES = [
  {
    num: "01",
    title: "Ground Floor",
    body: "Join as one of our first sales hires. Shape the playbook, the comp plan, and the culture — then grow into leadership as we scale.",
  },
  {
    num: "02",
    title: "A Real Product to Sell",
    body: "You're selling custom platforms businesses actually need — CRMs, client portals, AI tools — not vaporware. Real demand, real outcomes.",
  },
  {
    num: "03",
    title: "Uncapped Upside",
    body: "Base plus uncapped commission. The better you perform, the more you make — no ceiling, no games.",
  },
  {
    num: "04",
    title: "Remote-First",
    body: "Sell from anywhere in the US. Async-friendly, with structured ramp and coaching to get you producing fast.",
  },
];

export function WhyAeopic() {
  return (
    <section className="relative bg-[#08080F] border-t border-white/[0.07] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full blur-[180px] bg-[#726AFF] opacity-[0.05] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-6">
              <span className="text-[#726AFF]">/</span>
              <span>The Pitch</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDF0] leading-[1.05]">
              Why sell
              <br />
              with Aeopic?
            </h2>
            <p className="mt-6 max-w-md text-base text-[#8888A0] leading-relaxed">
              We&apos;re building the sales org from the ground up — and we want
              the people who&apos;ll define it. You&apos;ll sell platforms that
              move businesses forward — custom CRMs, AI-powered tools, client
              portals — to a market that&apos;s ready to buy. Bring the hustle;
              we&apos;ll give you the product, the leads, and the room to grow.
            </p>
          </div>

          <div className="lg:col-span-7">
            {VALUES.map((v) => (
              <div
                key={v.num}
                className="group relative border-t border-white/[0.07] py-8 last:border-b transition-colors hover:bg-white/[0.015]"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-[11px] text-[#726AFF] shrink-0 w-7">
                    {v.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#EDEDF0] tracking-tight">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#8888A0] leading-relaxed max-w-lg">
                      {v.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
