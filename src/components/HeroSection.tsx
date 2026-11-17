"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "@phosphor-icons/react";
import { HERO_SPECIALTIES } from "@/data/portfolio";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative w-full bg-[#0B1014]">
      <div className="relative overflow-hidden rounded-b-[32px] md:rounded-b-[40px] mesh-hero-bg shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        {/* Static Film-Grain Stipple Overlay */}
        <div
          aria-hidden="true"
          className="film-grain pointer-events-none absolute inset-0 z-10 opacity-[0.18] mix-blend-overlay"
        />

        {/* Subtle Bottom Vignette to Anchor Portrait */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] h-52 bg-gradient-to-t from-[#001822]/95 via-[#001822]/55 to-transparent md:z-20 md:h-40 md:from-[#001822]/90 md:via-[#001822]/35"
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-between px-4 pt-20 pb-0 sm:px-8 sm:pt-24 md:justify-end md:px-12 md:pt-28">
          {/* Editorial Poster Stage */}
          <div className="relative flex flex-1 flex-col items-center justify-between md:justify-end">
            {/* Script Signature + Monumental Masthead (Above Portrait on Mobile, Behind Portrait on Desktop) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 mt-[10svh] flex w-full flex-col items-center select-none sm:mt-[12svh] md:z-10 md:mt-0 md:mb-[-5.5rem] lg:mb-[-7rem]"
            >
              <div className="relative inline-block text-center">
                <span className="font-script absolute -top-5 left-1 sm:-top-7 sm:left-2 md:-top-53 md:left-3 z-20 -rotate-3 text-[clamp(1.65rem,4.2vw,3.5rem)] text-[#FFBC03] drop-shadow-[0_4px_14px_rgba(0,24,34,0.45)]">
                  Cakra Syafiq&apos;s
                </span>
                <h1 className="font-display text-[clamp(5.6rem,35vw,10rem)] font-bold uppercase leading-[0.82] tracking-[-0.003em] text-[#FBF4DA] md:text-[clamp(6.2rem,40vw,120rem)] md:leading-[0.40]">
                  PORTFOLIO
                </h1>
              </div>
            </motion.div>

            {/* Cutout Portrait (Bottom Half of Screen on Mobile, Centered Poster Cutout on Desktop) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 mt-auto flex h-[62svh] w-full justify-center sm:h-[65svh] md:-mt-28 md:h-auto md:max-w-[580px] lg:-mt-36"
            >
              <div className="relative h-full aspect-[11/10] shrink-0 md:h-auto md:w-full">
                <Image
                  src="/images/Photo_1.png"
                  alt="Portrait of Cakra Syafiq"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 580px"
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,24,34,0.65)] [filter:contrast(1.06)_brightness(0.86)_saturate(0.82)] md:scale-125 md:origin-bottom"
                />
              </div>
            </motion.div>

            {/* Foreground Bottom Callouts */}
            <div className="pointer-events-none absolute inset-x-0 bottom-5 z-30 flex flex-col items-center gap-3 md:contents">
              {/* Foreground Specialty Stack + ENTHUSIAST Callout */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto relative z-30 flex flex-col items-center gap-1.5 text-center md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:flex-row md:items-center md:gap-5 md:text-right"
              >
                <div className="flex flex-col text-xs sm:text-sm md:text-[1.125rem] font-medium leading-[1.25] text-[#FBF4DA] drop-shadow-[0_2px_10px_rgba(0,24,34,0.85)]">
                  {HERO_SPECIALTIES.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="font-display text-[clamp(3.2rem,12vw,4.5rem)] md:text-[clamp(3.6rem,7vw,5.4rem)] font-bold uppercase leading-[0.82] tracking-[-0.0005em] text-[#FFBC03] drop-shadow-[0_6px_22px_rgba(0,24,34,0.75)]">
                  ENTHUSIAST
                </div>
              </motion.div>

              {/* Quick Action Anchor */}
              <div className="pointer-events-auto relative z-30 flex justify-center md:absolute md:bottom-10 md:right-0">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-xs font-medium tracking-[0.02em] text-[#FBF4DA]/90 backdrop-blur-md border border-[#FBF4DA]/16 transition-all hover:border-[#02B08D] hover:text-[#02B08D] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02B08D]"
                >
                  <span>Explore Works</span>
                  <ArrowDownRight size={15} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
