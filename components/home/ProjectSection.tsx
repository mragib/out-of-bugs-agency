import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { HoverEffect } from "../ui/card-hover-effect";

export default function ProjectSection() {
  return (
    <div className="relative">
      <BackgroundBeamsWithCollision className="w-full ">
        <section className="max-w-5xl mx-auto px-8 py-6 h-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Our Projects
          </h2>
          <HoverEffect items={projects} />
        </section>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export const projects = [
  {
    title: "The Wild Oasis",
    description:
      "A modern hotel management dashboard and booking system. Admin panel built with React and Supabase; client side powered by Next.js 15.",
    link: "https://the-wild-oasis-website-nu-eight.vercel.app", // add real link if hosted
  },
  {
    title: "Inventory Management System",
    description:
      "A robust inventory tracking and admin platform for retail. Built with React on the frontend and NestJS on the backend.",
    link: "https://admin.tangoyankee.shop",
  },
  {
    title: "Eastern University",
    description:
      "University website and internal portal built using React and Django for streamlined academic workflows.",
    link: "https://www.easternuni.edu.bd/", // add real link if hosted
  },
  {
    title: "The Fast Track Pizza",
    description:
      "A pizza ordering platform built with React and React Query for smooth and responsive UX.",
    link: "#", // add real link if hosted
  },
  {
    title: "Out of Bugs News Portal",
    description:
      "A custom news portal built end-to-end with Next.js for both frontend and backend. SEO-optimized, scalable, and blazing fast.",
    link: "#x", // add real link if hosted
  },
];
