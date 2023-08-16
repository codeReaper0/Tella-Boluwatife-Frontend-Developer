import React from "react";
import hero from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="h-max relative max-w-6xl mx-auto p-4 md:p-0 lg:px-10 xl:px-0">
      <img
        src={hero}
        alt="Hero"
        className="animate-floating absolute lg:-top-8 xl:-top-20 lg:-right-2 xl:-right-10 z-0 hidden lg:flex max-w-md xl:max-w-max"
      />
      <div className="text-white flex flex-col max-w-xl lg:max-w-lg justify-center h-[70vh] lg:h-[88vh] 2xl:h-[65vh] mx-2 md:mx-auto lg:mx-0 z-30">
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
