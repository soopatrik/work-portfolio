# Patrik Rehák — Frontend & AI Systems Engineer

Modern, fast, and accessible personal portfolio showcasing my work in frontend performance, AI systems, and founding‑engineer partnerships.

- **Live site**: https://patrikrehak.dev
- **Tech**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router, React Query, Framer Motion, Lucide

## Features

- **Performance‑first UI** with responsive design and smooth micro‑interactions
- **Light/Dark theme** with a toggle (default: light)
- **Shipped sections**:
  - Hero, Social Proof, AI Process & Technology, Impact, Case Studies, Services, About, Contact
- **Accessible components** using shadcn/ui and sensible focus states
- **Typed codebase** with utility helpers and reusable UI primitives

## Pages

- `/` — Home
- `/case-studies` — Selected case studies and outcomes
- `/services` — Offerings (frontend performance, AI systems, founding‑engineer)
- `/about` — Background and approach
- `/contact` — Contact form and quick contact methods

## Stack

- **Frontend**: React + TypeScript (Vite)
- **Styling**: Tailwind CSS + shadcn/ui
- **State/Data**: React Query
- **Routing**: React Router
- **Animation**: Framer Motion
- **Icons**: Lucide

## Getting started

```sh
# 1) Install dependencies
npm i

# 2) Start the dev server
npm run dev

# 3) Build for production
npm run build

# 4) Preview the production build
npm run preview
```

## Project structure

```
src/
  assets/                 # Static assets
  components/             # Reusable components (layout, sections, ui/*)
  hooks/                  # Custom hooks
  lib/                    # Utilities (e.g., cn, formatting)
  pages/                  # Route components
  App.tsx                 # App providers, routing, theming
  main.tsx                # App bootstrap
```

## Theming

- Powered by `next-themes`-style provider with `class` attribute strategy.
- Default theme is **light**; toggle switches between light/dark.
- Tailwind configured with `darkMode: "class"` and CSS variables for color tokens.

## Development notes

- Animations use small, composable motion primitives for perceived performance.
- Reusable UI is built on shadcn/ui components with Tailwind tokens.
- Forms include accessible labels, focus rings, and keyboard navigation.

## Deployment

Any static host works:

- **Vercel/Netlify**: build command `npm run build`, output `dist/`
- **GitHub Pages**: build then serve `dist/`

## Contact

- **Email**: 1patrikrehak@gmail.com
- **LinkedIn**: https://linkedin.com/in/patrik-rehák-ba4b6a26b
