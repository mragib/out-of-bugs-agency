import { HeroHighlight } from "../ui/hero-highlight";

export default function AboutSection() {
  return (
    <HeroHighlight>
      <section className="w-full  py-20 px-6 md:px-12 text-center min-h-screen flex items-center justify-center h-screen snap-start">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Out of Bugs is a tight-knit web development agency with a mission:
            to build clean, scalable, and bug-free digital solutions. We believe
            in code that works—not just today, but for the future.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our team is made up of developers, designers, and problem-solvers
            who care about performance, usability, and quality. Whether
            you&apos;re launching a startup, scaling a SaaS, or reimagining your
            website— we help you ship with confidence.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We don’t just write code. We create reliable, scalable systems that
            drive your business forward. And yes—*we squash bugs before they
            hatch*.
          </p>
        </div>
      </section>
    </HeroHighlight>
  );
}
