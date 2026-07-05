# CLAUDE.md

## What this is

A React portfolio landing page for Đình Huy, built with Vite. Plain JSX (no TypeScript). Single-page layout: fixed Sidebar nav + Hero, About Me, Experience, Skills, Projects, Interests, End sections.

## Run it

```bash
npm install
npm run dev       # dev server with HMR
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

## Structure

- `src/main.jsx` — entry point, mounts `App`.
- `src/App.jsx` — top-level layout, composes Sidebar + sections.
- `src/components/` — one component (+ matching `.css`) per feature: `Sidebar.jsx`, `Hero.jsx`, `FloatingIcons.jsx`, `Stars.jsx`, `AboutMe.jsx`, `Experience.jsx`, `Skills.jsx`, `Projects.jsx`, `Interests.jsx`, `IconCard.jsx` (shared icon-card used by Skills/Interests), `EndSection.jsx`, `BackToTop.jsx`, `Section.jsx` (shared section wrapper).
- `src/data/portfolio.js` — all copy/content (bio text, skills list, experience entries, etc.) lives here as plain JS objects/arrays, kept separate from JSX so content edits don't require touching component logic.
- `public/` — static assets served as-is (`avatar.jpg`, `cat.gif`, `favicon.svg`).
- `src/index.css` — global styles + shared CSS custom properties (colors, sidebar width); component-specific styles live next to each component.

## Deploy

Static SPA hosted on Netlify. `netlify.toml` at the repo root sets:

```
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Two ways to deploy:

1. **Netlify GitHub integration** — connect the repo in the Netlify dashboard; it reads `netlify.toml` automatically on every push.
2. **netlify-cli (manual)** — already added as a devDependency:
   ```bash
   npx netlify login
   npx netlify deploy --prod
   ```
   Login requires interactive browser auth, so it must be run locally by whoever has Netlify access — it is not run as part of this repo's automation.
