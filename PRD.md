# Product Requirements Document

## Product Overview
Product: Anbarasu — Full Stack Developer Portfolio
One-line: A premium, animation-rich personal portfolio proving full-stack + AI engineering craft, built to convert recruiters and clients into interview calls or project inquiries.
Vision: A site that reads as polished as a funded startup's marketing page — fast, distinctive, and technically impressive enough that the frontend itself is part of the pitch.

## Problem
Anbu has been applying for fresher/junior roles for 6+ months. His existing portfolio (anbarasu-fullstack.vercel.app) is a flat, template-like page that doesn't differentiate him from hundreds of similar full-stack grads, and doesn't demonstrate the animation/frontend craft he actually has.

## Goal
A single-page (or few-section) portfolio where a recruiter or client forms a positive impression and clicks through to GitHub, LinkedIn, or email within the first 30 seconds of landing.

## Target Users
- Recruiters/hiring managers screening fresher-to-1yr full-stack developers
- Engineering managers evaluating for React/Next.js + AI/GenAI roles
- Freelance/SaaS clients discovering him via GitHub or LinkedIn

## Core Features (v1)
- Hero: name, role, animated/3D visual, CTAs (Resume PDF / GitHub / LinkedIn / Email)
- About / profile summary
- Skills, grouped by category: Languages, Frontend, Backend, Database, Real-Time, AI/ML, Tools
- Experience timeline: Software Developer @ Spiritminetech (Oct 2025–Present), Full Stack Dev Intern @ Cavin Infotech (Jul–Sep 2024)
- Projects, each with live link + repo link:
  - BreakPoint (VS Code Marketplace extension)
  - AI Codebase Assistant (FastAPI + Next.js)
  - AI Meeting Assistant (Next.js real-time transcription)
- Certifications: Full Stack Generative & Agentic AI (Udemy), SQL Fundamentals (HackerRank)
- Contact section: email (anbuarasu2017@gmail.com), phone, GitHub, LinkedIn
- Resume PDF download

## User Flows
1. Land on hero → scroll Skills → Experience → Projects → click a project or download resume
2. Land on hero → jump straight to Contact → email or LinkedIn
3. Recruiter scans only Skills, then jumps to Projects

## Requirements
- Functional: all external links (GitHub, LinkedIn, live project URLs) open in new tab, verified working
- UX: first contentful paint under ~1.5s on 4G; animations never block scroll or input
- Performance: Lighthouse performance score 90+; images optimized and lazy-loaded
- Platform: fully responsive (mobile/tablet/desktop), deployed on Vercel

## Success Metrics
- Resume downloads / contact clicks
- Scroll depth and time-on-page
- Lighthouse performance & accessibility scores

## Out of Scope (v1)
- Blog / CMS
- Theme toggle (pick one dark theme, ship it)
- Multi-language support
- Any admin/editing dashboard
