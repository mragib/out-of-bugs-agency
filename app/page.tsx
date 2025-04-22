import AboutSection from "@/components/home/AboutSection";
import { ClientSection } from "@/components/home/ClientSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectSection from "@/components/home/ProjectSection";
import WhySection from "@/components/home/WhySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <WhySection />
      <ClientSection />
    </>
  );
}
