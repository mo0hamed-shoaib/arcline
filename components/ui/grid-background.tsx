"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  gridSize?: number;
  children?: React.ReactNode;
}

export function GridBackground({
  className,
  children,
  gridSize = 22,
  ...props
}: GridBackgroundProps) {
  return (
    <div
      className={cn("relative flex h-full w-full items-center justify-center", className)}
      {...props}
    >
      {/* Grid pattern layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
        }}
      />

      {/* Edge fade overlay - fades all 4 edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%),
            linear-gradient(to bottom, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)
          `,
        }}
      />

      {children && <div className="relative z-20">{children}</div>}
    </div>
  );
}
