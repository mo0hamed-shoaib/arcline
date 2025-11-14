"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import AnimatedContent from "@/components/AnimatedContent";
import { Compare } from "@/components/ui/compare";
import { cn } from "@/lib/utils";
import {
  FEATURE_BANDS,
  type FeatureBandConfig,
  type FeatureBandMedia,
} from "@/lib/content/custom-stack";
import { motion, useReducedMotion } from "motion/react";

const FeatureMedia = ({
  media,
  priority,
  zoomFocus = false,
}: {
  media: FeatureBandMedia;
  priority?: boolean;
  zoomFocus?: boolean;
}) => {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // On server and initial client render, assume no reduced motion to match
  const shouldReduceMotion = mounted ? prefersReducedMotion : false;

  if (media.type === "compare") {
    return (
      <Compare
        firstImage={media.firstImage}
        secondImage={media.secondImage}
        className="pointer-events-none absolute inset-0 h-full! w-full!"
        firstImageClassName="rounded-(--radius-surface) object-cover"
        secondImageClassname="rounded-(--radius-surface) object-cover"
        autoplay
        autoplayDuration={6500}
        showHandlebar={false}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  if (media.type === "dual") {
    return (
      <>
        <Image
          src={media.darkSrc}
          alt={media.alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 600px, (min-width: 640px) 60vw, 90vw"
          className={cn("hidden object-cover", "dark:block")}
        />
        <Image
          src={media.lightSrc}
          alt={media.alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 600px, (min-width: 640px) 60vw, 90vw"
          className={cn("block object-cover", "dark:hidden")}
        />
      </>
    );
  }

  // Always render the same structure to avoid hydration mismatch
  if (zoomFocus) {
    return (
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={shouldReduceMotion ? false : { scale: 1, x: "0%", y: "0%" }}
          animate={
            shouldReduceMotion
              ? false
              : {
                  scale: [1, 1.35, 1.35, 1],
                  x: ["0%", "16%", "16%", "0%"],
                  y: ["0%", "20%", "20%", "0%"],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 7,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: [0.4, 0, 0.2, 1],
                  times: [0, 0.28, 0.78, 1],
                }
          }
          viewport={shouldReduceMotion ? undefined : { amount: 0.6, once: false }}
          suppressHydrationWarning
        >
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            sizes="(min-width: 1024px) 600px, (min-width: 640px) 60vw, 90vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      sizes="(min-width: 1024px) 600px, (min-width: 640px) 60vw, 90vw"
      className="object-cover"
    />
  );
};

const FeatureBand = ({
  title,
  description,
  bullets,
  media,
  mediaPosition = "left",
  priorityMedia,
  zoomFocus,
}: FeatureBandConfig) => {
  const mediaOrder = mediaPosition === "left" ? "order-1 md:order-1" : "order-1 md:order-2";
  const textOrder = mediaPosition === "left" ? "order-2 md:order-2" : "order-2 md:order-1";

  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <div
        className={cn(
          "relative aspect-12/10 w-full overflow-hidden rounded-(--radius-surface)",
          mediaOrder
        )}
      >
        <FeatureMedia media={media} priority={priorityMedia} zoomFocus={zoomFocus} />
      </div>

      <div className={cn("flex flex-col gap-5 text-foreground", textOrder)}>
        <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h3>
        <p className="mono-body text-base leading-relaxed text-foreground/85 sm:text-lg">
          {description}
        </p>
        <ul className="grid gap-3 text-sm text-foreground/85 sm:grid-cols-2 sm:text-base">
          {bullets.map((item) => (
            <li
              key={item}
              className="mono-bullet rounded-lg border border-border bg-card/40 px-4 py-3"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default function CustomStackInsightsSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="py-12 md:py-16">
        <div className="section-stack mx-auto w-full max-w-[1296px]">
          <div className="text-center">
            <h2 className="section-head mb-4">Build Process & Insights</h2>
            <p className="section-subhead">
              A plain view of how we scope, design, build, and ship—no fluff, just the steps you’ll
              use.
            </p>
          </div>

          {FEATURE_BANDS.map((band, index) => (
            <AnimatedContent
              key={band.id}
              direction="vertical"
              distance={40}
              duration={0.8}
              ease="power3.out"
              delay={index * 0.1}
            >
              <FeatureBand {...band} priorityMedia={band.priorityMedia ?? index === 0} />
            </AnimatedContent>
          ))}
        </div>
      </section>
    </AnimatedContent>
  );
}
