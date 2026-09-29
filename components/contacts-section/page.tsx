import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-svh w-full scroll-mt-20 flex-col items-center justify-center px-4 py-28 text-center md:px-8"
    >
      <p className="label mb-6 text-xs font-bold uppercase md:text-sm">
        Open to new opportunities &amp; collaborations
      </p>

      <h2 className="display text-[22vw] md:text-[14vw]">
        Let&apos;s
        <br />
        Talk
      </h2>

      <p className="mt-8 max-w-md text-base font-medium md:text-lg">
        Whether you have a question or just want to say hi, feel free to reach
        out!
      </p>

      <Link
        href="mailto:orfianamir@gmail.com"
        className="group label mt-10 flex items-center gap-3 rounded-full border-2 border-ink bg-ink px-8 py-5 text-sm font-bold uppercase text-paper transition-transform duration-300 hover:scale-110 md:px-12 md:py-7 md:text-lg"
      >
        Get in touch
        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      <div className="label mt-12 flex flex-col gap-3 text-sm font-bold sm:flex-row sm:gap-10 md:text-base">
        <Link
          href="mailto:orfianamir@gmail.com"
          className="border-b-2 border-ink pb-0.5 transition-transform duration-300 hover:translate-x-4"
        >
          orfianamir@gmail.com
        </Link>
        <Link
          href="tel:+639209465218"
          className="border-b-2 border-ink pb-0.5 transition-transform duration-300 hover:translate-x-4"
        >
          +63 920 946 5218
        </Link>
      </div>
    </section>
  );
}
