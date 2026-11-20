# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
yarn dev        # Start development server on localhost:3000
yarn build      # Create production build
yarn start      # Start production server
yarn lint       # Run ESLint (Airbnb + Next.js + perfectionist rules)
```

Use `yarn dev -H [IP address]` to expose the dev server on a specific IP.

## Architecture Overview

This is a Next.js 13 portfolio website using JavaScript (JSX), Material-UI, and Emotion for styling.

### Directory Structure

- `/pages` - Next.js page routes (_app.js, _document.js, index.js, work.js)
- `/src/components/shared` - Reusable components (Page, Card, Modal, Image, SEO, Nav)
- `/src/pages` - Page-level components with their constants (home/, work/)
- `/src/utils` - Utility exports (icons, links, routes)
- `/styles` - Global SCSS and MUI theme configuration
- `/utility` - Server-side utilities (Emotion cache for SSR)
- `/public` - Static assets (images, logos, particle config)

### Key Patterns

**Component Wrapper**: All pages use the `<Page>` component which provides layout, SEO, and consistent structure.

**Styling**: Hybrid approach using Emotion CSS-in-JS (primary) and SCSS modules. MUI ThemeProvider wraps the app with a custom dark theme.

**Data**: Static data stored in constants.js files within page directories (EXPERIENCES, PROJECTS arrays). No backend API.

**Responsive Modal**: The Modal component switches between MUI Modal (desktop) and Drawer (mobile) based on breakpoints.

**SSR**: Emotion cache configured in _document.js for server-side CSS extraction.

### Path Aliases

`@/*` maps to the project root (configured in jsconfig.json).

## Workflow

- Work is tracked as GitHub issues in `rvarela11/portfolio` on one of `rvarela11`'s GitHub project boards; the board changes from effort to effort, and `/start-ticket` finds the right one. Take one ticket at a time, starting it with `/start-ticket <issue#>`.
- Before each ticket, pull `main` and branch as `<issue#>-<short-description>` (e.g. `6-pin-nav-to-top`).
- Never push to `main`. Every change lands through a PR, with `Closes #<issue#>` in the body for ticket work.

## ESLint Configuration

ESLint 9 flat config in `eslint.config.mjs`: Airbnb's original rules (via `eslint-config-airbnb-extended/legacy`), Next.js core-web-vitals, and `eslint-plugin-perfectionist`. `yarn lint` runs `eslint .`; `yarn lint --fix` applies sorting.

- perfectionist sorts imports (within each `// @vendors`, `// @components`, ... section), named imports, JSX props and object keys alphabetically, with two exceptions: `react` is always the first import, and `key` is always the first JSX prop
- `typescript` is a dev dependency only because `eslint-config-airbnb-extended` loads it

Notable relaxed rules:
- JSX allowed in .js files
- Max line length: 180 characters (comments and strings exempt, so keep long copy on one line rather than splitting it with `+`)
- Console statements allowed
- Prop spreading allowed
