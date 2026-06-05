import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HERO } from "@/constants/data";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Aurora orbs */}
      <div className="orb orb-violet" />
      <div className="orb orb-pink" />
      <div className="orb orb-blue" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass gradient-border">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping-slow" />
              <span className="text-xs font-medium text-white/70">Available for opportunities</span>
              <Sparkles className="w-3 h-3 text-violet-400" />
            </div>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Arjun.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/25 tracking-tight"
            >
              Full Stack Developer
            </motion.h2>
          </div>

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            {HERO.statement}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white btn-gradient"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white/80 glass rounded-xl hover:bg-white/[0.06] transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-6 pt-4"
          >
            {HERO.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/30 hover:text-white/70 transition-colors"
              >
                <social.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{social.label}</span>
              </a>
            ))}
          </motion.div>

        </div>

        {/* Floating stats below hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 max-w-lg mx-auto"
        >
          {[
            { value: "4+", label: "Projects Built" },
            { value: "2+", label: "Years Learning" },
            { value: "10+", label: "Tech Stack" },
          ].map((stat, i) => (
            <div key={i} className="text-center py-4 border-r border-white/[0.06] last:border-r-0">
              <p className="text-2xl font-bold gradient-text-subtle">{stat.value}</p>
              <p className="text-xs text-white/35 mt-0.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-violet-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};
