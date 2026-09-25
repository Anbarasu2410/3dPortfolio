"use client";

import { profile, education, certifications } from "@/data/resume";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/SectionHeading";
import { BlurFade } from "@/components/ui/blur-fade";
import { TiltCard } from "@/components/ui/TiltCard";
import { GraduationCap, Award } from "lucide-react";

export function AboutSection() {
    return (
        <SectionWrapper id="about">
            <SectionHeading
                title="About"
                subtitle="A brief overview of my background and qualifications."
            />

            <div className="grid gap-10 lg:grid-cols-2">
                {/* Education */}
                <BlurFade delay={0.2} inView>
                    <TiltCard>
                        <div className="h-full rounded-2xl border border-[var(--ds-border)] bg-[var(--ds-surface)]/80 backdrop-blur-sm p-6 sm:p-8 hover:border-[var(--ds-accent)]/40 hover:shadow-[0_8px_30px_rgba(79,70,229,0.1)] transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-[var(--ds-accent-soft)]">
                                    <GraduationCap className="text-[var(--ds-accent)]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--ds-text-primary)]">
                                    Education
                                </h3>
                            </div>
                            <div className="space-y-6">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="relative pl-4 border-l-2 border-[var(--ds-border)]">
                                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[var(--ds-accent)] shadow-[0_0_8px_var(--ds-accent)]" />
                                        <h4 className="text-base font-semibold text-[var(--ds-text-primary)]">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-sm font-medium text-[var(--ds-text-secondary)] mt-1">
                                            {edu.school}
                                        </p>
                                        <p className="text-xs font-bold text-[var(--ds-accent)] mt-2">
                                            {edu.detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TiltCard>
                </BlurFade>

                {/* Certifications */}
                <BlurFade delay={0.3} inView>
                    <TiltCard>
                        <div className="h-full rounded-2xl border border-[var(--ds-border)] bg-[var(--ds-surface)]/80 backdrop-blur-sm p-6 sm:p-8 hover:border-[var(--ds-accent)]/40 hover:shadow-[0_8px_30px_rgba(79,70,229,0.1)] transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-[var(--ds-accent-soft)]">
                                    <Award className="text-[var(--ds-accent)]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--ds-text-primary)]">
                                    Certifications
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {certifications.map((cert, idx) => (
                                    <div
                                        key={idx}
                                        className="group p-4 rounded-xl border border-[var(--ds-border)] bg-[var(--ds-background)] hover:border-[var(--ds-accent)]/30 transition-colors"
                                    >
                                        <h4 className="text-sm font-semibold text-[var(--ds-text-primary)] group-hover:text-[var(--ds-accent)] transition-colors">
                                            {cert.title}
                                        </h4>
                                        <p className="text-xs font-medium text-[var(--ds-text-secondary)] mt-1">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TiltCard>
                </BlurFade>
            </div>
        </SectionWrapper>
    );
}
