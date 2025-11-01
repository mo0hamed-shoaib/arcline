"use client";

import { Download } from "lucide-react";

import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What kinds of websites do you build?",
    answer: (
      <>
        I specialize in tourism websites, e-commerce platforms, personal portfolios, business sites
        and more.
        <br />
        <br />
        Every project is tailored to your specific needs. From simple landing pages to complex admin
        dashboards.
      </>
    ),
  },
  {
    question: "What technologies do you use?",
    answer: (
      <>
        Next.js for the framework, TypeScript for type safety, Tailwind CSS for styling.
        <br />
        <br />I use shadcn/ui for components, Supabase for backend services, and build custom design
        systems as needed.
      </>
    ),
  },
  {
    question: "How does the development process work?",
    answer: (
      <>
        I start with AI-powered development using Cursor to build the initial structure fast.
        <br />
        <br />
        Then I manually refine every detail, optimize for performance, and ensure everything is
        production-ready.
      </>
    ),
  },
  {
    question: "Can you help with design?",
    answer: (
      <>
        Absolutely. I create custom design systems based on your brand and vision.
        <br />
        <br />
        Using shadcn/ui as the foundation, I build exactly what your project needs.
      </>
    ),
  },
  {
    question: "What about SEO and performance?",
    answer: (
      <>
        Every site is built with SEO best practices from day one.
        <br />
        <br />
        Performance optimization, accessibility, and responsive design are baked into every project.
      </>
    ),
  },
  {
    question: "How do we stay in touch during development?",
    answer: (
      <>
        Regular updates and clear communication throughout the process.
        <br />
        <br />I keep you informed at every step and incorporate your feedback as we build.
      </>
    ),
  },
];

interface FAQSectionProps {
  onOpenInstall?: () => void;
}

export default function FAQSection({ onOpenInstall }: FAQSectionProps) {
  return (
    <Reveal>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2
            className="mb-12 text-center font-semibold md:mb-16"
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
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 overflow-hidden rounded-[16px] border border-border backdrop-blur-sm transition-all duration-300"
                style={{
                  boxShadow: "var(--shadow-md)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-xl)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline">
                  <span
                    className="text-left font-medium text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "18px",
                    }}
                  >
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-0">
                  <p
                    className="text-foreground/80"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "15px",
                      lineHeight: "1.5",
                    }}
                  >
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to action - Full width like hero section */}
        <div className="relative mx-auto max-w-[1920px] px-6 md:px-8">
          <section className="rounded-all-devices relative mb-6 mt-12 flex flex-col rounded-[16px] text-foreground md:mt-16">
            {/* Gradient Background Image */}
            <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[16px]">
              <div className="gradient-primary-diagonal absolute inset-0 h-full w-full rounded-[16px]" />
              <div
                className="absolute inset-0 h-full w-full rounded-[16px]"
                style={{
                  backgroundColor: "var(--hero-overlay)",
                }}
              />
              {/* Noise texture overlay */}
              <div className="noise-texture absolute inset-0 rounded-[16px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full w-full flex-col px-4 pb-8 pt-[38px] text-center sm:px-6 sm:pt-[50px] md:pb-12 md:pt-[70px] lg:px-8">
              {/* Headline - Smaller than hero, sized appropriately for CTA section */}
              <h2
                className="heading-with-selection mb-2 select-text overflow-visible font-semibold duration-1000 animate-in fade-in slide-in-from-bottom-4"
                style={{
                  fontSize: "clamp(28px, 5vw, 72px)",
                  lineHeight: "1.1",
                  letterSpacing: "clamp(-1.5px, -0.04em, -3px)",
                  fontFamily: "var(--font-geist-sans)",
                  height: "auto",
                  maxWidth: "100%",
                  paddingBottom: "0",
                  marginBottom: "0.2em",
                  color: "#FFFFFF",
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                Ready to Get Started?
              </h2>

              {/* Description - Matching hero section exactly */}
              <p
                className="mx-auto mb-6 h-auto select-text delay-200 duration-1000 animate-in fade-in slide-in-from-bottom-4 sm:mb-8"
                style={
                  {
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "clamp(16px, 4vw, 24px)",
                    lineHeight: "1.3",
                    fontWeight: "400",
                    letterSpacing: "normal",
                    maxWidth: "2xl",
                    color: "#FFFFFF",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    // These styles ensure proper selection colors
                    "--selection-text-color": "#FFFFFF",
                    "--selection-background-color": "#000000",
                  } as React.CSSProperties
                }
              >
                Let's discuss your project and bring your vision to life.
              </p>

              {onOpenInstall && (
                <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-center">
                  <Button
                    onClick={onOpenInstall}
                    className="flex h-[50px] w-full items-center justify-center rounded-lg bg-foreground px-4 font-mono text-xs font-semibold tracking-wider text-background shadow-lg sm:h-[60px] sm:px-6 sm:text-sm md:w-auto md:text-base"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      letterSpacing: "0.56px",
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" /> GET STARTED
                  </Button>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </Reveal>
  );
}
