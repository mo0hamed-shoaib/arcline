"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"div"> {
  duration?: number;
  variant?: "icon" | "split";
  onCloseMobileMenu?: () => void;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  variant = "split",
  onCloseMobileMenu,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { theme, setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const iconButtonRef = useRef<HTMLButtonElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [mounted]);

  const changeTheme = useCallback(
    async (newTheme: "light" | "dark") => {
      if (!mounted) return;
      if (theme === newTheme) return; // Don't animate if already on this theme

      // Use the appropriate ref based on variant
      const elementRef = variant === "icon" ? iconButtonRef.current : containerRef.current;
      if (!elementRef) return;

      await document.startViewTransition(() => {
        flushSync(() => {
          setIsDark(newTheme === "dark");
          setTheme(newTheme);
        });
      }).ready;

      const { top, left, width, height } = elementRef.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top)
      );

      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );

      // Close mobile menu if provided
      if (onCloseMobileMenu) {
        setTimeout(onCloseMobileMenu, 100);
      }
    },
    [duration, theme, setTheme, mounted, onCloseMobileMenu, variant]
  );

  if (!mounted) {
    return <div className="h-10 w-10" />;
  }

  // Icon-only variant for desktop
  if (variant === "icon") {
    return (
      <button
        ref={iconButtonRef}
        onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
        className={cn("flex items-center justify-center", className)}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-foreground" />
        ) : (
          <Moon className="h-5 w-5 text-foreground" />
        )}
      </button>
    );
  }

  // Split button variant
  return (
    <div
      ref={containerRef}
      className={cn(
        "flex items-stretch overflow-hidden rounded-lg border border-border bg-transparent",
        className
      )}
      {...props}
    >
      <button
        onClick={() => changeTheme("light")}
        className={cn(
          "flex flex-1 items-center justify-center gap-2 px-3 py-2 text-sm font-semibold transition-colors",
          theme === "light"
            ? "bg-foreground text-background"
            : "bg-transparent text-foreground hover:bg-accent/50"
        )}
        aria-label="Switch to light mode"
      >
        <Sun className="h-4 w-4" />
        <span>Light</span>
      </button>
      <div className="w-px bg-border" />
      <button
        onClick={() => changeTheme("dark")}
        className={cn(
          "flex flex-1 items-center justify-center gap-2 px-3 py-2 text-sm font-semibold transition-colors",
          theme === "dark"
            ? "bg-foreground text-background"
            : "bg-transparent text-foreground hover:bg-accent/50"
        )}
        aria-label="Switch to dark mode"
      >
        <Moon className="h-4 w-4" />
        <span>Dark</span>
      </button>
    </div>
  );
};
