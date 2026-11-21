// @vendors
import { createTheme, Drawer, Modal } from '@mantine/core';

// Above the fixed nav (z-index 1000 in src/components/shared/nav/nav.scss)
const OVERLAY_Z_INDEX = 1300;

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
    Drawer: Drawer.extend({ defaultProps: { zIndex: OVERLAY_Z_INDEX } }),
    Modal: Modal.extend({ defaultProps: { zIndex: OVERLAY_Z_INDEX } }),
  },
  cursorType: 'pointer',
  fontFamily: '"Helvetica Neue", sans-serif',
  lineHeights: { md: '1.5' },
});
