import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiAmazons3,
  SiGithubactions,
  SiDocker,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiSocketdotio,
  SiExpress,
  SiStripe,
} from "react-icons/si";

export const NAVIGATION = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const HERO = {
  heading: "Hi, I'm Arjun",
  title: "Full Stack Developer",
  statement: "I build modern web applications with clean architecture and real-world performance.",
  socials: [
    { icon: Github, href: "https://github.com/Arjunmb01", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/arjun-mb/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:arjunmb1176@gmail.com", label: "Email" },
  ],
};

export const ABOUT = {
  highlights: ["MERN", "Node.js", "PostgreSQL", "Prisma", "Express", "Tailwind", "AWS"],
  text: "I specialize in building resilient, scalable applications that bridge robust backend architecture with fluid user experiences. My approach treats software as both craft and engineering — every decision intentional, every abstraction earned.",
};

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#ffffff" },
    ],
  },
  {
    category: "DevOps & Payments",
    items: [
      { name: "AWS", icon: SiAmazons3, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "MedixFlow",
    description:
      "Full-stack healthcare platform connecting patients, doctors, and administrators. Features slot-based clinic and video booking, multi-gateway payments (Razorpay, Stripe, PayPal), real-time notifications via Socket.IO, and digital prescription management with PDF export.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis", "Socket.IO", "Razorpay", "Stripe"],
    github: "https://github.com/Arjunmb01/MedixFlow",
    demo: "https://medix-flow-web.vercel.app",
    impact: "Hexagonal architecture with patient, doctor, and admin portals — all in one platform.",
    featured: true,
  },
  {
    title: "InfinityTech",
    description:
      "Advanced e-commerce infrastructure for high-end computing hardware. Features real-time inventory tracking and encrypted payment gateway integration.",
    tech: ["Node.js", "Express", "MongoDB", "Razorpay"],
    github: "https://github.com/Arjunmb01/InfinityTech",
    demo: "https://infinity-tech-lapstore.vercel.app/",
    impact: "Scaled user capacity by 40% using optimized MongoDB queries.",
    featured: false,
  },
  {
    title: "Atmosphere Engine",
    description:
      "Professional weather forecasting interface utilizing specialized environmental APIs for hyper-local predictive data and visual charting.",
    tech: ["Node.js", "Express", "OpenWeather API", "Chart.js"],
    github: "https://github.com/Arjunmb01/weather",
    demo: "https://weather-23.vercel.app/",
    impact: "99.9% uptime for environmental data synchronization.",
    featured: false,
  },
  {
    title: "OLX Architecture",
    description:
      "Scalable peer-to-peer marketplace with real-time Firestore synchronization, global identity management, and live listing updates.",
    tech: ["React", "Firebase", "Vite", "Tailwind CSS"],
    github: "https://github.com/Arjunmb01/OLX-clone",
    demo: "#",
    impact: "Reduced data latency by 200ms using Firebase real-time listeners.",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    title: "Full Stack Engineering",
    company: "Brototype Intensive",
    period: "2024 — Present",
    description:
      "Specialized immersion in MERN stack and beyond. Engineering high-performance applications using industry-grade patterns — clean architecture, test-driven development, and production deployment.",
  },
  {
    title: "Instrumentation & Control Engineering",
    company: "University",
    period: "2018 — 2022",
    description:
      "Mastered technical infrastructure and control systems, fostering a mindset for architectural precision, systems thinking, and methodical problem-solving.",
  },
];
