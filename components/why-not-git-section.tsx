"use client";

import { Download, Lightbulb, Save, SeparatorHorizontal, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

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
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2
            className="mb-6 font-semibold"
            style={{
              backgroundImage:
                "linear-gradient(rgb(245, 245, 245), rgb(245, 245, 245) 29%, rgb(153, 153, 153))",
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
            className="mx-auto mb-8 max-w-2xl text-white/90"
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
              className="rounded-[16px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className="flex flex-shrink-0 justify-center md:block">
                  <div className="gradient-icon flex h-10 w-10 items-center justify-center rounded-xl md:h-12 md:w-12">
                    <feature.icon className="h-5 w-5 text-white md:h-6 md:w-6" strokeWidth={2} />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3
                    className="mb-3 font-semibold text-white"
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
                    className="text-white/80"
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
          <p
            className="mx-auto mb-6 max-w-3xl text-white/80"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            Stop worrying about breaking your code. Start exploring with confidence.
          </p>

          {onOpenInstall && (
            <Button
              onClick={onOpenInstall}
              className="rounded-lg bg-white px-6 py-3 font-mono text-sm font-semibold tracking-wider text-black hover:bg-gray-100"
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
  );
}
