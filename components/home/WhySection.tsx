"use client";

import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationData from "@/public/files/lottie/coding.json";
import { HeroHighlight } from "../ui/hero-highlight";

export default function WhySection() {
  return (
    <HeroHighlight>
      <section className="w-full py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation */}
          <div>
            <Lottie animationData={animationData} loop={true} />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black text-center md:text-left">
              Why Out of Bugs?
            </h2>
            <ul className="space-y-6 text-gray-700 text-lg">
              <li>
                <strong>🚀 Bug-Free Code:</strong> Clean, tested code that just
                works.
              </li>
              <li>
                <strong>🧠 Full-Stack Power:</strong> From React to NestJS and
                Django.
              </li>
              <li>
                <strong>🤝 Transparent Workflow:</strong> Clear updates, rapid
                iterations.
              </li>
              <li>
                <strong>📈 Scalable Systems:</strong> We build with the future
                in mind.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </HeroHighlight>
  );
}
