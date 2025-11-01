"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface AnnouncementBannerProps {
  onVisibilityChange?: (isVisible: boolean) => void;
}

interface BannerInfo {
  id: string;
  desktopText: string;
  mobileText: string;
  linkText: string;
  linkUrl: string;
}

const bannerInfos: BannerInfo[] = [
  {
    id: "ai-for-humans",
    desktopText: 'AI for Humans — "Robbits writing your code? Arcline\'s your safety net."',
    mobileText: 'AI for Humans — "Arcline\'s your safety net."',
    linkText: "Listen Now",
    linkUrl: "https://www.youtube.com/watch?v=ps8VJ2YeKvs&t=2203s",
  },
  {
    id: "ai-jason",
    desktopText:
      'AI Jason (200K) calls Arcline "Vibe Versioning" — Iterate UI in Cursor 10× faster',
    mobileText: 'AI Jason calls Arcline "Vibe Versioning"',
    linkText: "Watch Now",
    linkUrl: "https://youtu.be/JfMcFjD-tIA?si=sSr6SIvZfGOth7QV",
  },
  {
    id: "eric-tech",
    desktopText:
      'Eric Tech just dropped: "Vibe Coding with Gemini AI." Arcline featured in the workflow.',
    mobileText: 'Eric Tech: "Vibe Coding with Gemini AI." Arcline featured.',
    linkText: "Watch Gemini Workflow",
    linkUrl: "https://youtu.be/AMeMeWjQmsY?si=hqXmTiIzDWzBUkn7",
  },
];

export default function AnnouncementBanner({ onVisibilityChange }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  // const [slideDirection, setSlideDirection] = useState<"left" | "right">("right")

  const currentBanner = bannerInfos[currentBannerIndex];

  // Cycle through banners every 8 seconds
  useEffect(() => {
    if (!isVisible || bannerInfos.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      // Alternate slide direction for more dynamic feel
      // setSlideDirection((prev) => (prev === "right" ? "left" : "right"))

      setTimeout(() => {
        setCurrentBannerIndex((prev) => (prev + 1) % bannerInfos.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 8000); // 8 seconds per banner - gives users more time to read

    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  const handleClose = () => {
    setIsVisible(false);
    onVisibilityChange?.(false);
  };

  useEffect(() => {
    onVisibilityChange?.(isVisible);
  }, [isVisible, onVisibilityChange]);

  if (!isVisible) return null;

  const renderIcon = () => {
    // Show different icons based on banner type
    if (currentBanner.id === "visual-studio-magazine") {
      return (
        <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      );
    }

    // YouTube icon for video content
    return (
      <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
      </svg>
    );
  };

  // Simplified transition - just opacity and subtle scale
  const simpleTransition = isTransitioning
    ? "opacity-0 transform scale-98"
    : "opacity-100 transform scale-100";

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] border-b border-border bg-background">
      {/* Screen reader announcement for banner changes */}
      <div className="sr-only" aria-live="polite" aria-atomic="true" key={currentBanner.id}>
        {currentBanner.desktopText}
      </div>

      <div
        className="mx-auto flex min-h-[44px] max-w-7xl items-center justify-center px-4 py-2 sm:min-h-[52px] sm:py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Single unified animation group - gradient bar + content together */}
        <div
          className={`duration-600 flex items-center gap-3 transition-all ease-out motion-reduce:transform-none motion-reduce:transition-none ${simpleTransition}`}
        >
          {/* Gradient accent bar - now part of the main content group */}
          <div
            className={`gradient-icon-vertical h-4 w-1 rounded-full transition-all duration-300 ease-out motion-reduce:transition-none ${
              isTransitioning ? "scale-110 shadow-lg shadow-cyan-400/50" : "scale-100"
            }`}
          ></div>

          {/* Icon with subtle staggered animation */}
          <div
            className={`duration-600 transition-transform ease-out motion-reduce:transform-none motion-reduce:transition-none`}
            style={{
              transitionDelay: isTransitioning ? "50ms" : "100ms",
            }}
          >
            {renderIcon()}
          </div>

          {/* Text content */}
          <a
            href={currentBanner.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/90 cursor-pointer text-xs leading-tight sm:text-sm"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              lineHeight: "1.3",
            }}
          >
            <span className="hidden sm:inline">{currentBanner.desktopText} → </span>
            <span className="sm:hidden">{currentBanner.mobileText} →</span>
            <span className="decoration-foreground/30 hover:text-foreground/80 hover:decoration-foreground/60 text-foreground underline underline-offset-2 transition-colors">
              {currentBanner.linkText}
            </span>
          </a>
        </div>

        {/* Banner indicators - positioned absolutely to not affect centering */}
        {bannerInfos.length > 1 && (
          <div className="absolute right-16 hidden items-center gap-1.5 sm:flex">
            {bannerInfos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBannerIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out motion-reduce:transition-none ${
                  index === currentBannerIndex
                    ? "w-6 bg-foreground shadow-sm"
                    : "bg-foreground/30 hover:bg-foreground/50 w-1.5"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                aria-label={`Switch to banner ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Close button - positioned absolutely to not affect centering */}
        <button
          onClick={handleClose}
          className="hover:bg-accent/50 absolute right-4 flex-shrink-0 rounded-md p-1.5 text-muted-foreground transition-all duration-200 hover:text-foreground motion-reduce:transition-none"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
