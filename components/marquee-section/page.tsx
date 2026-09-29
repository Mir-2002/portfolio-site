import React from "react";

const ROLES = ["Software Engineer", "Full Stack Developer", "Open Source Enthusiast"];
const STACK = [
  "Next.js",
  "React",
  "Spring Boot",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "PyTorch",
];

// Content is rendered twice so translating by -50% loops seamlessly.
function MarqueeRow({
  items,
  className,
  reverse = false,
}: {
  items: string[];
  className: string;
  reverse?: boolean;
}) {
  const row = items.map((item) => `${item} •`).join(" ");
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } ${className}`}
      >
        <span className="pr-[0.3em]">{row}</span>
        <span className="pr-[0.3em]" aria-hidden="true">
          {row}
        </span>
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Roles and tech stack" className="py-16">
      <div className="-skew-y-2 bg-ink py-10 md:py-14">
        <MarqueeRow
          items={ROLES}
          className="display py-2 text-[10vw] text-brand"
        />
        <MarqueeRow
          items={STACK}
          reverse
          className="label mt-4 text-2xl font-bold uppercase text-paper/80 md:text-4xl"
        />
      </div>
    </section>
  );
}
