#  Đình Huy — Portfolio Landing Page

A single-page portfolio site built with React and Vite. Sections: Sidebar (collapsible nav), Hero, About Me, Experience, Skills, Projects, Interests, and an End section.

## Tech stack

- React 19 (plain JSX, no TypeScript)
- Vite 8
- Oxlint for linting
- react-icons

## Run locally

```bash
npm install
npm run dev
```

Opens a dev server (default http://localhost:5173) with hot module reload.

## Build

```bash
npm run build
```

Outputs a production build to `dist/`. Preview it locally with `npm run preview`.

## Deploy

This project deploys as a static SPA to Netlify.

- **Via Netlify's GitHub integration (recommended):** connect this repo in the Netlify dashboard. `netlify.toml` at the project root already configures the build command (`npm run build`) and publish directory (`dist`), plus an SPA redirect so client-side routes don't 404.
- **Manually with netlify-cli:**
  ```bash
  npm install -D netlify-cli
  npx netlify login
  npx netlify deploy --prod
  ```

See `CLAUDE.md` for more details on project structure and conventions.
