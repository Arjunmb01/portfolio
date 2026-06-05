import { motion } from "framer-motion";
import { SKILLS } from "@/constants/data";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <span className="label">Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Tools I <span className="gradient-text">master</span>
            </h2>
          </div>
          <p className="text-sm text-white/40 max-w-xs leading-relaxed">
            A curated set of technologies I use to build production-ready software.
          </p>
        </motion.div>

        <div className="space-y-8">
          {SKILLS.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.08 }}
            >
              {/* Category row */}
              <div className="glass gradient-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-violet-400">
                    {category.category}
                  </p>
                  <div className="flex-1 h-px bg-gradient-to-r from-violet-500/20 to-transparent" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.05 + idx * 0.04 }}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-violet-500/20 transition-all cursor-default group"
                    >
                      <item.icon
                        className="w-4 h-4 transition-all duration-300 group-hover:scale-110"
                        style={{ color: item.color }}
                      />
                      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
