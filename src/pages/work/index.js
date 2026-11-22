// @vendors
import React from 'react';
import { Container, Title } from '@mantine/core';

// @components
import Page from '@/src/components/shared/page';
import { WorkCard } from './work-card';

// @constants
import { PROJECTS } from './constants';

const SEO_PROPS = {
  description: 'Work by Roberto Varela',
  title: 'Work | Roberto Varela',
  url: 'https://www.robertvarela.com/work',
};

const Work = () => (
  <Page SEOProps={SEO_PROPS}>
    <Container px={0} size={1100}>
      <Title className='page-title' order={1}>Work</Title>
      <ul className='work-page-grid'>
        {PROJECTS.map((project) => (
          <li key={project.slug}>
            <WorkCard {...project} />
          </li>
        ))}
      </ul>
    </Container>
  </Page>
);

export default Work;
