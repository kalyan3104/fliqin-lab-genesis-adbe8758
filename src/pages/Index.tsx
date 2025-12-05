import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FLiQin Labs | Build Custom Websites & Digital Experiences</title>
        <meta name="description" content="We craft world-class websites powered by modern design, premium engineering, and frictionless execution. Start your project with FLiQin today." />
      </Helmet>
      <main className="bg-background overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
};

export default Index;
