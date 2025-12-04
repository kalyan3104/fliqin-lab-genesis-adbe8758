import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Labs", href: "#labs" },
    { name: "Ventures", href: "#ventures" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            FLi<span className="text-gradient">Q</span>in
          </span>
        </div>

        {/* Desktop Navigation - Pill Container */}
        <div className="hidden md:flex items-center">
          <div className="glass rounded-full px-2 py-2 flex items-center gap-1">
            {/* Icon */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mr-2">
              <svg 
                viewBox="0 0 24 24" 
                className="w-4 h-4 text-foreground"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-full hover:bg-secondary/50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="neon-border rounded-full px-6 py-2.5 text-sm font-medium text-foreground hover:shadow-[0_0_30px_hsl(270_100%_71%_/_0.4)] transition-all duration-300">
            Start a Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass mt-2 mx-4 rounded-2xl p-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="neon-border rounded-full px-6 py-3 text-sm font-medium text-foreground mt-2">
              Start a Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
