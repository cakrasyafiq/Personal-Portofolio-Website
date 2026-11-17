import Image from "next/image";
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
      className="relative bg-[#0B1014] px-4 py-20 sm:px-8 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
          {/* Left Column: Eyebrow, Monumental Display Title, Career Focus */}
          <div className="md:col-span-4 md:self-center">
            <p className="text-lg sm:text-xl font-medium text-[#FFBC03]">
              A Brief Introduction
            </p>
            <h2 className="relative z-10 mt-1 font-display text-[clamp(4.4rem,10vw,7.4rem)] font-bold uppercase leading-[0.84] tracking-[-0.01em] text-[#FBF4DA] md:whitespace-nowrap md:pr-4">
              ABOUT ME
            </h2>

            <div className="mt-8">
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
            </div>
          </div>

          {/* Center Column: Portrait Cutout Bridging Left & Right */}
          <div className="relative z-20 flex justify-center md:col-span-4 md:self-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5]">
              <Image
                src="/images/Photo_2.png"
                alt="Cakra Syafiq wearing Universitas Brawijaya blazer"
                fill
                sizes="(max-width: 768px) 85vw, 380px"
                className="object-contain object-bottom drop-shadow-[0_24px_40px_rgba(0,0,0,0.65)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B1014] via-[#0B1014]/55 to-transparent"
              />
            </div>
          </div>

          {/* Right Column: Bio, Education, Core Skills */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#FFBC03]">
                Meet Syafiq
              </h3>
              <p className="mt-3 max-w-[60ch] text-[0.96875rem] leading-[1.65] text-[#FBF4DA]/88">
                {ABOUT_BIO}
              </p>
            </div>

            <div>
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
            </div>

            <div className="border-t border-[#FBF4DA]/12 pt-5">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
