import { createTheme } from '@mui/material/styles';
import '@fontsource/ubuntu';

const mainTheme = createTheme({
  palette: {
    background: { default: '#141416' },
    text: { primary: '#e2dddf' },
  },
  typography: {
    fontFamily: '"Ubuntu", sans-serif',
  },
});

export default mainTheme;
