import {
  cloudinaryConfig,
  getCloudinaryImageUrl,
} from "@/lib/cloudinary";

const MOBILE_FIRST_VERSION = process.env.NEXT_PUBLIC_CLOUDINARY_BENTO_MOBILE_FIRST_VERSION;
const COLOR_THEME_LIGHT_VERSION =
  process.env.NEXT_PUBLIC_CLOUDINARY_BENTO_COLOR_THEME_LIGHT_VERSION;
const COLOR_THEME_DARK_VERSION =
  process.env.NEXT_PUBLIC_CLOUDINARY_BENTO_COLOR_THEME_DARK_VERSION;
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

export type FeatureBandMedia =
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

export type FeatureBandConfig = {
  id: string;
  title: string;
  description: string;
  bullets: readonly string[];
  media: FeatureBandMedia;
  mediaPosition?: "left" | "right";
  priorityMedia?: boolean;
  zoomFocus?: boolean;
};

export const FEATURE_BANDS: FeatureBandConfig[] = [
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


