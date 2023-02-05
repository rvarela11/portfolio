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
    <Page className='home-page'>
      <Particles id='tsparticles' init={particlesInit} options={PARTICLES_JSON} />
      <div className='home-page-content'>
        <Typography className='home-page-content_name' variant='h2' variantMapping={{ h2: 'h1' }}>Roberto Varela</Typography>
        <Typography className='home-page-content_title' paragraph>FRONT-END ENGINEER</Typography>
      </div>
    </Page>
  );
};

export default Home;
