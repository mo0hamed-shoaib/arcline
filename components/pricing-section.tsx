"use client";

import { Check, Sparkles, X } from "lucide-react";

import AnimatedContent from "@/components/AnimatedContent";
import { ShineBorder } from "@/components/ui/shine-border";

const allFeatures = [
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
];

export default function PricingSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1296px] px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 text-center md:mb-16">
            <h2
              className="mb-6 font-semibold"
              style={{
                backgroundImage: "var(--text-gradient)",
                color: "transparent",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "clamp(32px, 6vw, 52px)",
                fontWeight: 600,
                letterSpacing: "clamp(-1.5px, -0.04em, -2.08px)",
                lineHeight: "1.15",
                textAlign: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Pricing
            </h2>
            <p
              className="text-foreground/70 mx-auto mb-8 max-w-none text-sm leading-tight sm:text-base"
              style={{
                fontFamily: "var(--font-geist-mono)",
                textAlign: "center",
              }}
            >
              Tailored project tiers for launches, relaunches, and refreshes.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:mb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-card/50 group relative isolate overflow-hidden rounded-[var(--radius-surface)] backdrop-blur-sm transition-all duration-300 ${
                  tier.popular
                    ? "border-2 p-6 md:-mt-4 md:mb-4 md:p-8"
                    : "border border-border p-6 md:p-8"
                }`}
                style={{
                  borderColor: tier.popular ? "var(--accent-orange-60)" : undefined,
                  boxShadow: tier.popular
                    ? `var(--shadow-lg), 0 0 30px var(--accent-orange-20)`
                    : "var(--shadow-md)",
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const title = card.querySelector("[data-pricing-title]");
                  const price = card.querySelector("[data-pricing-price]");
                  if (tier.popular) {
                    card.style.borderColor = "var(--accent-orange-80)";
                    card.style.boxShadow = `var(--shadow-xl), 0 0 40px var(--accent-orange-30)`;
                  } else {
                    card.style.borderColor = "var(--accent-orange-40)";
                    card.style.boxShadow = `var(--shadow-lg), 0 0 20px var(--accent-orange-15)`;
                  }
                  card.style.transform = "translateY(-2px)";
                  card.style.zIndex = "10";
                  if (title) (title as HTMLElement).style.color = "var(--accent-orange)";
                  if (price) (price as HTMLElement).style.color = "var(--accent-orange)";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  const title = card.querySelector("[data-pricing-title]");
                  const price = card.querySelector("[data-pricing-price]");
                  if (tier.popular) {
                    card.style.borderColor = "var(--accent-orange-60)";
                    card.style.boxShadow = `var(--shadow-lg), 0 0 30px var(--accent-orange-20)`;
                  } else {
                    card.style.borderColor = "";
                    card.style.boxShadow = "var(--shadow-md)";
                  }
                  card.style.transform = "";
                  card.style.zIndex = "";
                  if (title) (title as HTMLElement).style.color = "";
                  if (price) (price as HTMLElement).style.color = "";
                }}
              >
                <ShineBorder
                  borderWidth={tier.popular ? 2 : 1}
                  duration={14}
                  shineColor={tier.popular ? "var(--accent-orange-60)" : "rgba(255, 255, 255, 0.5)"}
                />
                <div className="relative z-10">
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="mb-4 flex items-center justify-center">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          color: "var(--accent-orange)",
                          borderColor: "var(--accent-orange-40)",
                          backgroundColor: "var(--accent-orange-20)",
                        }}
                      >
                        <Sparkles className="h-3 w-3" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    data-pricing-title
                    className="mb-2 text-center font-semibold text-foreground transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "20px",
                      lineHeight: "1.2",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {tier.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-foreground/70 mb-4 text-center text-sm"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      lineHeight: "1.4",
                    }}
                  >
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline justify-center gap-1">
                    <span
                      data-pricing-price
                      className="text-3xl font-semibold text-foreground transition-colors duration-300 md:text-4xl"
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      className="text-foreground/60 text-sm"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                      }}
                    >
                      {tier.currency}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5">
                    {allFeatures.map((feature) => {
                      const isIncluded = tier.includedFeatures.includes(feature.key);
                      return (
                        <li
                          key={feature.key}
                          className="flex items-start gap-2"
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                          }}
                        >
                          {isIncluded ? (
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0"
                              strokeWidth={2.5}
                              style={{ color: "#22c55e" }}
                            />
                          ) : (
                            <X
                              className="mt-0.5 h-4 w-4 shrink-0"
                              strokeWidth={2.5}
                              style={{ color: "#ef4444" }}
                            />
                          )}
                          <span
                            className={`text-sm leading-relaxed ${
                              isIncluded ? "text-foreground/80" : "text-foreground/40"
                            }`}
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                            }}
                          >
                            {feature.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center">
            <p
              className="text-foreground/60 mx-auto max-w-2xl text-sm"
              style={{
                fontFamily: "var(--font-geist-mono)",
                lineHeight: "1.5",
              }}
            >
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
