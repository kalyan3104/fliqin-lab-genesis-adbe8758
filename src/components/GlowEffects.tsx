const GlowEffects = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Central bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60vh] animate-neon-pulse"
        style={{
          background: "radial-gradient(ellipse at center bottom, hsl(270 100% 50% / 0.3) 0%, hsl(320 100% 50% / 0.2) 30%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Left side glow */}
      <div
        className="absolute bottom-20 left-0 w-[40vw] h-[50vh] animate-neon-pulse"
        style={{
          background: "radial-gradient(ellipse at left center, hsl(217 91% 60% / 0.25) 0%, transparent 60%)",
          filter: "blur(80px)",
          animationDelay: "1s",
        }}
      />
      
      {/* Right side glow */}
      <div
        className="absolute bottom-20 right-0 w-[40vw] h-[50vh] animate-neon-pulse"
        style={{
          background: "radial-gradient(ellipse at right center, hsl(320 100% 50% / 0.25) 0%, transparent 60%)",
          filter: "blur(80px)",
          animationDelay: "2s",
        }}
      />

      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40vh] opacity-50"
        style={{
          background: "radial-gradient(ellipse at center top, hsl(285 100% 50% / 0.15) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
};

export default GlowEffects;
