# EVWACH International Homepage

Responsive homepage for EVWACH International, built from a company profile into a clearer public-facing landing page.

## What it is

A single-page homepage that introduces EVWACH, outlines its focus areas, and gives visitors a direct path to get involved.

## Why it was built

The source brief read more like an organization profile than a homepage. This implementation turns it into a cleaner narrative with stronger hierarchy, clearer CTAs, and a calmer editorial layout.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4 base layer with custom CSS in `app/globals.css`
- `next/image` and `next/font/google`

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Production run

```bash
npm run start
```

## Key implementation choices

- All homepage content lives in `app/page.tsx` so the page is easy to review in one place.
- Shared navigation behavior lives in `app/site-header.tsx`.
- The visual system is defined in `app/globals.css` with CSS variables, spacing scales, and responsive section rules.
- Local photography and the logo are served from `public/` and rendered with `next/image`.
- Typography uses `Inter` for body copy and `Lora` for headings.

## Responsive and accessibility notes

- The layout shifts from a two-column hero to stacked sections on smaller screens.
- The mobile nav uses a real button with `aria-expanded` and `aria-controls`.
- A skip link is present for keyboard users.
- Sections use semantic headings and landmarks instead of generic div-only structure.

## Live demo

Not deployed yet.

## Folder overview

- `app/` page, layout, header, and global styles
- `public/` photography and logo assets
- `package.json` project scripts and dependencies
- `next.config.ts` and `eslint.config.mjs` repo configuration
