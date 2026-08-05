"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 w-full z-20 flex flex-col bg-surface border-b border-border">
      {/* Top bar (always visible) */}
      <div className="flex h-[7vh] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="sm:text-lg lg:text-xl xl:text-2xl text-accent font-extrabold hover:text-accent/80 transition-colors duration-200"
        >
          Ahmer
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8 text-lg font-medium">
          <Link
            href="#about"
            className="text-neutral-300 hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-neutral-300 hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-neutral-300 hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <ChevronRight
            strokeWidth={3}
            className={`text-accent transition-transform duration-200 ${
              open ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay: starts below the navbar, keeps navbar visible */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4 bg-surface border-t border-border">
          <Link
            href="#about"
            onClick={() => setOpen(false)}
            className="text-neutral-300 hover:text-accent transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={() => setOpen(false)}
            className="text-neutral-300 hover:text-accent transition-colors font-medium"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-neutral-300 hover:text-accent transition-colors font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
