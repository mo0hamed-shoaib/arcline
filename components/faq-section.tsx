"use client";

import type { CSSProperties } from "react";

import AnimatedContent from "@/components/AnimatedContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function FAQSection() {
  return (
    <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="section-head mb-12 md:mb-16">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="faq-item bg-card/50 group relative isolate overflow-hidden rounded-[var(--radius-surface)] border backdrop-blur-sm transition-all duration-300"
                style={
                  {
                    "--card-shadow": "var(--shadow-md)",
                    "--card-border-hover": "var(--accent-orange-40)",
                    "--card-shadow-hover": "var(--shadow-lg), 0 0 20px var(--accent-orange-15)",
                  } as CSSProperties
                }
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline">
                  <span data-question className="text-left font-medium text-foreground transition-colors duration-300">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-0">
                  <p className="mono-body text-foreground/80 text-sm leading-6 md:text-[15px] md:leading-[1.5]">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </AnimatedContent>
  );
}
