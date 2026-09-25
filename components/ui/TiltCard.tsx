"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth out the mouse movement values
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    // Map mouse values to rotation
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative w-full h-full perspective-[1000px] ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(30px)",
                }}
                className="w-full h-full relative z-10"
            >
                {children}
            </div>

            {/* Dynamic shadow that responds to tilt */}
            <motion.div
                style={{
                    opacity: useTransform(y, [-0.5, 0, 0.5], [0.3, 0, 0.3]),
                    transform: "translateZ(-20px)",
                }}
                className="absolute inset-x-8 -bottom-8 h-1/2 bg-[var(--ds-accent)] blur-[40px] rounded-full pointer-events-none z-0"
            />
        </motion.div>
    );
}
