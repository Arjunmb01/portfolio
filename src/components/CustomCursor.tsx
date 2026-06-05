import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const magneticX = useMotionValue(0);
    const magneticY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorX = useSpring(magneticX, springConfig);
    const cursorY = useSpring(magneticY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (hoveredElement) {
                const rect = hoveredElement.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Magnetic pull: Move 20% towards the center of the hovered element
                const pullX = e.clientX + (centerX - e.clientX) * 0.2;
                const pullY = e.clientY + (centerY - e.clientY) * 0.2;

                magneticX.set(pullX - 16);
                magneticY.set(pullY - 16);
            } else {
                magneticX.set(e.clientX - 16);
                magneticY.set(e.clientY - 16);
            }
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest("button, a, [role='button']");

            if (interactive) {
                setHoveredElement(interactive as HTMLElement);
                setIsHovering(true);
            } else {
                setHoveredElement(null);
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHover);
        };
    }, [mouseX, mouseY, hoveredElement]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
            {/* Outer HUD Ring */}
            <motion.div
                className="absolute top-0 left-0 w-8 h-8 rounded-none border border-cyan/40 hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 2 : 1,
                    rotate: isHovering ? 45 : 0,
                    backgroundColor: isHovering ? "rgba(0, 243, 255, 0.05)" : "transparent",
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            >
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan" />
            </motion.div>

            {/* Scanning Line Pulse */}
            <motion.div
                className="absolute top-0 left-0 w-12 h-px bg-cyan/20 hidden md:block"
                style={{
                    x: useSpring(magneticX, { damping: 40, stiffness: 300 }),
                    y: useSpring(magneticY, { damping: 40, stiffness: 300 }),
                    translateX: -2,
                    translateY: 15,
                    opacity: isHovering ? 1 : 0,
                }}
            />

            {/* Core Data Point */}
            <motion.div
                className="absolute top-0 left-0 w-1 h-1 bg-cyan hidden md:block shadow-[0_0_8px_#00f3ff]"
                style={{
                    x: useSpring(mouseX, { damping: 45, stiffness: 700 }),
                    y: useSpring(mouseY, { damping: 45, stiffness: 700 }),
                    translateX: 15,
                    translateY: 15,
                }}
            />
        </div>
    );
};
