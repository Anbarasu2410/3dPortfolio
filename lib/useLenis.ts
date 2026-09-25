"use client";

import { useEffect } from "react";

export function useLenis() {
    useEffect(() => {
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReduced) return;

        let lenisInstance: InstanceType<typeof import("lenis").default> | null = null;

        const init = async () => {
            const Lenis = (await import("lenis")).default;
            lenisInstance = new Lenis({
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                touchMultiplier: 2,
            });

            function raf(time: number) {
                lenisInstance?.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        };

        init();

        return () => {
            lenisInstance?.destroy();
        };
    }, []);
}
