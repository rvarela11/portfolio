// @vendors
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { loadBasic } from '@tsparticles/basic';
import { loadExternalRepulseInteraction } from '@tsparticles/interaction-external-repulse';
import { loadParticlesLinksInteraction } from '@tsparticles/interaction-particles-links';
import { loadInteractivityPlugin } from '@tsparticles/plugin-interactivity';
import { Particles, ParticlesProvider } from '@tsparticles/react';

// @components
import Nav from '@/src/components/shared/nav';

// @hooks
import { usePrefersReducedMotion } from '@/src/hooks/usePrefersReducedMotion';

// @public
import PARTICLES_JSON from '@/public/assets/particles-config.json';

// @styles
import { mantineCssVariablesResolver, mantineTheme } from '../styles/theme/mantine';
// Layered so the site's own SCSS wins over Mantine's base styles
import '@mantine/core/styles.layer.css';
import '@/styles/globals.scss';

// Registers only the particle features the config uses: dots that move, links between them, and hover repulse
const loadParticlesPlugins = async (engine) => {
  await loadBasic(engine);
  await loadInteractivityPlugin(engine);
  await loadParticlesLinksInteraction(engine);
  await loadExternalRepulseInteraction(engine);
};

const App = ({ Component, pageProps }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <MantineProvider cssVariablesResolver={mantineCssVariablesResolver} forceColorScheme='dark' theme={mantineTheme}>
      {prefersReducedMotion === false && (
        <ParticlesProvider init={loadParticlesPlugins}>
          <Particles id='tsparticles' options={PARTICLES_JSON} />
        </ParticlesProvider>
      )}
      <Nav />
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default App;
