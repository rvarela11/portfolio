// @vendors
import { createTheme } from '@mantine/core';

// Same colors and font as the MUI theme in ./main.js, so both libraries render alike while MUI is phased out (#17)
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
  breakpoints: {
    lg: '75em',
    md: '56.25em',
    sm: '37.5em',
    xl: '96em',
    xs: '0em',
  },
  fontFamily: '"Helvetica Neue", sans-serif',
});
