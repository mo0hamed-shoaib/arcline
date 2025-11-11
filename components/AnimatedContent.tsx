import React, { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string | ((progress: number) => number);
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
  style?: React.CSSProperties;
  tilt?: number;
  blurRadius?: number;
  perspective?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.9,
  ease = "expo.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
  className,
  style,
  tilt = 0,
  blurRadius = 0,
  perspective = 900,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const initialOffset = reverse ? -distance : distance;
  const initialTransform =
    direction === "horizontal"
      ? `translate3d(${initialOffset}px, 0, 0) scale(${scale})`
      : `translate3d(0, ${initialOffset}px, 0) scale(${scale})`;
  const initialOpacityValue = animateOpacity ? initialOpacity : 1;
  const initialTiltTransform =
    tilt === 0
      ? ""
      : direction === "vertical"
        ? ` rotateX(${tilt}deg)`
        : ` rotateY(${tilt}deg)`;
  const initialTransformValue = `${initialTransform}${initialTiltTransform}`;
  const initialFilterValue = blurRadius > 0 ? `blur(${blurRadius}px)` : undefined;

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const initialOpacityForEffect = animateOpacity ? initialOpacity : 1;
    const startPct = (1 - threshold) * 100;

    const ctx = gsap.context(() => {
      const fromVars: gsap.TweenVars = {
        [axis]: offset,
        scale,
        opacity: initialOpacityForEffect,
      };

      const toVars: gsap.TweenVars = {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration,
        ease,
        delay,
        onComplete,
        scrollTrigger: {
          trigger: el,
          start: `top ${startPct}%`,
          toggleActions: "play none none none",
          once: true,
        },
        clearProps: "transform,opacity,filter",
      };

      if (tilt !== 0) {
        const tiltProperty = direction === "vertical" ? "rotateX" : "rotateY";
        fromVars[tiltProperty] = tilt;
        toVars[tiltProperty] = 0;
        fromVars.transformPerspective = perspective;
        toVars.transformPerspective = perspective;
      }

      if (blurRadius > 0) {
        fromVars.filter = `blur(${blurRadius}px)`;
        toVars.filter = "blur(0px)";
      }

      const tween = gsap.fromTo(el, fromVars, toVars);

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, el);

    return () => {
      ctx.revert();
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: style?.transform ?? initialTransformValue,
        opacity: style?.opacity ?? initialOpacityValue,
        filter: style?.filter ?? initialFilterValue,
        willChange: style?.willChange ?? "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
