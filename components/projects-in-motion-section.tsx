"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { ProjectsCarousel } from "@/components/projects-carousel";

const slides = [
  {
    id: "Project 01",
    title: "Summit Trails Tourism",
    description:
      "An immersive destination site built for a boutique adventure agency. The experience blends cinematic hero sections, itinerary builders, and instant availability search backed by CMS-driven content.",
    image: {
      src: "/placeholder.svg",
      alt: "Preview of Summit Trails Tourism project",
    },
    highlights: [
      "Dynamic itinerary composer with live pricing",
      "Scroll-triggered storytelling sections",
      "Headless CMS powering multi-language content",
      "Performance budget < 2.5s LCP across markets",
    ],
    websiteUrl: "https://example.com/summit-trails",
    caseStudy: {
      description:
        "A headless tourism experience that fuses cinematic storytelling with conversion-focused booking flows.",
      techStack: ["Next.js 16", "Tailwind CSS", "Sanity", "AWS Lambda", "Mapbox"],
      problem:
        "The old site was brochureware—no conversion tracking, limited seasonal updates, and poor mobile funnel performance.",
      solution:
        "Modular content modeling, itinerary personalization, and a lightning-fast booking wizard tuned for 3G conditions.",
      architecture:
        "Headless CMS feeding ISR pages, dynamic itinerary APIs, and edge cached media streaming via CloudFront.",
      challenges:
        "Coordinating content editors across languages while keeping build times under 90 seconds and avoiding layout shifts.",
      results:
        "+38% booking conversions in peak season, -54% bounce rate on mobile, and <2s LCP across all key destinations.",
    },
  },
  {
    id: "Project 02",
    title: "Volt Commerce Dashboard",
    description:
      "A full-stack analytics surface for a retail accelerator. Operators monitor sales funnels, inventory health, and marketing experiments in real time with multiplayer-ready UI and optimistic workflows.",
    image: {
      src: "/placeholder.svg",
      alt: "Preview of Volt Commerce Dashboard project",
    },
    highlights: [
      "Next.js + TanStack Query data layer",
      "Embeddable charts with progressive loading",
      "Role-based routing & audit trails",
      "End-to-end automation for nightly data sync",
    ],
    websiteUrl: "https://example.com/volt-commerce",
    caseStudy: {
      description:
        "A mission control surface that lets operators monitor commerce funnels, inventory, and campaigns in real time.",
      techStack: ["Next.js", "tRPC", "Postgres", "ClickHouse", "Tailwind", "Storybook"],
      problem:
        "Analysts were juggling five BI tools with no shared state, causing slow decision cycles and conflicting KPIs.",
      solution:
        "Unified analytics with optimistic UI patterns, realtime websocket feeds, and opinionated workflows for each operator role.",
      architecture:
        "Event-driven pipeline streaming into ClickHouse, hydrated via tRPC + TanStack Query, with background workers for rollups.",
      challenges:
        "Maintaining sub-second reloads on 50+ charts while supporting export to CSV/PDF and maintaining accessibility.",
      results:
        "Decision latency dropped from 2 days to 4 hours, onboarding time cut by 60%, and support tickets reduced by 45%.",
    },
  },
  {
    id: "Project 03",
    title: "Aperture Creative Studio",
    description:
      "A brand showcase for a creative collective featuring case-study reels, collaborative moodboards, and a custom proposal generator that assembles decks on the fly.",
    image: {
      src: "/placeholder.svg",
      alt: "Preview of Aperture Creative Studio project",
    },
    highlights: [
      "Composable case study builder with Embla galleries",
      "Workshop booking integrated with Calendly API",
      "Design tokens synced with Figma using Tokens Studio",
      "CI pipeline running visual regression snapshots",
    ],
    websiteUrl: "https://example.com/aperture-studio",
    caseStudy: {
      description:
        "A creative collective’s showcase built to pitch new work, sell workshops, and surface collaborative moodboards.",
      techStack: ["Next.js", "MDX", "Supabase", "Radix UI", "Framer Motion"],
      problem:
        "Pitch decks were manually assembled, leading to inconsistent branding and slow turnaround for new project proposals.",
      solution:
        "Automated case study generator that assembles dynamic MDX decks, embeddable reels, and workshop offers on-demand.",
      architecture:
        "Server actions composing MDX content, Supabase for asset metadata, and queue workers rendering proposal PDFs.",
      challenges:
        "Ensuring rich-media case studies remained SEO-friendly while streaming and animating large assets across devices.",
      results:
        "Proposal delivery time shrank from 4 days to same-day, with a 31% lift in workshop bookings within first quarter.",
    },
  },
] as const;

export default function ProjectsInMotionSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1296px] px-4">
          <div className="mb-8 text-center md:mb-12">
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
              Projects in Motion
            </h2>
            <p
              className="text-muted-foreground mx-auto max-w-2xl text-base leading-7 sm:text-lg"
              style={{
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              A rotating look at launch-ready builds—from tourism platforms to analytics suites—showing how strategy,
              design, and engineering ship together.
            </p>
          </div>

          <ProjectsCarousel slides={slides} />
        </div>
      </section>
    </AnimatedContent>
  );
}
