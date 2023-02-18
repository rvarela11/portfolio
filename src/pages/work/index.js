// @vendors
import React from 'react';

// @components
import Page from '@/src/components/shared/page';
import WorkCard from './work-card';

// @Constants
import { PROJECTS } from './constants';

const Work = () => (
  <Page title='Work'>
    <div className='work-page-grid'>
      { PROJECTS.map((project, index) => (
        <WorkCard key={index} {...project} />
      ))}
    </div>
  </Page>
);

export default Work;
