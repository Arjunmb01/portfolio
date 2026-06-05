import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: Github, href: "https://github.com/Arjunmb01", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/arjun-mb/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:arjunmb1176@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
              <span className="text-xs font-black text-white">A</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Arjun MB</p>
              <p className="text-xs text-white/40">Full Stack Developer</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-2">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] hover:border-violet-500/20 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/[0.08] transition-all group text-xs font-medium text-white/60 hover:text-white"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-violet-400" />
            Back to top
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.04] text-center md:flex md:justify-between md:text-left items-center">
          <p className="text-xs text-white/40">
            © {currentYear} Arjun MB. All rights reserved.
          </p>
          <p className="text-xs text-white/30 mt-2 md:mt-0">
            Built with React, Tailwind & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};
