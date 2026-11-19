"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  EASE_EDITORIAL,
  MotionReveal,
  SCROLL_VIEWPORT,
} from "@/components/MotionReveal";
import { TOOL_DOMAINS, type ToolItem } from "@/data/portfolio";

/** "all" or a ToolDomain id */
type DomainFilter = string;

interface CatalogEntry extends ToolItem {
  domain: string;
}

const FILTER_LABELS: Record<string, string> = {
  coding: "Software Dev",
  "ai-ml": "AI & ML",
  creative: "Creative Media",
};

const TONE_CLASS: Record<NonNullable<ToolItem["tone"]>, string> = {
  invert: "invert",
  "invert-hue": "invert hue-rotate-180",
};

const ALL_SUMMARY =
  "Every tool in the kit, ordered by discipline. Pick one to light up its corner of the catalog.";

export function ToolsSection() {
  const [selectedDomain, setSelectedDomain] = useState<DomainFilter>("all");
  const prefersReducedMotion = useReducedMotion();

  const catalog = useMemo<CatalogEntry[]>(
    () =>
      TOOL_DOMAINS.flatMap((domain) =>
        domain.tools.map((tool) => ({ ...tool, domain: domain.id })),
      ),
    [],
  );

  const filters = [
    { id: "all", label: "All", count: catalog.length },
    ...TOOL_DOMAINS.map((domain) => ({
      id: domain.id,
      label: FILTER_LABELS[domain.id] ?? domain.title,
      count: domain.tools.length,
    })),
  ];

  const activeDomain = TOOL_DOMAINS.find((d) => d.id === selectedDomain);
  const summary = activeDomain?.subtitle ?? ALL_SUMMARY;

  const gridVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.035 },
    },
  };

  const cellVariants: Variants = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: EASE_EDITORIAL,
      },
    },
  };

  return (
    <section
      id="tools"
      className="relative bg-[#0B1014] px-4 py-20 sm:px-8 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] border-t border-[#FBF4DA]/12 pt-16 md:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sticky lead + catalog filter */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <MotionReveal>
              <p className="text-lg font-medium text-[#FFBC03]">
                Technical &amp; Creative Stack
              </p>
              <h2 className="mt-1 font-display text-[clamp(3.8rem,8vw,6.2rem)] font-bold uppercase leading-[0.84] tracking-[-0.001em] text-[#FBF4DA]">
                TOOLS
              </h2>
              <p className="mt-4 max-w-[38ch] text-[0.95rem] leading-[1.6] text-[#FBF4DA]/76">
                The software I reach for across AI pipelines, production web
                engineering, and visual storytelling.
              </p>

              <div
                role="group"
                aria-label="Highlight tools by discipline"
                className="mt-8 flex flex-wrap gap-2"
              >
                {filters.map((filter) => {
                  const isActive = selectedDomain === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() =>
                        setSelectedDomain(filter.id as DomainFilter)
                      }
                      className={`relative isolate inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02B08D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1014] sm:text-sm ${isActive
                          ? "font-semibold text-[#001822]"
                          : "border border-[#FBF4DA]/12 text-[#FBF4DA]/80 hover:border-[#02B08D]/60 hover:text-[#FBF4DA]"
                        }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tools-filter-pill"
                          transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 28,
                          }}
                          className="absolute inset-0 -z-10 rounded-full bg-[#FFBC03]"
                        />
                      )}
                      {filter.label}
                      <span
                        className={`tabular-nums ${isActive ? "text-[#001822]/60" : "text-[#FBF4DA]/40"
                          }`}
                      >
                        {filter.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Swaps to the selected discipline's scope; announced politely */}
              <div className="mt-5 min-h-[3.2rem] max-w-[38ch]" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={selectedDomain}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
                    transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
                    className="text-sm leading-[1.6] text-[#FBF4DA]/56"
                  >
                    {summary}
                  </motion.p>
                </AnimatePresence>
              </div>
            </MotionReveal>
          </div>

          {/* Logo catalog: a ruled index, not boxed cards */}
          <div className="lg:col-span-8">
            <motion.ul
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={SCROLL_VIEWPORT}
              className="grid grid-cols-2 border-l border-t border-[#FBF4DA]/10 sm:grid-cols-4"
            >
              {catalog.map((tool) => {
                const isLit =
                  selectedDomain === "all" || tool.domain === selectedDomain;

                return (
                  <motion.li
                    key={tool.name}
                    variants={cellVariants}
                    className="border-b border-r border-[#FBF4DA]/10"
                  >
                    <div
                      className={`flex h-full flex-col justify-between gap-8 px-4 pb-5 pt-6 transition-[opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-5 sm:pt-7 ${isLit ? "opacity-100" : "opacity-[0.18] grayscale"
                        }`}
                    >
                      <div className="relative h-10 w-20 sm:h-11 sm:w-24">
                        <Image
                          src={tool.logo}
                          alt=""
                          fill
                          sizes="96px"
                          className={`object-contain object-left ${tool.tone ? TONE_CLASS[tool.tone] : ""
                            }`}
                        />
                      </div>

                      <div>
                        <p className="text-[0.95rem] font-semibold leading-tight text-[#FBF4DA]">
                          {tool.name}
                        </p>
                        <p className="mt-1 text-xs leading-snug text-[#FBF4DA]/56">
                          {tool.focus}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
