"use client";

import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PrimaryCTAProps {
  href: string;
  label: string;
  className?: string;
  icon?: ReactNode;
}

/**
 * Standard primary CTA used across hero, CTA section, and pricing.
 * Renders a themed button that links to an external URL.
 */
export function PrimaryCTA({ href, label, className, icon }: PrimaryCTAProps) {
  return (
    <Button asChild size="lg" className={cn("btn-cta", className)}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
        <span>{label}</span>
        {icon}
      </a>
    </Button>
  );
}


