"use client";

import type { CSSProperties } from "react";
import { Check, Sparkles, X } from "lucide-react";

import AnimatedContent from "@/components/AnimatedContent";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";

type FeatureKey =
  | "modernUI"
  | "seo"
  | "multiLang"
  | "responsive"
  | "performance"
  | "contactForm"
  | "socialMedia"
  | "multiPages"
  | "navigation"
  | "contactPages"
  | "auth"
  | "dashboard"
  | "userManagement"
  | "rbac"
  | "analytics"
  | "backup"
  | "security";

const allFeatures: ReadonlyArray<{ name: string; key: FeatureKey }> = [
  { name: "Modern UI/UX", key: "modernUI" },
  { name: "SEO optimized", key: "seo" },
  { name: "Multi-language support (2-3 languages)", key: "multiLang" },
  { name: "Responsive & mobile-first design", key: "responsive" },
  { name: "Image optimization & fast loading", key: "performance" },
  { name: "Contact form", key: "contactForm" },
  { name: "Social media integration", key: "socialMedia" },
  { name: "Multiple pages (5-10+)", key: "multiPages" },
  { name: "Navigation system", key: "navigation" },
  { name: "Contact pages", key: "contactPages" },
  { name: "User authentication", key: "auth" },
  { name: "Admin dashboard", key: "dashboard" },
  { name: "User profiles & data management", key: "userManagement" },
  { name: "Role-based access", key: "rbac" },
  { name: "Analytics integration", key: "analytics" },
  { name: "Backup system", key: "backup" },
  { name: "Advanced security", key: "security" },
];

type PricingTierConfig = {
  name: string;
  description: string;
  price: string;
  currency: string;
  includedFeatures: FeatureKey[];
  popular?: boolean;
};

const pricingTiers = [
  {
    name: "Landing Page",
    description: "Single-page website perfect for showcasing your product or service",
    price: "15,000",
    currency: "EGP",
    includedFeatures: [
      "modernUI",
      "seo",
      "multiLang",
      "responsive",
      "performance",
      "contactForm",
      "socialMedia",
    ],
    popular: false,
  },
  {
    name: "Complete Website",
    description: "Multi-page website with optional multi-language support",
    price: "25,000",
    currency: "EGP",
    includedFeatures: [
      "modernUI",
      "seo",
      "multiLang",
      "responsive",
      "performance",
      "contactForm",
      "socialMedia",
      "multiPages",
      "navigation",
      "contactPages",
    ],
    popular: true,
  },
  {
    name: "Full Stack Solution",
    description: "Complete website with dashboard and advanced features",
    price: "35,000",
    currency: "EGP",
    includedFeatures: [
      "modernUI",
      "seo",
      "multiLang",
      "responsive",
      "performance",
      "contactForm",
      "socialMedia",
      "multiPages",
      "navigation",
      "contactPages",
      "auth",
      "dashboard",
      "userManagement",
      "rbac",
      "analytics",
      "backup",
      "security",
    ],
    popular: false,
  },
] satisfies ReadonlyArray<PricingTierConfig>;

type PricingTier = PricingTierConfig;

const getCardStyle = (isPopular: boolean): CSSProperties =>
  ({
    "--card-border": isPopular ? "var(--accent-orange-60)" : "var(--border)",
    "--card-border-hover": isPopular ? "var(--accent-orange-80)" : "var(--accent-orange-40)",
    "--card-shadow": isPopular ? "var(--shadow-lg)" : "var(--shadow-md)",
    "--card-shadow-hover": isPopular
      ? "var(--shadow-xl), 0 0 40px var(--accent-orange-30)"
      : "var(--shadow-lg), 0 0 20px var(--accent-orange-15)",
  }) as CSSProperties;

const PricingCard = ({ tier }: { tier: PricingTier }) => {
  const isPopular = Boolean(tier.popular);
  const cardStyle = getCardStyle(isPopular);

  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden rounded-(--radius-surface) backdrop-blur-sm transition-all duration-300 hover:-translate-y-1",
        isPopular ? "border-2 md:-mt-4 md:mb-4" : "border",
        "border-(--card-border) shadow-(--card-shadow) hover:border-(--card-border-hover) hover:shadow-(--card-shadow-hover)"
      )}
      style={cardStyle}
    >
      {isPopular && (
        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          <Sparkles className="h-3 w-3" /> Popular
        </div>
      )}

      <div className="flex h-full flex-col gap-6 p-6 md:p-8">
        <div>
          <h3 className="text-foreground mb-2 text-2xl font-semibold" data-pricing-title>
            {tier.name}
          </h3>
          <p className="mono-body text-foreground/70 text-sm leading-6">{tier.description}</p>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-foreground text-3xl font-bold" data-pricing-price>
            {tier.price}
          </span>
          <span className="text-foreground/60 text-sm font-medium">{tier.currency}</span>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-foreground/80 text-sm font-semibold uppercase tracking-[0.3em]">
            Included Features
          </h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            {allFeatures.map((feature) => {
              const included = tier.includedFeatures.includes(feature.key);

              return (
                <li key={feature.key} className="flex items-start gap-3">
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border",
                      included
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border-border/40 bg-transparent text-muted-foreground"
                    )}
                  >
                    {included ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                  </span>
                  <span className="mono-bullet leading-6">{feature.name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-auto">
          <ShineBorder
            borderWidth={1}
            duration={14}
            shineColor={isPopular ? "var(--accent-orange-60)" : "rgba(255, 255, 255, 0.4)"}
          />
        </div>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1296px] px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 text-center md:mb-16">
            <h2 className="section-head mb-6">Pricing</h2>
            <p className="section-subhead mb-8">
              Tailored project tiers for launches, relaunches, and refreshes.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:mb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>

          {/* Note */}
          <div className="text-center">
            <p className="mono-body text-foreground/60 mx-auto max-w-2xl text-sm">
              Prices are estimates. Final pricing depends on project complexity, custom
              requirements, and specific features. Payment gateway integration adds an additional
              charge. Contact me for a detailed quote tailored to your needs.
            </p>
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}
