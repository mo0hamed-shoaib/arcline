import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const baseParagraph = "mono-body text-sm leading-6 text-foreground/80 md:text-[15px]";
const baseSmall = "mono-body text-xs text-muted-foreground md:text-sm";

export function LegalHeading({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-2xl font-semibold text-foreground transition-colors duration-300", className)}
      {...props}
    />
  );
}

export function LegalSubheading({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold text-foreground", className)} {...props} />;
}

export function LegalParagraph({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn(baseParagraph, className)} {...props} />;
}

export function LegalMuted({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn(baseSmall, className)} {...props} />;
}

export function LegalList({ className, ...props }: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("mono-body list-inside space-y-2 text-sm leading-6 text-foreground/80 md:text-[15px]", className)}
      {...props}
    />
  );
}

export function LegalOrderedList({ className, ...props }: HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn(
        "mono-body list-inside space-y-2 text-sm leading-6 text-foreground/80 marker:font-semibold md:text-[15px]",
        className
      )}
      {...props}
    />
  );
}


