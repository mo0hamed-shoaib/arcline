"use client";

import React from "react";
import { useState } from "react";
import { Download } from "lucide-react";

import AgenticAISearchSection from "@/components/agentic-ai-search-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import HeroImage from "@/components/hero-image";
import InstallModal from "@/components/install-modal";
import Navbar from "@/components/navbar";
import SaveReviewRestoreSection from "@/components/save-review-restore-section";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import VibeCodingTweetsSection from "@/components/vibe-coding-tweets-section";
import WhyNotGitSection from "@/components/why-not-git-section";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openInstallModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background pt-20 text-foreground">
      {/* Navigation */}
      <Navbar isBannerVisible={false} />

      {/* Rest of the content remains the same... */}
      <div className="relative mx-auto max-w-[1920px] px-6 md:px-8">
        {/* Hero Section */}
        <section className="rounded-all-devices relative mb-6 mt-2 flex flex-col rounded-[16px] text-foreground">
          {/* Gradient Background Image */}
          <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[16px]">
            <div className="gradient-primary-diagonal absolute inset-0 h-full w-full rounded-[16px]" />
            <div
              className="absolute inset-0 h-full w-full rounded-[16px]"
              style={{
                backgroundColor: "var(--hero-overlay)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full w-full flex-col px-4 pb-8 pt-[38px] text-center sm:px-6 sm:pt-[50px] md:pb-12 md:pt-[70px] lg:px-8">
            {/* Mobile Layout (Stack: Text -> Image -> Buttons) */}
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
                    color: "#FFFFFF",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
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
                      color: "#FFFFFF",
                      backgroundColor: "transparent",
                      // These styles ensure proper selection colors
                      "--selection-text-color": "#FFFFFF",
                      "--selection-background-color": "#000000",
                    } as React.CSSProperties
                  }
                >
                  Modern websites with AI-powered development. Tourism, e-commerce, portfolios, and
                  more.
                </p>
              </div>

              {/* Image in the middle for mobile */}
              <div className="mb-6 flex items-center justify-center">
                <div className="w-full">
                  <HeroImage />
                </div>
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
                    className="hover:bg-card/80 flex h-[50px] w-full items-center justify-center rounded-lg border border-border bg-card px-4 font-mono text-xs font-semibold tracking-wider text-foreground shadow-lg sm:h-[60px] sm:px-6 sm:text-sm md:text-base"
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
                  color: "#FFFFFF",
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
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
                    color: "#FFFFFF",
                    backgroundColor: "transparent",
                    // These styles ensure proper selection colors
                    "--selection-text-color": "#FFFFFF",
                    "--selection-background-color": "#000000",
                  } as React.CSSProperties
                }
              >
                Modern websites with AI-powered development. Tourism, e-commerce, portfolios, and
                more.
              </p>
              <div className="relative mb-8 flex w-full items-center justify-center overflow-hidden rounded-md">
                <div className="mx-auto w-full sm:w-[85%] md:max-w-[1200px]">
                  <HeroImage />
                </div>
              </div>
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
                  className="hover:bg-card/80 flex h-[50px] min-w-[180px] items-center justify-center rounded-lg border border-border bg-card px-4 font-mono text-sm font-semibold tracking-wider text-foreground shadow-lg md:h-[60px] md:min-w-[220px] md:px-6 md:text-base lg:px-8"
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
                "Tourism Websites",
                "E-commerce Platforms",
                "Personal Portfolios",
                "Business Websites",
                "Landing Pages",
                "Admin Dashboards",
                "Blog Platforms",
                "Booking Systems",
                "Product Showcases",
                "Corporate Sites",
                "Real Estate",
                "Restaurant Menus",
                "Event Pages",
                "SaaS Products",
                "Education Portals",
                "Healthcare Sites",
                "Non-profit Sites",
                "Art Galleries",
                "Tech Startups",
                "Custom Solutions",
              ].map((service, index) => (
                <div
                  key={`service-${index}`}
                  className="bg-card/50 hover:border-border/50 hover:bg-card/80 group flex h-14 min-w-[180px] items-center justify-center rounded-xl border border-border px-6 backdrop-blur-sm transition-all duration-300 md:h-16 md:min-w-[200px]"
                  style={{
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <span
                    className="font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "16px",
                      lineHeight: "1.2",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service}
                  </span>
                </div>
              ))}
            </Marquee>

            {/* Technologies Marquee - Right to Left */}
            <Marquee pauseOnHover reverse repeat={3} className="[--duration:50s] [--gap:1.5rem]">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "Supabase",
                "Framer Motion",
                "React",
                "Responsive Design",
                "SEO Optimized",
                "Fast Performance",
                "Modern UI/UX",
                "Accessible",
                "Mobile First",
                "Clean Code",
                "Testing",
                "Version Control",
                "API Integration",
                "State Management",
                "Component Library",
                "Tailored Solutions",
              ].map((tech, index) => (
                <div
                  key={`tech-${index}`}
                  className="bg-card/50 hover:border-border/50 hover:bg-card/80 group flex h-14 min-w-[160px] items-center justify-center rounded-xl border border-border px-6 backdrop-blur-sm transition-all duration-300 md:h-16 md:min-w-[180px]"
                  style={{
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <span
                    className="font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "16px",
                      lineHeight: "1.2",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {tech}
                  </span>
                </div>
              ))}
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
        <WhyNotGitSection onOpenInstall={openInstallModal} />
        <VibeCodingTweetsSection />
        <FAQSection onOpenInstall={openInstallModal} />
        <Footer />
      </div>

      <InstallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
