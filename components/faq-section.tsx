"use client";

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
                className="bg-card/50 group relative isolate overflow-hidden rounded-[var(--radius-surface)] border border-border backdrop-blur-sm transition-all duration-300"
                style={{
                  boxShadow: "var(--shadow-md)",
                }}
                onMouseEnter={(e) => {
                  const item = e.currentTarget;
                  const question = item.querySelector("[data-question]");
                  item.style.borderColor = "var(--accent-orange-40)";
                  item.style.boxShadow = "var(--shadow-lg), 0 0 20px var(--accent-orange-15)";
                  item.style.transform = "translateY(-2px)";
                  item.style.zIndex = "10";
                  if (question) (question as HTMLElement).style.color = "var(--accent-orange)";
                }}
                onMouseLeave={(e) => {
                  const item = e.currentTarget;
                  const question = item.querySelector("[data-question]");
                  item.style.borderColor = "";
                  item.style.boxShadow = "var(--shadow-md)";
                  item.style.transform = "";
                  item.style.zIndex = "";
                  if (question) (question as HTMLElement).style.color = "";
                }}
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline">
                  <span
                    data-question
                    className="text-left font-medium text-foreground transition-colors duration-300"
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
      </section>
    </AnimatedContent>
  );
}
