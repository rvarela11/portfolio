// @vendors
import { Badge, createTheme } from '@mantine/core';

// Same values as $color__dark-gray and $color__light-gray in styles/colors.scss; keep the two in sync
export const mantineCssVariablesResolver = () => ({
  dark: {
    '--mantine-color-body': '#141416',
    '--mantine-color-text': '#e2dddf',
  },
  light: {},
  variables: {},
});

export const mantineTheme = createTheme({
  // Same values as styles/breakpoints.scss (in em: 1em = 16px); keep the two in sync
  /* eslint-disable perfectionist/sort-objects -- breakpoints read best smallest to largest */
  breakpoints: {
    xs: '0em',
    sm: '37.5em',
    md: '56.25em',
    lg: '75em',
    xl: '96em',
  },
  /* eslint-enable perfectionist/sort-objects */
  components: {
    // Square teal tags; the look lives in styles/theme/badge.scss
    Badge: Badge.extend({ classNames: { root: 'badge' }, defaultProps: { radius: 0 } }),
  },
  cursorType: 'pointer',
  fontFamily: '"Helvetica Neue", sans-serif',
  lineHeights: { md: '1.5' },
  // Mantine's transitions are skipped for visitors who prefer reduced motion
  respectReducedMotion: true,
});
