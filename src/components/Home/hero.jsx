import React from "react";
import hero from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="h-max relative max-w-6xl mx-auto">
      <img
        src={hero}
        alt="Hero"
        className="animate-floating absolute -top-20 -right-10 z-0"
      />
      <div className="text-white flex flex-col max-w-lg justify-center h-[88vh]">
        <h1 className="text-5xl mb-4">
          <span>Welcome to Space</span>
          <span className="text-6xl">X</span>
        </h1>
        <p>
          In 2020, SpaceX returned America’s ability to fly NASA astronauts to
          and from the International Space Station on American vehicles for the
          first time since 2011. In addition to flying astronauts to space for
          NASA, SpaceX’s Dragon spacecraft can also carry commercial astronauts
          to Earth orbit, the ISS or beyond.
        </p>
      </div>
    </section>
  );
}
