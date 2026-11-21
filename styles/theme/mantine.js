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
  fontFamily: '"Helvetica Neue", sans-serif',
});
