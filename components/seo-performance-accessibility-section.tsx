"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Download,
  Gauge,
  Lightbulb,
  Save,
  Search,
  SeparatorHorizontal,
  Shield,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { IconCircularProgress } from "@/components/ui/icon-circular-progress";
import { ShineBorder } from "@/components/ui/shine-border";

interface SEOPerformanceAccessibilitySectionProps {
  onOpenInstall?: () => void;
}

export default function SEOPerformanceAccessibilitySection({
  onOpenInstall,
}: SEOPerformanceAccessibilitySectionProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use safe defaults during SSR, then update after mount
  const isDark = mounted && theme === "dark";

  // Compact "Why Choose Arcline" highlights
  const whyChooseHighlights = [
    {
      icon: Save,
      title: "Modern Tech Stack",
      shortDesc: "Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: SeparatorHorizontal,
      title: "AI-Powered Development",
      shortDesc: "Cursor + Manual refinement",
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      shortDesc: "Custom design systems",
    },
    {
      icon: Lightbulb,
      title: "Production Ready",
      shortDesc: "Optimized from day one",
    },
  ];

  // Performance, Accessibility & SEO feature cards
  const features = [
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Deliver fast, responsive websites that exceed Core Web Vitals benchmarks for superior user experience and performance.",
      targetScore: 95,
      metrics: [
        { label: "LCP Target", value: "<2.5s", description: "Largest Contentful Paint" },
        { label: "FID Target", value: "<100ms", description: "First Input Delay" },
        { label: "CLS Target", value: "<0.1", description: "Cumulative Layout Shift" },
      ],
      howWeAchieve: [
        "Image optimization (WebP/AVIF, lazy loading)",
        "Code splitting and dynamic imports",
        "Efficient caching strategies",
        "Resource preloading and optimization",
      ],
      gaugePrimaryColor: isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)",
      gaugeSecondaryColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    },
    {
      icon: Shield,
      title: "Accessibility Compliance",
      description:
        "Build inclusive websites that meet WCAG AA standards, ensuring your site is accessible and usable by everyone.",
      targetScore: 100,
      metrics: [
        { label: "WCAG Level", value: "AA", description: "Web Content Accessibility Guidelines" },
        { label: "ARIA Support", value: "Full", description: "Semantic markup and labels" },
        { label: "Keyboard Nav", value: "Complete", description: "Full keyboard accessibility" },
      ],
      howWeAchieve: [
        "Semantic HTML structure",
        "ARIA labels and roles",
        "Keyboard navigation support",
        "Screen reader optimization",
      ],
      gaugePrimaryColor: isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)",
      gaugeSecondaryColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    },
    {
      icon: Search,
      title: "SEO Excellence",
      description:
        "Optimize your website for search engines with comprehensive SEO strategies to maximize visibility, rankings, and organic traffic.",
      targetScore: 95,
      metrics: [
        { label: "SEO Score", value: "90+", description: "Target Lighthouse score" },
        { label: "Structured Data", value: "JSON-LD", description: "Schema.org markup" },
        { label: "Metadata", value: "Optimized", description: "Complete meta tags" },
      ],
      howWeAchieve: [
        "Server-side rendering for SEO",
        "Structured data (JSON-LD)",
        "Comprehensive metadata optimization",
        "Sitemap and robots.txt configuration",
      ],
      gaugePrimaryColor: isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)",
      gaugeSecondaryColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    },
  ];

  // Card component with hover state
  function PerformanceCard({ feature }: { feature: (typeof features)[number] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="bg-card/50 group relative isolate overflow-hidden rounded-[16px] p-4 backdrop-blur-sm transition-all duration-300 md:p-6"
        style={{
          boxShadow: "var(--shadow-md)",
        }}
        onMouseEnter={(e) => {
          const card = e.currentTarget;
          const title = card.querySelector("[data-title]");
          setIsHovered(true);
          card.style.boxShadow = "var(--shadow-lg), 0 0 20px rgba(251, 146, 60, 0.15)";
          card.style.transform = "translateY(-2px)";
          card.style.zIndex = "10";
          if (title) (title as HTMLElement).style.color = "#fb923c";
        }}
        onMouseLeave={(e) => {
          const card = e.currentTarget;
          const title = card.querySelector("[data-title]");
          setIsHovered(false);
          card.style.boxShadow = "var(--shadow-md)";
          card.style.transform = "";
          card.style.zIndex = "";
          if (title) (title as HTMLElement).style.color = "";
        }}
      >
        <ShineBorder
          borderWidth={1}
          duration={14}
          shineColor={isHovered ? "rgba(251, 146, 60, 0.6)" : "rgba(255, 255, 255, 0.5)"}
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col">
          {/* Progress Bar and Title Row */}
          <div className="mb-3 flex w-full items-center gap-3 md:mb-4 md:gap-4">
            {/* Circular Progress Bar as Icon */}
            <div className="shrink-0">
              <IconCircularProgress
                value={feature.targetScore}
                gaugePrimaryColor={feature.gaugePrimaryColor}
                gaugeSecondaryColor={feature.gaugeSecondaryColor}
                className="text-foreground"
              />
            </div>
            {/* Title */}
            <div className="flex-1">
              <h3
                data-title
                className="font-semibold text-foreground transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "18px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                }}
              >
                {feature.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-foreground/80 mb-4 text-sm md:mb-5 md:text-base"
            style={{
              fontFamily: "var(--font-geist-mono)",
              lineHeight: "1.5",
            }}
          >
            {feature.description}
          </p>

          {/* Target Metrics */}
          <div className="mb-4 md:mb-5">
            <h4
              className="text-foreground/90 mb-2 text-xs font-semibold md:text-sm"
              style={{
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              Target Metrics
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {feature.metrics.map((metric, metricIndex) => (
                <div
                  key={metricIndex}
                  className="border-border/30 bg-card/30 flex flex-col items-center justify-center gap-1 rounded-lg border px-2 py-2 text-center md:px-3 md:py-2.5"
                  title={metric.description}
                >
                  <span
                    className="text-foreground/70 text-[10px] leading-tight md:text-xs"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {metric.label}
                  </span>
                  <span
                    className="text-xs font-semibold text-foreground md:text-sm"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* How We Achieve */}
          <div className="w-full">
            <h4
              className="text-foreground/90 mb-3 text-center text-sm font-semibold md:text-left md:text-base"
              style={{
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              How We Achieve It
            </h4>
            <ul className="flex w-full flex-col gap-2 md:gap-2.5">
              {feature.howWeAchieve.slice(0, 3).map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="border-border/30 bg-card/30 flex items-start gap-2 rounded-lg border px-3 py-2 md:px-4 md:py-2.5"
                >
                  <span
                    className="text-foreground/70 shrink-0 pt-0.5 text-sm"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    •
                  </span>
                  <span
                    className="text-foreground/80 flex-1 text-sm md:text-base"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      lineHeight: "1.5",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Reveal>
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
              Performance, Accessibility & SEO
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
              Built with performance, accessibility, and SEO best practices from the ground up.
            </p>
          </div>

          {/* Compact Highlights Row */}
          <div className="mb-8 grid grid-cols-2 gap-3 md:mb-12 md:grid-cols-4 md:gap-4">
            {whyChooseHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={`highlight-${index}`}
                  className="bg-card/30 border-border/30 group relative isolate flex items-center gap-2 rounded-lg border px-3 py-2.5 transition-all duration-300 md:gap-3 md:px-4 md:py-3"
                  style={{
                    boxShadow: "var(--shadow-sm)",
                  }}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget;
                    const icon = card.querySelector("svg") as SVGSVGElement | null;
                    const title = card.querySelector(
                      "[data-highlight-title]"
                    ) as HTMLElement | null;
                    card.style.borderColor = "rgba(251, 146, 60, 0.4)";
                    card.style.boxShadow = "var(--shadow-md), 0 0 15px rgba(251, 146, 60, 0.12)";
                    card.style.transform = "translateY(-2px)";
                    card.style.zIndex = "10";
                    if (icon) icon.style.color = "#fb923c";
                    if (title) title.style.color = "#fb923c";
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    const icon = card.querySelector("svg") as SVGSVGElement | null;
                    const title = card.querySelector(
                      "[data-highlight-title]"
                    ) as HTMLElement | null;
                    card.style.borderColor = "";
                    card.style.boxShadow = "var(--shadow-sm)";
                    card.style.transform = "";
                    card.style.zIndex = "";
                    if (icon) icon.style.color = "";
                    if (title) title.style.color = "";
                  }}
                >
                  <Icon
                    className="text-foreground/70 h-4 w-4 shrink-0 transition-colors duration-300 md:h-5 md:w-5"
                    strokeWidth={2.5}
                  />
                  <div className="min-w-0 flex-1">
                    <h4
                      data-highlight-title
                      className="text-foreground/90 mb-0.5 text-xs font-semibold leading-tight transition-colors duration-300 md:text-sm"
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                      }}
                    >
                      {highlight.title}
                    </h4>
                    <p
                      className="text-foreground/60 text-[10px] leading-tight md:text-xs"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                      }}
                    >
                      {highlight.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features Grid */}
          <div className="mb-12 grid grid-cols-1 gap-4 md:mb-16 xl:grid-cols-3 xl:gap-6">
            {features.map((feature, index) => (
              <PerformanceCard key={`performance-${index}`} feature={feature} />
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
