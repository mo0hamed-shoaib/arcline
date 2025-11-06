"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Download } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onOpenInstall?: () => void;
}

export default function CTASection({ onOpenInstall }: CTASectionProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Reveal>
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
              color:
                mounted && theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
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
          <h2
            className="heading-with-selection mb-2 select-text overflow-visible font-semibold duration-1000 animate-in fade-in slide-in-from-bottom-4"
            style={{
              fontSize: "clamp(28px, 5vw, 72px)",
              lineHeight: "1.1",
              letterSpacing: "clamp(-1.5px, -0.04em, -3px)",
              fontFamily: "var(--font-geist-sans)",
              height: "auto",
              maxWidth: "100%",
              paddingBottom: "0",
              marginBottom: "0.2em",
              color: "var(--foreground)",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            Ready to Get Started?
          </h2>

          {/* Description - Matching hero section exactly */}
          <p
            className="mx-auto mb-8 h-auto select-text delay-200 duration-1000 animate-in fade-in slide-in-from-bottom-4 sm:mb-10"
            style={
              {
                fontFamily: "var(--font-geist-mono)",
                fontSize: "clamp(16px, 4vw, 24px)",
                lineHeight: "1.3",
                fontWeight: "400",
                letterSpacing: "normal",
                maxWidth: "2xl",
                color: "var(--foreground)",
                backgroundColor: "transparent",
                textAlign: "center",
                textShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                // These styles ensure proper selection colors
                "--selection-text-color": "var(--background)",
                "--selection-background-color": "var(--foreground)",
              } as React.CSSProperties
            }
          >
            Let's discuss your project and bring your vision to life.
          </p>

          {onOpenInstall && (
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-center">
              <Button
                onClick={onOpenInstall}
                className="group/btn relative flex h-[50px] w-full items-center justify-center overflow-hidden rounded-lg bg-foreground px-6 font-mono text-xs font-semibold tracking-wider text-background shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:h-[60px] sm:px-8 sm:text-sm md:w-auto md:text-base"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  letterSpacing: "0.56px",
                }}
              >
                <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-y-[-2px]" />{" "}
                GET STARTED
              </Button>
            </div>
          )}
        </div>
      </section>
    </Reveal>
  );
}
