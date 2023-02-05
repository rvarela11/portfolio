import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Typography } from '@mui/material';
import Page from '@/src/components/shared/page';
import PARTICLES_JSON from '@/public/assets/particles-config.json';

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Page>
      <Particles id='tsparticles' init={particlesInit} options={PARTICLES_JSON} />
      <Typography variant='h1'>Roberto Varela</Typography>
    </Page>
  );
};

export default Home;
