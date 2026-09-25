"use client";

import { skills, skillCategories } from "@/data/resume";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/SectionHeading";
import { BlurFade } from "@/components/ui/blur-fade";
import { FloatingBg } from "@/components/ui/FloatingBg";
import { TiltCard } from "@/components/ui/TiltCard";
import {
    Code2,
    Layout,
    Server,
    Database,
    Radio,
    Brain,
    Wrench,
    Puzzle,
} from "lucide-react";

const rotateArray = [-5, -3, 3, 5, -8, 8];

const iconMap: Record<string, React.ElementType> = {
    Code2,
    Layout,
    Server,
    Database,
    Radio,
    Brain,
    Wrench,
    Puzzle,
};

import { useRef } from "react";
import { motion } from "motion/react";

export function SkillsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <SectionWrapper id="skills" className="relative">
            <FloatingBg />
            <SectionHeading
                title="Skills"
                subtitle="Technologies and tools I work with. (Try throwing them around!)"
            />

            <div ref={containerRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 select-none">
                {skillCategories.map((category, idx) => {
                    const Icon = iconMap[category.icon];
                    const items = skills[category.key];

                    return (
                        <BlurFade key={category.key} delay={0.1 + idx * 0.05} inView>
                            <TiltCard>
                                <div className="rounded-2xl border border-[var(--ds-border)] bg-[var(--ds-surface)]/70 backdrop-blur-md p-6 h-full hover:border-[var(--ds-accent)]/40 transition-colors shadow-sm hover:shadow-[0_8px_30px_rgba(79,70,229,0.1)] overflow-hidden">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--ds-accent-soft)] flex items-center justify-center">
                                            {Icon && (
                                                <Icon
                                                    size={18}
                                                    className="text-[var(--ds-accent)] shrink-0"
                                                />
                                            )}
                                        </div>
                                        <h3 className="text-base font-bold text-[var(--ds-text-primary)] pointer-events-none">
                                            {category.label}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5 relative min-h-[80px]">
                                        {items.map((skill) => (
                                            <motion.span
                                                key={skill}
                                                drag
                                                dragConstraints={containerRef}
                                                dragElastic={0.4}
                                                whileDrag={{ scale: 1.15, zIndex: 50, rotate: rotateArray[Math.floor(Math.random() * rotateArray.length)] }}
                                                whileHover={{ scale: 1.05 }}
                                                className="cursor-grab active:cursor-grabbing px-3 py-1.5 text-xs font-semibold rounded-lg bg-[var(--ds-background)] border border-[var(--ds-border)] text-[var(--ds-text-secondary)] hover:text-[var(--ds-accent)] hover:border-[var(--ds-accent)] hover:shadow-md transition-colors relative z-10"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </BlurFade>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
