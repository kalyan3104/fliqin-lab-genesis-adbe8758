import AnimatedCursor from "./AnimatedCursor";
import TypingText from "./TypingText";

const HeroContent = () => {
  const words = ["Labs", "Solutions", "Agency", "Studio"];

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
      <div className="max-w-5xl mx-auto">
        {/* Main Headline */}
        <h1 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-foreground mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          FLiQin <TypingText words={words} typingSpeed={120} deletingSpeed={80} pauseDuration={2500} />
          <AnimatedCursor className="h-[0.7em]" />
        </h1>
        
        {/* Serif Subheadline */}
        <p 
          className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/90 italic mb-6 md:mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Build Custom Websites & Digital Experiences
        </p>
        
        {/* Tagline */}
        <p 
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12 animate-fade-up leading-relaxed px-4"
          style={{ animationDelay: "0.3s" }}
        >
          We craft world-class websites powered by modern design, premium engineering, 
          and frictionless execution.
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button className="group relative px-8 py-4 bg-foreground text-background rounded-full font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(0_0%_100%_/_0.3)]">
            <span className="relative z-10 group-hover:text-foreground transition-colors duration-300">Start a Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-full" />
          </button>
          
          <button className="neon-border px-8 py-4 rounded-full font-semibold text-base sm:text-lg text-foreground hover:shadow-[0_0_30px_hsl(270_100%_71%_/_0.5)] transition-all duration-300 hover:scale-105 animate-glow-pulse">
            Explore Our Work
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-float"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
