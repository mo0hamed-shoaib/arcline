"use client";

import React from "react";
import {
  Activity,
  BookOpen,
  Building,
  Building2,
  Calendar,
  Code,
  Cpu,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  HeartHandshake,
  Home as HomeIcon,
  LayoutDashboard,
  Package,
  Palette,
  Rocket,
  ShoppingCart,
  Sparkles,
  Target,
  User,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import AnimatedContent from "@/components/AnimatedContent";
import ClientTestimonialsSection from "@/components/client-testimonials-section";
import CTASection from "@/components/cta-section";
import CustomStackInsightsSection from "@/components/custom-stack-insights-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/pricing-section";
import ProjectsInMotionSection from "@/components/projects-in-motion-section";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { buttonVariants, spacing, typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { GrainGradient } from "@paper-design/shaders-react";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-20 sm:pt-24">
      {/* Navigation */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
        <AnimatedContent
          direction="vertical"
          distance={50}
          threshold={0}
          duration={0.9}
          ease="expo.out"
          animateOpacity
          initialOpacity={0}
          scale={0.98}
        >
          <Navbar isBannerVisible={false} />
        </AnimatedContent>
      </div>

      {/* Rest of the content */}
      <main className="mx-auto flex w-full max-w-[1320px] flex-col px-6 md:px-8">
        {/* Hero Section */}
        <section
          className={cn(
            "relative isolate flex flex-col items-center justify-center overflow-hidden rounded-(--radius-surface) rounded-all-devices text-foreground group",
            "min-h-[clamp(560px,calc(100vh-80px),720px)]",
            "mb-6 mt-2"
          )}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <GrainGradient
              width="100%"
              height="100%"
              fit="cover"
              colors={["#f97316", "#fb923c", "#fda4af", "#ffedd5"]}
              colorBack="#0f172a"
              softness={0.6}
              intensity={0.45}
              noise={0.28}
              shape="corners"
              speed={0.6}
            />
          </div>

          <div
            className={cn(
              "relative z-10 flex w-full flex-col items-center text-center",
              "gap-6 sm:gap-8",
              spacing.hero.mobile.paddingX,
              spacing.hero.desktop.paddingX,
              spacing.hero.mobile.paddingTop,
              spacing.hero.desktop.paddingTop,
              spacing.hero.mobile.paddingBottom,
              spacing.hero.desktop.paddingBottom
            )}
          >
            <AnimatedContent
              direction="vertical"
              distance={50}
              threshold={0}
              duration={1.1}
              ease="expo.out"
              scale={0.96}
              tilt={8}
              blurRadius={16}
            >
              <div className="mx-auto max-w-4xl">
                <h1 className="hero-heading heading-with-selection mb-4 select-text" aria-label="Build Your Vision">
                  Build Your Vision
                </h1>
              </div>
            </AnimatedContent>
            <AnimatedContent
              direction="vertical"
              distance={50}
              delay={0.2}
              threshold={0}
              duration={1.15}
              ease="expo.out"
              scale={0.965}
              tilt={6}
              blurRadius={12}
            >
              <div className="mx-auto max-w-3xl">
                <p className="hero-subhead select-text">
                  At Arcline, we craft standout modern websites—fast, responsive, and unforgettable—so your brand feels
                  premium, converts more customers, and stays ahead with AI-powered development.
                </p>
              </div>
            </AnimatedContent>
            <AnimatedContent
              direction="vertical"
              distance={50}
              delay={0.4}
              threshold={0}
              duration={1.2}
              ease="expo.out"
              scale={0.97}
              tilt={4}
              blurRadius={10}
            >
              <div className="flex w-full max-w-sm flex-col items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="md:w-auto"
                >
                  <a href="https://x.com/jackjack_eth" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Contact Me
                  </a>
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </section>

        <AnimatedContent direction="vertical" distance={50} duration={0.8} ease="power3.out">
          <section className="bg-background py-12 md:py-16">
            <div className="mx-auto mb-12 max-w-[1296px] px-4 text-center sm:px-6">
              <h2
                className="mb-4 font-semibold"
                style={{
                  backgroundImage: "var(--text-gradient)",
                  color: "transparent",
                  ...typography.heading.section,
                  fontFamily: typography.fontSans,
                  fontWeight: 600,
                  textAlign: "center",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Services Tailored to You
              </h2>
              <p
                className="section-subhead mb-8"
              >
                Launch-ready builds across tourism, SaaS, and commerce.
              </p>
            </div>

            {/* Marquee Container */}
            <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-6">
              <div className="relative w-full overflow-hidden">
                {/* Services Marquee - Left to Right */}
                <Marquee
                  pauseOnHover
                  repeat={3}
                  className="mb-6 [--duration:50s] [--gap:1.5rem] md:mb-6"
                >
                  {[
                    { name: "Tourism Websites", icon: Globe },
                    { name: "E-commerce Platforms", icon: ShoppingCart },
                    { name: "Personal Portfolios", icon: User },
                    { name: "Business Websites", icon: Building2 },
                    { name: "Landing Pages", icon: Rocket },
                    { name: "Admin Dashboards", icon: LayoutDashboard },
                    { name: "Blog Platforms", icon: BookOpen },
                    { name: "Booking Systems", icon: Calendar },
                    { name: "Product Showcases", icon: Package },
                    { name: "Corporate Sites", icon: Building },
                    { name: "Real Estate", icon: HomeIcon },
                    { name: "Restaurant Menus", icon: UtensilsCrossed },
                    { name: "Event Pages", icon: Sparkles },
                    { name: "SaaS Products", icon: Zap },
                    { name: "Education Portals", icon: GraduationCap },
                    { name: "Healthcare Sites", icon: Activity },
                    { name: "Non-profit Sites", icon: HeartHandshake },
                    { name: "Art Galleries", icon: Palette },
                    { name: "Tech Startups", icon: Code },
                    { name: "Custom Solutions", icon: Sparkles },
                  ].map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={`service-${index}`}
                        className="bg-card/50 border-border rounded-(--radius-surface) relative isolate flex h-14 min-w-[180px] items-center justify-center gap-2 border px-4 backdrop-blur-sm transition-all duration-300 md:h-16 md:min-w-[200px] md:gap-3 md:px-6"
                        style={{
                          boxShadow: "var(--shadow-md)",
                        }}
                        onMouseEnter={(e) => {
                          const card = e.currentTarget;
                          const icon = card.querySelector("svg");
                          const text = card.querySelector("span");
                          card.style.borderColor = "var(--accent-orange-40)";
                          card.style.boxShadow =
                            "var(--shadow-lg), 0 0 20px var(--accent-orange-15)";
                          card.style.transform = "translateY(-2px)";
                          card.style.zIndex = "10";
                          if (icon) icon.style.color = "var(--accent-orange)";
                          if (text) text.style.color = "var(--accent-orange)";
                        }}
                        onMouseLeave={(e) => {
                          const card = e.currentTarget;
                          const icon = card.querySelector("svg");
                          const text = card.querySelector("span");
                          card.style.borderColor = "";
                          card.style.boxShadow = "var(--shadow-md)";
                          card.style.transform = "";
                          card.style.zIndex = "";
                          if (icon) icon.style.color = "";
                          if (text) text.style.color = "";
                        }}
                      >
                        <Icon className="text-foreground/70 h-4 w-4 transition-colors duration-300 md:h-5 md:w-5" />
                        <span
                          className="text-foreground font-semibold transition-colors duration-300"
                          style={{
                            fontFamily: "var(--font-geist-sans)",
                            fontSize: "16px",
                            lineHeight: "1.2",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {service.name}
                        </span>
                      </div>
                    );
                  })}
                </Marquee>

                {/* Technologies Marquee - Right to Left */}
                <Marquee
                  pauseOnHover
                  reverse
                  repeat={3}
                  className="[--duration:50s] [--gap:1.5rem]"
                >
                  {[
                    { name: "Next.js", icon: Zap },
                    { name: "TypeScript", icon: Code },
                    { name: "Tailwind CSS", icon: Palette },
                    { name: "shadcn/ui", icon: Package },
                    { name: "Supabase", icon: Cpu },
                    { name: "Framer Motion", icon: Sparkles },
                    { name: "React", icon: Zap },
                    { name: "Responsive Design", icon: Target },
                    { name: "SEO Optimized", icon: Rocket },
                    { name: "Fast Performance", icon: Zap },
                    { name: "Modern UI/UX", icon: Sparkles },
                    { name: "Accessible", icon: Heart },
                    { name: "Mobile First", icon: Target },
                    { name: "Clean Code", icon: FileText },
                    { name: "Testing", icon: Target },
                    { name: "Version Control", icon: Code },
                    { name: "API Integration", icon: Zap },
                    { name: "State Management", icon: Cpu },
                    { name: "Component Library", icon: Package },
                    { name: "Tailored Solutions", icon: Sparkles },
                  ].map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={`tech-${index}`}
                        className="bg-card/50 border-border rounded-(--radius-surface) relative isolate flex h-14 min-w-[160px] items-center justify-center gap-2 border px-4 backdrop-blur-sm transition-all duration-300 md:h-16 md:min-w-[180px] md:gap-3 md:px-6"
                        style={{
                          boxShadow: "var(--shadow-md)",
                        }}
                        onMouseEnter={(e) => {
                          const card = e.currentTarget;
                          const icon = card.querySelector("svg");
                          const text = card.querySelector("span");
                          card.style.borderColor = "var(--accent-orange-40)";
                          card.style.boxShadow =
                            "var(--shadow-lg), 0 0 20px var(--accent-orange-15)";
                          card.style.transform = "translateY(-2px)";
                          card.style.zIndex = "10";
                          if (icon) icon.style.color = "var(--accent-orange)";
                          if (text) text.style.color = "var(--accent-orange)";
                        }}
                        onMouseLeave={(e) => {
                          const card = e.currentTarget;
                          const icon = card.querySelector("svg");
                          const text = card.querySelector("span");
                          card.style.borderColor = "";
                          card.style.boxShadow = "var(--shadow-md)";
                          card.style.transform = "";
                          card.style.zIndex = "";
                          if (icon) icon.style.color = "";
                          if (text) text.style.color = "";
                        }}
                      >
                        <Icon className="text-foreground/70 h-4 w-4 transition-colors duration-300 md:h-5 md:w-5" />
                        <span
                          className="text-foreground font-semibold transition-colors duration-300"
                          style={{
                            fontFamily: "var(--font-geist-sans)",
                            fontSize: "16px",
                            lineHeight: "1.2",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
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
          </section>
        </AnimatedContent>

        <ProjectsInMotionSection />
        <CustomStackInsightsSection />
        <PricingSection />
        <ClientTestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
