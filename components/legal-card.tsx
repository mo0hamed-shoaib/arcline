"use client";

import { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface LegalCardProps {
  children: ReactNode;
  className?: string;
}

export function LegalCard({ children, className }: LegalCardProps) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector("svg");
    const heading = card.querySelector("h2");
    card.style.borderColor = "var(--accent-orange-40)";
    card.style.boxShadow = "var(--shadow-lg), 0 0 20px var(--accent-orange-15)";
    card.style.transform = "translateY(-2px)";
    if (icon) (icon as SVGElement).style.color = "var(--accent-orange)";
    if (heading) (heading as HTMLElement).style.color = "var(--accent-orange)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector("svg");
    const heading = card.querySelector("h2");
    card.style.borderColor = "";
    card.style.boxShadow = "var(--shadow-md)";
    card.style.transform = "";
    if (icon) (icon as SVGElement).style.color = "";
    if (heading) (heading as HTMLElement).style.color = "";
  };

  return (
    <Card
      className={`bg-card/50 border-border backdrop-blur-sm transition-all duration-300 ${className || ""}`}
      style={{
        boxShadow: "var(--shadow-md)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent className="p-6 md:p-8">{children}</CardContent>
    </Card>
  );
}
