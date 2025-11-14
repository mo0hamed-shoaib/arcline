"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export type Slide = {
  id: string;
  title: string;
  description: string;
  highlights: readonly string[];
  image: {
    src: string;
    alt: string;
  };
  websiteUrl?: string;
  caseStudy?: {
    description: string;
    techStack: readonly string[];
    problem: string;
    solution: string;
    architecture: string;
    challenges: string;
    results: string;
  };
};

const NAV_BUTTON_STYLES =
  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/85 text-foreground shadow-sm transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent-orange) focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const DOT_BASE_CLASSES = "h-2 w-2 rounded-full transition-all duration-200";

type CarouselProps = {
  slides: readonly Slide[];
  options?: EmblaOptionsType;
};

type DotProps = {
  count: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
};

type SlideCardProps = {
  slide: Slide;
  onReadMore: (slide: Slide) => void;
  priorityImage?: boolean;
  onPrev: () => void;
  onNext: () => void;
  dots: DotProps;
  isActive: boolean;
};

type CaseStudyDialogProps = {
  slide: Slide | null;
  onClose: () => void;
};

const CarouselDots = ({ count, selectedIndex, onSelect }: DotProps) => (
  <div className="flex items-center gap-2">
    {Array.from({ length: count }).map((_, index) => (
      <button
        key={`dot-${index}`}
        type="button"
        onClick={() => onSelect(index)}
        className={cn(
          DOT_BASE_CLASSES,
          index === selectedIndex
            ? "bg-foreground shadow-[0_0_0_6px_rgba(15,23,42,0.12)]"
            : "bg-foreground/30 hover:bg-foreground/60"
        )}
        aria-label={`Show slide ${index + 1} of ${count}`}
        aria-current={index === selectedIndex}
      />
    ))}
  </div>
);

const SlideCard = ({
  slide,
  onReadMore,
  priorityImage = false,
  onPrev,
  onNext,
  dots,
  isActive,
}: SlideCardProps) => (
  <article className="rounded-(--radius-surface) border-border/60 bg-card/80 ring-border/35 flex min-w-0 flex-[0_0_100%] flex-col overflow-hidden border shadow-md ring-1">
    <div className="relative aspect-6/5 overflow-hidden rounded-t-(--radius-surface) sm:aspect-video">
      <Image
        src={slide.image.src}
        alt={slide.image.alt}
        fill
        sizes="(min-width: 1024px) 60vw, (min-width: 640px) 80vw, 100vw"
        className="object-cover"
        priority={priorityImage}
        loading={priorityImage ? "eager" : "lazy"}
      />
      {dots.count > 1 && (
        <div
          className={cn(
            "group absolute inset-x-0 bottom-3 z-20 flex justify-center transition-opacity duration-200 sm:bottom-4",
            isActive ? "opacity-100" : "opacity-0 group-focus-within:opacity-100"
          )}
        >
          <div
            className={cn(
              "flex items-center gap-3 rounded-full border border-border/60 bg-background/90 px-3 py-1.5 text-foreground shadow-sm backdrop-blur transition-shadow duration-200 group-focus-within:shadow-[0_0_0_3px_var(--accent-orange-40)]",
              isActive ? "pointer-events-auto" : "pointer-events-none"
            )}
          >
            <button
              type="button"
              onClick={onPrev}
              className={NAV_BUTTON_STYLES}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <CarouselDots {...dots} />
            <button
              type="button"
              onClick={onNext}
              className={NAV_BUTTON_STYLES}
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>

    <div className="w/full border-border/40 bg-background/70 flex flex-col gap-4 border-t px-5 py-4 sm:px-6 sm:py-5">
      <div className="space-y-4">
        <div>
          <span className="text-muted-foreground text-sm font-medium uppercase tracking-[0.3em]">
            {slide.id}
          </span>
          <h3 className="text-foreground mt-2 text-[1.45rem] font-semibold tracking-tight md:text-[1.7rem]">
            {slide.title}
          </h3>
          <div className="mt-4 space-y-1">
            <span className="text-foreground/55 text-[0.7rem] font-semibold uppercase tracking-[0.3em]">
              Summary
            </span>
            <p
              className="mono-body text-foreground/85 text-[0.9rem] leading-6"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {slide.description}
            </p>
          </div>
        </div>

        <Separator className="border-border/40" />

        <div>
          <span className="text-foreground/55 text-[0.7rem] font-semibold uppercase tracking-[0.3em]">
            Highlights
          </span>
          <ul className="mt-2 grid gap-1.5 text-[0.82rem] text-foreground/90 sm:grid-cols-2">
            {slide.highlights.map((item) => (
              <li key={item} className="relative pl-4 leading-snug">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 block h-1.5 w-1.5 rounded-full bg-(--accent-orange)"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-3">
        {slide.caseStudy && (
          <button
            type="button"
            onClick={() => onReadMore(slide)}
            className={cn(
              "mono-body group inline-flex cursor-pointer items-center gap-2 px-0 py-1 text-[0.82rem] font-semibold uppercase tracking-[0.26em]",
              "text-(--accent-orange) transition-all duration-200 hover:text-(--accent-orange-80) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent-orange) focus-visible:ring-offset-background"
            )}
          >
            Read More
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        )}

        {slide.websiteUrl && (
          <Button
            asChild
            size="sm"
            className="rounded-(--radius-interactive) cursor-pointer px-4 py-2"
          >
            <Link href={slide.websiteUrl} target="_blank" rel="noopener noreferrer">
              VIEW WEBSITE
            </Link>
          </Button>
        )}
      </div>
    </div>
  </article>
);

const CaseStudyDialog = ({ slide, onClose }: CaseStudyDialogProps) => (
  <Dialog open={!!slide} onOpenChange={(open) => !open && onClose()}>
    <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-3xl">
      <DialogHeader>
        <DialogTitle>{slide?.title}</DialogTitle>
        {slide?.caseStudy && <DialogDescription>{slide.caseStudy.description}</DialogDescription>}
      </DialogHeader>

      {slide?.caseStudy && (
        <div className="space-y-6">
          <section>
            <h4 className="text-muted-foreground text-sm font-semibold uppercase tracking-[0.25em]">
              Tech Stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {slide.caseStudy.techStack.map((item) => (
                <span
                  key={item}
                  className="bg-accent/30 text-accent-foreground inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <Separator />

          <section className="grid gap-5 sm:grid-cols-2">
            <div>
              <h5 className="text-foreground text-sm font-semibold">Problem</h5>
              <p className="mono-body text-muted-foreground mt-2 text-sm leading-6">
                {slide.caseStudy.problem}
              </p>
            </div>
            <div>
              <h5 className="text-foreground text-sm font-semibold">Solution</h5>
              <p className="mono-body text-muted-foreground mt-2 text-sm leading-6">
                {slide.caseStudy.solution}
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h5 className="text-foreground text-sm font-semibold">Architecture</h5>
            <p className="mono-body text-muted-foreground mt-2 text-sm leading-6">
              {slide.caseStudy.architecture}
            </p>
          </section>

          <Separator />

          <section className="grid gap-5 sm:grid-cols-2">
            <div>
              <h5 className="text-foreground text-sm font-semibold">Challenges</h5>
              <p className="mono-body text-muted-foreground mt-2 text-sm leading-6">
                {slide.caseStudy.challenges}
              </p>
            </div>
            <div>
              <h5 className="text-foreground text-sm font-semibold">Results</h5>
              <p className="mono-body text-muted-foreground mt-2 text-sm leading-6">
                {slide.caseStudy.results}
              </p>
            </div>
          </section>
        </div>
      )}
    </DialogContent>
  </Dialog>
);

export function ProjectsCarousel({
  slides,
  options = { loop: true, align: "start" },
}: CarouselProps) {
  const autoplay = Autoplay({ delay: 6000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Slide | null>(null);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect(emblaApi);
    });

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleNav = useCallback(
    (direction: "prev" | "next") => {
      if (!emblaApi) return;
      if (direction === "prev") {
        emblaApi.scrollPrev();
      } else {
        emblaApi.scrollNext();
      }

      const autoplayPlugin = emblaApi.plugins()?.autoplay;
      autoplayPlugin?.stop();
      autoplayPlugin?.reset();
    },
    [emblaApi]
  );

  const handleDot = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      const autoplayPlugin = emblaApi.plugins()?.autoplay;
      autoplayPlugin?.stop();
      autoplayPlugin?.reset();
    },
    [emblaApi]
  );

  const openCaseStudy = useCallback((slide: Slide) => setActiveCaseStudy(slide), []);
  const closeCaseStudy = useCallback(() => setActiveCaseStudy(null), []);
  const goPrev = useCallback(() => handleNav("prev"), [handleNav]);
  const goNext = useCallback(() => handleNav("next"), [handleNav]);
  const totalDots = scrollSnaps.length || slides.length;

  return (
    <>
      <section className="relative">
        <div className="rounded-(--radius-surface) border-border/60 bg-linear-to-br from-card/90 via-card to-card/80 ring-border/40 overflow-hidden border shadow-md ring-1 backdrop-blur-sm">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex touch-pan-y touch-pinch-zoom">
              {slides.map((slide, index) => (
                <SlideCard
                  key={slide.id}
                  slide={slide}
                  onReadMore={openCaseStudy}
                  priorityImage={index === 0}
                  onPrev={goPrev}
                  onNext={goNext}
                  dots={{
                    count: totalDots,
                    selectedIndex,
                    onSelect: handleDot,
                  }}
                  isActive={selectedIndex === index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudyDialog slide={activeCaseStudy ?? null} onClose={closeCaseStudy} />
    </>
  );
}
