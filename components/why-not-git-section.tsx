"use client";

import { Download, Lightbulb, Save, SeparatorHorizontal, Users } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";

interface WhyNotGitSectionProps {
  onOpenInstall?: () => void;
}

export default function WhyNotGitSection({ onOpenInstall }: WhyNotGitSectionProps) {
  const features = [
    {
      icon: Save,
      title: "Modern Tech Stack",
      description: "Built with Next.js, TypeScript, Tailwind CSS and the latest web technologies.",
    },
    {
      icon: SeparatorHorizontal,
      title: "AI-Powered Development",
      description:
        "Using Cursor to vibe code, then manually enhancing every detail for production quality.",
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      description:
        "Each project gets a custom design system using shadcn/ui built specifically for your needs.",
    },
    {
      icon: Lightbulb,
      title: "Production Ready",
      description:
        "Connected to Supabase, optimized for performance, SEO and accessibility from day one.",
    },
  ];

  return (
    <Reveal>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
              Why Choose Arcline
            </h2>
            <p
              className="text-foreground/90 mx-auto mb-8 max-w-2xl"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "clamp(18px, 3vw, 24px)",
                lineHeight: "1.4",
                textAlign: "center",
              }}
            >
              Professional frontend development that balances speed with quality. AI-powered
              efficiency meets human craftsmanship.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-2 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 group relative overflow-hidden rounded-[16px] p-6 backdrop-blur-sm transition-all duration-300 md:p-8"
                style={{
                  boxShadow: "var(--shadow-md)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-xl)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
              >
                <ShineBorder borderWidth={1} duration={14} shineColor="rgba(255, 255, 255, 0.5)" />
                <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex flex-shrink-0 justify-center md:block">
                    <div className="border-border/30 bg-card/30 group-hover:border-border/60 group-hover:bg-card/50 relative flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 md:h-14 md:w-14">
                      <feature.icon
                        className="relative h-6 w-6 text-foreground transition-all duration-300 group-hover:scale-105 md:h-7 md:w-7"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3
                      className="mb-3 font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground"
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "18px",
                        lineHeight: "1.3",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-foreground/80 group-hover:text-foreground/90 transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "15px",
                        lineHeight: "1.5",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            {onOpenInstall && (
              <Button
                onClick={onOpenInstall}
                className="rounded-lg bg-foreground px-4 py-3 font-mono text-sm font-semibold tracking-wider text-background"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  letterSpacing: "0.56px",
                  height: "48px",
                }}
              >
                <Download className="mr-2 h-4 w-4 stroke-[2.5px]" />
                INSTALL NOW
              </Button>
            )}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
