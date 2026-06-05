import { motion, useScroll, useSpring } from "framer-motion";
import { EXPERIENCE } from "@/constants/data";
import { useRef } from "react";

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="orb orb-violet" style={{ opacity: 0.06, top: "10%", right: "-20%" }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-3"
        >
          <span className="label">Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="gradient-text">milestones</span>
          </h2>
        </motion.div>

        <div ref={ref} className="max-w-2xl relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/[0.06]" />
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-pink-500 to-transparent"
          />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Dot */}
                <div className="absolute -left-[37px] top-5 timeline-dot" />

                {/* Card */}
                <div className="glass glass-hover gradient-border rounded-2xl p-6 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">
                        {exp.period}
                      </p>
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <p className="text-sm text-white/40 font-medium">{exp.company}</p>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-violet-300">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                  <div className="h-px bg-white/[0.06]" />
                  <p className="text-sm text-white/45 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
