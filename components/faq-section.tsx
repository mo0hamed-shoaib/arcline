import type { CSSProperties } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/content/faq";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";

export default function FAQSection() {
  return (
    <SectionShell className="relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader
          title="Frequently Asked Questions"
          align="left"
          className="mb-8 md:mb-12"
        />

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((faq, index) => (
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
                <span
                  data-question
                  className="text-left font-medium text-foreground transition-colors duration-300"
                >
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
    </SectionShell>
  );
}
