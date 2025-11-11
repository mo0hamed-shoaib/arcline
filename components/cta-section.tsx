"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { buttonVariants, typography, commonStyles } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { GrainGradient } from "@paper-design/shaders-react";

export default function CTASection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="group relative isolate mb-6 mt-12 flex min-h-[360px] w-full flex-col overflow-hidden rounded-(--radius-surface) rounded-all-devices text-foreground md:mt-16 md:min-h-[420px]">
        {/* Animated Grain Gradient Background */}
        <div className="pointer-events-none absolute inset-0 -z-20">
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

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[960px] flex-col items-center justify-center gap-6 px-4 py-12 text-center sm:px-6 sm:py-14 md:gap-8 md:py-16">
          <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
            <h2
              className="heading-with-selection select-text overflow-visible font-semibold text-white"
              style={{
                ...typography.heading.cta,
                ...commonStyles.heading,
                fontFamily: typography.fontSans,
                textShadow: "var(--text-shadow-content-md)",
                fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
                lineHeight: 1.08,
                color: "#ffffff",
              }}
            >
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
              className="mx-auto h-auto select-text text-white"
              style={{
                ...typography.body.cta,
                ...commonStyles.body,
                maxWidth: "36rem",
                textShadow: "var(--text-shadow-content-sm)",
                fontSize: "clamp(0.95rem, 2.3vw, 1.15rem)",
                color: "#ffffff",
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
              <a
                href="https://x.com/jackjack_eth"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants.secondary.className, "md:w-auto")}
              >
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                CONTACT ME
              </a>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </AnimatedContent>
  );
}
