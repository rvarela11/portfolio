// @vendors
import React from 'react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';

// @utility
import createEmotionCache from '@/utility/createEmotionCache';

// @styles
import mainTheme from '../styles/theme/main';
import '@/styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

App.defaultProps = {
  emotionCache: undefined,
};

export default App;
