import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Standardized section header (title + optional subtitle).
 * Uses `section-head` and `section-subhead` typography classes.
 */
export function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={cn(alignClass, className)}>
      <h2 className="section-head mb-4">{title}</h2>
      {subtitle && <p className="section-subhead">{subtitle}</p>}
    </div>
  );
}


