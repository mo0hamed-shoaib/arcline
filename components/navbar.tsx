"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { typography } from "@/lib/design-tokens";

interface NavbarProps {
  isBannerVisible?: boolean;
}

export default function Navbar({ isBannerVisible }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
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

  // Apply styles consistently
  const navStyle = {
    boxShadow: scrolled ? "var(--shadow-md)" : "none",
    border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    borderRadius: "var(--radius-surface)",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div
      className={`${isBannerVisible ? "top-[44px] sm:top-12" : "top-0"} relative left-0 right-0 flex justify-center transition-all duration-300`}
    >
      <div className="mt-4 mx-auto w-full max-w-[1296px] px-6 md:px-8">
        <nav
          className="font-geist border-border/50 bg-background text-foreground flex h-16 items-center justify-between rounded-xl border p-2"
          style={navStyle}
        >
          <Link href="/" className="hover-lift ml-[15px] flex items-center">
            {mounted && (
              <Image
                src={
                  (resolvedTheme ?? theme) === "dark"
                    ? "/arcline-dark-mode.svg"
                    : "/arcline-light-mode.svg"
                }
                alt="Arcline Logo"
                width={28}
                height={28}
                className="mr-3 h-7 w-7"
                sizes="28px"
                priority
                fetchPriority="high"
              />
            )}
            {!mounted && <div className="mr-3 h-7 w-7" />}
            <div className="flex flex-col">
              <span
                className="logo-text font-mono-ui"
                style={{
                  ...typography.brand.logo,
                  color: "var(--foreground)",
                  width: "auto",
                  height: "auto",
                }}
              >
                Arcline
              </span>
              <span
                style={{
                  ...typography.brand.byline,
                  color: "var(--foreground)",
                }}
                className="font-matrix"
              >
                By Jimmy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 md:flex">
            <a href="https://tally.so/r/n0l7BB" target="_blank" rel="noopener noreferrer">
              <Button
                className="btn-nav h-12 px-4 font-sans-ui text-[14px] leading-[18px] font-semibold tracking-[0.32px]"
              >
                FEEDBACK
              </Button>
            </a>
            <AnimatedThemeToggler
              variant="icon"
              className="btn-icon h-12 w-12"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <DrawerTrigger asChild>
                <button
                  className="hover:bg-accent/50 mr-2 flex items-center justify-center rounded-md p-2 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="text-foreground h-6 w-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="sr-only">
                  <DrawerTitle>Mobile navigation menu</DrawerTitle>
                  <DrawerDescription>Links and settings for Arcline.</DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-col gap-4 p-4">
                  <a
                    href="https://tally.so/r/n0l7BB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      className="btn-nav w-full justify-center h-12 px-4 font-sans-ui text-[14px] leading-[18px] font-semibold tracking-[0.32px]"
                    >
                      FEEDBACK
                    </Button>
                  </a>
                  <AnimatedThemeToggler
                    variant="split"
                    onCloseMobileMenu={() => setMobileMenuOpen(false)}
                    className="w-full font-sans-ui h-12"
                  />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </div>
    </div>
  );
}
