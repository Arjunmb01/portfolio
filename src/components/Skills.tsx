import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS"],
      color: "bg-gradient-accent",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js"],
      color: "bg-gradient-primary",
    },
    {
      category: "Database",
      skills: ["MongoDB"],
      color: "bg-gradient-accent",
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "AWS (basic)", "Docker (basic)"],
      color: "bg-gradient-primary",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 glass shadow-card hover:shadow-glow transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1 h-8 ${category.color} rounded-full`} />
                  <h3 className="text-2xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
