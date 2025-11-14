"use client";

import React from "react";

import { cn } from "@/lib/utils";

export interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  gridSize?: number;
  gridColor?: string;
  darkGridColor?: string;
  showFade?: boolean;
  fadeIntensity?: number;
  children?: React.ReactNode;
}

export function GridBackground({
  className,
  children,
  gridSize = 20,
  gridColor,
  darkGridColor,
  showFade = true,
  fadeIntensity = 20,
  ...props
}: GridBackgroundProps) {
  // Use CSS variable for theme-aware color (automatically switches with theme)
  // Fallback to provided colors if custom colors are specified
  const colorValue = gridColor && darkGridColor
    ? `var(--grid-color, ${gridColor})`
    : "var(--grid-color, rgba(0, 0, 0, 0.3))";

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center bg-transparent",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundImage: `linear-gradient(to right, ${colorValue} 1px, transparent 1px), linear-gradient(to bottom, ${colorValue} 1px, transparent 1px)`,
        }}
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}

      {children && <div className="relative z-20">{children}</div>}
    </div>
  );
}


