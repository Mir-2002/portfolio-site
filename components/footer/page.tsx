import React from "react";
import Link from "next/link";

const SOCIALS = [
  { href: "https://github.com/Mir-2002", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ahmer-macasindel-a02280331/",
    label: "LinkedIn",
  },
  { href: "mailto:orfianamir@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="label mx-4 flex flex-col gap-4 border-t-2 border-ink py-6 text-xs font-bold uppercase sm:flex-row sm:items-center sm:justify-between md:mx-8">
      <span>© 2026 Ahmer Macasindel</span>
      <ul className="flex gap-6">
        {SOCIALS.map(({ href, label }) => (
          <li key={label}>
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-block transition-transform duration-300 hover:translate-x-1 hover:underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
