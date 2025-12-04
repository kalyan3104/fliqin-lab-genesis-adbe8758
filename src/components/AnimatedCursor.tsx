interface AnimatedCursorProps {
  className?: string;
}

const AnimatedCursor = ({ className = "" }: AnimatedCursorProps) => {
  return (
    <span 
      className={`inline-block w-[6px] bg-neon-purple ml-2 align-middle animate-cursor-blink rounded-sm ${className}`}
      style={{
        boxShadow: "0 0 15px hsl(270 100% 71% / 1), 0 0 30px hsl(270 100% 71% / 0.6), 0 0 45px hsl(270 100% 71% / 0.3)",
      }}
    />
  );
};

export default AnimatedCursor;
