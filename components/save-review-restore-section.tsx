"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

import FeatureVideo from "@/components/feature-video";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FeatureData {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  fallbackSrc?: string;
  thumbnailSrc: string;
}

const features: FeatureData[] = [
  {
    id: "design",
    title: "Design",
    description: "Beautiful, modern interfaces tailored to your brand and vision.",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yoyo-save-2-DUbUp5aKE9GtNY9Diok2eG6SW2qHCX.mp4",
    fallbackSrc: "/videos/save-review-restore.mp4",
    thumbnailSrc: "/images/save-thumbnail.jpeg",
  },
  {
    id: "develop",
    title: "Develop",
    description: "Fast, responsive websites built with the latest tools and practices.",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yoyo-preview-dnsmAMg2AX6f1thlrNvj1e65T2zUTM.mp4",
    fallbackSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/save-review-restore-g3BK0sricXTSPMzxK4iGrmXBUwPt11.mp4",
    thumbnailSrc: "/images/preview-thumbnail.jpeg",
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Production-ready sites optimized for performance and SEO.",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yoyo-restore-rhqD0huLa48Q51Sy9gzIrIdHk2vu2L.mp4",
    fallbackSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/save-review-restore-g3BK0sricXTSPMzxK4iGrmXBUwPt11.mp4",
    thumbnailSrc: "/images/restore-thumbnail.jpeg",
  },
];

interface SaveReviewRestoreSectionProps {
  onOpenInstall?: () => void;
}

export default function SaveReviewRestoreSection({ onOpenInstall }: SaveReviewRestoreSectionProps) {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  // Preload all videos when component mounts
  useEffect(() => {
    // Preload all videos but don't autoplay
    features.forEach((feature) => {
      const video = document.createElement("video");
      video.muted = true;
      video.preload = "auto";
      video.playsInline = true;
      video.loop = true;
      // Remove autoplay - videos will be controlled by intersection observer

      video.onerror = () => {
        if (feature.fallbackSrc) {
          video.src = feature.fallbackSrc;
        }
      };

      video.src = feature.videoSrc;
    });
  }, []);

  const handleThumbnailHover = (feature: FeatureData) => {
    setActiveFeature(feature);
  };

  const handleThumbnailLeave = () => {
    // No-op since we don't need to track hover state anymore
  };

  const handleThumbnailClick = (feature: FeatureData) => {
    setActiveFeature(feature);
  };

  return (
    <section className="py-12 md:py-16">
      {/* Title and Description outside the gradient section */}
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
          Design, Develop, Deploy
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
          From concept to launch. Using AI-powered development to build faster without sacrificing
          quality.
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
                src={activeFeature.videoSrc}
                alt={activeFeature.title}
                fallbackSrc={activeFeature.fallbackSrc}
                fixedAspectRatio={true}
              />

              {/* Mobile Navigation Dots - Only visible on mobile */}
              <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 transform lg:hidden">
                <div className="flex gap-2 rounded-full bg-black/50 px-3 py-2 backdrop-blur-sm">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature)}
                      className={`h-2 w-2 rounded-full transition-all duration-200 ${
                        activeFeature.id === feature.id
                          ? "w-6 bg-white"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Switch to ${feature.title}`}
                    />
                  ))}
                </div>
              </div>

              {/* Gradient Overlay for Text Readability - HIDDEN on mobile and tablet */}
              <div
                className="pointer-events-none absolute inset-0 hidden lg:block"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 70%)",
                }}
              ></div>

              {/* Overlay Content on top of the video - HIDDEN on mobile and tablet */}
              <div className="absolute inset-0 z-20 hidden flex-col justify-end p-6 lg:flex lg:p-8">
                {/* Bottom Section: Content Left, Thumbnails Right */}
                <div className="flex items-end gap-4 lg:gap-8">
                  {/* Left: Feature Info and Install Button */}
                  <div className="max-w-xs flex-1 lg:max-w-md">
                    <h3
                      className="mb-3 text-2xl font-semibold text-white lg:text-3xl"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        letterSpacing: "-0.02em",
                        textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {activeFeature.title}
                    </h3>
                    <p
                      className="mb-6 text-base text-white/95 lg:text-lg"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        lineHeight: "1.4",
                        textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      {activeFeature.description}
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

                  {/* Right: Thumbnails - Now using actual Arcline interface images */}
                  <div className="flex gap-3">
                    {features.map((feature) => (
                      <div
                        key={feature.id}
                        className="group relative cursor-pointer"
                        onMouseEnter={() => handleThumbnailHover(feature)}
                        onMouseLeave={handleThumbnailLeave}
                        onClick={() => handleThumbnailClick(feature)}
                      >
                        <div
                          className={`h-15 w-24 overflow-hidden rounded-lg border-2 shadow-lg transition-all duration-200 lg:h-20 lg:w-32 ${
                            activeFeature.id === feature.id
                              ? "scale-105 border-white shadow-xl"
                              : "hover:scale-102 border-white/40 hover:border-white/70"
                          }`}
                        >
                          <Image
                            src={feature.thumbnailSrc || "/placeholder.svg"}
                            alt={`${feature.title} feature of Arcline`}
                            width={128}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Thumbnail Label */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform whitespace-nowrap">
                          <span
                            className={`font-mono text-sm transition-colors duration-200 ${
                              activeFeature.id === feature.id ? "text-white" : "text-white/80"
                            }`}
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                            }}
                          >
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    ))}
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
