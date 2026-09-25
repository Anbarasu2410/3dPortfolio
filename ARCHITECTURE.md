# Architecture

## System Overview
User
  ↓
Next.js 14 (App Router) frontend — static, no backend in v1
  ↓
Deployed on Vercel

External Services:
- Vercel → hosting/deployment
- (v2, optional) Resend → contact form email delivery
- (v2, optional) Vercel Analytics or PostHog → traffic/engagement tracking

## Tech Stack
- Next.js 14 (App Router), TypeScript
- Tailwind CSS, shadcn/ui
- Motion — micro-interactions (hover, tap, cards, dialogs)
- GSAP + ScrollTrigger — scroll choreography, hero timeline
- Three.js + @react-three/fiber + @react-three/drei — one hero 3D element, used sparingly
- Lenis — smooth scroll
- Lucide — icons
- Deployed on Vercel, connected to GitHub for auto-deploy

## Project Structure
/app                    # routes (likely a single page with anchor sections)
/components             # HeroSection, SkillsSection, ExperienceSection, ProjectsSection, ContactSection
/components/ui          # shadcn components
/components/magicui     # Magic UI components
/lib                    # animation helpers, constants, utils
/data                   # resume.ts — single source of truth for content
/public                 # resume PDF, images, favicon

## Data Flow
1. All content (skills, experience, projects, certifications) lives in /data/resume.ts as typed objects
2. Components import from /data/resume.ts — no content hardcoded inside JSX
3. Static build via Next.js, deployed to Vercel on push to main

## Deployment
Vercel, connected to the GitHub repo, auto-deploy on push to main

## Scalability Notes
Not a concern for v1 — static portfolio, low traffic. If a contact form or blog is added later, add a minimal API route + email service rather than a full backend.
