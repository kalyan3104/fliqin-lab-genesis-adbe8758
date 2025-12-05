const GlowEffects = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Central bottom subtle glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[50vh] animate-neon-pulse"
        style={{
          background: "radial-gradient(ellipse 70% 40% at center bottom, hsl(270 100% 50% / 0.15) 0%, hsl(320 100% 50% / 0.08) 30%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Left side soft glow */}
      <div
        className="absolute bottom-20 left-0 w-[40vw] h-[40vh] animate-neon-pulse"
        style={{
          background: "radial-gradient(ellipse 80% 60% at left bottom, hsl(217 91% 60% / 0.1) 0%, transparent 50%)",
          filter: "blur(80px)",
          animationDelay: "1.5s",
        }}
      />
      
      {/* Right side soft glow */}
      <div
        className="absolute bottom-20 right-0 w-[40vw] h-[40vh] animate-neon-pulse"
        style={{
          background: "radial-gradient(ellipse 80% 60% at right bottom, hsl(320 100% 50% / 0.1) 0%, transparent 50%)",
          filter: "blur(80px)",
          animationDelay: "2.5s",
        }}
      />

      {/* Very subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default GlowEffects;