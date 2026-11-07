# Vaishnavi Akki — Portfolio

Personal portfolio for **Vaishnavi Akki**, Senior Cloud & DevOps Engineer (Azure Platform · SRE · Cloud Security).
Built as a static React + Vite app, designed to deploy to **GitHub Pages**.

> Live target: `https://vaishnavia4.github.io/Vaishnavi-Portfolio/`

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** (shadcn-style project structure — `components/ui/`, `lib/utils`, `@/*` aliases)
- **Framer Motion** for entrance + scroll animations
- **@tsparticles/react + slim** for the hero `SparklesCore` background
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:5173/Vaishnavi-Portfolio/> (base path matches the GitHub Pages project URL).

## Add your photo

Drop your portrait at:

```
public/profile.jpg
```

It will appear in the hero. If the file is missing the hero gracefully falls back to a monogram backdrop.

## Editing content

All copy is centralised in [`src/data/portfolio.ts`](src/data/portfolio.ts). Everything in the site is rendered from that file:

- `profile` — name, role, email, links, photo path, summary
- `topSkills` — chips shown in the hero
- `skillGroups` — Skills section cards
- `experience` — Experience timeline
- `education`, `honors`, `languages` — About card content
- `certifications` — Certifications grid
- `projects` — Projects grid (currently scoped to expertise domains from the resume; replace with specific named projects whenever you want)

## Deploy to GitHub Pages

The repo is configured for **GitHub Actions deployment** to the project at `vaishnavia4/Vaishnavi-Portfolio`.

### One-time setup

1. Create the repo `Vaishnavi-Portfolio` under your `vaishnavia4` account.
2. Push this project to the `main` branch.
3. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Auto-deploy

On every push to `main`, `.github/workflows/deploy.yml` will:

1. Install deps with `npm ci`
2. Run `npm run build`
3. Publish the `dist/` folder to GitHub Pages

### Manual fallback (gh-pages branch)

If you prefer pushing the built site to a `gh-pages` branch instead:

```bash
npm run deploy
```

This uses the `gh-pages` package to publish `dist/` to the `gh-pages` branch — then set **Settings → Pages → Source: Deploy from a branch → gh-pages /(root)**.

## Project structure

```
.
├── index.html
├── public/
│   ├── favicon.svg
│   ├── 404.html              # SPA fallback for GitHub Pages
│   └── profile.jpg           # ← add your photo here
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── lib/
│   │   └── utils.ts          # cn() helper (shadcn convention)
│   ├── data/
│   │   └── portfolio.ts      # all site content
│   └── components/
│       ├── ui/
│       │   └── sparkles.tsx  # SparklesCore (tsparticles)
│       ├── Navbar.tsx
│       ├── Section.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Certifications.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig*.json
```

### Why `components/ui/`?

This is the **shadcn/ui convention**: primitives and reusable UI atoms live in `src/components/ui/`, while page-level composite components live in `src/components/`. Keeping them separated means:

- Atoms are clearly reusable and not coupled to page layout.
- The `@/components/ui/...` import path matches code you copy from shadcn-style component libraries (like the `SparklesCore` snippet) so it works without rewriting imports.

### Path alias

`@/` resolves to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).

## Notes on content

All facts (employers, dates, certifications, languages, education) come directly from the resume PDF. The Projects section currently lists the **focus areas** called out in the resume summary (cloud infra, data center migration, CI/CD, containers, IaC, Azure data services) — swap them out with specific project names + outcomes whenever you're ready.
