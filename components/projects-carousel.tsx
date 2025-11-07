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

type Slide = {
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

type CarouselProps = {
  slides: readonly Slide[];
  options?: EmblaOptionsType;
};

export function ProjectsCarousel({
  slides,
  options = { loop: true, align: "start" },
}: CarouselProps) {
  const autoplay = Autoplay({ delay: 6000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Slide | null>(null);

  const onSelect = useCallback(
    (api: EmblaCarouselType) => {
      setSelectedIndex(api.selectedScrollSnap());
    },
    [setSelectedIndex]
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

  return (
    <>
      <section className="relative">
        <div className="rounded-(--radius-surface) border-border/60 bg-linear-to-br from-card/90 via-card to-card/80 ring-border/40 overflow-hidden border shadow-lg ring-1 backdrop-blur-sm">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex touch-pan-y touch-pinch-zoom">
              {slides.map((slide) => (
                <article
                  key={slide.id}
                  className="rounded-(--radius-surface) border-border/60 bg-card/80 ring-border/40 flex min-w-0 flex-[0_0_100%] flex-col overflow-hidden border shadow-lg ring-1"
                >
                  <div className="aspect-4/3 rounded-t-(--radius-surface) relative overflow-hidden sm:aspect-video">
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      fill
                      sizes="(min-width: 768px) 65vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="w/full border-border/40 bg-background/70 flex flex-col gap-6 border-t px-6 py-6 sm:px-8 sm:py-7">
                    <div>
                      <span className="text-muted-foreground text-sm font-medium uppercase tracking-[0.3em]">
                        {slide.id}
                      </span>
                      <h3 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                        {slide.title}
                      </h3>
                      <p
                        className="text-muted-foreground mt-3 text-base leading-7"
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
                          onClick={() => setActiveCaseStudy(slide)}
                          className={cn(
                            "cursor-pointer px-2 py-1 text-xs font-semibold text-foreground hover:bg-transparent hover:text-accent-foreground"
                          )}
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                            textTransform: "uppercase",
                            letterSpacing: "0.3em",
                          }}
                        >
                          Read More
                        </Button>
                      )}
                    </div>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {slide.highlights.map((item) => (
                        <li
                          key={item}
                          className="border-border/60 bg-card/40 text-foreground/90 rounded-(--radius-interactive) border px-4 py-3 text-sm font-medium shadow-sm shadow-black/5"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2 sm:justify-start">
                      {slide.websiteUrl && (
                        <Button
                          asChild
                          size="lg"
                          className="rounded-(--radius-interactive) cursor-pointer px-5"
                        >
                          <Link href={slide.websiteUrl} target="_blank" rel="noopener noreferrer">
                            VIEW WEBSITE
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNav("prev")}
              className={cn(
                "border-border/70 bg-card/60 text-foreground hover:bg-accent/60 inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleNav("next")}
              className={cn(
                "border-border/70 bg-card/60 text-foreground hover:bg-accent/60 inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => handleDot(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all duration-200",
                  index === selectedIndex
                    ? "bg-foreground shadow-[0_0_0_6px_rgba(15,23,42,0.12)]"
                    : "bg-foreground/30 hover:bg-foreground/60"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === selectedIndex}
              />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!activeCaseStudy} onOpenChange={(open) => !open && setActiveCaseStudy(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{activeCaseStudy?.title}</DialogTitle>
            {activeCaseStudy && (
              <DialogDescription>{activeCaseStudy.description}</DialogDescription>
            )}
          </DialogHeader>

          {activeCaseStudy?.caseStudy && (
            <div className="space-y-6">
              <section>
                <h4 className="text-muted-foreground text-sm font-semibold uppercase tracking-[0.25em]">
                  Tech Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeCaseStudy.caseStudy.techStack.map((item) => (
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
                  <p className="text-muted-foreground mt-2 text-sm leading-6">
                    {activeCaseStudy.caseStudy.problem}
                  </p>
                </div>
                <div>
                  <h5 className="text-foreground text-sm font-semibold">Solution</h5>
                  <p className="text-muted-foreground mt-2 text-sm leading-6">
                    {activeCaseStudy.caseStudy.solution}
                  </p>
                </div>
              </section>

              <Separator />

              <section>
                <h5 className="text-foreground text-sm font-semibold">Architecture</h5>
                <p className="text-muted-foreground mt-2 text-sm leading-6">
                  {activeCaseStudy.caseStudy.architecture}
                </p>
              </section>

              <Separator />

              <section className="grid gap-5 sm:grid-cols-2">
                <div>
                  <h5 className="text-foreground text-sm font-semibold">Challenges</h5>
                  <p className="text-muted-foreground mt-2 text-sm leading-6">
                    {activeCaseStudy.caseStudy.challenges}
                  </p>
                </div>
                <div>
                  <h5 className="text-foreground text-sm font-semibold">Results</h5>
                  <p className="text-muted-foreground mt-2 text-sm leading-6">
                    {activeCaseStudy.caseStudy.results}
                  </p>
                </div>
              </section>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
