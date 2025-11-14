"use client";

import Image from "next/image";

import AnimatedContent from "@/components/AnimatedContent";
import { Compare } from "@/components/ui/compare";
import { cloudinaryConfig, getCloudinaryImageUrl } from "@/lib/cloudinary";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

const MOBILE_FIRST_VERSION = process.env.NEXT_PUBLIC_CLOUDINARY_BENTO_MOBILE_FIRST_VERSION;
const COLOR_THEME_LIGHT_VERSION =
  process.env.NEXT_PUBLIC_CLOUDINARY_BENTO_COLOR_THEME_LIGHT_VERSION;
const COLOR_THEME_DARK_VERSION = process.env.NEXT_PUBLIC_CLOUDINARY_BENTO_COLOR_THEME_DARK_VERSION;
const PERFORMANCE_VERSION = process.env.NEXT_PUBLIC_CLOUDINARY_BENTO_PERFORMANCE_VERSION;
const TECH_STACK_LANGUAGE_VERSION =
  process.env.NEXT_PUBLIC_CLOUDINARY_BENTO_TECH_STACK_LANGUAGE_VERSION;
const TECH_STACK_LANGUAGE_LIGHT_VERSION =
  process.env.NEXT_PUBLIC_CLOUDINARY_BENTO_TECH_STACK_LANGUAGE_LIGHT_VERSION;

const withCloudinary = cloudinaryConfig.enabled && Boolean(cloudinaryConfig.cloudName);

const MOBILE_FIRST_PUBLIC_ID = "arcline/ui/bento/mobile-first-design";
const COLOR_THEME_LIGHT_ID = "arcline/ui/bento/safari-tweak-light";
const COLOR_THEME_DARK_ID = "arcline/ui/bento/safari-tweak-dark";
const PERFORMANCE_PUBLIC_ID = "arcline/ui/bento/performance";
const TECH_STACK_PUBLIC_ID = "arcline/ui/bento/tech-stack-language";
const TECH_STACK_LIGHT_PUBLIC_ID = "arcline/ui/bento/tech-stack-language-light";

const FEATURE_IMAGE_TRANSFORM = { width: 1280, dpr: "auto" as const };
const COMPARE_IMAGE_TRANSFORM = { width: 1400, dpr: "auto" as const };

const mobileFirstImageSrc = withCloudinary
  ? getCloudinaryImageUrl(MOBILE_FIRST_PUBLIC_ID, MOBILE_FIRST_VERSION, FEATURE_IMAGE_TRANSFORM)
  : "/images/mobile-first-design.jpg";

const colorThemeLightSrc = withCloudinary
  ? getCloudinaryImageUrl(COLOR_THEME_LIGHT_ID, COLOR_THEME_LIGHT_VERSION, COMPARE_IMAGE_TRANSFORM)
  : "/images/color-theme-light.jpg";

const colorThemeDarkSrc = withCloudinary
  ? getCloudinaryImageUrl(COLOR_THEME_DARK_ID, COLOR_THEME_DARK_VERSION, COMPARE_IMAGE_TRANSFORM)
  : "/images/color-theme-dark.jpg";

const performanceImageSrc = withCloudinary
  ? getCloudinaryImageUrl(PERFORMANCE_PUBLIC_ID, PERFORMANCE_VERSION, FEATURE_IMAGE_TRANSFORM)
  : "/images/performance.jpg";

const techStackImageSrc = withCloudinary
  ? getCloudinaryImageUrl(
      TECH_STACK_PUBLIC_ID,
      TECH_STACK_LANGUAGE_VERSION,
      FEATURE_IMAGE_TRANSFORM
    )
  : "/images/tech-stack-language.jpg";

const techStackLightImageSrc = withCloudinary
  ? getCloudinaryImageUrl(
      TECH_STACK_LIGHT_PUBLIC_ID,
      TECH_STACK_LANGUAGE_LIGHT_VERSION,
      FEATURE_IMAGE_TRANSFORM
    )
  : "/images/tech-stack-language-light.jpg";

type FeatureBandMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "compare";
      firstImage: string;
      secondImage: string;
    }
  | {
      type: "dual";
      darkSrc: string;
      lightSrc: string;
      alt: string;
    };

type FeatureBandConfig = {
  id: string;
  title: string;
  description: string;
  bullets: readonly string[];
  media: FeatureBandMedia;
  mediaPosition?: "left" | "right";
  priorityMedia?: boolean;
  zoomFocus?: boolean;
};

const featureBands: FeatureBandConfig[] = [
  {
    id: "mobile-first",
    title: "Mobile-First Design",
    description:
      "Every project starts on the smallest screen and scales up. Copy stays readable, spacing stays balanced, and the experience feels solid from pocket to desktop.",
    bullets: [
      "Design mobile-first breakpoints",
      "Keep typography legible everywhere",
      "Serve responsive, lightweight media",
      "Make touch targets feel natural",
    ],
    media: {
      type: "image",
      src: mobileFirstImageSrc,
      alt: "Mobile-first design example",
    },
    mediaPosition: "left",
    priorityMedia: true,
  },
  {
    id: "color-theme",
    title: "Color & Theme Options",
    description:
      "Light and dark themes feel like the same product. Contrast holds up, surfaces stay even, and theme toggles glide instead of flash.",
    bullets: [
      "Contrast-checked palettes",
      "Quiet gradients and surfaces",
      "Smooth mode transitions",
    ],
    media: {
      type: "compare",
      firstImage: colorThemeLightSrc,
      secondImage: colorThemeDarkSrc,
    },
    mediaPosition: "right",
  },
  {
    id: "performance",
    title: "SEO, Accessibility & Best Practices",
    description:
      "Pages load quickly, use semantic HTML, and surface the right metadata so search engines and assistive tech can read them without extra work.",
    bullets: [
      "Ship within a performance budget",
      "Keep markup accessible by default",
      "Publish structured data and meta",
      "Track key metrics throughout",
    ],
    media: {
      type: "image",
      src: performanceImageSrc,
      alt: "Performance and accessibility metrics",
    },
    mediaPosition: "left",
    zoomFocus: true,
  },
  {
    id: "tech-stack",
    title: "Tech Stack & Multilingual Support",
    description:
      "Tooling stays modern but practical. Content updates are simple, deployments stay quick, and localisation fits into the same flow.",
    bullets: [
      "Use Next.js, TypeScript, Tailwind",
      "Wire up CMS and translation workflows",
      "Deploy on fast edge infrastructure",
      "Automate testing and CI/CD steps",
    ],
    media: {
      type: "dual",
      darkSrc: techStackImageSrc,
      lightSrc: techStackLightImageSrc,
      alt: "Tech stack and language support",
    },
    mediaPosition: "right",
  },
];

const FeatureMedia = ({
  media,
  priority,
  zoomFocus = false,
}: {
  media: FeatureBandMedia;
  priority?: boolean;
  zoomFocus?: boolean;
}) => {
  const prefersReducedMotion = useReducedMotion();

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

  if (zoomFocus && !prefersReducedMotion) {
    return (
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1, x: "0%", y: "0%" }}
          animate={{
            scale: [1, 1.35, 1.35, 1],
            x: ["0%", "16%", "16%", "0%"],
            y: ["0%", "20%", "20%", "0%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatDelay: 1,
            ease: [0.4, 0, 0.2, 1],
            times: [0, 0.28, 0.78, 1],
          }}
          viewport={{ amount: 0.6, once: false }}
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
        <div className="section-stack mx-auto w-full max-w-[1296px] px-4 sm:px-6">
          <div className="text-center">
            <h2 className="section-head mb-4">Build Process & Insights</h2>
            <p className="section-subhead">
              A plain view of how we scope, design, build, and ship—no fluff, just the steps you’ll
              use.
            </p>
          </div>

          {featureBands.map((band, index) => (
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
