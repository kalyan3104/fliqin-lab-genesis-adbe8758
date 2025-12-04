interface VideoBackgroundProps {
  src: string;
}

const VideoBackground = ({ src }: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-40"
        style={{
          filter: "saturate(1.2) contrast(1.1)",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
      
      {/* Dark overlay gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(260 100% 2% / 0.7) 0%, hsl(260 100% 2% / 0.4) 50%, hsl(260 100% 2% / 0.8) 100%)",
        }}
      />
      
      {/* Color tint overlay */}
      <div 
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background: "linear-gradient(135deg, hsl(270 100% 50% / 0.1) 0%, hsl(320 100% 50% / 0.1) 50%, hsl(217 91% 60% / 0.1) 100%)",
        }}
      />
    </div>
  );
};

export default VideoBackground;
