# Sarosh Qaiser — Portfolio

A React + Vite portfolio site. Dark, technical, content-driven design built around three
featured AI/ML projects (Amaan CIRO, the waste-management RAG chatbot, and SWOS).

## Stack

- React 19 + Vite
- React Router (for the `/projects/:slug` case-study pages)
- Plain CSS with custom properties (no CSS framework) — see `src/styles/tokens.css`
- No backend — the contact form opens a pre-filled `mailto:` link

## Project structure

```
src/
  data/content.js        <- single source of truth for ALL content (edit this to update the site)
  styles/tokens.css      <- design tokens (colors, type, spacing)
  components/            <- Navbar, Footer
  sections/               <- Hero, About, Skills, Projects, Experience, Education, Services, Contact
  pages/
    Home.jsx              <- assembles all sections
    CaseStudy.jsx          <- project detail page, reads from data/content.js by slug
```

## Updating content

**Everything** -- your name, summary, projects, experience, skills, links -- lives in
`src/data/content.js`. Edit that one file and every page updates automatically. No need to
touch any component.

To add a new project: add an object to the `projects` array in `content.js` following the
existing shape (problem/solution/architecture/features/challenges/etc). It will
automatically appear in the Projects section and get its own case-study page at
`/projects/<slug>`.

## Setup

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

No environment variables are required -- this is a fully static site.

## Deployment

The build output in `dist/` is fully static and can be deployed to any static host:

- **Vercel**: `vercel deploy` (auto-detects Vite) or connect the GitHub repo in the dashboard
- **Netlify**: drag-and-drop the `dist/` folder, or connect the repo (build command `npm run build`, publish directory `dist`)
- **GitHub Pages**: build, then push `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package)
- **Cloudflare Pages**: connect the repo, build command `npm run build`, output directory `dist`

Since routing uses React Router, make sure your host redirects all unmatched paths to
`index.html` (a "SPA fallback" / rewrite rule) so `/projects/swos` works on a hard refresh --
Vercel and Netlify do this automatically for Vite projects; GitHub Pages needs a small
workaround (a `404.html` that redirects to `index.html`).

## Known placeholders -- action needed before full launch

Search `content.js` for `TODO` comments. As of this build:

1. **Resume PDF** -- `profile.resumeUrl` is `null`. The hero button currently says "Request my CV"
   instead of "Download CV" until a hosted PDF link is added.
2. **Waste-management chatbot** -- no live demo link (`links.demo: null` for that project).
3. **GitHub repo hygiene** -- flagged separately, not a content placeholder:
   - `Sarosh548/Waste-management-chatbot` has no README and 1 commit. Worth writing a proper
     README before recruiters click through, since the CV describes this as the most
     technically detailed project.
   - `Smart-Waste-Operating-System`'s README says "YOLO26" in a few places -- confirmed the
     model is actually YOLOv8, so those mentions should be corrected in the repo.
