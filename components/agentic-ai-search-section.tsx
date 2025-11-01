"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Play } from "lucide-react";

import FeatureVideo from "@/components/feature-video";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SearchQuery {
  id: string;
  question: string;
  videoSrc: string;
  fallbackSrc?: string;
  category: string;
}

const searchQueries: SearchQuery[] = [
  {
    id: "tourism",
    question: "Show tourism website examples",
    videoSrc: "/videos/favorites.mp4",
    fallbackSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favorites-FFCUeeEFzfxDBIhgGACi7YGpYQZbnU.mp4",
    category: "Portfolio",
  },
  {
    id: "ecommerce",
    question: "E-commerce platform showcase",
    videoSrc: "/videos/update-windsurf.mp4",
    fallbackSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/update-windsurf-2nLOc5uJICad4940kOGQdrwE4nsXdo.mp4",
    category: "Services",
  },
  {
    id: "portfolio",
    question: "Personal portfolio designs",
    videoSrc: "/videos/dark-mode-search.mp4",
    fallbackSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark-mode-search-mSz6mUD1V8RUdjEfezII84ljPxeCyT.mp4",
    category: "Design",
  },
  {
    id: "production",
    question: "Production-ready solutions",
    videoSrc: "/videos/did-v9.mp4",
    fallbackSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/did-v9-sNyHkh5hs5gfnDH0tYkH15uK5syHUX.mp4",
    category: "Quality",
  },
];

interface AgenticAISearchSectionProps {
  onOpenInstall?: () => void;
}

export default function AgenticAISearchSection({ onOpenInstall }: AgenticAISearchSectionProps) {
  const [activeQuery, setActiveQuery] = useState(searchQueries[0]);
  const [hoveredQuery, setHoveredQuery] = useState<string | null>(null);
  const videoCache = useRef<{ [key: string]: HTMLVideoElement }>({});
  const [isHovering, setIsHovering] = useState(false);

  // Improved video preloading without autoplay
  useEffect(() => {
    const preloadVideos = async () => {
      // Preload the videos in the background
      for (const query of searchQueries) {
        try {
          const video = document.createElement("video");
          video.muted = true;
          video.preload = "auto";
          video.playsInline = true;
          video.loop = true;
          // Remove autoplay - controlled by intersection observer

          videoCache.current[query.id] = video;

          video.src = query.videoSrc;

          video.onerror = () => {
            if (query.fallbackSrc) {
              video.src = query.fallbackSrc;
            }
          };
        } catch (error) {
          console.warn(`Failed to preload video for query ${query.id}:`, error);
        }
      }
    };

    preloadVideos();

    return () => {
      Object.values(videoCache.current).forEach((video) => {
        video.src = "";
        video.load();
      });
      videoCache.current = {};
    };
  }, []);

  const handleQueryClick = (query: SearchQuery) => {
    setActiveQuery(query);
  };

  // Simplified hover handling - no delay
  const handleQueryHover = (query: SearchQuery) => {
    if (isHovering) {
      setHoveredQuery(query.id);
      setActiveQuery(query);
    }
  };

  const handleSectionEnter = () => {
    setIsHovering(true);
  };

  const handleSectionLeave = () => {
    setIsHovering(false);
    setHoveredQuery(null);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Portfolio":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-400/30";
      case "Services":
        return "bg-orange-500/20 text-orange-300 border-orange-400/30";
      case "Quality":
        return "bg-pink-500/20 text-pink-300 border-pink-400/30";
      case "Design":
        return "bg-purple-500/20 text-purple-300 border-purple-400/30";
      default:
        return "bg-white/20 text-white border-white/30";
    }
  };

  return (
    <section className="py-12 md:py-16">
      {/* Title and Description */}
      <div className="mb-6 px-4 text-center md:mb-12">
        <h2
          className="mb-4 font-semibold"
          style={{
            backgroundImage:
              "linear-gradient(rgb(245, 245, 245), rgb(245, 245, 245) 29%, rgb(153, 153, 153))",
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
          Built with Modern Tools
        </h2>
        <p
          className="mx-auto max-w-2xl"
          style={{
            color: "#f5f5f5",
            fontFamily: "var(--font-geist-mono)",
            fontSize: "clamp(16px, 3vw, 22px)",
            lineHeight: "1.3",
            textAlign: "center",
          }}
        >
          Using Next.js, TypeScript, Tailwind CSS, shadcn/ui and Supabase to build exactly what you
          need.
        </p>
      </div>

      {/* Card Section with Video */}
      <div className="flex justify-center">
        <Card
          className="relative w-full max-w-[1296px] overflow-hidden rounded-[16px] border border-white/15 bg-black/90 backdrop-blur-sm"
          style={{
            boxShadow:
              "0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0), 0 5px 18px 0 rgba(204,204,204,0.1)",
          }}
        >
          {/* Noise Overlay */}
          <div className="noise-texture"></div>

          {/* Video Section - Fits tightly in card */}
          <div className="relative z-10">
            <div className="relative w-full overflow-hidden shadow-2xl">
              <FeatureVideo
                src={activeQuery.videoSrc}
                alt={`Agentic AI Search: ${activeQuery.question}`}
                fallbackSrc={activeQuery.fallbackSrc}
                fixedAspectRatio={true}
              />

              {/* Mobile Navigation Dots - Only visible on mobile */}
              <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 transform lg:hidden">
                <div className="flex gap-2 rounded-full bg-black/50 px-3 py-2 backdrop-blur-sm">
                  {searchQueries.map((query) => (
                    <button
                      key={query.id}
                      onClick={() => setActiveQuery(query)}
                      className={`h-2 w-2 rounded-full transition-all duration-200 ${
                        activeQuery.id === query.id
                          ? "w-6 bg-white"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Switch to query: ${query.question}`}
                    />
                  ))}
                </div>
              </div>

              {/* Gradient Overlay for Text Readability - HIDDEN on mobile and tablet */}
              <div
                className="pointer-events-none absolute inset-0 hidden lg:block"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 40%, transparent 70%)",
                }}
              ></div>

              {/* Overlay Content on top of the video - HIDDEN on mobile and tablet */}
              <div
                className="absolute inset-0 z-20 hidden flex-col justify-end p-6 lg:flex lg:p-8"
                onMouseEnter={handleSectionEnter}
                onMouseLeave={handleSectionLeave}
              >
                {/* Bottom Section: Content Left, Query Buttons Right */}
                <div className="flex items-end justify-between gap-4 lg:gap-8">
                  {/* Left: Feature Info and Install Button - KEEPING ORIGINAL DESIGN */}
                  <div className="max-w-xs flex-1 lg:max-w-md">
                    <h3
                      className="mb-3 text-xl font-semibold text-white lg:text-2xl"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        letterSpacing: "-0.02em",
                        textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      AI Search
                    </h3>
                    <p
                      className="mb-6 text-base text-white/95 lg:text-lg"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        lineHeight: "1.4",
                        textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      "{activeQuery.question}"
                    </p>
                    {onOpenInstall && (
                      <Button
                        onClick={onOpenInstall}
                        className="rounded-lg bg-white px-6 py-3 font-mono text-sm font-semibold tracking-wider text-black shadow-lg hover:bg-gray-100"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          letterSpacing: "0.56px",
                          height: "48px",
                        }}
                      >
                        <Download className="mr-2 h-4 w-4 stroke-[2.5px]" />
                        INSTALL NOW
                      </Button>
                    )}
                  </div>

                  {/* Right: Enhanced Query Buttons - FIXED WIDTH CONTAINER */}
                  <div className="flex max-w-xs flex-col gap-2">
                    {/* Fixed width container for all buttons to prevent layout shifts */}
                    <div className="flex w-[240px] flex-col gap-2">
                      {searchQueries.map((query) => (
                        <button
                          key={query.id}
                          onClick={() => handleQueryClick(query)}
                          onMouseEnter={() => handleQueryHover(query)}
                          className={`group relative rounded-xl border-2 p-3 text-left transition-colors duration-200 ${
                            activeQuery.id === query.id
                              ? "border-white/60 bg-white/15 text-white shadow-lg"
                              : "border-white/20 bg-black/30 text-white/90 hover:border-white/40 hover:bg-white/10"
                          }`}
                          style={{
                            backdropFilter: "blur(8px)",
                            height: "auto",
                            minHeight: "64px",
                          }}
                        >
                          <div className="flex items-start gap-2">
                            <div className="min-w-0 flex-1">
                              {/* Category Badge */}
                              <div className="mb-1 flex items-center gap-2">
                                <span
                                  className={`rounded border px-1.5 py-0.5 text-[10px] font-medium ${getCategoryColor(
                                    query.category
                                  )}`}
                                  style={{
                                    fontFamily: "var(--font-geist-mono)",
                                  }}
                                >
                                  {query.category}
                                </span>
                                {activeQuery.id === query.id && (
                                  <Play className="h-3 w-3 text-white/80" fill="currentColor" />
                                )}
                              </div>
                              {/* Question Text */}
                              <p
                                className="text-xs leading-relaxed"
                                style={{
                                  fontFamily: "var(--font-geist-mono)",
                                  textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                                }}
                              >
                                "{query.question}"
                              </p>
                            </div>
                          </div>

                          {/* Hover Effect Border - SIMPLIFIED */}
                          {hoveredQuery === query.id && activeQuery.id !== query.id && (
                            <div className="gradient-overlay pointer-events-none absolute inset-0 rounded-xl border border-white/20" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
