"use client";

import { experience } from "@/data/resume";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/SectionHeading";
import { BlurFade } from "@/components/ui/blur-fade";
import { TiltCard } from "@/components/ui/TiltCard";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
    return (
        <SectionWrapper id="experience">
            <SectionHeading
                title="Experience"
                subtitle="Where I've worked and what I've built."
            />

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[18px] top-0 bottom-0 w-px bg-[var(--ds-border)] hidden md:block" />

                <div className="space-y-8">
                    {experience.map((job, idx) => (
                        <BlurFade key={job.company} delay={0.15 + idx * 0.1} inView>
                            <div className="relative flex gap-6 md:gap-8">
                                {/* Timeline dot */}
                                <div className="hidden md:flex shrink-0 items-start pt-1">
                                    <div className="w-[37px] h-[37px] rounded-full border-2 border-[var(--ds-accent)] bg-[var(--ds-background)] flex items-center justify-center z-10">
                                        <Briefcase size={14} className="text-[var(--ds-accent)]" />
                                    </div>
                                </div>

                                {/* Content card */}
                                <div className="flex-1">
                                    <TiltCard>
                                        <div className="rounded-2xl border border-[var(--ds-border)] bg-[var(--ds-surface)]/80 backdrop-blur-sm p-6 sm:p-8 hover:border-[var(--ds-accent)]/40 hover:shadow-[0_8px_30px_rgba(79,70,229,0.1)] transition-all">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-[var(--ds-text-primary)]">
                                                        {job.role}
                                                    </h3>
                                                    <p className="text-sm font-medium text-[var(--ds-text-secondary)] mt-1">
                                                        {job.company}
                                                    </p>
                                                </div>
                                                <span className="text-xs font-bold text-[var(--ds-accent)] bg-[var(--ds-accent-soft)] px-3 py-1.5 rounded-full whitespace-nowrap w-fit border border-[var(--ds-accent)]/10">
                                                    {job.period}
                                                </span>
                                            </div>
                                            <ul className="space-y-3 mt-4">
                                                {job.bullets.map((bullet, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-sm text-[var(--ds-text-secondary)] leading-relaxed"
                                                    >
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--ds-accent)] shrink-0 shadow-[0_0_8px_var(--ds-accent)]" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </TiltCard>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
