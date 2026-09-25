# Animation System

## Principles
- Premium, restrained, intentional
- No animation without purpose — every motion should support a specific moment (hero entrance, project reveal), not decorate for its own sake
- Maintain 60fps
- Prefer `transform` and `opacity` only; avoid animating layout properties

## Micro Interactions — use Motion
- Button hover / tap
- Project card lift on hover
- Nav dropdown / mobile drawer
- Modal / dialog open-close (if a project detail modal is added)

## Scroll & Sequences — use GSAP + ScrollTrigger
- Hero entrance timeline (name, role, CTA stagger in)
- Text reveal on section headings
- Skills/experience section scroll reveal, subtle stagger
- Optional: pinned section if the Projects section becomes a horizontal scroll showcase

## 3D — use Three.js / React Three Fiber, sparingly
- One hero visual only (e.g. floating abstract shape, particle field, or subtle depth layer behind the name)
- Do not render the whole hero or any dashboard-like section in Three.js — CSS/SVG handles everything else

## Smooth Scroll — Lenis
- Applied globally to the page
- Disable or reduce on any future form-heavy section (contact form) if added later

## Glass Effects
- Nav bar only (sticky, backdrop-blur)
- Never applied to every card — glass on everything reads as a template, not a design choice

## Hover Rules
- Max scale: 1.02
- Max lift: 6px
- No excessive glow or oversized shadows

## Scroll Rules
- Reveal once per element (no re-triggering on scroll up/down)
- Subtle stagger between grouped items (skills, projects)
- No continuous bouncing/looping motion anywhere on the page
- Simplify or reduce animation complexity on mobile — no pinned/horizontal scroll on small screens

## Navigation
- Subtle active-section indicator
- Animated mobile drawer, 180–300ms transitions
- No oversized or bouncy nav motion

## Accessibility
- Respect `prefers-reduced-motion`: disable GSAP scroll animations and Three.js entrance motion, keep only essential state changes (hover color, focus ring)
