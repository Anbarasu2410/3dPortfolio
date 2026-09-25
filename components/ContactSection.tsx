"use client";

import { profile } from "@/data/resume";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/SectionHeading";
import { BlurFade } from "@/components/ui/blur-fade";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contactLinks = [
    {
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: Mail,
        isSvg: false,
    },
    {
        label: "Phone",
        value: profile.phone,
        href: `tel:${profile.phone}`,
        icon: Phone,
        isSvg: false,
    },
    {
        label: "GitHub",
        value: "Anbarasu2410",
        href: profile.github,
        icon: GithubIcon,
        external: true,
        isSvg: true,
    },
    {
        label: "LinkedIn",
        value: "anbarasu24",
        href: profile.linkedin,
        icon: LinkedinIcon,
        external: true,
        isSvg: true,
    },
];

export function ContactSection() {
    return (
        <SectionWrapper id="contact">
            <SectionHeading
                title="Get in Touch"
                subtitle="Open to full-stack, React/Next.js, and AI engineering roles — or freelance projects."
            />

            <div className="grid gap-4 sm:grid-cols-2">
                {contactLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                        <BlurFade key={link.label} delay={0.15 + idx * 0.08} inView>
                            <TiltCard>
                                <motion.a
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className="flex items-center w-full h-full gap-4 rounded-2xl border border-[var(--ds-border)] bg-[var(--ds-surface)]/80 backdrop-blur-sm p-6 hover:border-[var(--ds-accent)]/50 hover:shadow-[0_8px_30px_rgba(79,70,229,0.1)] transition-all group"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--ds-accent-soft)] group-hover:bg-[var(--ds-accent)]/20 transition-colors shrink-0">
                                        <Icon
                                            size={22}
                                            className="text-[var(--ds-accent)]"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold tracking-wider text-[var(--ds-text-secondary)] mb-1 uppercase">
                                            {link.label}
                                        </p>
                                        <p className="text-sm font-semibold text-[var(--ds-text-primary)]">
                                            {link.value}
                                        </p>
                                    </div>
                                </motion.a>
                            </TiltCard>
                        </BlurFade>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
