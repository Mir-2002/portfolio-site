import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageSrc?: string;
}

const THUMB = (url: string) =>
  `https://image.thum.io/get/width/600/crop/400/noanimate/${url}`;

const projects: Project[] = [
  {
    title: "Automated Python Codebase Documentation Generator",
    description:
      "A tool that parses Python codebases using Abstract Syntax Trees to create concise and readable documentations using a custom trained CodeT5 transformer model.",
    technologies: [
      "React",
      "FastAPI",
      "HuggingFace",
      "MongoDB",
      "PyTorch",
      "Google Colab",
    ],
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Spoon",
    description:
      "A last.fm clone that lets users view their top artists, albums, and tracks in various time periods.",
    technologies: ["Next.js", "Spotify Web API"],
    githubUrl: "https://github.com/Mir-2002/spoon",
    liveUrl: "https://spoon-iota.vercel.app/",
    imageSrc: THUMB("https://spoon-iota.vercel.app/"),
  },
  {
    title: "QuickChat",
    description:
      "A real-time chat app that allows two anonymous users to chat in a room that self-destructs after 10 minutes.",
    technologies: ["Next.js", "Redis"],
    githubUrl: "https://github.com/Mir-2002/realtime_chat_app",
    liveUrl: "https://quickchat-by-mir.vercel.app/",
    imageSrc: THUMB("https://quickchat-by-mir.vercel.app/"),
  },
  {
    title: "oGBA",
    description:
      "A web-based Game Boy Advance emulator with cloud ROM sync, letting users play their GBA library from any browser with saves stored in the cloud.",
    technologies: ["React", "Neon", "Vercel Serverless", "Google OAuth"],
    githubUrl: "https://github.com/Mir-2002/ogba",
    liveUrl: "https://ogba-nine.vercel.app/",
    imageSrc: THUMB("https://ogba-nine.vercel.app/"),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 lg:py-32 px-10 md:px-20 border-t border-border">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12">
        What I&apos;ve Built
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden hover:border-accent/40 transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-48 bg-surface-hover">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-muted text-sm">Image Placeholder</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-accent mb-3">
          {project.title}
        </h3>

        <p className="text-muted mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
          >
            <Github size={20} />
            <span className="text-sm font-medium">Code</span>
          </Link>

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              <ExternalLink size={20} />
              <span className="text-sm font-medium">Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
