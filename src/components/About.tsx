import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "MERN Stack Expert",
      description: "Specialized in MongoDB, Express.js, React.js, and Node.js",
    },
    {
      icon: Rocket,
      title: "Quick Learner",
      description: "Passionate about adopting new technologies and best practices",
    },
    {
      icon: Trophy,
      title: "Problem Solver",
      description: "Creating impactful solutions for real-world challenges",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <Card className="p-8 glass shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a Full Stack Developer specializing in the{" "}
                <span className="text-accent font-semibold">MERN stack</span>, with a
                background in Instrumentation and Control Engineering. My journey into
                web development has been driven by a passion for creating efficient,
                scalable applications that make a real impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through hands-on projects and continuous learning, I've developed
                expertise in building modern web applications from concept to
                deployment. I love tackling complex challenges and turning ideas into
                functional, user-friendly solutions.
              </p>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 glass shadow-card hover:shadow-glow transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
