import { ArrowDown } from "lucide-react";
import React from "react";

const ROLES = ["Software Engineer", "Full Stack Developer", "Open Source Enthusiast"];

// Circle of radius 60 centred in a 144x144 box, starting at the top.
const CIRCLE_PATH = "M 72,72 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0";
const CIRCUMFERENCE = 2 * Math.PI * 60;

function ScrollIndicator() {
  return (
    <a
      href="#projects"
      aria-label="Scroll down"
      className="relative flex h-36 w-36 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110"
    >
      <svg
        viewBox="0 0 144 144"
        className="absolute inset-0 h-full w-full animate-spin-slow"
        aria-hidden="true"
      >
        <defs>
          <path id="scroll-circle" d={CIRCLE_PATH} />
        </defs>
        <text className="fill-ink font-mono text-[9px] font-bold uppercase">
          <textPath
            href="#scroll-circle"
            textLength={CIRCUMFERENCE}
            lengthAdjust="spacing"
          >
            {"Scroll Down • ".repeat(4)}
          </textPath>
        </text>
      </svg>
      <ArrowDown size={28} strokeWidth={2.5} className="text-ink" />
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      className="flex min-h-svh w-full flex-col justify-end px-4 pt-28 pb-8 md:px-8"
    >
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="label mb-4 text-sm font-bold uppercase md:text-base">
          Hey, I&apos;m
        </p>
        <h1 className="display text-[22vw] md:text-[16vw]">Ahmer</h1>
        <p className="mt-6 max-w-md text-base font-medium md:text-lg">
          An aspiring young developer with a passion for building impactful
          software solutions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 items-center gap-6 border-t-2 border-ink pt-6 md:grid-cols-3">
        <p className="label text-xs font-bold uppercase md:text-sm">
          Based in
          <br />
          the Philippines
        </p>

        <div className="order-last col-span-2 flex justify-center md:order-none md:col-span-1">
          <ScrollIndicator />
        </div>

        <ul className="label text-right text-xs font-bold uppercase md:text-sm">
          {ROLES.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
