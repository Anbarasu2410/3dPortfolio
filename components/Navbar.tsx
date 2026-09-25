"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/resume";
import { Magnetic } from "@/components/ui/Magnetic";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Determine active section
            const sections = navLinks.map((link) => link.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (href: string) => {
        setIsOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav" : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-[var(--section-max-width)] px-6 flex items-center justify-between h-16">
                {/* Logo / Name */}
                <Magnetic intensity={0.1}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-lg font-semibold text-[var(--ds-text-primary)] hover:text-[var(--ds-accent)] transition-colors inline-block"
                    >
                        {profile.name}
                        <span className="text-[var(--ds-accent)]">.</span>
                    </a>
                </Magnetic>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <li key={link.href}>
                                <button
                                    onClick={() => handleClick(link.href)}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${isActive
                                        ? "text-[var(--ds-text-primary)]"
                                        : "text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)]"
                                        }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 rounded-lg bg-[var(--ds-accent-soft)]"
                                            style={{ zIndex: -1 }}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            </li>
                        );
                    })}
                    <li>
                        <Magnetic intensity={0.1}>
                            <a
                                href="/Full_Stack_Developer.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-[var(--ds-accent)] text-white hover:bg-[var(--ds-accent)]/90 transition-colors"
                            >
                                Resume
                            </a>
                        </Magnetic>
                    </li>
                </ul>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-[var(--ds-text-primary)]"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden glass-nav overflow-hidden"
                    >
                        <ul className="flex flex-col gap-1 px-6 pb-6">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <button
                                        onClick={() => handleClick(link.href)}
                                        className="w-full text-left py-3 text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] transition-colors text-base font-medium"
                                    >
                                        {link.label}
                                    </button>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                            >
                                <a
                                    href="/Full_Stack_Developer.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--ds-accent)] text-white"
                                >
                                    Resume
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
