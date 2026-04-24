# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Two independent React + TypeScript + Vite front-end projects, each in its own subdirectory:

- **`parte-1/`** — Positivus marketing agency landing page, faithfully reproducing a Figma prototype.
- **`parte-2/`** — Hero section built from scratch: dark glassmorphism UI with animated background and interactive mouse parallax.

There are no shared packages or workspaces between them.

## Commands

Run from within the respective subdirectory (`cd parte-1` or `cd parte-2`):

```bash
npm run dev       # Vite dev server
npm run build     # tsc -b && vite build
npm run lint      # ESLint
npm run preview   # Preview production build
```

No test suite exists in either project.

## Architecture

### parte-1

- **Stack**: React 19, TypeScript, Tailwind CSS v3, Vite 6.
- **Layout**: Fixed `1440px` centered container. Not responsive.
- **Font**: `Space Grotesk` (via Google Fonts in `index.html`).
- **Content/copy**: All UI text lives in `src/content.ts` as a single `CONTENT` object. Update text there, not inside components.
- **Assets**: All image/icon URLs (Figma MCP asset URLs + local `/public` SVGs) are centralized in `src/assets.ts` as an `ASSETS` object.
- **Components**: `src/components/sections/` — one file per page section; `src/components/ui/` — reusable primitives (`SectionHeading`, `SectionLabel`, `PlusMinusIcon`, `PositivusLogo`).
- **Brand colors** (Tailwind tokens): `brand.dark` (#191a23), `brand.green` (#b9ff66), `brand.gray` (#f3f3f3).

### parte-2

- **Stack**: React 19, TypeScript, Tailwind CSS v4 (configured via `@import "tailwindcss"` in CSS, no `tailwind.config.js`), Vite 8.
- **Theme**: Dark (`#000` background), accent color `#85E8EA` (teal). Design tokens are CSS variables defined in `src/index.css` under `:root`.
- **Fonts**: Inter (sans) and JetBrains Mono — both self-hosted as variable font `.ttf` files in `/public`.
- **Mouse parallax**: `App.tsx` tracks mouse position via `requestAnimationFrame` and passes a `{x, y}` offset to `<Background>` for parallax effects.
- **GlassCard**: Reusable glassmorphism card in `src/components/GlassCard.tsx` with `default | accent | dark` variants. Uses inline `CSSProperties` (not Tailwind) for backdrop-filter.
- **Constants**: `src/constants.ts` exports the accent color and a helper `accentRgba(opacity)`.
- **Animations**: Keyframes and utility classes (`terminal-line`, `cursor-blink`, `dot-pulse`, `btn-primary`) are defined in `src/index.css` and applied via `className`.
- **Reduced motion**: `src/index.css` includes a `prefers-reduced-motion` block that disables all animations.
