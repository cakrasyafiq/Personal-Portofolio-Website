"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Eye, X } from "@phosphor-icons/react";
import {
  EASE_EDITORIAL,
  MotionReveal,
  SCROLL_VIEWPORT,
} from "@/components/MotionReveal";
import {
  PROJECT_FILTERS,
  PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from "@/data/portfolio";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative bg-[#0B1014] px-4 py-20 sm:px-8 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] border-t border-[#FBF4DA]/12 pt-16 md:pt-24">
        {/* Section Header + Category Filters */}
        <MotionReveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-medium text-[#FFBC03]">
              Featured Case Studies
            </p>
            <h2 className="mt-1 font-display text-[clamp(3.8rem,8.5vw,6.5rem)] font-bold uppercase leading-[0.84] tracking-[-0.001em] text-[#FBF4DA]">
              PROJECTS
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {PROJECT_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02B08D] ${isActive
                      ? "text-[#001822] font-semibold"
                      : "bg-white/[0.05] text-[#FBF4DA]/80 border border-[#FBF4DA]/12 hover:border-[#02B08D]/60 hover:text-[#FBF4DA]"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-filter-pill"
                      transition={{ type: "spring", stiffness: 280, damping: 28 }}
                      className="absolute inset-0 -z-10 rounded-full bg-[#FFBC03]"
                    />
                  )}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </MotionReveal>

        {/* 2-Column Editorial Showcase Grid */}
        {filteredProjects.length === 0 ? (
          <div className="mt-12 rounded-[24px] border border-[#FBF4DA]/12 bg-[#001822]/45 p-12 text-center">
            <p className="text-base text-[#FBF4DA]/80">
              No projects match this filter yet.
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="mt-4 rounded-full bg-[#FFBC03] px-5 py-2 text-sm font-semibold text-[#001822]"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={SCROLL_VIEWPORT}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : (index % 2) * 0.08,
                  ease: EASE_EDITORIAL,
                }}
                className="group relative flex flex-col overflow-hidden rounded-[24px] bg-[#001822]/65 border border-[#FBF4DA]/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:border-[#02B08D]/50"
              >
                {/* Hover Top Edge Illumination */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#02B08D]/75 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Preview Frame (Preserves Portrait Posters & Landscape Mockups Cleanly) */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Inspect ${project.title} details`}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#06121A] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FFBC03]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(2,176,141,0.14),transparent_68%)]"
                  />
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 95vw, 580px"
                    className={`${project.imageAspect === "portrait"
                        ? "object-contain p-3"
                        : "object-cover"
                      } transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
                  />
                  <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full bg-[#001822]/85 px-3.5 py-1.5 text-xs font-medium text-[#FBF4DA] backdrop-blur-md border border-[#FBF4DA]/18 opacity-90 transition-all group-hover:border-[#02B08D] group-hover:text-[#02B08D]">
                    <Eye size={14} weight="bold" />
                    Preview Details
                  </span>
                </button>

                {/* Card Copy */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#FFBC03]">
                        {project.categoryLabel}
                      </span>
                      <span className="font-display text-2xl font-bold leading-none text-[#FBF4DA]/35">
                        {project.number}
                      </span>
                    </div>

                    <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-[#FBF4DA]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#02B08D]">
                      Role: {project.role}
                    </p>
                    <p className="mt-3 text-[0.9375rem] leading-[1.6] text-[#FBF4DA]/80">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#FBF4DA]/10 pt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-full bg-white/[0.05] px-3 py-1 text-xs font-medium text-[#FBF4DA]/75 border border-[#FBF4DA]/10"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#FFBC03] px-4 py-2 text-xs font-bold text-[#001822] transition-all hover:bg-[#ffd04d] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBC03]"
                    >
                      <span>{project.linkLabel}</span>
                      <ArrowUpRight size={14} weight="bold" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-[#001822] border border-[#FBF4DA]/16 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1014]/85 text-[#FBF4DA] border border-[#FBF4DA]/18 transition-colors hover:border-[#FFBC03] hover:text-[#FFBC03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBC03]"
              >
                <X size={18} weight="bold" />
              </button>

              <div className="relative h-[300px] sm:h-[400px] w-full bg-[#06121A]">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} full preview`}
                  fill
                  sizes="(max-width: 768px) 95vw, 768px"
                  className="object-contain p-4"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#FFBC03]/15 px-3 py-1 text-xs font-semibold text-[#FFBC03]">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="text-xs font-medium text-[#02B08D]">
                    {selectedProject.role}
                  </span>
                </div>

                <h3
                  id="modal-project-title"
                  className="mt-3 text-2xl sm:text-3xl font-bold text-[#FBF4DA]"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-[0.96875rem] leading-[1.7] text-[#FBF4DA]/85">
                  {selectedProject.details}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#FBF4DA]/12 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-[#FBF4DA]/80 border border-[#FBF4DA]/12"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#FFBC03] px-5 py-2.5 text-sm font-bold text-[#001822] transition-all hover:bg-[#ffd04d] active:scale-[0.98]"
                  >
                    <span>{selectedProject.linkLabel}</span>
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
