"use client";

import type { CSSProperties } from "react";
import { Check } from "lucide-react";

import AnimatedContent from "@/components/AnimatedContent";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PricingTier = {
  name: string;
  headline: string;
  price: string;
  currency: string;
  subheading: string;
  features: readonly string[];
};

const pricingTiers: ReadonlyArray<PricingTier> = [
  {
    name: "Website Launch",
    headline:
      "A polished marketing site with thoughtful copy, performance, and multilingual support.",
    price: "18,000",
    currency: "EGP",
    subheading: "Ideal for hospitality, local businesses, creatives, and early-stage brands.",
    features: [
      "Strategy workshop and page flow tailored to your offer",
      "SEO groundwork: semantic HTML, sitemaps, metadata, and schema",
      "Responsive layouts tuned for mobile-first browsing",
      "Image delivery handled through Cloudinary (or your CDN)",
      "Resend-powered contact form with confirmation and spam guard",
      "Multi-language publishing setup for up to three locales",
    ],
  },
  {
    name: "Platform Build",
    headline: "Everything from Website Launch plus admin tools, logins, and deeper integrations.",
    price: "32,000",
    currency: "EGP",
    subheading: "For products that need dashboards, approvals, or protected areas.",
    features: [
      "All Website Launch deliverables and structured content modelling",
      "Secure authentication via Supabase or your identity provider",
      "Role-based admin space to manage pages, users, and submissions",
      "Engagement reporting across forms, SEO, and page activity",
      "File storage and image handling with access policies applied",
      "Automated backups, monitoring, and security checks",
    ],
  },
] as const;

const addOns: ReadonlyArray<string> = [
  "Extra language translations beyond the core package",
  "New landing pages or campaign-specific sections",
  "Newsletter or CRM integrations wired to your stack",
  "Monthly tune-ups covering fixes, tweaks, and advice",
];

const cardStyle = {
  "--card-border": "var(--border)",
  "--card-border-hover": "var(--accent-orange-60)",
  "--card-shadow": "var(--shadow-md)",
  "--card-shadow-hover": "var(--shadow-lg), 0 0 20px var(--accent-orange-15)",
} as CSSProperties;

const PricingCard = ({ tier }: { tier: PricingTier }) => {
  return (
    <article
      className={cn(
        "group relative isolate flex h-full flex-col overflow-hidden rounded-(--radius-surface) border border-(--card-border) bg-card/85 shadow-(--card-shadow) transition-all duration-300 hover:-translate-y-1 hover:border-(--card-border-hover) hover:shadow-(--card-shadow-hover)"
      )}
      style={cardStyle}
    >
      <div className="flex h-full flex-col gap-6 p-6 md:p-8">
        <header className="space-y-3 text-left">
          <h3 className="text-foreground text-2xl font-semibold" data-pricing-title>
            {tier.name}
          </h3>
          <p className="mono-body text-sm leading-6 text-foreground/75">{tier.headline}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-foreground text-3xl font-bold" data-pricing-price>
              {tier.price}
            </span>
            <span className="text-foreground/60 text-sm font-medium">{tier.currency}</span>
          </div>
        </header>

        <div className="flex flex-col gap-4 rounded-(--radius-surface) border border-border/60 bg-background/65 p-5 shadow-sm">
          <div>
            <h4 className="text-foreground text-sm font-semibold uppercase tracking-[0.28em]">
              What’s Included
            </h4>
            <p className="mono-body mt-2 text-[0.82rem] text-foreground/68">{tier.subheading}</p>
          </div>
          <ul className="space-y-2 text-sm text-foreground/88">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-300">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only">Included</span>
                </span>
                <span className="mono-bullet leading-6 text-foreground/82">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default function PricingSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="py-12 md:py-16">
        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-12 px-4 sm:px-6">
          <div className="text-center">
            <h2 className="section-head mb-4">Pricing & Packages</h2>
            <p className="section-subhead">
              Two starting points—one for launches, one for platforms. We tailor the rest around
              your roadmap.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pricingTiers.map((tier, index) => (
              <AnimatedContent
                key={tier.name}
                direction="vertical"
                distance={36}
                duration={0.85}
                ease="power3.out"
                delay={index * 0.1}
              >
                <PricingCard tier={tier} />
              </AnimatedContent>
            ))}
          </div>

          <div className="mx-auto max-w-3xl rounded-(--radius-surface) border border-border/50 bg-background/70 p-6 text-start shadow-sm">
            <h3 className="text-foreground text-xl font-semibold text-center">Add-ons & Support</h3>
            <p className="mono-body mt-2 text-sm text-foreground/70 text-center">
              Extras are scoped during discovery so you only pay for what matters.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-foreground/85 sm:grid-cols-2">
              {addOns.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-(--radius-interactive) border border-border/50 bg-background/60 px-3 py-2 shadow-xs"
                >
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/40"
                    aria-hidden="true"
                  />
                  <span className="mono-bullet leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto flex flex-col items-center gap-3 text-center">
            <p className="mono-body text-sm text-foreground/60">
              Every engagement starts with a discovery workshop, sitemap planning, and QA across
              devices. Final pricing depends on scope, integrations, and timeline.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className={cn(
                "rounded-(--radius-interactive) bg-white! text-slate-950! hover:bg-white/90! border border-white/30 shadow-(--shadow-md) transition-shadow duration-300",
                "rounded-(--radius-interactive) bg-white! text-slate-950! hover:bg-white/90! border border-white/30 shadow-(--shadow-md) transition-shadow duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent-orange) focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              <a href="https://tally.so/r/n0l7BB" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
            </Button>
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}
