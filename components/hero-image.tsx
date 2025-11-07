"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="bg-background w-full overflow-hidden rounded-[var(--radius-surface)]">
        <Image
          src="/placeholder.svg"
          alt="Placeholder graphic"
          width={1200}
          height={750}
          className="h-auto w-full rounded-[var(--radius-surface)]"
          priority
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
