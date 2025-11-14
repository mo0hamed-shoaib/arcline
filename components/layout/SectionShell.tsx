import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Standardized section wrapper for main content blocks.
 * - Provides vertical padding and the global max-width container.
 */
export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <div className="mx-auto w-full max-w-[1296px]">{children}</div>
    </section>
  );
}


