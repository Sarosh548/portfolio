# Sarosh Qaiser — AI Engineer Portfolio

A responsive, cinematic dark portfolio with scroll reveals, 3D card interactions, and an emerald glow system, built with React 19 and Vite. It highlights AI engineering work across agentic systems, RAG, computer vision, forecasting, and full-stack platforms.

## Featured work

- **NOVA — AI Personal Assistant:** voice-enabled conversation, persistent memory, LangGraph workflows, and permission-aware integrations.
- **Amaan CIRO:** an 8-agent crisis intelligence and response system built with LangGraph.
- **Waste-Management RAG Chatbot:** hybrid retrieval across six engineering textbooks, with citation-backed answers.
- **SWOS:** a six-module civic waste-management platform combining computer vision, forecasting, and routing.

## Stack

- React 19 + Vite + React Router
- Plain CSS with custom design tokens
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

The CV download is served from `public/Sarosh-Qaiser-AI-Engineer-CV.docx`.
