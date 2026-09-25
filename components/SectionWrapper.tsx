interface SectionWrapperProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
    return (
        <section id={id} className={`section-container ${className}`}>
            {children}
        </section>
    );
}
