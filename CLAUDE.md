# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
yarn dev        # Start development server on localhost:3000
yarn build      # Create production build
yarn start      # Start production server
yarn lint       # Run ESLint (Airbnb + Next.js rules)
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

## ESLint Configuration

Uses Airbnb preset with Next.js core-web-vitals. Notable relaxed rules:
- JSX allowed in .js files
- Max line length: 180 characters
- Console statements allowed
- Prop spreading allowed
