"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ScrambleText } from "@/components/ui/ScrambleText";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    delay?: number;
}

export function SectionHeading({ title, subtitle, delay = 0 }: SectionHeadingProps) {
    return (
        <div className="mb-12 md:mb-16">
            <BlurFade delay={delay} inView>
                <h2 className="text-3xl md:text-5xl tracking-tighter text-[var(--ds-text-primary)] mb-4">
                    <ScrambleText text={title} />
                </h2>
            </BlurFade>
            {subtitle && (
                <BlurFade delay={0.2} inView>
                    <p className="mt-3 max-w-xl text-base">{subtitle}</p>
                </BlurFade>
            )}
        </div>
    );
}
