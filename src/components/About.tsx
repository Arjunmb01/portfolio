import { motion } from "framer-motion";
import { ABOUT } from "@/constants/data";
import profilePic from "@/assets/Pic.jpeg";
import { Code2, Cpu, Globe, Zap } from "lucide-react";

export const About = () => {
  const cards = [
    { icon: Code2, title: "Clean Code", desc: "Hexagonal architecture, SOLID principles, test-driven development." },
    { icon: Cpu, title: "Performance", desc: "99.9% uptime, optimized queries, sub-100ms API response times." },
    { icon: Globe, title: "Full Stack", desc: "End-to-end ownership — from DB schema to polished UI." },
    { icon: Zap, title: "Real-time", desc: "Socket.IO, Redis pub/sub, live updates across all clients." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="orb orb-violet" style={{ opacity: 0.06, top: "20%", left: "-10%" }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-3"
        >
          <span className="label">About me</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Turning ideas into{" "}
            <span className="gradient-text">real products</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="glass gradient-border rounded-2xl overflow-hidden h-full relative group">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={profilePic}
                  alt="Arjun MB"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xl font-bold text-white">Arjun MB</p>
                  <p className="text-sm text-violet-300 font-medium">Full Stack Developer</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-white/50">Kochi, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <div className="lg:col-span-3 space-y-5">
            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass gradient-border rounded-2xl p-7"
            >
              <p className="text-base text-white/60 leading-relaxed">{ABOUT.text}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {ABOUT.highlights.map((chip) => (
                  <span key={chip} className="tag">{chip}</span>
                ))}
              </div>
            </motion.div>

            {/* Stat cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="glass glass-hover gradient-border rounded-xl p-5 cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center mb-3">
                    <card.icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">{card.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
