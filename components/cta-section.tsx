"use client";


import AnimatedContent from "@/components/AnimatedContent";
import { typography, commonStyles } from "@/lib/design-tokens";

export default function CTASection() {

  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      {/* Call to action - Full width immersive like hero section */}
      <section className="group relative isolate mb-6 mt-12 flex min-h-[400px] w-full flex-col overflow-hidden text-foreground md:mt-16 md:min-h-[500px]">
        {/* Static Grid Background - CSS-based for better performance */}
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
              color: "var(--grid-color)",
            }}
          />
          {/* Subtle radial gradient overlay for depth */}
          <div
            className="absolute inset-0 h-full w-full opacity-30"
            style={{
              background: `radial-gradient(ellipse at center, transparent 0%, var(--background) 70%)`,
            }}
          />
        </div>

        {/* Fade Overlays - All Sides */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24"
          style={{ background: "var(--fade-gradient-left)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24"
          style={{ background: "var(--fade-gradient-right)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 md:h-24"
          style={{ background: "var(--fade-gradient-top)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:h-24"
          style={{ background: "var(--fade-gradient-bottom)" }}
        />

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1920px] flex-col items-center justify-center px-4 pb-12 pt-12 text-center sm:px-6 sm:pt-16 md:pb-16 md:pt-20 lg:px-8 lg:pt-24">
          {/* Headline - Smaller than hero, sized appropriately for CTA section */}
          <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
            <h2
              className="heading-with-selection mb-2 select-text overflow-visible font-semibold"
              style={{
                ...typography.heading.cta,
                ...commonStyles.heading,
                fontFamily: typography.fontSans,
                textShadow: "var(--text-shadow-content-md)",
              }}
            >
              Ready to Get Started?
            </h2>
          </AnimatedContent>

          {/* Description - Matching hero section exactly */}
          <AnimatedContent direction="vertical" distance={50} delay={0.2} duration={0.8} ease="power3.out">
            <p
              className="mx-auto mb-8 h-auto select-text sm:mb-10"
              style={
                {
                  ...typography.body.cta,
                  ...commonStyles.body,
                  maxWidth: "2xl",
                  textShadow: "var(--text-shadow-content-sm)",
                } as React.CSSProperties
              }
            >
              Let's discuss your project and bring your vision to life.
            </p>
          </AnimatedContent>

        </div>
      </section>
    </AnimatedContent>
  );
}
