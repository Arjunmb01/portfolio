import { motion } from "framer-motion";

interface AnimatedHeadingProps {
    text: string;
    className?: string;
    subtitle?: string;
}

export const AnimatedHeading = ({ text, className = "", subtitle }: AnimatedHeadingProps) => {
    const characters = text.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            rotateX: 90,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 15,
                stiffness: 150,
            },
        },
    };

    return (
        <div className={`flex flex-col items-center mb-16 ${className}`}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    className="text-accent font-semibold tracking-[0.3em] uppercase text-xs mb-4"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className="text-4xl md:text-6xl font-black text-center flex flex-wrap justify-center overflow-hidden py-2"
                style={{ perspective: "1000px" }}
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={childVariants}
                        className={`inline-block ${char === " " ? "mr-4" : ""}`}
                        style={{ transformOrigin: "bottom" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="w-24 h-1.5 bg-gradient-accent rounded-full mt-4"
            />
        </div>
    );
};
