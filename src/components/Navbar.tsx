import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "@/constants/data";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 80);
      setLastY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <>
      {/* Scroll progress */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Floating pill nav */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="pill-nav flex items-center gap-1 px-3 py-2">
          {/* Logo */}
          <a href="#home" className="mr-4 flex items-center gap-2 pl-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
              <span className="text-[10px] font-black text-white">A</span>
            </div>
            <span className="text-sm font-semibold text-white/90">Arjun MB</span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center">
            {NAVIGATION.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex ml-2 items-center px-4 py-1.5 text-sm font-medium text-white btn-gradient"
          >
            Hire me
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden ml-2 p-2 text-white/50 hover:text-white rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-50 rounded-2xl glass p-4 flex flex-col gap-1"
          >
            {NAVIGATION.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-3 text-sm font-semibold text-center text-white btn-gradient rounded-xl"
            >
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
