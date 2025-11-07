/**
 * Design Tokens - Single Source of Truth
 * 
 * All design values used across the application should be defined here.
 * This ensures consistency and makes it easy to update the design system.
 */

// Typography Scale
export const typography = {
  // Font Families
  fontSans: "var(--font-geist-sans)",
  fontMono: "var(--font-geist-mono)",
  fontMatrix: '"Matrix", monospace',

  // Heading Styles
  heading: {
    hero: {
      mobile: {
        fontSize: "clamp(48px, 8vw, 154px)",
        lineHeight: "1.1",
        letterSpacing: "clamp(-2px, -0.04em, -5.18998px)",
      },
      desktop: {
        fontSize: "clamp(36px, 8vw, 154px)",
        lineHeight: "1.1",
        letterSpacing: "clamp(-2px, -0.04em, -5.18998px)",
      },
    },
    section: {
      fontSize: "clamp(32px, 6vw, 52px)",
      lineHeight: "1.1",
      letterSpacing: "clamp(-1.5px, -0.04em, -3px)",
    },
    cta: {
      fontSize: "clamp(28px, 5vw, 72px)",
      lineHeight: "1.1",
      letterSpacing: "clamp(-1.5px, -0.04em, -3px)",
    },
  },

  // Body Text Styles
  body: {
    hero: {
      mobile: {
        fontSize: "clamp(14px, 3.5vw, 22px)",
        lineHeight: "1.3",
      },
      desktop: {
        fontSize: "clamp(16px, 4vw, 24px)",
        lineHeight: "1.3",
      },
    },
    section: {
      fontSize: "clamp(18px, 3vw, 24px)",
      lineHeight: "1.3",
    },
    cta: {
      fontSize: "clamp(16px, 4vw, 24px)",
      lineHeight: "1.3",
    },
  },

  // Brand Text Styles
  brand: {
    logo: {
      fontSize: "22px",
      lineHeight: "1.1",
      fontWeight: "600",
      letterSpacing: "-0.02em",
    },
    byline: {
      fontSize: "9px",
      lineHeight: "1.2",
      fontWeight: "700",
      letterSpacing: "0.05em",
      opacity: 0.7,
    },
  },

  // Button Text Styles
  button: {
    primary: {
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: "600",
      letterSpacing: "0.56px",
    },
    secondary: {
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: "600",
      letterSpacing: "0.32px",
    },
  },
} as const;

// Spacing Scale
export const spacing = {
  // Section Padding
  section: {
    mobile: {
      paddingY: "py-12",
      paddingX: "px-4",
    },
    desktop: {
      paddingY: "md:py-16",
      paddingX: "sm:px-6 lg:px-8",
    },
  },

  // Hero Section
  hero: {
    mobile: {
      paddingTop: "pt-[38px]",
      paddingBottom: "pb-8",
      paddingX: "px-4",
    },
    desktop: {
      paddingTop: "sm:pt-[50px] md:pt-[70px]",
      paddingBottom: "md:pb-12",
      paddingX: "sm:px-6 lg:px-8",
    },
  },

  // CTA Section
  cta: {
    paddingTop: "pt-12 sm:pt-16 md:pt-20 lg:pt-24",
    paddingBottom: "pb-12 md:pb-16",
    paddingX: "px-4 sm:px-6 lg:px-8",
  },
} as const;

// Button Variants
export const buttonVariants = {
  primary: {
    className: "bg-foreground text-background flex h-[50px] w-full items-center justify-center rounded-lg px-4 font-mono text-xs font-semibold tracking-wider shadow-lg sm:h-[60px] sm:px-6 sm:text-sm md:text-base",
    desktop: {
      className: "bg-foreground text-background flex h-[50px] min-w-[180px] items-center justify-center rounded-lg px-4 font-mono text-sm font-semibold tracking-wider shadow-lg md:h-[60px] md:min-w-[220px] md:px-6 md:text-base lg:px-8",
    },
  },
  secondary: {
    className: "hover-lift border-border bg-card text-foreground flex h-[50px] w-full items-center justify-center rounded-lg border px-4 font-mono text-xs font-semibold tracking-wider shadow-lg sm:h-[60px] sm:px-6 sm:text-sm md:text-base",
    desktop: {
      className: "hover-lift border-border bg-card text-foreground flex h-[50px] min-w-[180px] items-center justify-center rounded-lg border px-4 font-mono text-sm font-semibold tracking-wider shadow-lg md:h-[60px] md:min-w-[220px] md:px-6 md:text-base lg:px-8",
    },
  },
} as const;

// Common Style Objects
export const commonStyles = {
  heading: {
    fontFamily: typography.fontSans,
    height: "auto",
    maxWidth: "100%",
    paddingBottom: "0",
    marginBottom: "0.2em",
    color: "var(--foreground)",
  },
  body: {
    fontFamily: typography.fontMono,
    fontWeight: "400",
    letterSpacing: "normal",
    color: "var(--foreground)",
    backgroundColor: "transparent",
    textAlign: "center" as const,
    "--selection-text-color": "var(--background)",
    "--selection-background-color": "var(--foreground)",
  },
} as const;

