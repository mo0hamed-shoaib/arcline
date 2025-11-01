"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Download, Menu, X } from "lucide-react";

import InstallModal from "@/components/install-modal";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isBannerVisible?: boolean;
}

export default function Navbar({ isBannerVisible = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debounce the scroll handler to prevent flickering
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    // Initial check on mount
    handleScroll();

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle mobile menu closing animation
  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setMobileMenuClosing(false);
    }, 200); // Match animation duration
  }, []);

  // Apply styles consistently
  const navStyle = {
    boxShadow: scrolled ? "var(--shadow-md)" : "none",
    border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    borderRadius: "16px",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div
      className={`fixed ${isBannerVisible ? "top-[44px] sm:top-12" : "top-0"} left-0 right-0 z-50 flex justify-center px-6 transition-all duration-300 md:px-8`}
    >
      <div className="mt-2 w-[calc(100%-24px)] max-w-[1400px]">
        <nav
          className="font-geist border-border/50 flex h-16 items-center justify-between rounded-[16px] border bg-background p-2 text-foreground"
          style={navStyle}
        >
          <div className="ml-[15px] flex items-center">
            {mounted && (
              <Image
                src={
                  theme === "light"
                    ? "/light_mode_logo/favicon-32x32.png"
                    : "/dark_mode_logo/favicon-32x32.png"
                }
                alt="Arcline Logo"
                width={28}
                height={28}
                className="mr-3"
                priority
              />
            )}
            {!mounted && <div className="mr-3 h-7 w-7" />}
            <span
              className="logo-text"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "22px",
                lineHeight: "1.1",
                fontWeight: "600",
                letterSpacing: "-0.02em",
                color: "var(--foreground)",
                width: "auto",
                height: "auto",
              }}
            >
              Arcline
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 md:flex">
            <a href="https://tally.so/r/n0l7BB" target="_blank" rel="noopener noreferrer">
              <Button
                className="hover:bg-accent/50 rounded-lg border border-border bg-transparent"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: "600",
                  letterSpacing: "0.32px",
                  color: "var(--foreground)",
                  height: "48px",
                }}
              >
                FEEDBACK
              </Button>
            </a>
            <Button
              className="hover:bg-foreground/90 h-12 rounded-lg bg-foreground px-6 text-background"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: "600",
                letterSpacing: "0.56px",
                color: "var(--background)",
                height: "48px",
                borderRadius: "8px",
              }}
              onClick={() => setIsInstallModalOpen(true)}
            >
              <Download className="mr-2 h-4 w-4 stroke-[2.5px]" />
              INSTALL
            </Button>
            <AnimatedThemeToggler
              variant="icon"
              className="hover:bg-accent/50 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-transparent"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="hover:bg-accent/50 mr-2 flex items-center justify-center rounded-md p-2 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            <div
              className={`bg-background/80 fixed inset-0 z-40 backdrop-blur-sm ${mobileMenuClosing ? "duration-200 animate-out fade-out" : "duration-200 animate-in fade-in"}`}
              onClick={handleCloseMobileMenu}
            />
            <div
              className={`fixed right-6 top-[76px] z-50 w-[calc(100%-48px)] max-w-[400px] transform rounded-[16px] border border-border bg-card shadow-lg ${mobileMenuClosing ? "duration-200 animate-out fade-out slide-out-to-top-2" : "duration-300 animate-in fade-in slide-in-from-top-2"}`}
            >
              <div className="flex flex-col gap-4 p-4">
                <a
                  href="https://tally.so/r/n0l7BB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={handleCloseMobileMenu}
                >
                  <Button
                    className="hover:bg-accent/50 w-full justify-start rounded-lg border border-border bg-transparent"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "14px",
                      lineHeight: "18px",
                      fontWeight: "600",
                      letterSpacing: "0.32px",
                      color: "var(--foreground)",
                      height: "48px",
                    }}
                  >
                    FEEDBACK
                  </Button>
                </a>
                <Button
                  className="hover:bg-foreground/90 w-full justify-start rounded-lg bg-foreground text-background"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "600",
                    letterSpacing: "0.56px",
                    color: "var(--background)",
                    height: "48px",
                    borderRadius: "8px",
                  }}
                  onClick={() => {
                    handleCloseMobileMenu();
                    setIsInstallModalOpen(true);
                  }}
                >
                  <Download className="mr-2 h-4 w-4 stroke-[2.5px]" />
                  INSTALL
                </Button>
                <AnimatedThemeToggler
                  variant="split"
                  onCloseMobileMenu={handleCloseMobileMenu}
                  className="w-full"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    height: "48px",
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Install Modal */}
      <InstallModal isOpen={isInstallModalOpen} onClose={() => setIsInstallModalOpen(false)} />
    </div>
  );
}
