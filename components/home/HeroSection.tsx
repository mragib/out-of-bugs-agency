import React from "react";
import { HeroSlider } from "../shared/HeroSlider";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export default function HeroSection() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col justify-between md:flex-row bg-white  h-screen snap-start">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          Find Your Own Path
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
          Out of Bugs is your partner for clean, scalable, and bug-free web
          development. We help you bring ideas to life with code that just
          works.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-2xl text-lg font-medium shadow-lg hover:bg-gray-900 transition">
          Get a Free Consultation
        </button>
      </div>
      <div>
        <HeroSlider />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
