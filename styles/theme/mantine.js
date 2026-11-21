// @vendors
import { createTheme } from '@mantine/core';

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
  cursorType: 'pointer',
  fontFamily: '"Helvetica Neue", sans-serif',
});
