import HeroSection from "@/components/HeroSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FLiQin Labs | Build Custom Websites & Digital Experiences</title>
        <meta name="description" content="We craft world-class websites powered by modern design, premium engineering, and frictionless execution. Start your project with FLiQin today." />
      </Helmet>
      <main className="bg-background">
        <HeroSection />
      </main>
    </>
  );
};

export default Index;
