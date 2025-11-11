"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { CloudinaryImage } from "@/components/ui/cloudinary-image";
import { Compare } from "@/components/ui/compare";
import { buildCloudinaryUrl, cloudinaryConfig } from "@/lib/cloudinary";
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

const mobileFirstImageSrc = withCloudinary
  ? buildCloudinaryUrl(
      MOBILE_FIRST_PUBLIC_ID,
      {
        crop: "fill",
        gravity: "auto",
        quality: "auto",
        format: "auto",
      },
      undefined,
      MOBILE_FIRST_VERSION
    )
  : "/images/mobile-first-design.jpg";

const colorThemeLightSrc = withCloudinary
  ? buildCloudinaryUrl(
      COLOR_THEME_LIGHT_ID,
      {
        crop: "fill",
        gravity: "auto",
        quality: "auto",
        format: "auto",
      },
      undefined,
      COLOR_THEME_LIGHT_VERSION
    )
  : "/images/color-theme-light.jpg";

const colorThemeDarkSrc = withCloudinary
  ? buildCloudinaryUrl(
      COLOR_THEME_DARK_ID,
      {
        crop: "fill",
        gravity: "auto",
        quality: "auto",
        format: "auto",
      },
      undefined,
      COLOR_THEME_DARK_VERSION
    )
  : "/images/color-theme-dark.jpg";

const performanceImageSrc = withCloudinary
  ? buildCloudinaryUrl(
      PERFORMANCE_PUBLIC_ID,
      {
        crop: "fill",
        gravity: "auto",
        quality: "auto",
        format: "auto",
      },
      undefined,
      PERFORMANCE_VERSION
    )
  : "/images/performance.jpg";

const techStackImageSrc = withCloudinary
  ? buildCloudinaryUrl(
      TECH_STACK_PUBLIC_ID,
      {
        crop: "fill",
        gravity: "auto",
        quality: "auto",
        format: "auto",
      },
      undefined,
      TECH_STACK_LANGUAGE_VERSION
    )
  : "/images/tech-stack-language.jpg";

const techStackLightImageSrc = withCloudinary
  ? buildCloudinaryUrl(
      TECH_STACK_LIGHT_PUBLIC_ID,
      {
        crop: "fill",
        gravity: "auto",
        quality: "auto",
        format: "auto",
      },
      undefined,
      TECH_STACK_LANGUAGE_LIGHT_VERSION
    )
  : "/images/tech-stack-language-light.jpg";

export default function CustomStackInsightsSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1296px] space-y-16 px-4 sm:px-6">
          <div className="text-center">
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
              className="mx-auto max-w-none text-sm text-foreground/70 sm:text-base"
              style={{
                fontFamily: "var(--font-geist-mono)",
                textAlign: "center",
                lineHeight: "1.35",
              }}
            >
              Tailored modules, tech stacks, performance, and polish in focused product explorations.
            </p>
          </div>

          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-12/10 w-full overflow-hidden rounded-(--radius-surface)">
              <CloudinaryImage
                publicId={MOBILE_FIRST_PUBLIC_ID}
                alt="Mobile-first design example"
                fill
                priority
                className="object-cover"
                version={MOBILE_FIRST_VERSION}
              />
            </div>

            <div className="flex flex-col gap-5 text-foreground">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Mobile-First Design</h3>
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                Every interface we build starts with the smallest screen in mind. Responsive layouts, adaptive typography,
                and touch-friendly interactions ensure your experience feels fast and polished from pocket to desktop.
              </p>
              <ul className="grid gap-3 text-sm text-foreground/80 sm:grid-cols-2 sm:text-base">
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Tailored breakpoints and fluid spacing
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Optimized imagery for every viewport
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Performance-first rendering strategy
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Touch-ready interactions and gestures
                </li>
              </ul>
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-5 text-foreground">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Color & Theme Options</h3>
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                We craft harmonious palettes and precise theme states—light, dark, and everything in between—so your brand
                looks cohesive no matter the mode.
              </p>
              <ul className="grid gap-3 text-sm text-foreground/80 sm:text-base">
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Balanced contrast ratios for accessibility
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Adaptive gradients and surface treatments
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Smooth transitions between modes
                </li>
              </ul>
            </div>

            <div className="relative aspect-12/10 w-full overflow-hidden rounded-(--radius-surface)">
              <Compare
                firstImage={withCloudinary ? colorThemeLightSrc : "/images/color-theme-light.jpg"}
                secondImage={withCloudinary ? colorThemeDarkSrc : "/images/color-theme-dark.jpg"}
                className="absolute inset-0 h-full! w-full!"
                firstImageClassName="rounded-(--radius-surface) object-cover"
                secondImageClassname="rounded-(--radius-surface) object-cover"
                autoplay
                autoplayDuration={5000}
                slideMode="hover"
                showHandlebar={false}
              />
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-12/10 w-full overflow-hidden rounded-(--radius-surface)">
              <CloudinaryImage
                publicId={PERFORMANCE_PUBLIC_ID}
                alt="Performance and accessibility metrics"
                fill
                priority
                className="object-cover"
                version={PERFORMANCE_VERSION}
              />
            </div>

            <div className="flex flex-col gap-5 text-foreground">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                SEO, Accessibility & Best Practices
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                We obsess over performance budgets, semantic structure, and resilient patterns so your product ranks higher,
                reads better, and works for everyone—no matter the context.
              </p>
              <ul className="grid gap-3 text-sm text-foreground/80 sm:grid-cols-2 sm:text-base">
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Lighthouse 90+ score targeting
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  WCAG-compliant color contrast and semantics
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Structured data and meta hygiene baked in
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Performance budgets monitored throughout build
                </li>
              </ul>
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-5 text-foreground">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Tech Stack & Multilingual Support
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                From frameworks to deployment workflows and language tooling, we assemble a stack that scales—and speak to
                every audience you serve.
              </p>
              <ul className="grid gap-3 text-sm text-foreground/80 sm:grid-cols-2 sm:text-base">
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Next.js, TypeScript, Tailwind, and serverless-ready APIs
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  CMS and translation workflows for localized content
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Deployed on performant edge networks
                </li>
                <li className="rounded-lg border border-border bg-card/40 px-4 py-3">
                  Automated testing and CI/CD pipelines baked in
                </li>
              </ul>
            </div>

            <div className="relative aspect-12/10 w-full overflow-hidden rounded-(--radius-surface)">
              <CloudinaryImage
                publicId={TECH_STACK_PUBLIC_ID}
                alt="Tech stack and language support"
                fill
                priority
                className={cn("hidden object-cover", "dark:block")}
                version={TECH_STACK_LANGUAGE_VERSION}
              />
              <CloudinaryImage
                publicId={TECH_STACK_LIGHT_PUBLIC_ID}
                alt="Tech stack and language support"
                fill
                priority
                className={cn("block object-cover", "dark:hidden")}
                version={TECH_STACK_LANGUAGE_LIGHT_VERSION}
              />
            </div>
          </section>
        </div>
      </section>
    </AnimatedContent>
  );
}
