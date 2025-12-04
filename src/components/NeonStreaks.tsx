const NeonStreaks = () => {
  const streaks = [
    { left: "8%", delay: "0s", color: "from-neon-purple/80 via-neon-purple/40 to-transparent", duration: "6s", height: "50vh" },
    { left: "18%", delay: "1.5s", color: "from-neon-pink/70 via-neon-pink/30 to-transparent", duration: "8s", height: "45vh" },
    { left: "28%", delay: "0.8s", color: "from-neon-blue/75 via-neon-blue/35 to-transparent", duration: "7s", height: "55vh" },
    { left: "38%", delay: "2.2s", color: "from-neon-magenta/65 via-neon-magenta/25 to-transparent", duration: "9s", height: "40vh" },
    { left: "48%", delay: "0.3s", color: "from-neon-cyan/60 via-neon-cyan/30 to-transparent", duration: "6.5s", height: "48vh" },
    { left: "58%", delay: "1.8s", color: "from-neon-purple/70 via-neon-purple/35 to-transparent", duration: "7.5s", height: "52vh" },
    { left: "68%", delay: "2.8s", color: "from-neon-pink/60 via-neon-pink/25 to-transparent", duration: "8.5s", height: "44vh" },
    { left: "78%", delay: "0.5s", color: "from-neon-blue/65 via-neon-blue/30 to-transparent", duration: "6.8s", height: "50vh" },
    { left: "88%", delay: "1.2s", color: "from-neon-magenta/55 via-neon-magenta/20 to-transparent", duration: "7.2s", height: "46vh" },
    { left: "95%", delay: "2.5s", color: "from-neon-cyan/50 via-neon-cyan/25 to-transparent", duration: "9.5s", height: "42vh" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary streaks */}
      {streaks.map((streak, index) => (
        <div
          key={index}
          className={`absolute w-[2px] bg-gradient-to-b ${streak.color}`}
          style={{
            left: streak.left,
            top: "-20%",
            height: streak.height,
            animation: `light-streak ${streak.duration} ease-in-out ${streak.delay} infinite`,
            filter: "blur(0.5px)",
            boxShadow: "0 0 10px currentColor, 0 0 20px currentColor",
          }}
        />
      ))}
      
      {/* Secondary glow streaks (wider, more diffuse) */}
      {streaks.slice(0, 6).map((streak, index) => (
        <div
          key={`glow-${index}`}
          className={`absolute w-[6px] bg-gradient-to-b ${streak.color} opacity-40`}
          style={{
            left: `calc(${streak.left} + 3%)`,
            top: "-15%",
            height: `calc(${streak.height} * 0.8)`,
            animation: `light-streak ${parseFloat(streak.duration) + 1.5}s ease-in-out ${parseFloat(streak.delay) + 0.5}s infinite`,
            filter: "blur(6px)",
          }}
        />
      ))}

      {/* Tertiary ultra-diffuse glow */}
      {streaks.slice(0, 4).map((streak, index) => (
        <div
          key={`ultra-glow-${index}`}
          className={`absolute w-[15px] bg-gradient-to-b ${streak.color} opacity-20`}
          style={{
            left: `calc(${streak.left} - 2%)`,
            top: "-10%",
            height: `calc(${streak.height} * 0.6)`,
            animation: `light-streak ${parseFloat(streak.duration) + 3}s ease-in-out ${parseFloat(streak.delay) + 1}s infinite`,
            filter: "blur(15px)",
          }}
        />
      ))}
    </div>
  );
};

export default NeonStreaks;
