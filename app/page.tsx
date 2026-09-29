import Contact from "@/components/contacts-section/page";
import Hero from "@/components/hero-section/page";
import Marquee from "@/components/marquee-section/page";
import Projects from "@/components/projects-section/page";
import React from "react";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <Projects />
      <Contact />
    </>
  );
}
