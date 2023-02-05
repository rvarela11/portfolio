// @vendors
import React from 'react';
import { Typography } from '@mui/material';

// @components
import Page from '@/src/components/shared/page';

const Home = () => (
  <Page className='home-page'>
    <div className='home-page-content'>
      <Typography className='home-page-content_name' variant='h2' variantMapping={{ h2: 'h1' }}>Roberto Varela</Typography>
      <Typography className='home-page-content_title' paragraph>FRONT-END ENGINEER</Typography>
    </div>
  </Page>
);

export default Home;
