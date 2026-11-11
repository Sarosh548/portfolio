# Sarosh Qaiser — AI Engineer Portfolio

A responsive spatial UI portfolio with a light, layered visual system, translucent floating surfaces, subtle 3D depth, and scroll-triggered motion. Built with React 19 and Vite. It highlights AI engineering work across agentic systems, RAG, computer vision, forecasting, and full-stack platforms.

## Visual direction

- Soft, light ambient canvas with depth from glass-like panels and layered surfaces.
- Floating capsule navigation, overlapping hero metrics, and tactile project/skill cards.
- Restrained pointer tilt and hover lift on desktop, with touch-friendly mobile layouts.
- Scroll reveal and case-study entrance transitions respect reduced-motion preferences.

## Featured work

- **NOVA — AI Personal Assistant:** voice-enabled conversation, persistent memory, LangGraph workflows, and permission-aware integrations.
- **Amaan CIRO:** an 8-agent crisis intelligence and response system built with LangGraph.
- **Waste-Management RAG Chatbot:** hybrid retrieval across six engineering textbooks, with citation-backed answers.
- **SWOS:** a six-module civic waste-management platform combining computer vision, forecasting, and routing.

## Stack

- React 19 + Vite + React Router
- Plain CSS with spatial design tokens
- Static frontend; no server-side secrets required

## Local development

```bash
npm ci
npm run dev
npm run build
npm run lint
```

## Vercel deployment

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm ci`
- `vercel.json` includes an SPA rewrite so direct case-study URLs resolve correctly.

The CV download is served from `public/Sarosh-Qaiser-AI-Engineer-CV.docx` until the verified PDF artifact is available.

## Sharing preview

The public site includes a 1200×630 Open Graph/Twitter sharing image at `public/og-image.svg`.
