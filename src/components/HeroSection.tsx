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
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#001822]/90 via-[#001822]/35 to-transparent"
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-end px-4 pt-28 pb-0 sm:px-8 md:px-12">
          {/* Editorial Poster Stage */}
          <div className="relative flex flex-1 flex-col items-center justify-end">
            {/* Script Signature + Monumental Masthead (Behind Portrait on Desktop) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex w-full flex-col items-center select-none md:mb-[-5.5rem] lg:mb-[-7rem]"
            >
              <div className="relative inline-block text-center">
                <span className="font-script absolute -top-5 left-1 sm:-top-7 sm:left-2 md:-top-53 md:left-3 z-20 -rotate-3 text-[clamp(1.65rem,4.2vw,3.5rem)] text-[#FFBC03] drop-shadow-[0_4px_14px_rgba(0,24,34,0.45)]">
                  Cakra Syafiq&apos;s
                </span>
                <h1 className="font-display text-[clamp(6.2rem,40vw,40rem)] font-bold uppercase leading-[0.20] tracking-[-0.003em] text-[#FBF4DA]">
                  PORTFOLIO
                </h1>
              </div>
            </motion.div>

            {/* Foreground Cutout Portrait */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 -mt-6 flex w-full max-w-[440px] sm:max-w-[520px] md:max-w-[580px] justify-center md:-mt-28 lg:-mt-36"
            >
              <div className="relative w-full aspect-[11/10]">
                <Image
                  src="/images/Photo_1.png"
                  alt="Portrait of Cakra Syafiq"
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 580px"
                  className="scale-125 origin-bottom object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,24,34,0.65)] [filter:contrast(1.06)_brightness(0.86)_saturate(0.82)]"
                />
              </div>
            </motion.div>

            {/* Foreground Specialty Stack + ENTHUSIAST Callout */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-30 -mt-14 mb-8 flex flex-col items-center gap-3 text-center sm:-mt-20 sm:mb-10 md:absolute md:bottom-10 md:left-1/2 md:mt-0 md:mb-0 md:-translate-x-1/2 md:flex-row md:items-center md:gap-5 md:text-right"
            >
              <div className="flex flex-col text-sm sm:text-base md:text-[1.125rem] font-medium leading-[1.25] text-[#FBF4DA] drop-shadow-[0_2px_10px_rgba(0,24,34,0.85)]">
                {HERO_SPECIALTIES.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="font-display text-[clamp(3.6rem,7vw,5.4rem)] font-bold uppercase leading-[0.82] tracking-[-0.0005em] text-[#FFBC03] drop-shadow-[0_6px_22px_rgba(0,24,34,0.75)]">
                ENTHUSIAST
              </div>
            </motion.div>

            {/* Quick Action Anchor (Bottom-Right Desktop) */}
            <div className="relative z-30 mb-6 flex justify-center md:absolute md:bottom-10 md:right-0 md:mb-0">
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
    </section>
  );
}
