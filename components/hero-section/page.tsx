"use client";
import React, { useState, useEffect } from "react";

const ROLES = ["Software Engineer", "Full Stack Developer", "Open Source Enthusiast"];
const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_MS = 1500;

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_MS);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED;
    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, roleIndex, isDeleting]);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-start justify-center px-10 md:px-20"
    >
      {/* Full-bleed dot grid that fades top to bottom */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          height: "100%",
          backgroundImage: "radial-gradient(circle, #333333 2px, transparent 2px)",
          backgroundSize: "30px 30px",
          maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10">
        <h1 className="text-6xl text-white font-bold">Hey,</h1>
        <h1 className="text-6xl text-accent font-bold mb-6">
          I&apos;m Ahmer
        </h1>

        <h2 className="text-2xl border border-accent text-accent px-4 py-1.5 inline-block mb-6 min-h-[3rem]">
          {displayText}
          <span className="animate-pulse ml-0.5">|</span>
        </h2>

        <p className="text-base w-3/4 lg:w-full text-neutral-300 font-normal">
          An aspiring young developer with a passion for building impactful
          software solutions.
        </p>
      </div>
    </section>
  );
}
