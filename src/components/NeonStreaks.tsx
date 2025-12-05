const NeonStreaks = () => {
  const streaks = [
    { left: "15%", delay: "0s", color: "from-neon-purple/30 via-neon-purple/15 to-transparent", duration: "12s", height: "35vh" },
    { left: "35%", delay: "2s", color: "from-neon-pink/25 via-neon-pink/10 to-transparent", duration: "14s", height: "30vh" },
    { left: "55%", delay: "1s", color: "from-neon-blue/30 via-neon-blue/12 to-transparent", duration: "13s", height: "38vh" },
    { left: "75%", delay: "3s", color: "from-neon-purple/25 via-neon-purple/10 to-transparent", duration: "15s", height: "32vh" },
    { left: "90%", delay: "1.5s", color: "from-neon-pink/20 via-neon-pink/8 to-transparent", duration: "14s", height: "28vh" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary streaks - subtle */}
      {streaks.map((streak, index) => (
        <div
          key={index}
          className={`absolute w-[1px] bg-gradient-to-b ${streak.color}`}
          style={{
            left: streak.left,
            top: "-10%",
            height: streak.height,
            animation: `light-streak ${streak.duration} ease-in-out ${streak.delay} infinite`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
      
      {/* Secondary soft glow streaks */}
      {streaks.slice(0, 3).map((streak, index) => (
        <div
          key={`glow-${index}`}
          className={`absolute w-[4px] bg-gradient-to-b ${streak.color} opacity-20`}
          style={{
            left: `calc(${streak.left} + 5%)`,
            top: "-5%",
            height: `calc(${streak.height} * 0.6)`,
            animation: `light-streak ${parseFloat(streak.duration) + 2}s ease-in-out ${parseFloat(streak.delay) + 1}s infinite`,
            filter: "blur(4px)",
          }}
        />
      ))}
    </div>
  );
};

export default NeonStreaks;