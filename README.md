# Wai Lin Htet — Portfolio

Personal portfolio site. Vite + React + Tailwind CSS + Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Stack

- **Vite + React 18** — bundler & UI
- **Tailwind CSS 3** — styling
- **Framer Motion** — animations
- **Lucide React** — icons

## Edit content

All content lives in `src/data/`:

- `profile.js` — name, tagline, bio, stats, socials
- `skills.js` — skill groups
- `experience.js` — work history
- `education.js` — degrees
- `projects.js` — featured projects (Play Store / App Store / Web links)
- `internalProjects.js` — internal-only apps

## Deploy

The site is a pure static build. Deploy `dist/` to Netlify, Vercel, or any static host.
