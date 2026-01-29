import React from "react";

export default function Hero() {
  return (
    <section
      className="min-h-screen w-full flex flex-col items-start justify-center px-10 md:px-20"
      id="about"
    >
      <h1 className="text-6xl text-black font-bold">Hey,</h1>
      <h1 className="text-6xl text-primary-green font-bold mix-blend-multiply mb-6">
        I'm Ahmer
      </h1>
      <h2 className="text-2xl bg-secondary-green text-white p-2">
        Software Engineer
      </h2>
      <p className="text-base w-3/4 lg:w-full text-black font-semibold mt-6">
        An aspiring young developer with a passion for building impactful
        software solutions.
      </p>
    </section>
  );
}
