import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/data";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";

export const Projects = () => {
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="orb orb-pink" style={{ opacity: 0.07, bottom: "5%", right: "-15%" }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-3"
        >
          <span className="label">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Featured — spans 2 cols + 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="glass glass-hover gradient-border rounded-2xl p-7 h-full flex flex-col justify-between min-h-[340px] relative overflow-hidden group">
              {/* Gradient glow bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 border border-violet-500/20 text-[10px] font-bold uppercase tracking-widest text-violet-300">
                    <Star className="w-2.5 h-2.5" /> Featured
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:-translate-y-0.5"
                    >
                      <Github className="w-3.5 h-3.5 text-white/60" />
                    </a>
                    <a
                      href={featured.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center transition-all hover:-translate-y-0.5"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 mt-4">
                  {featured.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{featured.description}</p>
                <p className="text-xs text-white/30 italic mb-5">{featured.impact}</p>

                <div className="flex flex-wrap gap-1.5">
                  {featured.tech.map((t) => (
                    <span key={t} className="tag text-[10px] py-1">{t}</span>
                  ))}
                </div>
              </div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-violet-950/10 to-transparent rounded-b-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Side projects */}
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <div className="glass glass-hover gradient-border rounded-2xl p-5 h-full flex flex-col justify-between min-h-[160px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full gap-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-1.5 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                      >
                        <Github className="w-3 h-3 text-white/50" />
                      </a>
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                        >
                          <ExternalLink className="w-3 h-3 text-white/50" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-white/40 leading-relaxed flex-1">{project.description.slice(0, 100)}...</p>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="tag text-[9px] py-0.5 px-2">{t}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tag text-[9px] py-0.5 px-2">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/Arjunmb01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/70 transition-colors"
          >
            <Github className="w-4 h-4" />
            View all repositories
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
