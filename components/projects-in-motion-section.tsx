"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { cloudinaryConfig, getCloudinaryImageUrl } from "@/lib/cloudinary";

const placeholderSrc = "/placeholder.svg";

const withCloudinary = cloudinaryConfig.enabled && cloudinaryConfig.cloudName;

const slides = [
  {
    id: "Project 01",
    title: "Mosexperiences",
    description:
      "Immersive tourism experiences showcased with cinematic storytelling, multi-day itinerary planning, and instant inquiry flows designed to convert high-intent travelers.",
    image: {
      src: withCloudinary
        ? getCloudinaryImageUrl("arcline/projects/mosexperiences/cover")
        : placeholderSrc,
      alt: "Mosexperiences website preview",
    },
    highlights: [
      "Dynamic itinerary composer with live pricing",
      "Scroll-triggered storytelling sections",
      "Headless CMS powering multi-language content",
      "Performance budget < 2.5s LCP across markets",
    ],
    websiteUrl: "https://example.com/mosexperiences",
    caseStudy: {
      description:
        "A headless tourism experience that fuses cinematic storytelling with conversion-focused booking flows.",
      techStack: ["Next.js", "Tailwind CSS", "Sanity", "Mapbox"],
      problem:
        "The previous brochure site lacked conversions, seasonal updates, and performant mobile booking funnels.",
      solution:
        "Modular content modeling, itinerary personalization, and a fast booking wizard tuned for real-world network conditions.",
      architecture:
        "Headless CMS feeding ISR pages, dynamic itinerary APIs, and edge-cached media streaming.",
      challenges:
        "Coordinating editors across locales while maintaining sub-90-second builds and zero layout shifts.",
      results:
        "+38% booking conversions in peak season, -54% bounce rate on mobile, and <2s LCP across destinations.",
    },
  },
  {
    id: "Project 02",
    title: "Dana Doors",
    description:
      "A premium manufacturing catalog with configurators, lead capture, and spec downloads that help architects source bespoke interior solutions.",
    image: {
      src: withCloudinary
        ? getCloudinaryImageUrl("arcline/projects/danadoors/cover")
        : placeholderSrc,
      alt: "Dana Doors project screenshot",
    },
    highlights: [
      "Interactive product configurator with instant previews",
      "Spec sheets and BIM assets delivered on demand",
      "CRM-integrated lead capture with routing rules",
      "SEO-friendly catalog pages with ISR",
    ],
    websiteUrl: "https://example.com/dana-doors",
    caseStudy: {
      description:
        "A manufacturing hub that allows architects to configure, compare, and request quotes for bespoke interior products.",
      techStack: ["Next.js", "tRPC", "Postgres", "Tailwind"],
      problem:
        "Manual quote requests and static brochures slowed down sales cycles and hid key product differentiators.",
      solution:
        "Configurable product flows, asset downloads, and a CRM-integrated lead workflow that routes to regional reps instantly.",
      architecture:
        "Headless CMS for product metadata with server actions pushing qualified leads into the CRM in real time.",
      challenges:
        "Ensuring heavy imagery stayed performant while rendering technical specs and downloads across regions.",
      results:
        "Quote response time dropped by 65% and sample requests tripled within the first quarter post-launch.",
    },
  },
  {
    id: "Project 03",
    title: "Rootly",
    description:
      "A modern SaaS marketing site with deep product storytelling, interactive feature tours, and conversion-focused CTAs for DevOps teams.",
    image: {
      src: withCloudinary
        ? getCloudinaryImageUrl("arcline/projects/rootly/cover")
        : placeholderSrc,
      alt: "Rootly marketing site preview",
    },
    highlights: [
      "Interactive product tour with auto-playing demos",
      "Role-based personas driving tailored messaging",
      "High-intent CTA system with experiment tracking",
      "HubSpot + Segment integration for attribution",
    ],
    websiteUrl: "https://example.com/rootly",
    caseStudy: {
      description:
        "A SaaS marketing presence that converts DevOps teams through interactive demos and high-intent content.",
      techStack: ["Next.js", "Supabase", "Radix UI", "Framer Motion"],
      problem:
        "Static site couldn’t demonstrate the product or attribute marketing campaigns effectively.",
      solution:
        "Interactive stories, timed demos, and analytics instrumentation connected to the growth stack.",
      architecture:
        "ISR-powered marketing pages fed by MDX, with server actions syncing leads into HubSpot and analytics into Segment.",
      challenges:
        "Balancing rich animation with accessibility and performance budgets across devices.",
      results:
        "Demo requests increased by 42% and time-on-page rose 35% within the first month.",
    },
  },
] as const;

export default function ProjectsInMotionSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="py-10 md:py-14">
        <div className="mx-auto w-full px-4 sm:px-6">
          <div className="mb-6 text-center md:mb-10">
            <h2 className="section-head mb-4">
              Projects in Motion
            </h2>
            <p className="section-subhead">
              Launch snapshots from tourism, manufacturing, and SaaS workstreams.
            </p>
          </div>

          <div className="mx-auto w-full px-1 sm:px-2">
            <ProjectsCarousel slides={slides} />
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}
