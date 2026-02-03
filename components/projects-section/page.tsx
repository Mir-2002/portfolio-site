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
  imageSrc?: string; // optional: if missing we'll show a placeholder
}

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
    // Placeholder only for now (no imageSrc)
  },
  {
    title: "Spoon",
    description:
      "A last.fm clone that lets users view their top artists, albums, and tracks in various time periods.",
    technologies: ["Next.js", "Spotify Web API"],
    githubUrl: "https://github.com/Mir-2002/spoon",
    liveUrl: "https://spoon-iota.vercel.app/",
    imageSrc: "/projects/SPOON_LANDING_PAGE.png",
  },
  {
    title: "QuickChat",
    description:
      "A real-time chat app that allows two anonymous users to chat in a room that self-destructs after 10 minutes.",
    technologies: ["Next.js", "Redis"],
    githubUrl: "https://github.com/Mir-2002/realtime_chat_app",
    liveUrl: "https://quickchat-by-mir.vercel.app/",
    imageSrc: "/projects/QUICKCHAT_LANDING_PAGE.png",
  },
  {
    title: "CS Expo 2026",
    description:
      "Lead the development of the website that showcases the CS Expo 2026 event of the College of Computer Studies at FEU Institute of Technology.",
    technologies: ["Next.js", "Vercel"],
    githubUrl: "https://github.com/Mir-2002/cs-expo-2026",
    liveUrl: "https://cs-expo-2026.vercel.app/",
    imageSrc: "/projects/CSEXPO_LANDING_PAGE.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full px-10 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-12">
        What I've Built
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
    <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-200">
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
            <span className="text-gray-400 text-sm">Image Placeholder</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-primary-green mb-3">
          {project.title}
        </h3>

        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-secondary-green/20 text-primary-green text-xs font-medium rounded-full"
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
            className="flex items-center gap-2 text-primary-green hover:text-secondary-green transition-colors"
          >
            <Github size={20} />
            <span className="text-sm font-medium">Code</span>
          </Link>

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-green hover:text-secondary-green transition-colors"
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
