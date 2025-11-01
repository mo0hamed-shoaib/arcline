"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";

import InstallModal from "@/components/install-modal";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isBannerVisible?: boolean;
}

export default function Navbar({ isBannerVisible = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);

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
    boxShadow: scrolled
      ? "0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0), 0 5px 18px 0 rgba(204,204,204,0.1)"
      : "none",
    border: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
    borderRadius: "16px",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div
      className={`fixed ${isBannerVisible ? "top-[44px] sm:top-12" : "top-0"} left-0 right-0 z-50 flex justify-center px-6 transition-all duration-300 md:px-8`}
    >
      <div className="mt-2 w-[calc(100%-24px)] max-w-[1400px]">
        <nav
          className="font-geist flex h-16 items-center justify-between rounded-[16px] bg-black p-2 text-white"
          style={navStyle}
        >
          <div className="ml-[15px] flex items-center">
            <Image
              src="/dark_mode_logo/favicon-32x32.png"
              alt="Arcline Logo"
              width={32}
              height={32}
              className="mr-2"
              priority
            />
            <span
              className="logo-text"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "18px",
                lineHeight: "1.1",
                fontWeight: "600",
                letterSpacing: "-0.04em",
                color: "#FFFFFF",
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
                className="rounded-lg border border-white/30 bg-transparent hover:bg-white/10"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: "600",
                  letterSpacing: "0.32px",
                  color: "#FFFFFF",
                  height: "48px",
                }}
              >
                FEEDBACK
              </Button>
            </a>
            <Button
              className="h-12 rounded-lg bg-white px-6 text-black hover:bg-gray-200"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: "600",
                letterSpacing: "0.56px",
                color: "#000000",
                height: "48px",
                borderRadius: "8px",
              }}
              onClick={() => setIsInstallModalOpen(true)}
            >
              <Download className="mr-2 h-4 w-4 stroke-[2.5px]" />
              INSTALL
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="mr-2 flex items-center justify-center rounded-md p-2 transition-colors hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            <div
              className={`fixed inset-0 z-40 bg-black bg-opacity-50 ${mobileMenuClosing ? "duration-200 animate-out fade-out" : "duration-200 animate-in fade-in"}`}
              onClick={handleCloseMobileMenu}
            />
            <div
              className={`fixed right-6 top-[76px] z-50 w-[calc(100%-48px)] max-w-[400px] transform rounded-[16px] border border-[#1a1a1a] bg-black shadow-lg ${mobileMenuClosing ? "duration-200 animate-out fade-out slide-out-to-top-2" : "duration-300 animate-in fade-in slide-in-from-top-2"}`}
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
                    className="w-full justify-start rounded-lg border border-white/30 bg-transparent hover:bg-white/10"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "14px",
                      lineHeight: "18px",
                      fontWeight: "600",
                      letterSpacing: "0.32px",
                      color: "#FFFFFF",
                      height: "48px",
                    }}
                  >
                    FEEDBACK
                  </Button>
                </a>
                <Button
                  className="w-full justify-start rounded-lg bg-white text-black hover:bg-gray-200"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "600",
                    letterSpacing: "0.56px",
                    color: "#000000",
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
