const NeonStreaks = () => {
  const streaks = [
    { left: "10%", delay: "0s", color: "from-neon-purple/60 to-transparent", duration: "7s" },
    { left: "25%", delay: "2s", color: "from-neon-pink/50 to-transparent", duration: "9s" },
    { left: "40%", delay: "1s", color: "from-neon-blue/60 to-transparent", duration: "8s" },
    { left: "55%", delay: "3s", color: "from-neon-magenta/50 to-transparent", duration: "10s" },
    { left: "70%", delay: "0.5s", color: "from-neon-cyan/40 to-transparent", duration: "7.5s" },
    { left: "85%", delay: "2.5s", color: "from-neon-purple/50 to-transparent", duration: "8.5s" },
    { left: "15%", delay: "4s", color: "from-neon-pink/40 to-transparent", duration: "9.5s" },
    { left: "60%", delay: "1.5s", color: "from-neon-blue/50 to-transparent", duration: "6.5s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streaks.map((streak, index) => (
        <div
          key={index}
          className={`absolute w-[2px] h-[40vh] bg-gradient-to-b ${streak.color}`}
          style={{
            left: streak.left,
            top: "-20%",
            animation: `light-streak ${streak.duration} ease-in-out ${streak.delay} infinite`,
            filter: "blur(1px)",
          }}
        />
      ))}
      
      {/* Additional wider glow streaks */}
      {streaks.slice(0, 4).map((streak, index) => (
        <div
          key={`glow-${index}`}
          className={`absolute w-[8px] h-[30vh] bg-gradient-to-b ${streak.color} opacity-30`}
          style={{
            left: `calc(${streak.left} + 5%)`,
            top: "-10%",
            animation: `light-streak ${parseFloat(streak.duration) + 2}s ease-in-out ${parseFloat(streak.delay) + 1}s infinite`,
            filter: "blur(8px)",
          }}
        />
      ))}
    </div>
  );
};

export default NeonStreaks;
