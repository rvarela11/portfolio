// @vendors
import React, { useCallback } from 'react';
import { CacheProvider } from '@emotion/react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { CssBaseline, ThemeProvider } from '@mui/material';

// @components
import Nav from '@/src/components/shared/nav';

// @public
import PARTICLES_JSON from '@/public/assets/particles-config.json';

// @utility
import createEmotionCache from '@/utility/createEmotionCache';

// @styles
import mainTheme from '../styles/theme/main';
import '@/styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Particles id='tsparticles' init={particlesInit} options={PARTICLES_JSON} />
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

App.defaultProps = {
  emotionCache: undefined,
};

export default App;
