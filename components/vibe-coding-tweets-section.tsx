"use client";

import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "TravelScape",
    testimonial:
      "Arcline transformed our tourism website into a modern, responsive platform. The AI-powered development process was incredibly fast, and the final result exceeded our expectations.",
    avatar: "/images/profiles/bnj.jpg",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "EcoStore",
    testimonial:
      "Working with Arcline was seamless. They built our e-commerce platform with Next.js and TypeScript, and it performs beautifully across all devices. Highly recommend!",
    avatar: "/images/profiles/tom.jpg",
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    company: "Portfolio Studio",
    testimonial:
      "The personal portfolio Arcline created for me is stunning. Clean design, fast performance, and the development process was so smooth. Exactly what I needed.",
    avatar: "/images/profiles/kitze.jpg",
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    company: "TechStart Inc",
    testimonial:
      "Our business website needed a complete overhaul. Arcline delivered a modern, SEO-optimized site that's already driving more leads. Professional and efficient.",
    avatar: "/images/profiles/ian.jpg",
  },
  {
    name: "Jessica Martinez",
    role: "Product Manager",
    company: "SaaS Platform",
    testimonial:
      "The admin dashboard Arcline built is perfect. Clean UI, excellent UX, and it integrates seamlessly with our backend. The team's attention to detail is impressive.",
    avatar: "/images/profiles/anuj.jpg",
  },
  {
    name: "Alex Thompson",
    role: "Entrepreneur",
    company: "Startup Co",
    testimonial:
      "From concept to launch, Arcline made the entire process easy. The AI-powered development saved us time and money while delivering a production-ready product.",
    avatar: "/images/profiles/anushk.jpg",
  },
  {
    name: "Rachel Green",
    role: "Content Creator",
    company: "Blog Network",
    testimonial:
      "My blog platform built by Arcline is beautiful and fast. The modern design perfectly matches my brand, and the user experience is exceptional. Couldn't be happier!",
    avatar: "/images/profiles/bnj.jpg",
  },
  {
    name: "James Wilson",
    role: "Restaurant Owner",
    company: "Fine Dining Group",
    testimonial:
      "The restaurant website Arcline created showcases our menu beautifully. The booking system works flawlessly, and customers love the modern interface. Great work!",
    avatar: "/images/profiles/tom.jpg",
  },
];

function TestimonialCard({ name, role, company, testimonial, avatar }: Testimonial) {
  return (
    <div className="w-[350px] shrink-0 rounded-[16px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p
            className="text-sm font-semibold text-white"
            style={{
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {name}
          </p>
          <p
            className="text-xs text-white/70"
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
          className="text-sm leading-relaxed text-white/90"
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

export default function VibeCodingTweetsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-6 px-4 text-center md:mb-12">
          <h2
            className="mb-4 font-semibold"
            style={{
              backgroundImage:
                "linear-gradient(rgb(245, 245, 245), rgb(245, 245, 245) 29%, rgb(153, 153, 153))",
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
            className="mx-auto max-w-3xl text-white/80"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(14px, 3vw, 18px)",
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
          <Marquee pauseOnHover repeat={3} className="mb-4 [--duration:50s] [--gap:1.5rem] md:mb-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`first-${index}`} {...testimonial} />
            ))}
          </Marquee>

          {/* Second Marquee - Right to Left */}
          <Marquee pauseOnHover reverse repeat={3} className="[--duration:50s] [--gap:1.5rem]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`second-${index}`} {...testimonial} />
            ))}
          </Marquee>

          {/* Gradient Fade Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
