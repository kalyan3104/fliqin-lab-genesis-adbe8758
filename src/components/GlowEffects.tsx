const GlowEffects = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Central bottom mega glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[70vh] animate-neon-pulse"
        style={{
          background: "radial-gradient(ellipse 80% 50% at center bottom, hsl(270 100% 50% / 0.35) 0%, hsl(320 100% 50% / 0.25) 25%, hsl(217 91% 60% / 0.15) 50%, transparent 75%)",
          filter: "blur(80px)",
        }}
      />
      
      {/* Left side aurora glow */}
      <div
        className="absolute bottom-10 left-0 w-[50vw] h-[60vh] animate-neon-pulse"
        style={{
          background: "radial-gradient(ellipse 100% 80% at left bottom, hsl(217 91% 60% / 0.3) 0%, hsl(270 100% 50% / 0.15) 40%, transparent 70%)",
          filter: "blur(100px)",
          animationDelay: "1s",
        }}
      />
      
      {/* Right side aurora glow */}
      <div
        className="absolute bottom-10 right-0 w-[50vw] h-[60vh] animate-neon-pulse"
        style={{
          background: "radial-gradient(ellipse 100% 80% at right bottom, hsl(320 100% 50% / 0.3) 0%, hsl(285 100% 50% / 0.15) 40%, transparent 70%)",
          filter: "blur(100px)",
          animationDelay: "2s",
        }}
      />

      {/* Top subtle ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] opacity-40"
        style={{
          background: "radial-gradient(ellipse 60% 40% at center top, hsl(270 100% 50% / 0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Floating mid glow orbs */}
      <div
        className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] rounded-full animate-float opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(270 100% 60% / 0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "0.5s",
        }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full animate-float opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(320 100% 60% / 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
          animationDelay: "1.5s",
        }}
      />

      {/* Light scatter noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default GlowEffects;
