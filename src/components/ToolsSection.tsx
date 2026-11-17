"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Code,
  FilmSlate,
  Sparkle,
} from "@phosphor-icons/react";
import {
  EASE_EDITORIAL,
  MotionReveal,
  SCROLL_VIEWPORT,
} from "@/components/MotionReveal";
import { TOOL_DOMAINS } from "@/data/portfolio";

type DomainFilter = "all" | "coding" | "ai-ml" | "creative";

const DOMAIN_ICONS: Record<string, React.ReactNode> = {
  coding: <Code size={18} weight="bold" />,
  "ai-ml": <Brain size={18} weight="bold" />,
  creative: <FilmSlate size={18} weight="bold" />,
};

export function ToolsSection() {
  const [selectedDomain, setSelectedDomain] = useState<DomainFilter>("all");
  const prefersReducedMotion = useReducedMotion();

  const visibleDomains =
    selectedDomain === "all"
      ? TOOL_DOMAINS
      : TOOL_DOMAINS.filter((domain) => domain.id === selectedDomain);

  return (
    <section
      id="tools"
      className="relative bg-[#0B1014] px-4 py-20 sm:px-8 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] border-t border-[#FBF4DA]/12 pt-16 md:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Sticky Editorial Lead + Interactive Domain Switcher */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <MotionReveal>
              <p className="text-lg font-medium text-[#FFBC03]">
                Technical &amp; Creative Stack
              </p>
              <h2 className="mt-1 font-display text-[clamp(3.8rem,8vw,6.2rem)] font-bold uppercase leading-[0.84] tracking-[-0.01em] text-[#FBF4DA]">
                TOOLS
              </h2>
              <p className="mt-4 max-w-[38ch] text-[0.95rem] leading-[1.6] text-[#FBF4DA]/76">
                A cross-disciplinary toolkit spanning AI pipelines, production web
                engineering, and visual storytelling.
              </p>

              {/* Domain Filter Buttons */}
              <div
                role="tablist"
                aria-label="Filter tools by domain"
                className="mt-7 flex flex-wrap gap-2"
              >
                {[
                  { id: "all", label: "All Domains" },
                  { id: "coding", label: "Software Dev" },
                  { id: "ai-ml", label: "AI & ML" },
                  { id: "creative", label: "Creative Media" },
                ].map((tab) => {
                  const isActive = selectedDomain === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedDomain(tab.id as DomainFilter)}
                      className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02B08D] ${
                        isActive
                          ? "text-[#001822] font-semibold"
                          : "bg-white/[0.05] text-[#FBF4DA]/80 border border-[#FBF4DA]/12 hover:border-[#02B08D]/60 hover:text-[#FBF4DA]"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tools-tab-pill"
                          transition={{ type: "spring", stiffness: 280, damping: 28 }}
                          className="absolute inset-0 -z-10 rounded-full bg-[#FFBC03]"
                        />
                      )}
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </MotionReveal>
          </div>

          {/* Right Asymmetric Domain Rows */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {visibleDomains.map((domain, index) => (
              <motion.div
                key={domain.id}
                layout
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={SCROLL_VIEWPORT}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.06,
                  ease: EASE_EDITORIAL,
                }}
                className="group relative overflow-hidden rounded-[24px] bg-[#001822]/65 p-6 sm:p-8 border border-[#FBF4DA]/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-colors hover:border-[#02B08D]/40"
              >
                {/* Subtle Emerald Top-Edge Glow on Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#02B08D]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[#FBF4DA]/10 pb-5">
                  <div>
                    <h3 className="inline-flex items-center gap-2.5 text-xl font-semibold text-[#FFBC03]">
                      <span className="text-[#02B08D]">
                        {DOMAIN_ICONS[domain.id] ?? <Sparkle size={18} weight="bold" />}
                      </span>
                      {domain.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#FBF4DA]/72">
                      {domain.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#FBF4DA]/50">
                    {domain.tools.length} Tools
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {domain.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.04] px-4 py-3 border border-[#FBF4DA]/10 transition-all duration-200 hover:-translate-y-[1px] hover:border-[#02B08D]/55 hover:bg-[#02B08D]/[0.08]"
                    >
                      <span className="text-sm font-semibold text-[#FBF4DA]">
                        {tool.name}
                      </span>
                      <span className="text-[11px] font-medium text-[#FBF4DA]/60 text-right">
                        {tool.focus}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
