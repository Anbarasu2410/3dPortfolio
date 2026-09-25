# Design System

## Direction
Dark, technical, premium — signals "this person ships polished frontend work," not a template. Confident negative space, one accent color used sparingly, motion that reads as intentional, not decorative.

## Colors
--background: #0A0A0B
--surface: #131316
--text-primary: #F5F5F7
--text-secondary: #A1A1AA
--accent: #6366F1
--accent-soft: rgba(99, 102, 241, 0.15)
--success: #22C55E
--error: #EF4444
--border: rgba(255, 255, 255, 0.08)

(Swap --accent if indigo doesn't feel like "you" — this is the one placeholder decision in this file. Everything else here is fixed.)

## Typography
Font: Inter (or Geist, if using the Next.js default)
H1: 56–72px / Bold — hero name/headline only
H2: 36–40px / Semibold — section titles
H3: 20–24px / Semibold — card/project titles
Body: 16px / Regular, 1.6 line height
Small/meta: 13–14px / Medium, text-secondary

## Spacing
8px base scale: 8, 16, 24, 32, 48, 64, 96
Section vertical padding: 96px desktop / 48px mobile

## Radius & Shadows
Radius: 12px cards, 8px buttons/inputs, 999px pills/badges
Shadow: soft, low-opacity, hover states only — no heavy drop shadows anywhere

## Components
- Primary button (accent fill), Secondary (outline), Ghost (text-only)
- Project card: preview image, title, tech tags, live link + repo link
- Skill badge/pill (grouped by category)
- Section wrapper: consistent max-width 1200px, consistent padding
- Nav bar: sticky, glass effect — the only place glass is allowed by default

## States
Every interactive element needs hover, focus, active, and disabled defined — not just hover.

## Responsive Rules
Mobile: < 640px — single column, nav collapses to hamburger/drawer
Tablet: 640–1024px
Desktop: > 1024px — multi-column skills/projects grid

## Accessibility
Minimum 4.5:1 contrast for body text
All interactive elements keyboard-navigable
Respect prefers-reduced-motion — disable non-essential motion when set
