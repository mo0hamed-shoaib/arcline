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
  "border-border/70 bg-card/60 text-foreground hover:bg-accent/60 inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const DOT_BASE_CLASSES = "h-2 w-2 rounded-full transition-all duration-200";

type CarouselProps = {
  slides: readonly Slide[];
  options?: EmblaOptionsType;
};

type NavigationProps = {
  onPrev: () => void;
  onNext: () => void;
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
};

type CaseStudyDialogProps = {
  slide: Slide | null;
  onClose: () => void;
};

const CarouselNavigation = ({ onPrev, onNext }: NavigationProps) => (
  <div className="flex items-center gap-3">
    <button type="button" onClick={onPrev} className={NAV_BUTTON_STYLES} aria-label="Previous slide">
      <ChevronLeft className="h-5 w-5" />
    </button>
    <button type="button" onClick={onNext} className={NAV_BUTTON_STYLES} aria-label="Next slide">
      <ChevronRight className="h-5 w-5" />
    </button>
  </div>
);

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
        aria-label={`Go to slide ${index + 1}`}
        aria-current={index === selectedIndex}
      />
    ))}
  </div>
);

const SlideCard = ({ slide, onReadMore, priorityImage = false }: SlideCardProps) => (
  <article className="rounded-(--radius-surface) border-border/60 bg-card/80 ring-border/35 flex min-w-0 flex-[0_0_100%] flex-col overflow-hidden border shadow-md ring-1">
    <div className="relative aspect-[6/5] overflow-hidden rounded-t-(--radius-surface) sm:aspect-[16/9]">
      <Image
        src={slide.image.src}
        alt={slide.image.alt}
        fill
        sizes="(min-width: 1024px) 60vw, (min-width: 640px) 80vw, 100vw"
        className="object-cover"
        priority={priorityImage}
        loading={priorityImage ? "eager" : "lazy"}
      />
    </div>

    <div className="w/full border-border/40 bg-background/70 flex flex-col gap-4 border-t px-5 py-4 sm:px-6 sm:py-5">
      <div>
        <span className="text-muted-foreground text-sm font-medium uppercase tracking-[0.3em]">
          {slide.id}
        </span>
        <h3 className="text-foreground mt-2 text-[1.45rem] font-semibold tracking-tight md:text-[1.7rem]">
          {slide.title}
        </h3>
        <p
          className="mono-body text-muted-foreground mt-3 text-[0.9rem] leading-6"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {slide.description}
        </p>
        {slide.caseStudy && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onReadMore(slide)}
            className={cn(
              "mono-body cursor-pointer px-1.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-foreground hover:bg-transparent hover:text-accent-foreground"
            )}
          >
            Read More
          </Button>
        )}
      </div>

      <ul className="grid gap-2.5 sm:grid-cols-2">
        {slide.highlights.map((item) => (
          <li
            key={item}
            className="mono-bullet border-border/60 bg-card/40 text-foreground/90 rounded-(--radius-interactive) border px-3 py-2 text-[0.85rem] font-medium shadow-sm shadow-black/5"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-1 sm:justify-start">
        {slide.websiteUrl && (
          <Button asChild size="sm" className="rounded-(--radius-interactive) cursor-pointer px-4 py-2">
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
              <p className="mono-body text-muted-foreground mt-2 text-sm leading-6">{slide.caseStudy.problem}</p>
            </div>
            <div>
              <h5 className="text-foreground text-sm font-semibold">Solution</h5>
              <p className="mono-body text-muted-foreground mt-2 text-sm leading-6">{slide.caseStudy.solution}</p>
            </div>
          </section>

          <Separator />

          <section>
            <h5 className="text-foreground text-sm font-semibold">Architecture</h5>
            <p className="mono-body text-muted-foreground mt-2 text-sm leading-6">{slide.caseStudy.architecture}</p>
          </section>

          <Separator />

          <section className="grid gap-5 sm:grid-cols-2">
            <div>
              <h5 className="text-foreground text-sm font-semibold">Challenges</h5>
              <p className="mono-body text-muted-foreground mt-2 text-sm leading-6">{slide.caseStudy.challenges}</p>
            </div>
            <div>
              <h5 className="text-foreground text-sm font-semibold">Results</h5>
              <p className="mono-body text-muted-foreground mt-2 text-sm leading-6">{slide.caseStudy.results}</p>
            </div>
          </section>
        </div>
      )}
    </DialogContent>
  </Dialog>
);

export function ProjectsCarousel({ slides, options = { loop: true, align: "start" } }: CarouselProps) {
  const autoplay = Autoplay({ delay: 6000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Slide | null>(null);

  const onSelect = useCallback(
    (api: EmblaCarouselType) => {
      setSelectedIndex(api.selectedScrollSnap());
    },
    []
  );

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
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <CarouselNavigation onPrev={() => handleNav("prev")} onNext={() => handleNav("next")} />
          <CarouselDots count={scrollSnaps.length} selectedIndex={selectedIndex} onSelect={handleDot} />
        </div>
      </section>

      <CaseStudyDialog slide={activeCaseStudy ?? null} onClose={closeCaseStudy} />
    </>
  );
}
