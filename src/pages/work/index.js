// @vendors
import React from 'react';

// @components
import Page from '@/src/components/shared/page';
import { WorkRow } from './work-row';

// @constants
import { PROJECTS } from './constants';

const SEO_PROPS = {
  description: 'Work by Roberto Varela',
  title: 'Work | Roberto Varela',
  url: 'https://www.robertvarela.com/work',
};

const Work = () => (
  <Page SEOProps={SEO_PROPS} title='Work'>
    <ul className='work-page-list'>
      {PROJECTS.map((project) => (
        <li key={project.slug}>
          <WorkRow {...project} />
        </li>
      ))}
    </ul>
  </Page>
);

export default Work;
