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

        {/* Call to action */}
        <div className="mt-12 text-center md:mt-16">
          <p
            className="mb-6 text-white/80"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            Ready to get started? Let's discuss your project and bring your vision to life.
          </p>

          {onOpenInstall && (
            <Button
              onClick={onOpenInstall}
              className="rounded-lg bg-white px-6 py-3 font-mono text-sm font-semibold tracking-wider text-black hover:bg-gray-100"
              style={{
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "0.56px",
                height: "48px",
              }}
            >
              <Download className="mr-2 h-4 w-4 stroke-[2.5px]" />
              GET STARTED
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
