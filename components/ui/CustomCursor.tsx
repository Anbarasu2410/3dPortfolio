"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Motion values for the cursor coordinates
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth springs for a buttery delayed follow effect
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    // Faster springs for the inner dot
    const dotSpringConfig = { damping: 40, stiffness: 800, mass: 0.1 };
    const dotX = useSpring(cursorX, dotSpringConfig);
    const dotY = useSpring(cursorY, dotSpringConfig);

    useEffect(() => {
        // Check if device supports hover (ignore mobile/touch)
        if (window.matchMedia("(hover: none)").matches) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Expand cursor on interactive elements
            const isInteractive =
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsHovering(isInteractive);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        // Inject global CSS to hide default cursor
        const style = document.createElement("style");
        style.innerHTML = `
      @media (pointer: fine) {
        * { cursor: none !important; }
      }
    `;
        document.head.appendChild(style);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.head.removeChild(style);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* The main lagging ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[var(--ds-accent)] pointer-events-none z-[9999] mix-blend-multiply flex items-center justify-center"
                style={{
                    x: smoothX,
                    y: smoothY,
                }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                    backgroundColor: isHovering
                        ? "rgba(79, 70, 229, 0.1)"
                        : "transparent",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            />
            {/* The tiny exact center dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-[var(--ds-accent)] rounded-full pointer-events-none z-[10000]"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: 13,
                    translateY: 13,
                }}
                animate={{
                    opacity: isHovering ? 0 : 1,
                }}
            />
        </>
    );
}
