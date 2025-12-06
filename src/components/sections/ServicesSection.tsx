import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Palette, Rocket, Smartphone, Globe, Zap, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that captivate users and drive engagement.",
    color: "from-neon-purple to-neon-pink",
    accent: "neon-purple",
    number: "01",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with cutting-edge technologies for optimal performance.",
    color: "from-neon-pink to-neon-magenta",
    accent: "neon-pink",
    number: "02",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that users love.",
    color: "from-neon-blue to-neon-cyan",
    accent: "neon-blue",
    number: "03",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Comprehensive digital strategies to grow your online presence.",
    color: "from-neon-cyan to-neon-blue",
    accent: "neon-cyan",
    number: "04",
  },
  {
    icon: Rocket,
    title: "Brand Identity",
    description: "Memorable brand experiences that set you apart from competitors.",
    color: "from-neon-magenta to-neon-purple",
    accent: "neon-magenta",
    number: "05",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast optimization for better user experience and SEO.",
    color: "from-neon-purple to-neon-blue",
    accent: "neon-purple",
    number: "06",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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
      {/* Animated orbs */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-pink/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-neon-purple/5 blur-[100px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-neon-pink to-transparent" />
              <span className="text-sm font-medium text-neon-pink uppercase tracking-widest">
                Services
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1]">
              What We
              <br />
              <span className="text-gradient">Deliver</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-md lg:text-right"
          >
            End-to-end digital solutions crafted with precision, 
            passion, and a relentless pursuit of excellence.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.02 : 1,
                  y: hoveredIndex === index ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative h-full min-h-[320px] rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  background: "hsl(260 30% 6% / 0.9)",
                  border: "1px solid hsl(260 30% 15% / 0.5)",
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${service.accent}) / 0.1), transparent 60%)`,
                  }}
                />

                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${service.accent}) / 0.3), transparent)`,
                    padding: "1px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    WebkitMaskComposite: "xor",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  {/* Top Row - Number and Arrow */}
                  <div className="flex items-start justify-between">
                    <motion.span
                      className="text-6xl font-black text-foreground/5 group-hover:text-foreground/10 transition-colors"
                      animate={{
                        x: hoveredIndex === index ? 10 : 0,
                      }}
                    >
                      {service.number}
                    </motion.span>

                    <motion.div
                      animate={{
                        rotate: hoveredIndex === index ? 45 : 0,
                        scale: hoveredIndex === index ? 1.2 : 1,
                      }}
                      className={`p-3 rounded-full bg-${service.accent}/10 group-hover:bg-${service.accent}/20 transition-colors`}
                    >
                      <ArrowUpRight className={`w-5 h-5 text-${service.accent}`} />
                    </motion.div>
                  </div>

                  {/* Middle - Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    className="my-auto"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5`}>
                      <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-foreground" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom - Title and Description */}
                  <div>
                    <motion.h3
                      className="text-2xl font-bold text-foreground mb-3"
                      animate={{
                        x: hoveredIndex === index ? 5 : 0,
                      }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground text-sm leading-relaxed"
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0.7,
                      }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Expanding line */}
                    <motion.div
                      className={`mt-6 h-0.5 bg-gradient-to-r ${service.color} origin-left`}
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${service.color} opacity-0 group-hover:opacity-5 transition-opacity blur-2xl`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom floating text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground/50 text-sm tracking-widest uppercase">
            Hover to explore • Click to learn more
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
