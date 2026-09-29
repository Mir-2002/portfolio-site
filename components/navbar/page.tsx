import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://github.com/Mir-2002", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/ahmer-macasindel-a02280331/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-30 flex items-center justify-between gap-3 px-4 py-4 md:px-8">
      <Link
        href="/"
        aria-label="Home"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink ring-1 ring-paper/25 transition-transform duration-300 hover:scale-110"
      >
        <Image src="/ahmer-logo.svg" alt="" width={22} height={22} />
      </Link>

      <div className="label flex items-center gap-1 rounded-full bg-ink p-1 ring-1 ring-paper/25 text-xs font-bold uppercase text-paper shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="rounded-full px-3 py-2 transition-colors duration-200 hover:bg-paper hover:text-ink sm:px-4"
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="hidden shrink-0 gap-2 sm:flex">
        {SOCIALS.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper ring-1 ring-paper/25 transition-transform duration-300 hover:scale-110"
          >
            <Icon size={18} />
          </Link>
        ))}
      </div>
    </nav>
  );
}
