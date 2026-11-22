// @vendors
import React from 'react';
import Link from 'next/link';
import { Button, Text } from '@mantine/core';

// @components
import Page from '@/src/components/shared/page';
import { NeonSign } from './neon-sign';
import Timeline from './timeline';

// @constants
import { EXPERIENCES, PROJECTS } from './timeline/constants';

// @utils
import { ROUTES } from '@/src/utils/routes';

const Home = () => (
  <Page className='home-page'>
    <div className='home-page-content'>
      <NeonSign>Roberto Varela</NeonSign>
      <Text className='home-page-content__title'>
        Senior Front-End Engineer
      </Text>
      <div className='home-page-content__bio'>
        <Text>
          Senior front-end engineer with a passion for UI/UX, scaling platforms,
          and creating intuitive and dynamic user experiences, leveraging AI tools
          to accelerate development and innovation.
        </Text>
      </div>
      <Button className='home-page-content__work' component={Link} href={ROUTES.work}>
        See my work
      </Button>
    </div>
    <Timeline elements={EXPERIENCES} title='Experience' />
    <Timeline elements={PROJECTS} title='Projects' />
  </Page>
);

export default Home;
