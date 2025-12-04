import Navbar from "./Navbar";
import AnimatedBackground from "./AnimatedBackground";
import NeonStreaks from "./NeonStreaks";
import GlowEffects from "./GlowEffects";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Canvas Animated Background */}
      <AnimatedBackground />
      
      {/* Additional CSS Neon Streaks */}
      <NeonStreaks />
      
      {/* Glow Effects Overlay */}
      <GlowEffects />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Content */}
      <HeroContent />
    </section>
  );
};

export default HeroSection;
