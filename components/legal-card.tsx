"use client";

import type { CSSProperties, ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface LegalCardProps {
  children: ReactNode;
  className?: string;
}

export function LegalCard({ children, className }: LegalCardProps) {
  return (
    <Card
      className={cn(
        "legal-card bg-card/50 border backdrop-blur-sm transition-all duration-300",
        className
      )}
      style={
        {
          "--card-shadow": "var(--shadow-md)",
          "--card-border-hover": "var(--accent-orange-40)",
          "--card-shadow-hover": "var(--shadow-lg), 0 0 20px var(--accent-orange-15)",
        } as CSSProperties
      }
    >
      <CardContent className="p-6 md:p-8">{children}</CardContent>
    </Card>
  );
}
