"use client";

import type { ReactNode } from "react";

import AnimatedContent from "@/components/AnimatedContent";

type AnimatedSectionProps = {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  duration?: number;
  ease?: string;
  delay?: number;
  threshold?: number;
  scale?: number;
};

/**
 * Client-only wrapper that applies scroll / entrance animation
 * to server-rendered sections using AnimatedContent.
 */
export function AnimatedSection({
  children,
  distance = 50,
  direction = "vertical",
  duration = 0.8,
  ease = "power3.out",
  delay = 0,
  threshold = 0.1,
  scale = 1,
}: AnimatedSectionProps) {
  return (
    <AnimatedContent
      direction={direction}
      distance={distance}
      duration={duration}
      ease={ease}
      delay={delay}
      threshold={threshold}
      scale={scale}
    >
      {children}
    </AnimatedContent>
  );
}


