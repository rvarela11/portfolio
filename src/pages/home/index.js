// @vendors
import React from 'react';
import { Typography } from '@mui/material';

// @components
import Page from '@/src/components/shared/page';
import Timeline from './timeline';

// @constants
import { EXPERIENCES, PROJECTS } from './timeline/constants';

const Home = () => (
  <Page className='home-page'>
    <div className='home-page-content'>
      <Typography
        className='home-page-content__name'
        variant='h2'
        variantMapping={{ h2: 'h1' }}
      >
        Roberto Varela
      </Typography>
      <Typography className='home-page-content__title' variant='h4'>
        FRONT-END ENGINEER
      </Typography>
      <div className='home-page-content__bio'>
        <Typography paragraph>
          7+ years of front-end development experience with a passion for UI/UX,
          scaling platforms, and creating intuitive and dynamic user
          experiences.
        </Typography>
      </div>
    </div>
    <Timeline elements={EXPERIENCES} title='Experience' />
    <Timeline elements={PROJECTS} title='Projects' />
  </Page>
);

export default Home;
