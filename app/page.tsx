import Contact from "@/components/contacts-section/page";
import Hero from "@/components/hero-section/page";
import Projects from "@/components/projects-section/page";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        {" "}
        <Hero />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
