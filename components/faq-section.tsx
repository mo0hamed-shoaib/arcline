"use client";

import { Download } from "lucide-react";

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
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          className="mb-12 text-center font-semibold md:mb-16"
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
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-[16px] border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline">
                <span
                  className="text-left font-medium text-white"
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
                  className="text-white/80"
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
        <section className="rounded-all-devices relative mb-6 mt-12 flex flex-col rounded-[16px] text-white md:mt-16">
          {/* Gradient Background Image */}
          <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[16px]">
            <div className="gradient-primary-diagonal absolute inset-0 h-full w-full rounded-[16px]" />
            <div
              className="absolute inset-0 h-full w-full rounded-[16px]"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.35)",
              }}
            />
            {/* Noise texture overlay */}
            <div className="noise-texture absolute inset-0 rounded-[16px]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full w-full flex-col px-4 pb-8 pt-[38px] text-center sm:px-6 sm:pt-[50px] md:pb-12 md:pt-[70px] lg:px-8">
            {/* Headline */}
            <h2
              className="heading-with-selection mb-6 select-text overflow-visible font-semibold duration-1000 animate-in fade-in slide-in-from-bottom-4"
              style={{
                fontSize: "clamp(32px, 6vw, 64px)",
                lineHeight: "1.1",
                letterSpacing: "clamp(-1.5px, -0.04em, -3px)",
                fontFamily: "var(--font-geist-sans)",
                height: "auto",
                maxWidth: "100%",
                paddingBottom: "0",
                marginBottom: "0.5em",
                color: "#FFFFFF",
                textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              Ready to Get Started?
            </h2>

            {/* Description */}
            <p
              className="mx-auto mb-10 max-w-2xl select-text text-white/95 delay-200 duration-1000 animate-in fade-in slide-in-from-bottom-4"
              style={
                {
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "clamp(18px, 3vw, 26px)",
                  lineHeight: "1.5",
                  fontWeight: "400",
                  letterSpacing: "normal",
                  textAlign: "center",
                  textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                } as React.CSSProperties
              }
            >
              Let's discuss your project and bring your vision to life.
            </p>

            {onOpenInstall && (
              <Button
                onClick={onOpenInstall}
                className="group/btn relative mx-auto overflow-hidden rounded-lg bg-white px-8 py-4 font-mono text-sm font-semibold tracking-wider text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl md:px-10 md:py-5 md:text-base"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  letterSpacing: "0.56px",
                  height: "auto",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"></div>

                {/* Button content */}
                <div className="relative z-10 flex items-center">
                  <Download className="mr-2 h-4 w-4 stroke-[2.5px] transition-transform duration-300 group-hover/btn:translate-y-[-2px] md:h-5 md:w-5" />
                  <span>GET STARTED</span>
                </div>
              </Button>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
