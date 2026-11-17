import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";
import {
  ABOUT_BIO,
  CAREER_FOCUS,
  CORE_SKILLS,
  EDUCATION_HISTORY,
} from "@/data/portfolio";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-x-clip bg-[#0B1014] px-4 pt-20 pb-0 sm:px-8 md:px-12 md:pt-28 md:pb-0"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-8">
          {/* Left Column: Eyebrow, Monumental Display Title, Career Focus */}
          <div className="relative z-20 md:col-span-6 md:self-start lg:col-span-4 lg:self-center lg:pb-24">
            <MotionReveal>
              <p className="text-lg sm:text-xl font-medium text-[#FFBC03]">
                A Brief Introduction
              </p>
              <h2 className="relative z-20 mt-1 font-display text-[clamp(4.8rem,22vw,9.5rem)] lg:text-[clamp(10rem,16vw,15rem)] font-bold uppercase leading-[0.84] tracking-[-0.01em] text-[#FBF4DA] lg:whitespace-nowrap lg:pr-4">
                ABOUT ME
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.08} className="mt-8">
              <h3 className="text-lg font-semibold text-[#FFBC03]">
                Career Focus
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2.5 md:flex-col md:items-start">
                {CAREER_FOCUS.map((role) => (
                  <li
                    key={role}
                    className="rounded-full bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-[#FBF4DA]/90 border border-[#FBF4DA]/12 transition-all duration-200 hover:-translate-y-[1px] hover:border-[#02B08D]/70 hover:text-[#FBF4DA]"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>

          {/* Center Column: Portrait Cutout Grounded Above Section Border */}
          <div className="order-last relative z-10 flex justify-center self-end md:col-span-12 lg:order-none lg:col-span-4 lg:self-stretch">
            <div className="relative w-full max-w-[460px] sm:max-w-[540px] md:max-w-[600px] aspect-[876/1080] lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:h-[100%] lg:w-auto lg:max-w-none">
              <MotionReveal delay={0.1} y={18} className="relative h-full w-full">
                <Image
                  src="/images/Photo_2.png"
                  alt="Cakra Syafiq wearing Universitas Brawijaya blazer"
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 600px, 460px"
                  className="object-contain object-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.6)]"
                />
              </MotionReveal>
            </div>
          </div>

          {/* Right Column: Bio, Education, Core Skills */}
          <div className="relative z-20 flex flex-col gap-8 md:col-span-6 md:self-start lg:col-span-4 lg:self-center lg:pb-24">
            <MotionReveal delay={0.06}>
              <h3 className="text-xl font-semibold text-[#FFBC03]">
                Meet Syafiq
              </h3>
              <p className="mt-3 max-w-[60ch] text-[0.96875rem] leading-[1.65] text-[#FBF4DA]/88">
                {ABOUT_BIO}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.12}>
              <h3 className="text-xl font-semibold text-[#FFBC03]">
                Education
              </h3>
              <div className="mt-3 flex flex-col gap-4">
                {EDUCATION_HISTORY.map((edu) => (
                  <div
                    key={edu.institution}
                    className="border-l border-[#FBF4DA]/18 pl-4"
                  >
                    <p className="text-[0.96875rem] font-semibold text-[#FBF4DA]">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-[#FBF4DA]/75">{edu.program}</p>
                    <p className="mt-0.5 text-xs italic text-[#FBF4DA]/65">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </MotionReveal>

            <MotionReveal delay={0.16} className="border-t border-[#FBF4DA]/12 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#02B08D]">
                Core Competencies
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {CORE_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#001822]/75 px-3 py-1 text-xs font-medium text-[#FBF4DA]/80 border border-[#FBF4DA]/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
