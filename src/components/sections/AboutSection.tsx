import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Sparkles, Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    { icon: Target, title: "Vision Driven", desc: "Purpose-built solutions" },
    { icon: Users, title: "User Focused", desc: "Human-centered design" },
    { icon: Award, title: "Award Winning", desc: "Industry recognized" },
  ];

  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { value: "150+", label: "Projects", suffix: "Delivered" },
    { value: "50+", label: "Happy", suffix: "Clients" },
    { value: "5+", label: "Years", suffix: "Experience" },
    { value: "24/7", label: "Always", suffix: "Support" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(260 100% 2%) 0%, hsl(270 50% 8%) 50%, hsl(260 100% 2%) 100%)",
      }}
    >
      {/* Animated mesh gradient background */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-neon-purple/20 via-neon-pink/10 to-transparent blur-[100px]" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-neon-purple/50"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Modern Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Text Content */}
          <motion.div style={{ opacity }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 120 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -left-8 top-0 w-px bg-gradient-to-b from-neon-purple via-neon-pink to-transparent"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-neon-purple" />
                <span className="text-sm font-medium text-neon-purple uppercase tracking-widest">
                  Who We Are
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-[1.1]"
              >
                We Build
                <br />
                <span className="text-gradient">Digital Dreams</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              >
                We're a collective of designers, developers, and dreamers who transform
                bold ideas into exceptional digital experiences. Every pixel matters.
                Every interaction counts.
              </motion.p>

              {/* Feature pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full glass cursor-pointer"
                  >
                    <feature.icon className="w-4 h-4 text-neon-pink group-hover:text-neon-purple transition-colors" />
                    <span className="text-sm font-medium text-foreground">{feature.title}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Interactive Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: hoveredStat === index ? 1.02 : 1,
                      rotateY: hoveredStat === index ? 5 : 0,
                    }}
                    className="relative overflow-hidden rounded-3xl p-8 h-44 flex flex-col justify-between transform-gpu"
                    style={{
                      background: hoveredStat === index
                        ? "linear-gradient(135deg, hsl(270 100% 71% / 0.2), hsl(320 100% 65% / 0.1))"
                        : "hsl(260 30% 8% / 0.8)",
                      border: "1px solid hsl(260 30% 20% / 0.5)",
                    }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle at 50% 50%, hsl(270 100% 71% / 0.15), transparent 70%)",
                      }}
                    />

                    {/* Number */}
                    <motion.span
                      className="text-5xl md:text-6xl font-black text-gradient relative z-10"
                      animate={{
                        scale: hoveredStat === index ? 1.1 : 1,
                      }}
                    >
                      {stat.value}
                    </motion.span>

                    {/* Label */}
                    <div className="relative z-10">
                      <p className="text-foreground font-semibold">{stat.label}</p>
                      <p className="text-muted-foreground text-sm">{stat.suffix}</p>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-neon-purple/50 group-hover:bg-neon-purple transition-colors" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-neon-purple/20 opacity-50"
            />
          </motion.div>
        </div>

        {/* Bottom CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 pt-16 border-t border-border/30"
        >
          <p className="text-muted-foreground text-center md:text-left max-w-md">
            Ready to create something extraordinary together?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-full neon-border text-foreground font-semibold hover:shadow-[0_0_30px_hsl(270_100%_71%/0.3)] transition-shadow"
          >
            Let's Talk
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
