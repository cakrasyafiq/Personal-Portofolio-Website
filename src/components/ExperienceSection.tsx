import Image from "next/image";
import { Briefcase, Medal, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { ACHIEVEMENTS, EXPERIENCES } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-[#0B1014] px-4 py-16 sm:px-8 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] border-t border-[#FBF4DA]/12 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Work, Organizational Leadership & Honors */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <p className="text-lg font-medium text-[#FFBC03]">
                Journey &amp; Leadership
              </p>
              <h2 className="mt-1 font-display text-[clamp(3.6rem,7.5vw,5.8rem)] font-bold uppercase leading-[0.86] tracking-[-0.01em] text-[#FBF4DA]">
                EXPERIENCE &amp; HONORS
              </h2>
            </div>

            {/* Experience List separated by clean 1px hairline rules */}
            <div className="divide-y divide-[#FBF4DA]/12 border-y border-[#FBF4DA]/12">
              {EXPERIENCES.map((exp) => (
                <article
                  key={exp.id}
                  className="py-6 first:pt-5 last:pb-5 grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-4"
                >
                  <div className="sm:col-span-4 flex flex-col gap-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-[#02B08D]">
                      {exp.type === "Work" ? (
                        <Briefcase size={14} weight="bold" />
                      ) : (
                        <UsersThree size={14} weight="bold" />
                      )}
                      {exp.type}
                    </span>
                    <p className="text-sm italic text-[#FBF4DA]/65">
                      {exp.period}
                    </p>
                  </div>

                  <div className="sm:col-span-8">
                    <h3 className="text-lg font-semibold text-[#FBF4DA]">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-[#FFBC03]">
                      {exp.organization}
                    </p>
                    <p className="mt-2.5 text-[0.9375rem] leading-[1.6] text-[#FBF4DA]/78">
                      {exp.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Competitive Achievements */}
            <div>
              <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-[#FFBC03]">
                <Medal size={20} weight="duotone" />
                Competitive Experience
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {ACHIEVEMENTS.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-[#001822]/65 p-5 border border-[#FBF4DA]/10 transition-colors hover:border-[#02B08D]/45"
                  >
                    <p className="text-xs italic text-[#FBF4DA]/65">
                      {item.year}
                    </p>
                    <p className="mt-1 text-base font-semibold text-[#FBF4DA]">
                      {item.award}
                    </p>
                    <p className="mt-0.5 text-sm text-[#02B08D]">
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Leadership / Speaking Portrait */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative overflow-hidden rounded-[28px] bg-[#001822]/75 border border-[#FBF4DA]/12 p-6 pb-0 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.65)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-[#02B08D]/20 blur-3xl"
              />
              <div className="relative z-10 flex items-center justify-between gap-2 pb-4 border-b border-[#FBF4DA]/10">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#FFBC03]">
                  Leadership &amp; Collaboration
                </span>
                <span className="text-xs italic text-[#FBF4DA]/65">
                  FILKOM UB
                </span>
              </div>

              <div className="relative mx-auto mt-4 aspect-[4/5] w-full max-w-[360px]">
                <Image
                  src="/images/Photo_3.png"
                  alt="Cakra Syafiq speaking at a student organization event"
                  fill
                  sizes="(max-width: 1024px) 85vw, 360px"
                  className="object-contain object-bottom"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#001822] via-[#001822]/45 to-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
