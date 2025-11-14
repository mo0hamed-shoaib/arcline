import React, { ReactNode, useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  type EasingDefinition,
  type Target,
  type Transition,
} from "motion/react";

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
  animateOnMount?: boolean;
}

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const easeMap: Record<string, EasingDefinition> = {
  "expo.out": [0.16, 1, 0.3, 1],
  "power3.out": [0.19, 1, 0.22, 1],
  "power4.out": [0.165, 0.84, 0.44, 1],
  "power3.inOut": [0.645, 0.045, 0.355, 1],
  "power4.inOut": [0.77, 0, 0.175, 1],
};

const mapEase = (ease: AnimatedContentProps["ease"]): EasingDefinition | undefined => {
  if (!ease) return undefined;
  if (Array.isArray(ease)) {
    if (ease.length === 4) {
      const [x1, y1, x2, y2] = ease;
      return [x1, y1, x2, y2];
    }
    return ease as unknown as EasingDefinition;
  }
  if (typeof ease === "function") return ease as unknown as EasingDefinition;
  const lower = ease.toLowerCase();

  if (easeMap[lower]) {
    return easeMap[lower];
  }

  switch (lower) {
    case "linear":
      return "linear";
    case "ease":
    case "easeout":
      return "easeOut";
    case "easein":
      return "easeIn";
    case "easeinout":
      return "easeInOut";
    default:
      return undefined;
  }
};

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
  animateOnMount = false,
}) => {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const initialOffset = reverse ? -distance : distance;
  const initialOpacityValue = animateOpacity ? initialOpacity : 1;
  const axis = direction === "horizontal" ? "x" : "y";
  const viewportAmountRaw = clamp(threshold);
  const viewportAmount = viewportAmountRaw === 0 ? 0.01 : viewportAmountRaw;

  // On server and initial client render, assume no reduced motion to match
  const shouldReduceMotion = mounted ? prefersReducedMotion : false;

  const initial: Target = {
    opacity: initialOpacityValue,
    scale,
    [axis]: shouldReduceMotion ? 0 : initialOffset,
  };

  const animate: Target = {
    opacity: 1,
    scale: 1,
    [axis]: 0,
  };

  if (tilt !== 0 && !shouldReduceMotion) {
    if (direction === "vertical") {
      initial.rotateX = tilt;
      animate.rotateX = 0;
    } else {
      initial.rotateY = tilt;
      animate.rotateY = 0;
    }
    initial.transformPerspective = perspective;
    animate.transformPerspective = perspective;
  }

  if (blurRadius > 0 && !shouldReduceMotion) {
    initial.filter = `blur(${blurRadius}px)`;
    animate.filter = "blur(0px)";
  }

  if (!animateOpacity) {
    initial.opacity = 1;
    animate.opacity = 1;
  }

  const transition: Transition = {
    duration: duration * 1.35,
    delay,
    ease: mapEase(ease),
  };

  const mergedStyle: React.CSSProperties = {
    willChange: style?.willChange ?? "transform, opacity",
    ...style,
  };

  return (
    <motion.div
      className={className}
      style={mergedStyle}
      initial={initial}
      {...(animateOnMount
        ? { animate }
        : { whileInView: animate, viewport: { once: true, amount: viewportAmount } })}
      transition={transition}
      onAnimationComplete={onComplete}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
