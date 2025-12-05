import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TechVision Pro",
    category: "Web Application",
    description: "A cutting-edge SaaS platform with AI-powered analytics and real-time collaboration features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "Node.js", "AI"],
    color: "from-neon-purple to-neon-pink",
  },
  {
    id: 2,
    title: "FinanceFlow",
    category: "Fintech",
    description: "Modern banking dashboard with seamless payment integration and financial insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "Stripe", "Charts"],
    color: "from-neon-blue to-neon-cyan",
  },
  {
    id: 3,
    title: "CreativeHub",
    category: "E-commerce",
    description: "Stunning marketplace for digital artists with NFT integration and creator tools.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["Vue.js", "Web3", "Design"],
    color: "from-neon-pink to-neon-magenta",
  },
  {
    id: 4,
    title: "HealthSync",
    category: "Healthcare",
    description: "Patient management system with telemedicine capabilities and health tracking.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React", "HIPAA", "Mobile"],
    color: "from-neon-cyan to-neon-blue",
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(260 100% 2%) 0%, hsl(217 40% 6%) 50%, hsl(260 100% 2%) 100%)",
      }}
    >
      {/* Floating orbs */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-neon-blue/10 blur-[80px]" />
        <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-neon-cyan/10 blur-[60px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-neon-cyan border border-neon-cyan/30 rounded-full bg-neon-cyan/10"
            >
              Featured Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-foreground"
            >
              Our <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-neon-purple hover:text-neon-pink transition-colors mt-6 md:mt-0"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true, margin: "-50px" }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                {/* Image with parallax */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />

                {/* Content overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0,
                    y: hoveredId === project.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col justify-end p-8"
                >
                  <span className="text-sm font-medium text-foreground/80 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-background/20 backdrop-blur-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* View button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0,
                    scale: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute top-4 right-4"
                >
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5 text-background" />
                  </div>
                </motion.div>
              </div>

              {/* Bottom info bar */}
              <motion.div
                className="mt-4 flex items-center justify-between"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h4>
                  <span className="text-sm text-muted-foreground">{project.category}</span>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-muted-foreground group-hover:text-neon-purple transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
