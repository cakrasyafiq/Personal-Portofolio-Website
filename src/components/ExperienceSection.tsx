"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type Ref,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  CaretLeft,
  CaretRight,
  Trophy,
  UsersThree,
} from "@phosphor-icons/react";
import { EASE_EDITORIAL, MotionReveal } from "@/components/MotionReveal";
import {
  EXPERIENCES,
  type ExperienceItem,
  type ExperienceType,
} from "@/data/portfolio";

const TYPE_STYLES: Record<ExperienceType, { badge: string; label: string }> = {
  Work: {
    badge: "bg-[#02B08D]/16 text-[#2BD4B0] border-[#02B08D]/35",
    label: "Work",
  },
  Organization: {
    badge: "bg-[#FBF4DA]/10 text-[#FBF4DA] border-[#FBF4DA]/24",
    label: "Organization",
  },
  Competitive: {
    badge: "bg-[#FFBC03]/14 text-[#FFBC03] border-[#FFBC03]/35",
    label: "Competitive",
  },
};

function ExperienceTypeIcon({ type }: { type: ExperienceType }) {
  if (type === "Work") {
    return <Briefcase size={14} weight="bold" aria-hidden="true" />;
  }
  if (type === "Competitive") {
    return <Trophy size={14} weight="bold" aria-hidden="true" />;
  }
  return <UsersThree size={14} weight="bold" aria-hidden="true" />;
}

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  const total = EXPERIENCES.length;
  const activeItem = EXPERIENCES[activeIndex];
  const activeTypeStyle = TYPE_STYLES[activeItem.type];

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keep the active thumbnail visible on horizontally scrollable small viewports
  // without triggering vertical page scroll.
  useEffect(() => {
    const strip = stripRef.current;
    const card = itemRefs.current[activeIndex];
    if (!strip || !card) return;
    if (strip.scrollWidth <= strip.clientWidth) return;

    const targetLeft =
      card.offsetLeft - (strip.clientWidth - card.clientWidth) / 2;
    strip.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [activeIndex, prefersReducedMotion]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(total - 1);
    }
  };

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;
    if (!start) return;

    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;

    // Require clear horizontal swipe intent so vertical scrolling and taps stay clean
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      if (dx < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  };

  const transitionDuration = prefersReducedMotion ? 0 : 0.38;

  return (
    <section
      id="experience"
      className="relative border-y border-[#FBF4DA]/16 bg-[#18262F] px-4 py-16 sm:px-8 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header + Navigation Controls */}
        <MotionReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-medium text-[#FFBC03]">
              Photo Gallery
            </p>
            <h2 className="mt-1 font-display text-[clamp(3.6rem,7.5vw,5.8rem)] font-bold uppercase leading-[0.86] tracking-[-0.002em] text-[#FBF4DA]">
              EXPERIENCE &amp; HONORS
            </h2>
          </div>

          <div className="flex items-center justify-between gap-4 md:justify-end">
            <div
              className="flex items-baseline gap-1.5 font-display text-3xl font-bold leading-none tracking-tight text-[#FBF4DA] tabular-nums"
              aria-hidden="true"
            >
              <span className="text-[#FFBC03]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-xl text-[#FBF4DA]/35">/</span>
              <span className="text-2xl text-[#FBF4DA]/55">
                {String(total).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous experience"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FBF4DA]/18 bg-[#001822]/80 text-[#FBF4DA] backdrop-blur-md transition-colors duration-200 hover:border-[#02B08D] hover:text-[#02B08D] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02B08D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18262F]"
              >
                <CaretLeft size={18} weight="bold" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next experience"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FBF4DA]/18 bg-[#001822]/80 text-[#FBF4DA] backdrop-blur-md transition-colors duration-200 hover:border-[#02B08D] hover:text-[#02B08D] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02B08D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18262F]"
              >
                <CaretRight size={18} weight="bold" aria-hidden="true" />
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* Interactive Split Showcase (Top Detail + Bottom Preview Strip) */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Experience and honors showcase"
          onKeyDown={handleKeyDown}
          className="mt-10"
        >
          {/* Screen reader live announcement for active experience */}
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Showing {activeIndex + 1} of {total}: {activeItem.title} at{" "}
            {activeItem.subtitle} ({activeItem.type}, {activeItem.period}).
          </p>

          {/* TOP PART: Featured Experience Detail (Text Left + Large Photo Right, open layout) */}
          <div
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            style={{ touchAction: "pan-y" }}
            className="grid grid-cols-1 items-center gap-8 select-none lg:grid-cols-12 lg:gap-12"
          >
            {/* Detail Text on the Left */}
            <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeItem.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, x: 8 }}
                  transition={{
                    duration: transitionDuration,
                    ease: EASE_EDITORIAL,
                  }}
                >
                  {/* Experience Type + Period */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.02em] ${activeTypeStyle.badge}`}
                    >
                      <ExperienceTypeIcon type={activeItem.type} />
                      {activeTypeStyle.label}
                    </span>

                    <time className="text-xs italic text-[#FBF4DA]/70 sm:text-[0.8125rem]">
                      {activeItem.period}
                    </time>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#FBF4DA] sm:text-[1.75rem] lg:text-[2rem]">
                    {activeItem.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#FFBC03] sm:text-base">
                    {activeItem.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 max-w-[48ch] text-[0.9375rem] leading-[1.68] text-[#FBF4DA]/84 sm:text-base">
                    {activeItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Large Photo on the Right (rounded corners + drop shadow, no border) */}
            <div className="order-1 relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-[#06121A] shadow-[0_24px_56px_-12px_rgba(0,0,0,0.72)] sm:aspect-video sm:rounded-[28px] lg:order-2 lg:col-span-7 lg:aspect-auto lg:h-[420px] xl:h-[450px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeItem.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                  transition={{
                    duration: transitionDuration,
                    ease: EASE_EDITORIAL,
                  }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.imageAlt}
                    fill
                    priority={activeIndex === 0}
                    sizes="(max-width: 1024px) 100vw, 760px"
                    style={{ objectPosition: "50% 45%" }}
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Centered Slide Indicator Dots */}
          <div className="mt-5 flex justify-center">
            <div
              role="tablist"
              aria-label="Choose an experience slide"
              className="flex items-center gap-1 rounded-full border border-[#FBF4DA]/10 bg-[#001822]/55 px-2.5 py-1 backdrop-blur-sm"
            >
              {EXPERIENCES.map((item, index) => {
                const isSelected = index === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={`View ${item.title} (${index + 1} of ${total})`}
                    onClick={() => setActiveIndex(index)}
                    className="group flex h-6 items-center rounded-full px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02B08D]"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${isSelected
                        ? "w-7 bg-[#FFBC03]"
                        : "w-1.5 bg-[#FBF4DA]/30 group-hover:bg-[#02B08D]/85"
                        }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* BOTTOM PART: Experience Previews (Small Thumbnail Photo + Title) */}
          <div className="mt-6">
            <div className="mb-3.5 flex items-baseline justify-between gap-4">
              <p className="text-sm font-semibold tracking-wide text-[#FBF4DA]/90 sm:text-base">
                Explore Experiences
              </p>
            </div>

            <div
              ref={stripRef}
              className="flex gap-3.5 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:pb-0"
            >
              {EXPERIENCES.map((item, index) => (
                <ExperiencePreviewCard
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  item={item}
                  isSelected={index === activeIndex}
                  onSelect={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperiencePreviewCardProps {
  ref?: Ref<HTMLButtonElement>;
  item: ExperienceItem;
  isSelected: boolean;
  onSelect: () => void;
}

function ExperiencePreviewCard({
  ref,
  item,
  isSelected,
  onSelect,
}: ExperiencePreviewCardProps) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      aria-label={`Select ${item.title}`}
      className="group flex w-[64vw] max-w-[230px] shrink-0 snap-start flex-col text-left focus-visible:outline-none lg:w-auto lg:max-w-none"
    >
      {/* Small Thumbnail Frame */}
      <div
        className={`relative aspect-video w-full overflow-hidden rounded-[14px] border bg-[#06121A] transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-[#02B08D] group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#18262F] ${isSelected
          ? "border-[#FFBC03] shadow-[0_10px_28px_-10px_rgba(255,188,3,0.45)] ring-1 ring-[#FFBC03]/60"
          : "border-[#FBF4DA]/14 group-hover:border-[#02B08D]/70"
          }`}
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 230px, 260px"
          style={{ objectPosition: item.imagePosition ?? "50% 35%" }}
          className={`object-cover transition-all duration-400 ease-out ${isSelected
            ? "scale-[1.02] brightness-100 saturate-100"
            : "brightness-[0.72] saturate-[0.82] group-hover:scale-[1.04] group-hover:brightness-95 group-hover:saturate-100"
            }`}
        />

        {/* Subtle active progress-style bar echoing the reference strip */}
        {isSelected && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-3 bottom-2 z-10 h-[3px] rounded-full bg-[#FFBC03] shadow-[0_0_8px_rgba(255,188,3,0.65)]"
          />
        )}
      </div>

      {/* Title & Period below the thumbnail */}
      <h4
        className={`mt-2.5 line-clamp-2 text-[0.9rem] font-semibold leading-snug transition-colors duration-200 ${isSelected
          ? "text-[#FFBC03]"
          : "text-[#FBF4DA]/88 group-hover:text-[#FBF4DA]"
          }`}
      >
        {item.title}
      </h4>
      <p className="mt-0.5 truncate text-xs text-[#FBF4DA]/55">{item.period}</p>
    </button>
  );
}
