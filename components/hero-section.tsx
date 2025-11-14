"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { GridBackground } from "@/components/ui/grid-background";
import { Marquee } from "@/components/ui/marquee";
import { PrimaryCTA } from "@/components/primary-cta";
import { cn } from "@/lib/utils";

const HERO_SERVICES = ["Tourism", "E-commerce", "Portfolios", "AI & Automation"] as const;

export default function HeroSection() {
  return (
    <section
      className={cn(
        "relative isolate flex flex-col items-center overflow-hidden rounded-(--radius-surface) rounded-all-devices text-foreground group",
        "min-h-[clamp(560px,calc(100vh-80px),720px)]",
        "mb-6 mt-2"
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <GridBackground gridSize={22} fadeIntensity={26} />
      </div>

      {/* Container 1: Heading Area - Centered */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[1296px] flex flex-col items-center text-center",
          "gap-6 sm:gap-8"
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
              Fast, responsive websites that convert. Built with AI, refined by hand.
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
            <PrimaryCTA href="https://x.com/jackjack_eth" label="Get Started" className="md:w-auto" />
          </div>
        </AnimatedContent>
      </div>

      {/* Container 2: Services - Bottom */}
      <div
        className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[1296px] pb-8"
        )}
      >
        <AnimatedContent
          direction="vertical"
          distance={50}
          delay={0.5}
          duration={1.15}
          ease="expo.out"
          scale={0.97}
          tilt={4}
          blurRadius={10}
          animateOnMount={true}
        >
          <div className="w-full max-w-4xl mx-auto">
            <Marquee
              repeat={3}
              className="[--duration:60s] [--gap:1.5rem] sm:[--gap:2rem] md:[--gap:3rem] pointer-events-none select-none"
            >
              {HERO_SERVICES.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center px-2 sm:px-3 md:px-4 pointer-events-none select-none"
                >
                  <span className="text-foreground/60 text-sm font-black uppercase tracking-wider whitespace-nowrap select-none">
                    {item}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}


