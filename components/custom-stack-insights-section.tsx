"use client";

import AnimatedContent from "@/components/AnimatedContent";
import MagicBento from "@/components/MagicBento";

export default function CustomStackInsightsSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="py-12 md:py-16">
        {/* Title and Description */}
        <div className="mb-6 px-4 text-center md:mb-12">
          <h2
            className="mb-4 font-semibold"
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
            Custom Stack & Insights
          </h2>
          <p
            className="mx-auto max-w-2xl"
            style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(16px, 3vw, 22px)",
              lineHeight: "1.3",
              textAlign: "center",
            }}
          >
            Explore how we tailor modules, tech stack, performance metrics, and polish to your product—all captured in a
            single interactive grid.
          </p>
        </div>

        {/* Magic Bento Grid */}
        <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-6">
          <MagicBento
            textAutoHide={true}
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={false}
            spotlightRadius={600}
            glowColor="251, 146, 60"
          />
        </div>
      </section>
    </AnimatedContent>
  );
}
