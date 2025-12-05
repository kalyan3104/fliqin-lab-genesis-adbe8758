import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Smartphone, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that captivate users and drive engagement.",
    color: "neon-purple",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with cutting-edge technologies for optimal performance.",
    color: "neon-pink",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that users love.",
    color: "neon-blue",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Comprehensive digital strategies to grow your online presence.",
    color: "neon-cyan",
  },
  {
    icon: Rocket,
    title: "Brand Identity",
    description: "Memorable brand experiences that set you apart from competitors.",
    color: "neon-magenta",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast optimization for better user experience and SEO.",
    color: "neon-purple",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(260 100% 2%) 0%, hsl(320 30% 6%) 50%, hsl(260 100% 2%) 100%)",
      }}
    >
      {/* Animated background grid */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(270 100% 71% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(270 100% 71% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-neon-pink border border-neon-pink/30 rounded-full bg-neon-pink/10"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-foreground mb-6"
          >
            What We <span className="text-gradient">Deliver</span>
          </motion.h2>
        </motion.div>

        {/* Services Grid with 3D hover */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative perspective-1000"
            >
              <div className="neon-border p-8 rounded-2xl h-full transform-gpu transition-all duration-300 group-hover:shadow-[0_20px_60px_hsl(270_100%_71%/0.15)]">
                {/* Icon with glow */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-xl bg-${service.color}/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-[0_0_30px_hsl(var(--${service.color})/0.5)]`}
                >
                  <service.icon className={`w-7 h-7 text-${service.color}`} />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover line effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
