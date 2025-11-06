"use client";

import React, { Suspense, useState } from "react";
import {
  Activity,
  BookOpen,
  Building,
  Building2,
  Calendar,
  Code,
  Cpu,
  Download,
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

import AgenticAISearchSection from "@/components/agentic-ai-search-section";
import CTASection from "@/components/cta-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import InstallModal from "@/components/install-modal";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/pricing-section";
import Prism from "@/components/Prism";
import { PrismErrorBoundary } from "@/components/prism-error-boundary";
import SaveReviewRestoreSection from "@/components/save-review-restore-section";
import SEOPerformanceAccessibilitySection from "@/components/seo-performance-accessibility-section";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import VibeCodingTweetsSection from "@/components/vibe-coding-tweets-section";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrismReady, setIsPrismReady] = useState(false);
  const isMobile = useIsMobile();

  const openInstallModal = () => {
    setIsModalOpen(true);
  };

  // Responsive Prism scale - smaller on mobile for better visibility
  const prismScale = isMobile ? 2.2 : 3.6;

  // Trigger Prism animation when it's actually ready
  const handlePrismReady = () => {
    setIsPrismReady(true);
  };

  return (
    <div className="min-h-screen bg-background pt-20 text-foreground sm:pt-24">
      {/* Navigation */}
      <Navbar isBannerVisible={false} />

      {/* Hero Section - Full Width Immersive */}
      <section className="group relative isolate mb-6 mt-4 flex min-h-[500px] w-full flex-col overflow-hidden text-foreground sm:mb-8 sm:mt-6 sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
        {/* Prism Background - Full Width */}
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <PrismErrorBoundary
            fallback={
              <div className="via-background/95 to-background/90 h-full w-full bg-gradient-to-br from-background" />
            }
          >
            <Suspense
              fallback={
                <div className="via-background/95 to-background/90 h-full w-full bg-gradient-to-br from-background" />
              }
            >
              <div
                className="h-full w-full"
                style={{
                  opacity: isPrismReady ? 1 : 0,
                  transform: isPrismReady ? "scale(1)" : "scale(0.95)",
                  transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
                }}
              >
                <Prism
                  animationType="rotate"
                  timeScale={0.5}
                  height={3.5}
                  baseWidth={5.5}
                  scale={prismScale}
                  hueShift={0}
                  colorFrequency={1}
                  noise={0.5}
                  glow={1}
                  bloom={1}
                  transparent={true}
                  onReady={handlePrismReady}
                />
              </div>
            </Suspense>
          </PrismErrorBoundary>
        </div>

        {/* Fade Overlays - All Sides */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24"
          style={{ background: "var(--fade-gradient-left)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24"
          style={{ background: "var(--fade-gradient-right)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 md:h-24"
          style={{ background: "var(--fade-gradient-top)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:h-24"
          style={{ background: "var(--fade-gradient-bottom)" }}
        />

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1920px] flex-col items-center justify-center px-4 pb-12 pt-12 text-center sm:px-6 sm:pt-16 md:pb-16 md:pt-20 lg:px-8 lg:pt-24">
          {/* Mobile Layout (Stack: Text -> Buttons) */}
          <div className="flex flex-col md:hidden">
            <div className="mb-4">
              <h1
                className="heading-with-selection mb-2 select-text overflow-visible font-semibold duration-1000 animate-in fade-in slide-in-from-bottom-4"
                style={{
                  fontSize: "clamp(48px, 8vw, 154px)",
                  lineHeight: "1.1",
                  letterSpacing: "clamp(-2px, -0.04em, -5.18998px)",
                  fontFamily: "var(--font-geist-sans)",
                  height: "auto",
                  maxWidth: "100%",
                  paddingBottom: "0",
                  marginBottom: "0.2em",
                  color: "var(--foreground)",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
                aria-label="Build Your Vision"
              >
                Build Your Vision
              </h1>
              <p
                className="mx-auto mb-3 h-auto select-text delay-200 duration-1000 animate-in fade-in slide-in-from-bottom-4"
                style={
                  {
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "clamp(14px, 3.5vw, 22px)",
                    lineHeight: "1.3",
                    fontWeight: "400",
                    letterSpacing: "normal",
                    maxWidth: "2xl",
                    color: "var(--foreground)",
                    backgroundColor: "transparent",
                    textShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                    // These styles ensure proper selection colors
                    "--selection-text-color": "var(--background)",
                    "--selection-background-color": "var(--foreground)",
                  } as React.CSSProperties
                }
              >
                Modern websites with AI-powered development. Tourism, e-commerce, portfolios, and
                more.
              </p>
            </div>

            {/* Buttons at the bottom for mobile */}
            <div>
              <div className="mb-4 flex flex-col gap-3 sm:gap-4">
                <Button
                  className="flex h-[50px] w-full items-center justify-center rounded-lg bg-foreground px-4 font-mono text-xs font-semibold tracking-wider text-background shadow-lg sm:h-[60px] sm:px-6 sm:text-sm md:text-base"
                  onClick={openInstallModal}
                >
                  <Download className="mr-2 h-4 w-4" /> GET STARTED
                </Button>
                <a
                  href="https://x.com/jackjack_eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift flex h-[50px] w-full items-center justify-center rounded-lg border border-border bg-card px-4 font-mono text-xs font-semibold tracking-wider text-foreground shadow-lg sm:h-[60px] sm:px-6 sm:text-sm md:text-base"
                >
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  CONTACT ME
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout (Original) */}
          <div className="hidden md:flex md:flex-grow md:flex-col">
            <h1
              className="heading-with-selection mb-2 select-text overflow-visible font-semibold duration-1000 animate-in fade-in slide-in-from-bottom-4"
              style={{
                fontSize: "clamp(36px, 8vw, 154px)",
                lineHeight: "1.1",
                letterSpacing: "clamp(-2px, -0.04em, -5.18998px)",
                fontFamily: "var(--font-geist-sans)",
                height: "auto",
                maxWidth: "100%",
                paddingBottom: "0",
                marginBottom: "0.2em",
                color: "var(--foreground)",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
              aria-label="Build Your Vision"
            >
              Build Your Vision
            </h1>
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
                  color: "var(--foreground)",
                  backgroundColor: "transparent",
                  textShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                  // These styles ensure proper selection colors
                  "--selection-text-color": "var(--background)",
                  "--selection-background-color": "var(--foreground)",
                } as React.CSSProperties
              }
            >
              Modern websites with AI-powered development. Tourism, e-commerce, portfolios, and
              more.
            </p>
            <div className="flex flex-row justify-center gap-3 md:gap-4">
              <Button
                className="flex h-[50px] min-w-[180px] items-center justify-center rounded-lg bg-foreground px-4 font-mono text-sm font-semibold tracking-wider text-background shadow-lg md:h-[60px] md:min-w-[220px] md:px-6 md:text-base lg:px-8"
                onClick={openInstallModal}
              >
                <Download className="mr-2 h-4 w-4" /> GET STARTED
              </Button>
              <a
                href="https://x.com/jackjack_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift flex h-[50px] min-w-[180px] items-center justify-center rounded-lg border border-border bg-card px-4 font-mono text-sm font-semibold tracking-wider text-foreground shadow-lg md:h-[60px] md:min-w-[220px] md:px-6 md:text-base lg:px-8"
              >
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-6 md:px-8">
        <section className="bg-background py-12 md:py-16">
          <div className="mx-auto mb-12 max-w-6xl px-4 text-center sm:px-6">
            <h2
              className="mb-4 font-semibold"
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
              Services Tailored to You
            </h2>
            <p
              className="text-foreground/90 mx-auto mb-8 max-w-2xl"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "clamp(18px, 3vw, 24px)",
                lineHeight: "1.4",
                textAlign: "center",
              }}
            >
              From personal portfolios to complex e-commerce platforms. Built with modern tools and
              AI-powered development.
            </p>
          </div>

          {/* Marquee Container */}
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
                    className="bg-card/50 relative isolate flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-xl border border-border px-4 backdrop-blur-sm transition-all duration-300 md:h-16 md:min-w-[200px] md:gap-3 md:px-6"
                    style={{
                      boxShadow: "var(--shadow-md)",
                    }}
                    onMouseEnter={(e) => {
                      const card = e.currentTarget;
                      const icon = card.querySelector("svg");
                      const text = card.querySelector("span");
                      card.style.borderColor = "rgba(251, 146, 60, 0.4)";
                      card.style.boxShadow = "var(--shadow-lg), 0 0 20px rgba(251, 146, 60, 0.15)";
                      card.style.transform = "translateY(-2px)";
                      card.style.zIndex = "10";
                      if (icon) icon.style.color = "#fb923c";
                      if (text) text.style.color = "#fb923c";
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
                      className="font-semibold text-foreground transition-colors duration-300"
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
            <Marquee pauseOnHover reverse repeat={3} className="[--duration:50s] [--gap:1.5rem]">
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
                    className="bg-card/50 relative isolate flex h-14 min-w-[160px] items-center justify-center gap-2 rounded-xl border border-border px-4 backdrop-blur-sm transition-all duration-300 md:h-16 md:min-w-[180px] md:gap-3 md:px-6"
                    style={{
                      boxShadow: "var(--shadow-md)",
                    }}
                    onMouseEnter={(e) => {
                      const card = e.currentTarget;
                      const icon = card.querySelector("svg");
                      const text = card.querySelector("span");
                      card.style.borderColor = "rgba(251, 146, 60, 0.4)";
                      card.style.boxShadow = "var(--shadow-lg), 0 0 20px rgba(251, 146, 60, 0.15)";
                      card.style.transform = "translateY(-2px)";
                      card.style.zIndex = "10";
                      if (icon) icon.style.color = "#fb923c";
                      if (text) text.style.color = "#fb923c";
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
                      className="font-semibold text-foreground transition-colors duration-300"
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
        </section>

        <SaveReviewRestoreSection onOpenInstall={openInstallModal} />
        <AgenticAISearchSection onOpenInstall={openInstallModal} />
        <SEOPerformanceAccessibilitySection onOpenInstall={openInstallModal} />
        <PricingSection />
        <VibeCodingTweetsSection />
        <FAQSection />
        <CTASection onOpenInstall={openInstallModal} />
        <Footer />
      </div>

      <InstallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
