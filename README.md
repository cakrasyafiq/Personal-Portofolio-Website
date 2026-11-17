# Cakra Syafiq — Portfolio Website

Personal portfolio website for **Cakra Syafiq**, built with **Next.js (App Router, TypeScript)**, **Tailwind CSS v4**, **Framer Motion**, and **Phosphor Icons**, designed for deployment on **Vercel**.

## Features

- **Editorial Dark-Mode Aesthetic:** Built around Deep Abyssal Navy-Teal (`#001822`), Vibrant Emerald Teal (`#02B08D`), Electric Amber Gold (`#FFBC03`), Warm Parchment Cream (`#FBF4DA`), and Obsidian Canvas (`#0B1014`) with a subtle static film-grain overlay.
- **Custom Typography:** Pairs condensed `Humane` display headings with `Plus Jakarta Sans` UI/body copy and `Satisfy` script accents.
- **Complete Portfolio Sections:**
  - **Hero:** Layered portrait cutout over an emerald-to-abyssal mesh gradient with floating frosted navigation.
  - **About Me:** Career focus pills, biography, education timeline, and core competencies.
  - **Experience & Honors:** Work internship, organizational leadership, and competitive awards.
  - **Tools:** Interactive domain filter tabs across Software Development, AI & Machine Learning, and Creative Media.
  - **Projects:** Filterable project showcase with full-preview detail modal (`Escape` and click-outside support).
  - **Contacts:** Direct email copy-to-clipboard action and links to LinkedIn, Instagram, Phone/WhatsApp, and GitHub.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animations:** Framer Motion
- **Icons:** `@phosphor-icons/react`
- **Deployment:** Vercel

## Project Structure

```text
Porto-Website/
├── Assets/                  # Original source images
├── References/              # Visual design references
├── public/
│   └── images/              # Web-served portfolio portraits & project previews
├── src/
│   ├── app/
│   │   ├── fonts/           # Local Humane display font files
│   │   ├── globals.css      # Design tokens, gradients, and grain utilities
│   │   ├── layout.tsx       # Font loading and page metadata
│   │   └── page.tsx         # Main landing page
│   ├── components/          # Modular section components
│   └── data/
│       └── portfolio.ts     # Structured portfolio content and links
├── DESIGN.md                # Visual design system specification
├── Portofolio.md            # Source portfolio copy
├── next.config.ts
└── package.json
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Lint and build for production:**
   ```bash
   npm run lint
   npm run build
   ```

## Updating Content

All portfolio copy, experience entries, tools, project items, and contact links live in [`src/data/portfolio.ts`](src/data/portfolio.ts). Images are stored in [`public/images/`](public/images/).

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/).
3. Keep the default **Next.js** framework preset (`npm run build`) and deploy.
