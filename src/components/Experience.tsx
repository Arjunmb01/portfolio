import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Laptop } from "lucide-react";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      icon: GraduationCap,
      title: "Instrumentation & Control Engineering",
      subtitle: "Academic Background",
      description:
        "Graduated with a degree in Instrumentation and Control Engineering, building a strong foundation in technical problem-solving and systems thinking.",
      period: "2018 - 2022",
    },
    {
      icon: Code,
      title: "Brototype Bootcamp",
      subtitle: "Full Stack Development",
      description:
        "Intensive training in MERN stack development, learning industry best practices and working on real-world projects.",
      period: "2023",
    },
    {
      icon: Laptop,
      title: "Self-Learning & Projects",
      subtitle: "Continuous Development",
      description:
        "Building diverse projects including TaskPulse, LaptopHub, and WeatherApp. Continuously expanding skills in modern web technologies and best practices.",
      period: "2023 - Present",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="p-6 glass shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="text-accent font-medium">{item.subtitle}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
