import { Briefcase, Medal, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { MotionReveal } from "@/components/MotionReveal";
import { ACHIEVEMENTS, EXPERIENCES } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative border-y border-[#FBF4DA]/16 bg-[#18262F] px-4 py-16 sm:px-8 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Lead & Competitive Honors */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <MotionReveal>
              <p className="text-lg font-medium text-[#FFBC03]">
                Journey &amp; Leadership
              </p>
              <h2 className="mt-1 font-display text-[clamp(3.6rem,7.5vw,5.8rem)] font-bold uppercase leading-[0.86] tracking-[-0.01em] text-[#FBF4DA]">
                EXPERIENCE &amp; HONORS
              </h2>
              <p className="mt-4 max-w-[40ch] text-[0.95rem] leading-[1.6] text-[#FBF4DA]/76">
                Production engineering internships, student organization
                leadership, and competitive milestones.
              </p>
            </MotionReveal>

            {/* Competitive Achievements */}
            <div>
              <MotionReveal>
                <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-[#FFBC03]">
                  <Medal size={20} weight="duotone" />
                  Competitive Experience
                </h3>
              </MotionReveal>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {ACHIEVEMENTS.map((item, index) => (
                  <MotionReveal key={item.id} delay={index * 0.06}>
                    <div className="h-full rounded-2xl bg-[#001822]/85 p-5 border border-[#FBF4DA]/12 transition-colors hover:border-[#02B08D]/45">
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
                  </MotionReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Work & Organizational Leadership Timeline */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#FBF4DA]/12 border-y border-[#FBF4DA]/12">
              {EXPERIENCES.map((exp, index) => (
                <article
                  key={exp.id}
                  className="py-6 first:pt-5 last:pb-5"
                >
                  <MotionReveal
                    delay={index * 0.06}
                    className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-4"
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
                  </MotionReveal>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
