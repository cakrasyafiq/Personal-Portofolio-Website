"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/data/portfolio";

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-8 sm:pt-6 pointer-events-none">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4">
        {/* Brand Monogram + Wordmark */}
        <a
          href="#home"
          className="pointer-events-auto group inline-flex items-center gap-3 rounded-full bg-[#001822]/45 py-1.5 pl-1.5 pr-4 backdrop-blur-md border border-[#FBF4DA]/12 transition-colors hover:border-[#FFBC03]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBC03]"
          aria-label="Cakra Syafiq Home"
        >
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/images/brand-icon.png"
              alt=""
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-[1.75rem] font-bold uppercase leading-none tracking-[0.02em] text-[#FBF4DA] pt-0.5">
            CAKRA SYAFIQ
          </span>
        </a>

        {/* Desktop Floating Frosted Pill Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="pointer-events-auto hidden md:flex items-center gap-1 rounded-full bg-white/[0.08] px-3 py-1.5 backdrop-blur-md border border-[#FBF4DA]/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveId(link.id)}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02B08D] ${
                  isActive
                    ? "text-[#FFBC03] font-semibold"
                    : "text-[#FBF4DA]/85 hover:text-[#FBF4DA]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    className="absolute inset-0 -z-10 rounded-full bg-[#001822]/55 border border-[#FFBC03]/25"
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="pointer-events-auto flex md:hidden h-11 w-11 items-center justify-center rounded-full bg-[#001822]/75 text-[#FBF4DA] backdrop-blur-md border border-[#FBF4DA]/15 transition-transform active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBC03]"
        >
          {mobileOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            aria-label="Mobile Navigation"
            className="pointer-events-auto mx-auto mt-3 max-w-[1280px] rounded-2xl bg-[#001822]/92 p-3 backdrop-blur-xl border border-[#FBF4DA]/14 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => {
                        setActiveId(link.id);
                        setMobileOpen(false);
                      }}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#FFBC03]/15 text-[#FFBC03] font-semibold"
                          : "text-[#FBF4DA]/85 hover:bg-white/5 hover:text-[#FBF4DA]"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
