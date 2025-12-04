import Navbar from "./Navbar";
import VideoBackground from "./VideoBackground";
import NeonStreaks from "./NeonStreaks";
import GlowEffects from "./GlowEffects";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Video Background */}
      <VideoBackground src="/videos/hero-background.mp4" />
      
      {/* Neon Light Streaks */}
      <NeonStreaks />
      
      {/* Glow Effects */}
      <GlowEffects />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Content */}
      <HeroContent />
    </section>
  );
};

export default HeroSection;
