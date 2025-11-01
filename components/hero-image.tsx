"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="w-full overflow-hidden rounded-[16px] bg-background">
        <Image
          src="/images/design-mode/hero-image.jpg.jpeg"
          alt="Arcline professional frontend development services showcase"
          width={1200}
          height={750}
          className="h-auto w-full rounded-[16px]"
          priority
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
