// @vendors
import React from 'react';
import { CacheProvider } from '@emotion/react';
import { loadBasic } from '@tsparticles/basic';
import { loadExternalRepulseInteraction } from '@tsparticles/interaction-external-repulse';
import { loadParticlesLinksInteraction } from '@tsparticles/interaction-particles-links';
import { loadInteractivityPlugin } from '@tsparticles/plugin-interactivity';
import { Particles, ParticlesProvider } from '@tsparticles/react';
import { CssBaseline, ThemeProvider } from '@mui/material';

// @components
import Nav from '@/src/components/shared/nav';

// @hooks
import { usePrefersReducedMotion } from '@/src/hooks/usePrefersReducedMotion';

// @public
import PARTICLES_JSON from '@/public/assets/particles-config.json';

// @utility
import createEmotionCache from '@/utility/createEmotionCache';

// @styles
import mainTheme from '../styles/theme/main';
import '@/styles/globals.scss';

const clientSideEmotionCache = createEmotionCache();

// Registers only the particle features the config uses: dots that move, links between them, and hover repulse
const loadParticlesPlugins = async (engine) => {
  await loadBasic(engine);
  await loadInteractivityPlugin(engine);
  await loadParticlesLinksInteraction(engine);
  await loadExternalRepulseInteraction(engine);
};

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        {prefersReducedMotion === false && (
          <ParticlesProvider init={loadParticlesPlugins}>
            <Particles id='tsparticles' options={PARTICLES_JSON} />
          </ParticlesProvider>
        )}
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
