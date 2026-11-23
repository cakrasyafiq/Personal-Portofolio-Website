"use client";

import { useState } from "react";
import Image from "next/image";
import photo3 from "../../public/images/Photo_3.png";
import {
  Check,
  Copy,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { MotionReveal } from "@/components/MotionReveal";
import { CONTACT_INFO } from "@/data/portfolio";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback: open mail client if clipboard permission is unavailable
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    }
  };

  return (
    <footer
      id="contacts"
      className="relative bg-[#0B1014] px-4 pt-12 pb-10 sm:px-8 md:px-12"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Rounded Emerald-to-Abyssal Grainy Mesh Closing Banner */}
        <div className="relative overflow-hidden rounded-[32px] mesh-contact-bg p-8 sm:p-12 md:p-16 border border-[#FBF4DA]/12 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.75)]">
          <div
            aria-hidden="true"
            className="film-grain pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay"
          />

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            {/* Left Column: Call-to-Action, Email CTAs & Direct Channels */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <MotionReveal>
                <p className="text-lg font-medium text-[#FFBC03]">
                  Open for Collaborations &amp; Roles
                </p>
                <h2 className="mt-2 font-display text-[clamp(3.8rem,9vw,6.8rem)] font-bold uppercase leading-[0.84] tracking-[-0.001em] text-[#FBF4DA]">
                  LET&apos;S BUILD TOGETHER
                </h2>
                <p className="mt-4 max-w-[52ch] text-[0.96875rem] leading-[1.65] text-[#FBF4DA]/84">
                  Whether you are exploring AI automation, computer vision
                  engineering, product design, or creative media production—feel
                  free to reach out directly.
                </p>

                {/* Primary Email CTAs */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#FFBC03] px-6 py-3 text-sm font-bold text-[#001822] transition-all hover:bg-[#ffd04d] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBC03]"
                  >
                    <EnvelopeSimple size={18} weight="bold" />
                    <span>Send Email</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-5 py-3 text-sm font-medium text-[#FBF4DA] backdrop-blur-md border border-[#FBF4DA]/20 transition-all hover:border-[#02B08D] hover:text-[#02B08D] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02B08D]"
                  >
                    {copied ? (
                      <>
                        <Check size={17} weight="bold" className="text-[#02B08D]" />
                        <span>Copied {CONTACT_INFO.email}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={17} weight="bold" />
                        <span>{CONTACT_INFO.email}</span>
                      </>
                    )}
                  </button>
                </div>
              </MotionReveal>

              {/* Social & Direct Channels */}
              <MotionReveal
                delay={0.08}
                className="flex flex-col gap-3 border-t border-[#FBF4DA]/12 pt-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#FBF4DA]/65">
                  Direct Channels
                </p>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <a
                    href={CONTACT_INFO.linkedinHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-[#001822]/65 px-4 py-3 text-sm font-medium text-[#FBF4DA] border border-[#FBF4DA]/12 transition-colors hover:border-[#02B08D]/65 hover:text-[#02B08D]"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <LinkedinLogo size={19} weight="duotone" className="text-[#FFBC03]" />
                      LinkedIn
                    </span>
                    <span className="text-xs text-[#FBF4DA]/60">Putra Syafiq</span>
                  </a>

                  <a
                    href={CONTACT_INFO.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-[#001822]/65 px-4 py-3 text-sm font-medium text-[#FBF4DA] border border-[#FBF4DA]/12 transition-colors hover:border-[#02B08D]/65 hover:text-[#02B08D]"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <InstagramLogo size={19} weight="duotone" className="text-[#FFBC03]" />
                      Instagram
                    </span>
                    <span className="text-xs text-[#FBF4DA]/60">
                      {CONTACT_INFO.instagramHandle}
                    </span>
                  </a>

                  <a
                    href={CONTACT_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-[#001822]/65 px-4 py-3 text-sm font-medium text-[#FBF4DA] border border-[#FBF4DA]/12 transition-colors hover:border-[#02B08D]/65 hover:text-[#02B08D]"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <WhatsappLogo size={19} weight="duotone" className="text-[#FFBC03]" />
                      Phone / WhatsApp
                    </span>
                    <span className="text-xs text-[#FBF4DA]/60">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </a>

                  <a
                    href={CONTACT_INFO.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-[#001822]/65 px-4 py-3 text-sm font-medium text-[#FBF4DA] border border-[#FBF4DA]/12 transition-colors hover:border-[#02B08D]/65 hover:text-[#02B08D]"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <GithubLogo size={19} weight="duotone" className="text-[#FFBC03]" />
                      GitHub
                    </span>
                    <span className="text-xs text-[#FBF4DA]/60">@cakrasyafiq</span>
                  </a>
                </div>
              </MotionReveal>
            </div>

            {/* Right Column: Cutout Portrait with Social Icons Grounded to Card Bottom */}
            <MotionReveal
              delay={0.12}
              y={18}
              className="lg:col-span-5 -mb-8 sm:-mb-12 md:-mb-16 flex justify-center self-end"
            >
              <div className="relative aspect-[600/765] w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 top-12 bottom-8 rounded-full bg-[#02B08D]/20 blur-3xl"
                />
                <Image
                  src={photo3}
                  alt="Cakra Syafiq speaking with floating social media icons"
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 420px"
                  className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,18,28,0.65)]"
                />
              </div>
            </MotionReveal>
          </div>
        </div>

        {/* Bottom Colophon */}
        <MotionReveal delay={0.08} className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#FBF4DA]/10 pt-6 text-xs text-[#FBF4DA]/55 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFBC03] font-display text-sm font-bold text-[#001822] pt-0.5">
              CS
            </span>
            <span>Cakra Syafiq &mdash; Universitas Brawijaya</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Cakra Syafiq. All rights reserved.</p>
        </MotionReveal>
      </div>
    </footer>
  );
}
