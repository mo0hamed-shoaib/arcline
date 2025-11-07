"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { Marquee } from "@/components/ui/marquee";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string; // Initials for avatar generation
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "TravelScape",
    testimonial:
      "Arcline transformed our tourism website into a modern, responsive platform. The AI-powered development process was incredibly fast, and the final result exceeded our expectations.",
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "EcoStore",
    testimonial:
      "Working with Arcline was seamless. They built our e-commerce platform with Next.js and TypeScript, and it performs beautifully across all devices. Highly recommend!",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    company: "Portfolio Studio",
    testimonial:
      "The personal portfolio Arcline created for me is stunning. Clean design, fast performance, and the development process was so smooth. Exactly what I needed.",
    avatar: "EW",
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    company: "TechStart Inc",
    testimonial:
      "Our business website needed a complete overhaul. Arcline delivered a modern, SEO-optimized site that's already driving more leads. Professional and efficient.",
    avatar: "DK",
  },
  {
    name: "Jessica Martinez",
    role: "Product Manager",
    company: "SaaS Platform",
    testimonial:
      "The admin dashboard Arcline built is perfect. Clean UI, excellent UX, and it integrates seamlessly with our backend. The team's attention to detail is impressive.",
    avatar: "JM",
  },
  {
    name: "Alex Thompson",
    role: "Entrepreneur",
    company: "Startup Co",
    testimonial:
      "From concept to launch, Arcline made the entire process easy. The AI-powered development saved us time and money while delivering a production-ready product.",
    avatar: "AT",
  },
  {
    name: "Rachel Green",
    role: "Content Creator",
    company: "Blog Network",
    testimonial:
      "My blog platform built by Arcline is beautiful and fast. The modern design perfectly matches my brand, and the user experience is exceptional. Couldn't be happier!",
    avatar: "RG",
  },
  {
    name: "James Wilson",
    role: "Restaurant Owner",
    company: "Fine Dining Group",
    testimonial:
      "The restaurant website Arcline created showcases our menu beautifully. The booking system works flawlessly, and customers love the modern interface. Great work!",
    avatar: "JW",
  },
];

// Generate a consistent color for each avatar based on initials
function getAvatarColor(initials: string): string {
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 65%, 55%)`;
}

function TestimonialCard({ name, role, company, testimonial, avatar }: Testimonial) {
  const avatarColor = getAvatarColor(avatar);

  return (
    <div
      className="bg-card/50 relative isolate w-[280px] shrink-0 rounded-[var(--radius-surface)] border border-border p-4 backdrop-blur-sm transition-all duration-300 md:w-[350px] md:p-6"
      style={{
        boxShadow: "var(--shadow-md)",
      }}
      onMouseEnter={(e) => {
        const card = e.currentTarget;
        const name = card.querySelector("[data-name]");
        const quote = card.querySelector("blockquote p");
        card.style.borderColor = "var(--accent-orange-40)";
        card.style.boxShadow = "var(--shadow-lg), 0 0 20px var(--accent-orange-15)";
        card.style.transform = "translateY(-2px)";
        card.style.zIndex = "10";
        if (name) (name as HTMLElement).style.color = "var(--accent-orange)";
        if (quote) (quote as HTMLElement).style.color = "var(--foreground)";
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        const name = card.querySelector("[data-name]");
        const quote = card.querySelector("blockquote p");
        card.style.borderColor = "";
        card.style.boxShadow = "var(--shadow-md)";
        card.style.transform = "";
        card.style.zIndex = "";
        if (name) (name as HTMLElement).style.color = "";
        if (quote) (quote as HTMLElement).style.color = "";
      }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className="border-border/50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border md:h-12 md:w-12"
          style={{
            backgroundColor: avatarColor,
          }}
        >
          <span
            className="text-xs font-semibold md:text-sm"
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: "#FFFFFF",
            }}
          >
            {avatar}
          </span>
        </div>
        <div className="min-w-0">
          <p
            data-name
            className="text-xs font-semibold text-foreground transition-colors duration-300 md:text-sm"
            style={{
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {name}
          </p>
          <p
            className="text-[10px] text-muted-foreground md:text-xs"
            style={{
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {role} • {company}
          </p>
        </div>
      </div>
      <blockquote>
        <p
          className="text-foreground/90 text-xs leading-relaxed transition-colors duration-300 md:text-sm"
          style={{
            fontFamily: "var(--font-geist-mono)",
            lineHeight: "1.6",
          }}
        >
          "{testimonial}"
        </p>
      </blockquote>
    </div>
  );
}

export default function ClientTestimonialsSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1296px] px-4 sm:px-6">
          {/* Header */}
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
              Client Feedback and Testimonials
            </h2>
            <p
              className="text-foreground/90 mx-auto mb-8 max-w-2xl"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "clamp(18px, 3vw, 24px)",
                lineHeight: "1.4",
                textAlign: "center",
              }}
            >
              See what clients say about working with Arcline.
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden">
            {/* First Marquee - Left to Right */}
            <Marquee
              pauseOnHover
              repeat={3}
              className="mb-4 [--duration:80s] [--gap:1.5rem] md:mb-4 md:[--duration:50s]"
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`first-${index}`} {...testimonial} />
              ))}
            </Marquee>

            {/* Second Marquee - Right to Left */}
            <Marquee
              pauseOnHover
              reverse
              repeat={3}
              className="[--duration:80s] [--gap:1.5rem] md:[--duration:50s]"
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`second-${index}`} {...testimonial} />
              ))}
            </Marquee>

            {/* Gradient Fade Overlays - Thinner and more subtle */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-16"
              style={{ background: "var(--fade-gradient-left)" }}
            ></div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-16"
              style={{ background: "var(--fade-gradient-right)" }}
            ></div>
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}
