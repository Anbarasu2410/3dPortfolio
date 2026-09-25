"use client";

import { projects } from "@/data/resume";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/SectionHeading";
import { BlurFade } from "@/components/ui/blur-fade";
import { TiltCard } from "@/components/ui/TiltCard";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function ProjectsSection() {
    return (
        <SectionWrapper id="projects" className="relative">
            <SectionHeading
                title="Projects"
                subtitle="Selected work that demonstrates what I can build."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-min">
                {projects.map((project, idx) => {
                    // Make the first project span 2 columns on large screens (Bento style)
                    const isFeatured = idx === 0;
                    return (
                        <BlurFade
                            key={project.title}
                            delay={0.15 + idx * 0.08}
                            inView
                            className={isFeatured ? "md:col-span-2 lg:col-span-2" : ""}
                        >
                            <TiltCard>
                                <div className="group h-full rounded-2xl border border-[var(--ds-border)] bg-[var(--ds-surface)]/80 backdrop-blur-md p-6 sm:p-8 flex flex-col hover:border-[var(--ds-accent)] transition-colors shadow-sm hover:shadow-[0_8px_30px_rgba(79,70,229,0.12)]">
                                    {/* Title + links */}
                                    <div className="flex items-start justify-between gap-3 mb-4">
                                        <h3 className="text-xl font-bold text-[var(--ds-text-primary)]">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 shrink-0 bg-[var(--ds-background)] rounded-full px-2 py-1 border border-[var(--ds-border)]">
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 rounded-full hover:bg-[var(--ds-accent-soft)] text-[var(--ds-text-secondary)] hover:text-[var(--ds-accent)] transition-colors"
                                                    aria-label={`Open ${project.title} live`}
                                                >
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                            {project.repoUrl && (
                                                <a
                                                    href={project.repoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 rounded-full hover:bg-[var(--ds-accent-soft)] text-[var(--ds-text-secondary)] hover:text-[var(--ds-accent)] transition-colors"
                                                    aria-label={`Open ${project.title} repository`}
                                                >
                                                    <GithubIcon size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-base text-[var(--ds-text-secondary)] mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Bullets */}
                                    <ul className="space-y-2.5 mb-8 flex-1">
                                        {project.bullets.map((bullet, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-sm text-[var(--ds-text-secondary)]"
                                            >
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--ds-accent)] shrink-0 shadow-[0_0_8px_var(--ds-accent)]" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap gap-2 pt-5 border-t border-[var(--ds-border)]">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs font-semibold text-[var(--ds-text-primary)] bg-[var(--ds-background)] border border-[var(--ds-border)] px-3 py-1.5 rounded-lg"
                                            >
                                                {tech}
                                            </span>
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
