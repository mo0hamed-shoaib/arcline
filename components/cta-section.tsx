"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { GridBackground } from "@/components/ui/grid-background";
import { PrimaryCTA } from "@/components/primary-cta";
import { typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export default function CTASection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="group relative isolate mb-6 mt-12 flex min-h-[360px] w-full flex-col overflow-hidden rounded-(--radius-surface) rounded-all-devices text-foreground md:mt-16 md:min-h-[420px]">
        {/* Animated Grid Background */}
        <div className="pointer-events-none absolute inset-0 -z-20">
          <GridBackground gridSize={22} fadeIntensity={26} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1296px] flex-col items-center justify-center gap-6 py-12 text-center sm:py-14 md:gap-8 md:py-16">
          <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
            <h2 className="hero-heading heading-with-selection select-text">
              Ready to Get Started?
            </h2>
          </AnimatedContent>

          <AnimatedContent
            direction="vertical"
            distance={50}
            delay={0.2}
            duration={0.8}
            ease="power3.out"
          >
            <p
              className="hero-subhead mx-auto select-text"
              style={{
                textShadow: "var(--text-shadow-content-sm)",
              }}
            >
              Tell us about your project, and we’ll blend thoughtful design with AI-powered builds
              to launch something you’re proud to share.
            </p>
          </AnimatedContent>

          <AnimatedContent
            direction="vertical"
            distance={50}
            delay={0.4}
            duration={0.8}
            ease="power3.out"
          >
            <div className="flex w-full max-w-sm flex-col items-center gap-3">
              <PrimaryCTA
                href="https://x.com/jackjack_eth"
                label="Contact Me"
                className="md:w-auto"
              />
            </div>
          </AnimatedContent>
        </div>
      </section>
    </AnimatedContent>
  );
}
