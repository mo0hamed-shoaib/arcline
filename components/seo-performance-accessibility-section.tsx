"use client";

import { useTheme } from "next-themes";
import { Gauge, Search, Shield } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { IconCircularProgress } from "@/components/ui/icon-circular-progress";

export default function SEOPerformanceAccessibilitySection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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

          {/* Features Grid */}
          <div className="mb-12 grid grid-cols-1 gap-4 md:mb-16 xl:grid-cols-3 xl:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 group relative overflow-hidden rounded-[16px] p-4 backdrop-blur-sm transition-all duration-300 md:p-6"
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
                        className="font-semibold text-foreground"
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
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
