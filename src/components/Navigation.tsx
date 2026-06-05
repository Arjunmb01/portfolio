import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { NAVIGATION } from "@/constants/data";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants: any = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4 bg-background/70 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">

          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-none bg-black border border-cyan/50 flex items-center justify-center shadow-neon group-hover:rotate-90 transition-all duration-500">
              <Rocket className="text-cyan w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase group-hover:text-cyan transition-all font-mono">
                Arjun <span className="text-cyan italic">M B</span>
              </span>
              <span className="text-[8px] font-bold text-cyan/40 tracking-[0.3em] font-mono -mt-1">
                SYSTEM_v1.0.4
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <div className="items-center gap-4 border-r border-white/10 pr-8 mr-4 hidden lg:flex">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-1 h-3 ${i < 3 ? "bg-cyan" : "bg-cyan/20"} rounded-full animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
              <span className="text-[9px] font-mono text-cyan/60 tracking-widest uppercase">Signal: High</span>
            </div>
            {NAVIGATION.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-text={link.name}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-cyan transition-all relative group glitch-text"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan shadow-[0_0_5px_#00f3ff] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
        style={{ scaleX }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-premium border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAVIGATION.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  data-text={link.name}
                  className="text-2xl font-black tracking-tighter uppercase hover:text-primary transition-colors relative group glitch-text"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary shadow-[0_0_5px_#00f3ff] transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
