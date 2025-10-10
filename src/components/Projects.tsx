import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "InfinityTech",
      description:
        "E-commerce platform for laptops with Razorpay payment integration. Includes product catalog, cart management, and secure checkout.",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay"],
      github: "https://github.com/Arjunmb01/InfinityTech",
      demo: "",
    },
    {
      title: "WeatherApp",
      description:
        "Real-time weather application using OpenWeather API. Displays current weather, 5-day forecast, and location-based weather data.",
      tech: ["Node.js", "Express", "OpenWeather API", "EJS"],
      github: "https://github.com/Arjunmb01/weather",
      demo: "https://weather-gamma-six-23.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with React and Framer Motion. Features smooth animations and dark mode support.",
      tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/Arjunmb01/portfolio",
      demo: "https://portfolio-cyan-ten-95.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack
            development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 glass shadow-card hover:shadow-glow transition-all duration-300 h-full flex flex-col">
                <h3 className="text-2xl font-semibold mb-3 text-gradient-accent">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent/10"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-accent hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
