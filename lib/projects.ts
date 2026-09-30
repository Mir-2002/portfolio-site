export interface ProjectImage {
  src: string;
  caption: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  images: ProjectImage[];
}

const image = (
  slug: string,
  file: string,
  caption: string,
  width: number,
  height: number
): ProjectImage => ({ src: `/images/${slug}/${file}`, caption, width, height });

export const projects: Project[] = [
  {
    slug: "playabl",
    title: "Playabl",
    description:
      "A social platform where users connect to last.fm, earn points through their scrobbles, maintain daily streaks, compete in a global leaderboard and see their activity in a heatmap.",
    technologies: ["Next.js", "Supabase", "TanStack", "Zod", "Crons"],
    githubUrl: "https://github.com/Mir-2002/playabl",
    liveUrl: "https://playabl.vercel.app",
    images: [
      image("playabl", "now-playing.png", "Now Playing", 1153, 201),
      image("playabl", "points.png", "Points", 1172, 200),
      image("playabl", "streaks.png", "Streaks", 477, 727),
      image("playabl", "activity-heatmap.png", "Activity Heatmap", 469, 310),
      image("playabl", "leaderboard.png", "Leaderboard", 1151, 428),
    ],
  },
  {
    slug: "quickchat",
    title: "QuickChat",
    description:
      "A real-time chat app that allows two anonymous users to chat in a room that self-destructs after 10 minutes.",
    technologies: ["Next.js", "Redis"],
    githubUrl: "https://github.com/Mir-2002/realtime_chat_app",
    liveUrl: "https://quickchat-by-mir.vercel.app/",
    images: [
      image("quickchat", "landing.png", "Landing", 1920, 937),
      image("quickchat", "room.png", "Chat Room", 1920, 951),
      image("quickchat", "destroyed.png", "Room Destroyed", 1920, 946),
    ],
  },
  {
    slug: "ogba",
    title: "oGBA",
    description:
      "A web-based Game Boy Advance emulator with cloud ROM sync, letting users play their GBA library from any browser with saves stored in the cloud.",
    technologies: ["React", "Neon", "Vercel Serverless", "Google OAuth"],
    githubUrl: "https://github.com/Mir-2002/ogba",
    liveUrl: "https://ogba-nine.vercel.app/",
    images: [image("ogba", "ogba.png", "Emulator", 1920, 951)],
  },
  {
    slug: "eventell",
    title: "Eventell",
    description:
      "An event ticketing platform built as a microservices Spring Boot app with PostgreSQL, Keycloak, and React.",
    technologies: [
      "Spring Boot",
      "React",
      "Keycloak",
      "PostgreSQL",
      "Nginx",
      "Docker",
    ],
    githubUrl: "https://github.com/Mir-2002/eventell",
    images: [
      image("eventell", "landing.png", "Landing", 1904, 951),
      image("eventell", "for-organizers.png", "For Organizers", 1905, 953),
      image("eventell", "create-events.png", "Create Events", 1906, 952),
      image("eventell", "tickets.png", "Tickets", 1906, 952),
      image("eventell", "qr-code-generator.png", "QR Code Generator", 1093, 906),
      image("eventell", "qr-code-validator.png", "QR Code Validator", 1083, 950),
    ],
  },
  {
    slug: "ragnaw",
    title: "RAGNaw",
    description:
      "A Retrieval Augmented Generation (RAG) pipeline built on top of a SQLite database made up of PokeAPI data using hybrid retrieval and tool calling with Groq and Gemini models.",
    technologies: [
      "FastAPI",
      "Next.js",
      "React",
      "fastembed",
      "MiniLM",
      "bm25s",
      "SQLite",
      "Docker",
    ],
    githubUrl: "https://github.com/Mir-2002/ragnaw",
    liveUrl: "https://ragnaw.vercel.app/",
    images: [
      image("ragnaw", "landing.png", "Landing", 818, 949),
      image("ragnaw", "conversation.png", "Conversation", 792, 951),
      image("ragnaw", "about.png", "About", 504, 539),
      image("ragnaw", "retro-ui-options.png", "Retro UI Options", 508, 259),
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
