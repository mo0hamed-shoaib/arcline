"use client";

import Image from "next/image";

import AnimatedContent from "@/components/AnimatedContent";
import { Compare } from "@/components/ui/compare";
import { cloudinaryConfig, getCloudinaryImageUrl } from "@/lib/cloudinary";
import { cn } from "@/lib/utils";

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
  ? getCloudinaryImageUrl(TECH_STACK_PUBLIC_ID, TECH_STACK_LANGUAGE_VERSION, FEATURE_IMAGE_TRANSFORM)
  : "/images/tech-stack-language.jpg";

const techStackLightImageSrc = withCloudinary
  ? getCloudinaryImageUrl(TECH_STACK_LIGHT_PUBLIC_ID, TECH_STACK_LANGUAGE_LIGHT_VERSION, FEATURE_IMAGE_TRANSFORM)
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
};

const featureBands: FeatureBandConfig[] = [
  {
    id: "mobile-first",
    title: "Mobile-First Design",
    description:
      "Every interface we build starts with the smallest screen in mind. Responsive layouts, adaptive typography, and touch-friendly interactions ensure your experience feels fast and polished from pocket to desktop.",
    bullets: [
      "Tailored breakpoints and fluid spacing",
      "Optimized imagery for every viewport",
      "Performance-first rendering strategy",
      "Touch-ready interactions and gestures",
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
      "We craft harmonious palettes and precise theme states—light, dark, and everything in between—so your brand looks cohesive no matter the mode.",
    bullets: [
      "Balanced contrast ratios for accessibility",
      "Adaptive gradients and surface treatments",
      "Smooth transitions between modes",
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
      "We obsess over performance budgets, semantic structure, and resilient patterns so your product ranks higher, reads better, and works for everyone—no matter the context.",
    bullets: [
      "Lighthouse 90+ score targeting",
      "WCAG-compliant color contrast and semantics",
      "Structured data and meta hygiene baked in",
      "Performance budgets monitored throughout build",
    ],
    media: {
      type: "image",
      src: performanceImageSrc,
      alt: "Performance and accessibility metrics",
    },
    mediaPosition: "left",
  },
  {
    id: "tech-stack",
    title: "Tech Stack & Multilingual Support",
    description:
      "From frameworks to deployment workflows and language tooling, we assemble a stack that scales—and speak to every audience you serve.",
    bullets: [
      "Next.js, TypeScript, Tailwind, and serverless-ready APIs",
      "CMS and translation workflows for localized content",
      "Deployed on performant edge networks",
      "Automated testing and CI/CD pipelines baked in",
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

const FeatureMedia = ({ media, priority }: { media: FeatureBandMedia; priority?: boolean }) => {
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
}: FeatureBandConfig) => {
  const mediaOrder = mediaPosition === "left" ? "order-1 md:order-1" : "order-1 md:order-2";
  const textOrder = mediaPosition === "left" ? "order-2 md:order-2" : "order-2 md:order-1";

  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className={cn("relative aspect-12/10 w-full overflow-hidden rounded-(--radius-surface)", mediaOrder)}>
        <FeatureMedia media={media} priority={priorityMedia} />
      </div>

      <div className={cn("flex flex-col gap-5 text-foreground", textOrder)}>
        <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h3>
        <p className="mono-body text-base leading-relaxed text-foreground/80 sm:text-lg">{description}</p>
        <ul className="grid gap-3 text-sm text-foreground/80 sm:grid-cols-2 sm:text-base">
          {bullets.map((item) => (
            <li key={item} className="mono-bullet rounded-lg border border-border bg-card/40 px-4 py-3">
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
            <h2 className="section-head mb-4">
              Custom Stack & Insights
            </h2>
            <p className="section-subhead">
              Tailored modules, tech stacks, performance, and polish in focused product explorations.
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
