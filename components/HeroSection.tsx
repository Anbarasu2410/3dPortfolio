"use client";

import { useEffect, useRef } from "react";
import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/resume";
import { Hero3D } from "@/components/Hero3D";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Magnetic } from "@/components/ui/Magnetic";

export function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const roleRef = useRef<HTMLDivElement>(null);
    const summaryRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initGSAP = async () => {
            const { gsap } = await import("gsap");

            const prefersReduced = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReduced) {
                [nameRef.current, roleRef.current, summaryRef.current, ctaRef.current]
                    .filter(Boolean)
                    .forEach((el) => {
                        if (el) {
                            el.style.opacity = "1";
                            el.style.transform = "none";
                        }
                    });
                return;
            }

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                nameRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }
            )
                .fromTo(
                    roleRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    "-=0.4"
                )
                .fromTo(
                    summaryRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    "-=0.3"
                )
                .fromTo(
                    ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    "-=0.3"
                );
        };

        initGSAP();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* 3D abstract shape background (GSAP + Three.js) */}
            <Hero3D />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[var(--ds-background)]/30 to-[var(--ds-background)]" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                <h1 ref={nameRef} className="mb-4" style={{ opacity: 0 }}>
                    {profile.name}
                </h1>

                <div ref={roleRef} className="mb-6" style={{ opacity: 0 }}>
                    <AnimatedShinyText className="text-xl md:text-2xl font-medium">
                        {profile.role}
                    </AnimatedShinyText>
                </div>

                <p
                    ref={summaryRef}
                    className="max-w-lg mx-auto text-base md:text-lg leading-relaxed mb-10"
                    style={{ opacity: 0 }}
                >
                    {profile.summary}
                </p>

                {/* CTAs */}
                <div
                    ref={ctaRef}
                    className="flex flex-wrap items-center justify-center gap-3"
                    style={{ opacity: 0 }}
                >
                    <Magnetic>
                        <a
                            href="/3dPortfolio/Full_Stack_Developer.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--ds-accent)] text-white font-medium text-sm hover:bg-[var(--ds-accent)]/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Download size={16} />
                            Resume
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--ds-border)] text-[var(--ds-text-primary)] font-medium text-sm hover:bg-[var(--ds-accent-soft)] hover:border-[var(--ds-accent)]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <GithubIcon size={16} />
                            GitHub
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--ds-border)] text-[var(--ds-text-primary)] font-medium text-sm hover:bg-[var(--ds-accent-soft)] hover:border-[var(--ds-accent)]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <LinkedinIcon size={16} />
                            LinkedIn
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--ds-border)] text-[var(--ds-text-primary)] font-medium text-sm hover:bg-[var(--ds-accent-soft)] hover:border-[var(--ds-accent)]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Mail size={16} />
                            Email
                        </a>
                    </Magnetic>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-5 h-8 rounded-full border-2 border-[var(--ds-text-secondary)]/30 flex items-start justify-center p-1">
                    <div className="w-1 h-2 rounded-full bg-[var(--ds-text-secondary)]/50 animate-bounce" />
                </div>
            </div>
        </section>
    );
}
