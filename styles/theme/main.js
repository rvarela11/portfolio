import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
  palette: {
    background: { default: '#141416' },
    text: { primary: '#e2dddf' },
  },
  typography: {
    fontFamily: '"Helvetica Neue", sans-serif',
  },
});

export default mainTheme;
