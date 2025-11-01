"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Single Testimonial Card - Now clickable */}
        <a
          href="https://youtu.be/7s9C92Pkcc0?si=hOMms9Zczg5V6r53"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch Rick Rubin discuss Vibe Coding on The Ben & Marc Show"
          className="group relative block cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 md:p-12 lg:p-16"
        >
          {/* Quote Icon */}
          <div className="absolute left-8 top-8 opacity-20">
            <Quote className="h-12 w-12 text-white" />
          </div>

          {/* YouTube Play Indicator */}
          <div className="absolute right-8 top-8 opacity-60 transition-opacity group-hover:opacity-100">
            <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            {/* Rick Rubin Image */}
            <div className="flex-shrink-0">
              <div className="h-32 w-32 overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl md:h-40 md:w-40 lg:h-48 lg:w-48">
                <Image
                  src="/images/design-mode/Image-to-ASCII-May-29-2025.jpg.jpeg"
                  alt="Rick Rubin ASCII art portrait"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Quote and Attribution */}
            <div className="flex-1 text-center lg:text-left">
              <blockquote className="mb-6">
                <p
                  className="mb-6 text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  "Vibe Coding is the <span className="gradient-text">Punk Rock</span> of Software"
                </p>
              </blockquote>

              {/* Attribution */}
              <footer>
                <cite
                  className="mb-2 block text-xl font-bold not-italic text-white md:text-2xl"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  Rick Rubin
                </cite>
                <p
                  className="mb-2 text-base text-white/80 md:text-lg"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  Legendary Music Producer
                </p>
                <p
                  className="text-sm text-white/60"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  a16z The Ben & Marc Show
                </p>
              </footer>
            </div>
          </div>

          {/* Gradient Border Effect */}
          <div className="gradient-overlay pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 hover:opacity-100" />
        </a>

        {/* Bottom Text */}
        <div className="mt-12 text-center md:mt-16">
          <p
            className="mx-auto max-w-3xl text-white/60"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            Arcline empowers creative frontend development where innovation meets modern tools and
            clean design.
          </p>
        </div>
      </div>
    </section>
  );
}
