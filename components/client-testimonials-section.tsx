"use client";

import type { CSSProperties } from "react";

import AnimatedContent from "@/components/AnimatedContent";
import { Marquee } from "@/components/ui/marquee";
import { TESTIMONIALS, type Testimonial } from "@/lib/content/testimonials";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";

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
      className="testimonial-card bg-card/50 relative isolate w-[280px] shrink-0 rounded-[var(--radius-surface)] border p-4 backdrop-blur-sm md:w-[350px] md:p-6"
      style={
        {
          "--card-border-hover": "var(--accent-orange-40)",
          "--card-shadow-hover": "var(--shadow-lg), 0 0 20px var(--accent-orange-15)",
          "--card-shadow": "var(--shadow-md)",
        } as CSSProperties
      }
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className="border-border/50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border md:h-12 md:w-12"
          style={{
            backgroundColor: avatarColor,
          }}
        >
          <span className="mono-body text-xs font-semibold text-white md:text-sm">
            {avatar}
          </span>
        </div>
        <div className="min-w-0">
          <p
            data-name
            className="mono-body text-xs font-semibold text-foreground transition-colors duration-300 md:text-sm"
          >
            {name}
          </p>
          <p className="mono-body text-[10px] text-muted-foreground leading-tight md:text-xs">
            {role} • {company}
          </p>
        </div>
      </div>
      <blockquote>
        <p className="mono-body text-foreground/90 text-xs leading-relaxed transition-colors duration-300 md:text-sm">
          "{testimonial}"
        </p>
      </blockquote>
    </div>
  );
}

export default function ClientTestimonialsSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <SectionShell>
        <div>
          {/* Header */}
          <SectionHeader
            title="Client Feedback and Testimonials"
            subtitle="Partner stories on collaboration, velocity, and measurable wins."
            className="mb-8 md:mb-12"
          />

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden">
            {/* First Marquee - Left to Right */}
            <Marquee
              pauseOnHover
              repeat={3}
              className="mb-4 [--duration:80s] [--gap:1.5rem] md:mb-4 md:[--duration:50s]"
            >
              {TESTIMONIALS.map((testimonial, index) => (
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
              {TESTIMONIALS.map((testimonial, index) => (
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
      </SectionShell>
    </AnimatedContent>
  );
}
