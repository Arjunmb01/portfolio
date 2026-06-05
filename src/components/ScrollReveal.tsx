import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
}

export const ScrollReveal = ({
    children,
    width = "100%",
    className = "",
    delay = 0.2,
    duration = 0.6,
    direction = "up",
    distance = 50,
}: ScrollRevealProps) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
    };

    return (
        <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        ...directions[direction],
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                    },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
