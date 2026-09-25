import { profile } from "@/data/resume";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--ds-border)] py-8">
            <div className="section-container !py-0 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--ds-text-secondary)]">
                <p>
                    © {year} {profile.name}. Built with Next.js & TypeScript.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--ds-text-primary)] transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--ds-text-primary)] transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={`mailto:${profile.email}`}
                        className="hover:text-[var(--ds-text-primary)] transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
