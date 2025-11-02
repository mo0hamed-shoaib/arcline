"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

interface IconCircularProgressProps {
  value: number;
  max?: number;
  min?: number;
  gaugePrimaryColor: string;
  gaugeSecondaryColor: string;
  className?: string;
}

export function IconCircularProgress({
  max = 100,
  min = 0,
  value = 0,
  gaugePrimaryColor,
  gaugeSecondaryColor,
  className,
}: IconCircularProgressProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      // Animate from 0 to target value
      const duration = 1500; // 1.5 seconds
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.round(startValue + (value - startValue) * easeOut);
        setAnimatedValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setAnimatedValue(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  const circumference = 2 * Math.PI * 22; // Reduced radius to account for stroke width padding
  const percentPx = circumference / 100;
  const currentPercent = Math.round(((animatedValue - min) / (max - min)) * 100);
  const isThreeDigit = currentPercent >= 100;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex size-12 items-center justify-center overflow-visible font-medium leading-none md:size-14",
        isThreeDigit ? "text-xs md:text-sm" : "text-sm md:text-base",
        className
      )}
      style={
        {
          "--circle-size": "48px",
          "--circumference": circumference,
          "--percent-to-px": `${percentPx}px`,
          "--gap-percent": "5",
          "--offset-factor": "0",
          "--transition-length": "1s",
          "--delay": "0s",
          "--percent-to-deg": "3.6deg",
          transform: "translateZ(0)",
        } as React.CSSProperties
      }
    >
      <svg fill="none" className="absolute inset-0 size-full" strokeWidth="1.5" viewBox="0 0 52 52">
        {currentPercent <= 90 && currentPercent >= 0 && (
          <circle
            cx="26"
            cy="26"
            r="22"
            strokeWidth="5.5"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-100"
            style={
              {
                stroke: gaugeSecondaryColor,
                "--stroke-percent": 90 - currentPercent,
                "--offset-factor-secondary": "calc(1 - var(--offset-factor))",
                strokeDasharray:
                  "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                transform:
                  "rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1)",
                transition: "all var(--transition-length) ease var(--delay)",
                transformOrigin: "26px 26px",
              } as React.CSSProperties
            }
          />
        )}
        <circle
          cx="26"
          cy="26"
          r="22"
          strokeWidth="5.5"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-100"
          style={
            {
              stroke: gaugePrimaryColor,
              "--stroke-percent": currentPercent,
              strokeDasharray:
                "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
              transition:
                "var(--transition-length) ease var(--delay),stroke var(--transition-length) ease var(--delay)",
              transitionProperty: "stroke-dasharray,transform",
              transform:
                "rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)))",
              transformOrigin: "26px 26px",
            } as React.CSSProperties
          }
        />
      </svg>
      <span
        data-current-value={currentPercent}
        className="delay-[var(--delay)] duration-[var(--transition-length)] relative z-10 ease-linear animate-in fade-in"
      >
        {currentPercent}
      </span>
    </div>
  );
}
