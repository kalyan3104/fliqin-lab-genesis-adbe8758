import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Sparkles, Target, Users, Award, Code2, Palette, Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

  const features = [
    { icon: Target, title: "Vision Driven" },
    { icon: Users, title: "User Focused" },
    { icon: Award, title: "Award Winning" },
  ];

  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { value: "150", suffix: "+", label: "Projects", sublabel: "Delivered", color: "from-neon-pink to-neon-purple" },
    { value: "50", suffix: "+", label: "Happy", sublabel: "Clients", color: "from-neon-purple to-neon-cyan" },
    { value: "5", suffix: "+", label: "Years", sublabel: "Experience", color: "from-neon-pink to-neon-purple" },
    { value: "24/7", suffix: "", label: "Always", sublabel: "Support", color: "from-neon-purple to-neon-pink" },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(260 100% 2%) 0%, hsl(270 50% 6%) 50%, hsl(260 100% 2%) 100%)",
      }}
    >
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(270 100% 71% / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(270 100% 71% / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Animated glow orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-neon-purple/30 via-neon-pink/20 to-transparent blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-neon-cyan/20 via-neon-purple/15 to-transparent blur-[100px]" 
        />
      </motion.div>

      {/* Floating particles with trails */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-neon-purple/60" />
            <motion.div 
              className="absolute top-0 left-0 w-1 h-8 bg-gradient-to-b from-neon-purple/40 to-transparent blur-sm"
              style={{ transformOrigin: 'top' }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div style={{ scale, opacity }} className="container mx-auto px-6 relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text Content with animations */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated vertical line */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 150, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -left-6 md:-left-8 top-0 w-[2px] overflow-hidden"
            >
              <motion.div
                animate={{ y: [-150, 150] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/80 via-neon-pink/60 to-transparent" />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-neon-purple" />
              </motion.div>
              <span className="text-sm font-medium text-neon-purple uppercase tracking-[0.2em]">
                Who We Are
              </span>
            </motion.div>

            {/* Main Heading with staggered animation */}
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight"
              >
                We Build
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h2
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
              >
                <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-pink bg-[length:200%_auto] animate-[gradient-shift_3s_linear_infinite] bg-clip-text text-transparent">
                  Digital Dreams
                </span>
              </motion.h2>
            </div>

            {/* Description with typewriter-like reveal */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              We're a collective of designers, developers, and dreamers who transform
              bold ideas into exceptional digital experiences. Every pixel matters.
              Every interaction counts.
            </motion.p>

            {/* Feature pills with staggered entrance */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -3,
                    boxShadow: "0 10px 30px -10px hsl(270 100% 71% / 0.4)"
                  }}
                  className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full cursor-pointer transition-all duration-300"
                  style={{
                    background: "hsl(260 30% 10% / 0.8)",
                    border: "1px solid hsl(270 100% 71% / 0.3)",
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-4 h-4 text-neon-pink group-hover:text-neon-purple transition-colors duration-300" />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground">{feature.title}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative image placeholder - floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 relative"
            >
              <div className="flex gap-4">
                {[Code2, Palette, Zap].map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -8, 
                      rotateZ: i % 2 === 0 ? 5 : -5,
                      scale: 1.1,
                    }}
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center cursor-pointer group overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, hsl(${260 + i * 20} 50% 15% / 0.9), hsl(${270 + i * 15} 40% 8% / 0.9))`,
                      border: "1px solid hsl(270 100% 71% / 0.2)",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <Icon className="w-8 h-8 text-neon-purple/70 group-hover:text-neon-pink transition-colors duration-300 relative z-10" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Interactive Stats Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.3 + index * 0.12,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className={`relative group cursor-pointer ${index === 2 ? 'col-span-1' : ''}`}
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    animate={{
                      scale: hoveredStat === index ? 1.03 : 1,
                      rotateY: hoveredStat === index ? 5 : 0,
                      rotateX: hoveredStat === index ? -3 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative overflow-hidden rounded-3xl p-6 md:p-8 h-40 md:h-48 flex flex-col justify-between transform-gpu"
                    style={{
                      background: hoveredStat === index
                        ? "linear-gradient(135deg, hsl(270 100% 71% / 0.15), hsl(320 100% 65% / 0.08))"
                        : "linear-gradient(135deg, hsl(260 30% 10% / 0.9), hsl(260 30% 6% / 0.9))",
                      border: hoveredStat === index 
                        ? "1px solid hsl(270 100% 71% / 0.4)"
                        : "1px solid hsl(260 30% 20% / 0.4)",
                      boxShadow: hoveredStat === index 
                        ? "0 20px 40px -15px hsl(270 100% 71% / 0.25), inset 0 1px 0 hsl(270 100% 90% / 0.1)"
                        : "0 4px 20px -5px hsl(0 0% 0% / 0.3)",
                    }}
                  >
                    {/* Animated glow on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredStat === index ? 1 : 0,
                        scale: hoveredStat === index ? 1.2 : 0.8,
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl"
                      style={{
                        background: `radial-gradient(circle, hsl(270 100% 71% / 0.3), transparent 70%)`,
                      }}
                    />

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, hsl(270 100% 90% / 0.1), transparent)',
                      }}
                    />

                    {/* Number with gradient */}
                    <motion.div
                      className="relative z-10 flex items-baseline"
                      animate={{
                        scale: hoveredStat === index ? 1.08 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className={`text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </span>
                      <span className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent ml-0.5`}>
                        {stat.suffix}
                      </span>
                    </motion.div>

                    {/* Label */}
                    <motion.div 
                      className="relative z-10"
                      animate={{
                        y: hoveredStat === index ? -2 : 0,
                      }}
                    >
                      <p className="text-foreground font-semibold text-sm md:text-base">{stat.label}</p>
                      <p className="text-muted-foreground text-xs md:text-sm">{stat.sublabel}</p>
                    </motion.div>

                    {/* Decorative corner dot */}
                    <motion.div 
                      className="absolute top-4 right-4 w-2 h-2 rounded-full"
                      animate={{
                        scale: hoveredStat === index ? [1, 1.5, 1] : 1,
                        backgroundColor: hoveredStat === index 
                          ? "hsl(270 100% 71%)" 
                          : "hsl(270 100% 71% / 0.4)",
                      }}
                      transition={{ 
                        scale: { duration: 0.6, repeat: hoveredStat === index ? Infinity : 0 },
                        backgroundColor: { duration: 0.3 }
                      }}
                    />

                    {/* Corner accent lines */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-br-3xl">
                      <motion.div
                        className="absolute bottom-2 right-2 w-8 h-px bg-gradient-to-l from-neon-purple/40 to-transparent"
                        animate={{ width: hoveredStat === index ? 32 : 16 }}
                      />
                      <motion.div
                        className="absolute bottom-2 right-2 w-px h-8 bg-gradient-to-t from-neon-purple/40 to-transparent"
                        animate={{ height: hoveredStat === index ? 32 : 16 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity },
              }}
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border border-neon-purple/10 opacity-50"
            />
            <motion.div
              animate={{ 
                rotate: -360,
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-dashed border-neon-pink/10 opacity-40"
            />
          </motion.div>
        </div>

        {/* Bottom CTA Row with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 pt-20 mt-16 border-t border-border/20"
        >
          <motion.p 
            className="text-muted-foreground text-center md:text-left max-w-md text-lg"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Ready to create something extraordinary together?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px hsl(270 100% 71% / 0.4), 0 0 80px hsl(320 100% 65% / 0.2)"
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden text-foreground font-semibold"
            style={{
              background: "linear-gradient(135deg, hsl(270 100% 71% / 0.15), hsl(320 100% 65% / 0.1))",
              border: "1px solid hsl(270 100% 71% / 0.5)",
            }}
          >
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-pink/20 to-neon-purple/20"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10">Let's Talk</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
