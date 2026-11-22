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

Verify changes with `yarn lint && yarn build`. There are no tests and no CI.

## Architecture Overview

This is a Next.js 16 (Pages Router, Turbopack) and React 19 portfolio website using JavaScript (JSX), Mantine components, and SCSS for styling. Requires Node 20.9+ (`engines` in package.json).

### Directory Structure

- `/pages` - Next.js page routes (_app.js, _document.js, index.js, work.js)
- `/src/components/shared` - Reusable components (Page, HudFrame, SkillChips, Modal, Image, SEO, Nav)
- `/src/hooks` - Hooks shared across components (`usePrefersReducedMotion`)
- `/src/pages` - Page-level components with their constants (home/, work/)
- `/src/utils` - Utility exports (icons, links, routes)
- `/styles` - Global SCSS, type styles (`typography.scss`), breakpoints, and the Mantine theme (`theme/mantine.js`)
- `/public` - Static assets (images, logos, particle config)

### Key Patterns

**Component Wrapper**: All pages use the `<Page>` component which provides layout, SEO, and consistent structure.

**Styling**: Global SCSS (imported through `styles/globals.scss`) plus Mantine components. `MantineProvider` wraps the app with a forced dark theme (`styles/theme/mantine.js`: colors, font, breakpoints, pointer cursor, modal/drawer z-index, and a `badge` class on every Badge, styled in `styles/theme/badge.scss`). Mantine's CSS is imported in its layered form, so the site's SCSS always wins over Mantine's base styles. Text sizes come from the mixins in `styles/typography.scss`. Breakpoints are defined twice, in `styles/breakpoints.scss` (SCSS media queries) and the Mantine theme (JS); keep them in sync. SCSS imports resolve from the project root (`sassOptions.loadPaths` in `next.config.js`), so write `@import 'styles/colors.scss';` rather than long relative paths; nearby files stay relative (`./timeline/timeline.scss`). Don't use `~/` imports: Turbopack can't resolve them.

**React 19**: `defaultProps` is ignored on function components; put defaults in the parameters.

**Data**: Static data stored in constants.js files within page directories (EXPERIENCES, PROJECTS arrays). No backend API.

**Responsive Modal**: The Modal component switches between Mantine's Modal (desktop) and Drawer (mobile) at `theme.breakpoints.md`.

**Icons**: Tabler (`@tabler/icons-react`) in general; GitHub and LinkedIn come from `react-icons` (Font Awesome).

**Deploy**: Vercel builds on Linux, which is case-sensitive; macOS isn't. Keep file and folder casing consistent and use `git mv` for case-only renames.

### Path Aliases

`@/*` maps to the project root (configured in jsconfig.json).

## Standards

Meet WCAG 2.1 AA, stay responsive down to 320px, and respect `prefers-reduced-motion`. Gate JS-driven motion with `usePrefersReducedMotion` (`src/hooks/usePrefersReducedMotion.js`) and CSS motion with a `@media (prefers-reduced-motion: reduce)` block.

## Conventions

- Module-level constants that never change (fixed strings, data objects, maps) use `CONSTANT_CASE`: `ROUTES`, `SOCIAL_LINKS`, `QUERY`. Values built at runtime and anything inside a function stay camelCase.
- Name an event handler `handle` + the event or action (`handleClick`, `handleModalClose`).
- Never climb two or more folders with a relative import (`../../`); use the `@/` alias instead.
- General-purpose components live in `src/components/shared/`; a section of one page gets its own folder under that page (`src/pages/home/neon-sign/`). A component's own hooks go in a `hooks/` folder beside it (`src/pages/home/neon-sign/hooks/`); hooks shared across components go in `src/hooks/`.
- Ask before adding dependencies or global styles (`styles/globals.scss`).

## Workflow

- Work is tracked as GitHub issues in `rvarela11/portfolio` on one of `rvarela11`'s GitHub project boards; the board changes from effort to effort, and `/start-ticket` finds the right one. Take one ticket at a time, starting it with `/start-ticket <issue#>`.
- Before each ticket, pull `main` and branch as `<issue#>-<short-description>` (e.g. `6-pin-nav-to-top`).
- Never push to `main`. Every change lands through a PR, with `Closes #<issue#>` in the body for ticket work.

## ESLint Configuration

ESLint 9 flat config in `eslint.config.mjs`: Airbnb's original rules (via `eslint-config-airbnb-extended/legacy`), Next.js core-web-vitals, and `eslint-plugin-perfectionist`. `yarn lint` runs `eslint .`; `yarn lint --fix` applies sorting.

- perfectionist sorts imports (within each `// @vendors`, `// @components`, ... section), named imports, JSX props and object keys alphabetically, with exceptions: `react` is always the first import and `next`/`next/*` imports come right after it, and `key` is always the first JSX prop
- `typescript` is a dev dependency only because `eslint-config-airbnb-extended` loads it

Notable relaxed rules:
- JSX allowed in .js files
- Max line length: 180 characters (comments and strings exempt, so keep long copy on one line rather than splitting it with `+`)
- Console statements allowed
- Prop spreading allowed
