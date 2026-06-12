import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Sparkles, TrendingUp, Globe } from "lucide-react";

const VALUES = [
  {
    icon: Rocket,
    title: "Ground Floor",
    body: "Join as one of our first sales hires. Shape the playbook, the comp plan, and the culture — then grow into leadership as we scale.",
  },
  {
    icon: Sparkles,
    title: "A Real Product to Sell",
    body: "You're selling custom platforms businesses actually need — CRMs, client portals, AI tools — not vaporware. Real demand, real outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Uncapped Upside",
    body: "Base plus uncapped commission. The better you perform, the more you make — no ceiling, no games.",
  },
  {
    icon: Globe,
    title: "Remote-First",
    body: "Sell from anywhere in the US. Async-friendly, with structured ramp and coaching to get you producing fast.",
  },
];

export function WhyAeopic() {
  return (
    <section className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Sell With Aeopic?
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              We&apos;re building the sales org from the ground up — and we want
              the people who&apos;ll define it. You&apos;ll sell platforms that
              move businesses forward — custom CRMs, AI-powered tools, client
              portals — to a market that&apos;s ready to buy. Bring the hustle;
              we&apos;ll give you the product, the leads, and the room to grow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <Card key={v.title} className="border-muted-foreground/15">
                <CardContent className="pt-6">
                  <v.icon className="size-5 text-[#726AFF]" />
                  <h3 className="mt-3 text-base font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {v.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
