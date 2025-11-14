"use client";

import React from "react";
import AnimatedContent from "@/components/AnimatedContent";
import ClientTestimonialsSection from "@/components/client-testimonials-section";
import CTASection from "@/components/cta-section";
import CustomStackInsightsSection from "@/components/custom-stack-insights-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/pricing-section";
import ProjectsInMotionSection from "@/components/projects-in-motion-section";
import { Button } from "@/components/ui/button";
import { spacing, typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { GrainGradient } from "@paper-design/shaders-react";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-20 sm:pt-24">
      {/* Navigation */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
        <AnimatedContent
          direction="vertical"
          distance={50}
          threshold={0}
          duration={0.9}
          ease="expo.out"
          animateOpacity
          initialOpacity={0}
          scale={0.98}
        >
          <Navbar isBannerVisible={false} />
        </AnimatedContent>
      </div>

      {/* Rest of the content */}
      <main className="mx-auto flex w-full max-w-[1200px] flex-col px-6 md:px-8">
        {/* Hero Section */}
        <section
          className={cn(
            "relative isolate flex flex-col items-center justify-center overflow-hidden rounded-(--radius-surface) rounded-all-devices text-foreground group",
            "min-h-[clamp(560px,calc(100vh-80px),720px)]",
            "mb-6 mt-2"
          )}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <GrainGradient
              width="100%"
              height="100%"
              fit="cover"
              colors={["#f97316", "#fb923c", "#fda4af", "#ffedd5"]}
              colorBack="#0f172a"
              softness={0.6}
              intensity={0.45}
              noise={0.28}
              shape="corners"
              speed={0.6}
            />
          </div>

          <div
            className={cn(
              "relative z-10 flex w-full flex-col items-center text-center",
              "gap-6 sm:gap-8",
              spacing.hero.mobile.paddingX,
              spacing.hero.desktop.paddingX,
              spacing.hero.mobile.paddingTop,
              spacing.hero.desktop.paddingTop,
              spacing.hero.mobile.paddingBottom,
              spacing.hero.desktop.paddingBottom
            )}
          >
            <AnimatedContent
              direction="vertical"
              distance={50}
              threshold={0}
              duration={1.1}
              ease="expo.out"
              scale={0.96}
              tilt={8}
              blurRadius={16}
            >
              <div className="mx-auto max-w-4xl">
                <h1
                  className="hero-heading heading-with-selection mb-4 select-text"
                  aria-label="Build Your Vision"
                >
                  Build Your Vision
                </h1>
              </div>
            </AnimatedContent>
            <AnimatedContent
              direction="vertical"
              distance={50}
              delay={0.2}
              threshold={0}
              duration={1.15}
              ease="expo.out"
              scale={0.965}
              tilt={6}
              blurRadius={12}
            >
              <div className="mx-auto max-w-3xl">
                <p className="hero-subhead select-text">
                  At Arcline, we craft standout modern websites—fast, responsive, and
                  unforgettable—so your brand feels premium, converts more customers, and stays
                  ahead with AI-powered development.
                </p>
              </div>
            </AnimatedContent>
            <AnimatedContent
              direction="vertical"
              distance={50}
              delay={0.4}
              threshold={0}
              duration={1.2}
              ease="expo.out"
              scale={0.97}
              tilt={4}
              blurRadius={10}
            >
              <div className="flex w-full max-w-sm flex-col items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className={cn(
                    "md:w-auto bg-white! text-slate-950! hover:bg-white/90! border border-white/30 shadow-[var(--shadow-lg)] transition-shadow duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent-orange) focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "dark:bg-white! dark:text-slate-950! dark:hover:bg-white/85!"
                  )}
                >
                  <a
                    href="https://x.com/jackjack_eth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Contact Me
                  </a>
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </section>

        <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
          <section className="py-10 md:py-14">
            <div className="mx-auto w-full px-4 sm:px-6">
              <div className="mx-auto mb-8 max-w-[880px] text-center md:mb-10">
                <h2
                  className="section-head mb-4"
                  style={{
                    backgroundImage: "var(--text-gradient)",
                    color: "transparent",
                    ...typography.heading.section,
                    fontFamily: typography.fontSans,
                    fontWeight: 600,
                    textAlign: "center",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  Services Tailored to You
                </h2>
                <p className="section-subhead">
                  We keep things light: meet, shape, and ship without the noise.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  {[
                    "Tourism Sites",
                    "Local Shops",
                    "E-commerce",
                    "Emerging Products",
                    "Portfolios",
                  ].map((item) => (
                    <span
                      key={item}
                      className="border-border text-foreground/80 bg-card/70 rounded-full border px-4 py-1.5 font-medium tracking-tight"
                      style={{ boxShadow: "var(--shadow-sm)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid w-full gap-5 md:grid-cols-3 md:gap-6">
                {[
                  {
                    title: "Plan",
                    description:
                      "We meet, audit what exists, and agree on what actually needs shipping.",
                  },
                  {
                    title: "Design",
                    description:
                      "Layouts and components come together with your voice, tuned for every screen and easy hand-offs.",
                  },
                  {
                    title: "Launch",
                    description:
                      "We ship in passes, tidy the edges, and make sure you’re set for the next round.",
                  },
                ].map((item, index) => (
                  <AnimatedContent
                    key={item.title}
                    direction="vertical"
                    distance={40}
                    delay={0.1 * index}
                    duration={0.9}
                    ease="power3.out"
                    animateOpacity
                    className="h-full"
                  >
                    <div className="flex h-full flex-col bg-card/70 border border-border/60 rounded-(--radius-surface) rounded-all-devices p-6 text-left shadow-[var(--shadow-md)] backdrop-blur-sm transition-colors duration-300 md:p-7">
                      <h3 className="text-foreground text-lg font-semibold">{item.title}</h3>
                      <p className="mono-body mt-3 text-foreground/80">{item.description}</p>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </section>
        </AnimatedContent>

        <ProjectsInMotionSection />
        <CustomStackInsightsSection />
        <PricingSection />
        <ClientTestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
