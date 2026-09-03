# Rounak Saha — Portfolio

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/page.tsx` — assembles the sections
- `app/layout.tsx` — fonts (Space Grotesk / Inter / JetBrains Mono) and metadata
- `app/globals.css` — design tokens, gradient text, hero and pulse-divider animations
- `components/` — Nav, Hero, Terminal (typing effect), PulseDivider, About, Experience,
  Projects, Skills, Credentials, ContactFooter

## Before you deploy

- Swap the placeholder abstract visuals in `components/Projects.tsx` for real
  screenshots or short screen recordings of each project once you have them.
- Add a `public/resume.pdf` and link it from the hero or contact section if you want
  a direct download.
- Double check the email/phone/social links in `Hero.tsx` and `ContactFooter.tsx`.
- Deploy on Vercel (same as your other projects): push to GitHub, then import the repo
  at vercel.com — no config needed.

## Editing content

Every section's copy and data lives at the top of its component file
(e.g. `PROJECTS` in `components/Projects.tsx`, `GROUPS` in `components/Skills.tsx`) —
edit the arrays there rather than hunting through JSX.
