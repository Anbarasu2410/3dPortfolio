"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function FloatingBg() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none stroke-[var(--ds-border)] [mask-image:linear-gradient(to_bottom,white,transparent)]">
            <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="dotted-pattern"
                        width="32"
                        height="32"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="2" cy="2" r="1.5" fill="var(--ds-border)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
            </svg>
            {/* Floating accent orbs for ambient lighting effects */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute top-1/4 -right-20 w-96 h-96 bg-[var(--ds-accent-soft)] rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    x: [0, -60, 60, 0],
                    y: [0, 60, -60, 0],
                }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[var(--ds-accent-soft)]/50 rounded-full blur-[120px]"
            />
        </div>
    );
}
