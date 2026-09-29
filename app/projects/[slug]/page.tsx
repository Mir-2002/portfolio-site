import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUp, Github, ExternalLink } from "lucide-react";
import React from "react";
import { getProject, projects, type ProjectImage } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project
    ? { title: `${project.title} | Ahmer Macasindel`, description: project.description }
    : {};
}

const pad = (n: number) => String(n).padStart(2, "0");

// Wide screenshots take a full row; smaller crops sit side by side.
const isWide = ({ width, height }: ProjectImage) =>
  width >= 1000 && width / height >= 1.6;

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="px-4 pt-28 pb-12 md:px-8 md:pt-32 md:pb-16">
        <div className="label flex items-center justify-between gap-4 text-xs font-bold uppercase md:text-sm">
          <Link
            href="/#projects"
            className="flex items-center gap-2 transition-transform duration-300 hover:-translate-x-1"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
            All projects
          </Link>
          <span>
            Project {pad(index + 1)} / {pad(projects.length)}
          </span>
        </div>

        <h1 className="display mt-10 text-[clamp(2.75rem,10vw,10rem)] break-words md:mt-14">
          {project.title}
        </h1>

        <div className="mt-10 grid gap-10 border-t-2 border-ink pt-8 md:mt-14 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <p className="max-w-2xl text-lg font-medium leading-relaxed md:text-xl">
            {project.description}
          </p>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="label mb-3 text-xs font-bold uppercase">Tech stack</h2>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="label rounded-full border-2 border-ink px-3 py-1 text-xs font-bold uppercase"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="label flex flex-wrap gap-3 text-sm font-bold uppercase">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3 text-paper transition-transform duration-300 hover:scale-110"
              >
                <Github size={16} />
                Code
              </Link>
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 transition-transform duration-300 hover:scale-110"
                >
                  <ExternalLink size={16} />
                  Live demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {project.images.length > 0 && (
        <section className="bg-ink px-4 py-16 text-paper md:px-8 md:py-24">
          <div className="mb-10 flex items-end justify-between gap-4 md:mb-14">
            <h2 className="display text-[clamp(2.5rem,8vw,7rem)]">Screens</h2>
            <p className="label shrink-0 text-xs font-bold uppercase text-brand md:text-sm">
              ({pad(project.images.length)}) Images
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {project.images.map((image, i) => (
              <figure
                key={image.src}
                className={`flex flex-col ${isWide(image) ? "md:col-span-2" : ""}`}
              >
                <div className="flex flex-1 items-center justify-center border-2 border-paper bg-paper/5 p-3 md:p-6">
                  <Image
                    src={image.src}
                    alt={`${project.title}: ${image.caption}`}
                    width={image.width}
                    height={image.height}
                    sizes={isWide(image) ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                    style={{ maxWidth: image.width }}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="label mt-3 flex gap-3 text-xs font-bold uppercase">
                  <span className="text-brand">{pad(i + 1)}</span>
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="px-4 md:px-8">
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-end justify-between gap-6 py-16 md:py-24"
        >
          <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-4">
            <p className="label mb-4 text-xs font-bold uppercase md:text-sm">
              Next project
            </p>
            <p className="display text-[clamp(2.25rem,8vw,8rem)] break-words">
              {next.title}
            </p>
          </div>
          <ArrowUp
            aria-hidden="true"
            strokeWidth={2.5}
            className="h-12 w-12 shrink-0 rotate-45 transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20"
          />
        </Link>
      </section>
    </>
  );
}
