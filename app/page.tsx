import React from "react";
import { AnimatedSection } from "@/components/animation/AnimatedSection";
import ClientTestimonialsSection from "@/components/client-testimonials-section";
import CTASection from "@/components/cta-section";
import CustomStackInsightsSection from "@/components/custom-stack-insights-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NavbarShell from "@/components/navbar-shell";
import PricingSection from "@/components/pricing-section";
import ProjectsInMotionSection from "@/components/projects-in-motion-section";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-20 sm:pt-24">
      {/* Navigation */}
      <NavbarShell />

      {/* Rest of the content */}
      <main className="mx-auto flex w-full max-w-[1296px] flex-col px-6 md:px-8">
        {/* Hero Section */}
        <HeroSection />

        <AnimatedSection>
          <CustomStackInsightsSection />
        </AnimatedSection>

        <AnimatedSection>
          <ProjectsInMotionSection />
        </AnimatedSection>

        <AnimatedSection>
          <ClientTestimonialsSection />
        </AnimatedSection>

        <AnimatedSection>
          <PricingSection />
        </AnimatedSection>

        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>

        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
        <Footer />
      </main>
    </div>
  );
}
