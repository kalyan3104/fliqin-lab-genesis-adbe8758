import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Light streak particles
    const streaks: Array<{
      x: number;
      y: number;
      speed: number;
      length: number;
      width: number;
      color: string;
      opacity: number;
    }> = [];

    const colors = [
      "rgba(166, 107, 255, ", // Purple
      "rgba(255, 79, 203, ",  // Pink
      "rgba(59, 130, 246, ",  // Blue
      "rgba(193, 53, 255, ",  // Magenta
      "rgba(52, 224, 255, ",  // Cyan
    ];

    // Initialize streaks
    for (let i = 0; i < 30; i++) {
      streaks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        speed: 1 + Math.random() * 3,
        length: 100 + Math.random() * 300,
        width: 1 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.3 + Math.random() * 0.5,
      });
    }

    // Glowing orbs
    const orbs: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }> = [
      { x: 0.2, y: 0.8, radius: 300, color: "rgba(166, 107, 255, 0.15)", pulse: 0, pulseSpeed: 0.02 },
      { x: 0.8, y: 0.7, radius: 250, color: "rgba(255, 79, 203, 0.12)", pulse: Math.PI, pulseSpeed: 0.015 },
      { x: 0.5, y: 0.9, radius: 400, color: "rgba(59, 130, 246, 0.1)", pulse: Math.PI / 2, pulseSpeed: 0.018 },
      { x: 0.3, y: 0.6, radius: 200, color: "rgba(193, 53, 255, 0.08)", pulse: Math.PI / 4, pulseSpeed: 0.025 },
    ];

    const animate = () => {
      time += 0.016;
      
      // Clear with fade effect
      ctx.fillStyle = "rgba(5, 0, 15, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw glowing orbs
      orbs.forEach((orb) => {
        const pulseFactor = 1 + Math.sin(orb.pulse) * 0.3;
        orb.pulse += orb.pulseSpeed;

        const gradient = ctx.createRadialGradient(
          orb.x * canvas.width,
          orb.y * canvas.height,
          0,
          orb.x * canvas.width,
          orb.y * canvas.height,
          orb.radius * pulseFactor
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Draw and update streaks
      streaks.forEach((streak) => {
        // Draw streak
        const gradient = ctx.createLinearGradient(
          streak.x,
          streak.y,
          streak.x,
          streak.y + streak.length
        );
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.3, streak.color + streak.opacity + ")");
        gradient.addColorStop(0.7, streak.color + streak.opacity + ")");
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = streak.width;
        ctx.lineCap = "round";
        ctx.moveTo(streak.x, streak.y);
        ctx.lineTo(streak.x, streak.y + streak.length);
        ctx.stroke();

        // Add glow
        ctx.shadowColor = streak.color + "0.8)";
        ctx.shadowBlur = 20;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Update position
        streak.y += streak.speed;

        // Reset when off screen
        if (streak.y > canvas.height) {
          streak.y = -streak.length;
          streak.x = Math.random() * canvas.width;
          streak.speed = 1 + Math.random() * 3;
        }
      });

      // Add horizontal glow lines
      const horizGlow = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height);
      horizGlow.addColorStop(0, "transparent");
      horizGlow.addColorStop(0.5, "rgba(166, 107, 255, 0.05)");
      horizGlow.addColorStop(1, "rgba(255, 79, 203, 0.1)");
      ctx.fillStyle = horizGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "linear-gradient(180deg, #050010 0%, #0a0020 50%, #050010 100%)" }}
    />
  );
};

export default AnimatedBackground;
