import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { projects, type Project } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="w-full scroll-mt-20 bg-ink text-paper">
      <div className="flex items-end justify-between gap-4 px-4 pt-20 pb-10 md:px-8 md:pt-28">
        <h2 className="display text-[12vw] md:text-[8vw]">
          What I&apos;ve
          <br />
          Built
        </h2>
        <p className="label shrink-0 text-xs font-bold uppercase text-brand md:text-sm">
          ({String(projects.length).padStart(2, "0")}) Projects
        </p>
      </div>

      <ul>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <li className="border-t border-paper/20 last:border-b">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-col gap-4 px-4 py-8 transition-colors duration-300 hover:bg-paper/5 focus-visible:bg-paper/5 md:px-8 md:py-12 lg:flex-row lg:items-start lg:gap-8"
      >
        <span className="label text-sm font-bold text-brand lg:w-12 lg:pt-3 md:text-base">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex-1 transition-transform duration-300 lg:group-hover:translate-x-4">
          <h3 className="display text-[clamp(2rem,7vw,5.5rem)] break-words">
            {project.title}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-paper/70 md:text-base">
            {project.description}
          </p>

          <span className="label mt-6 inline-block border-b-2 border-brand pb-0.5 text-xs font-bold uppercase lg:hidden">
            View project →
          </span>
        </div>

        <ArrowUp
          aria-hidden="true"
          strokeWidth={2.5}
          className="hidden h-16 w-16 shrink-0 rotate-0 text-brand opacity-0 transition duration-300 group-hover:rotate-45 group-hover:opacity-100 group-focus-visible:rotate-45 group-focus-visible:opacity-100 lg:block"
        />
      </Link>
    </li>
  );
}
