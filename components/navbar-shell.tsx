"use client";

import AnimatedContent from "@/components/AnimatedContent";
import Navbar from "@/components/navbar";

/**
 * Fixed, animated navbar shell pinned to the top of the viewport.
 */
export default function NavbarShell() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
      <AnimatedContent
        direction="vertical"
        distance={50}
        threshold={0}
        duration={0.9}
        ease="expo.out"
        animateOpacity
        initialOpacity={0}
        scale={0.98}
      >
        <Navbar isBannerVisible={false} />
      </AnimatedContent>
    </div>
  );
}


