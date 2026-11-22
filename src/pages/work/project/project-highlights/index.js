// @vendors
import React from 'react';
import { SimpleGrid, Title } from '@mantine/core';

// @components
import { ProjectHighlight } from '../project-highlight';

export const ProjectHighlights = ({ highlights = [], projectTitle = '' }) => (
  <section className='project-page__section'>
    <Title className='project-page__heading' order={2}>Highlights</Title>
    <SimpleGrid cols={{ base: 1, md: 2 }} spacing='1.25rem'>
      {highlights.map((highlight) => (
        <ProjectHighlight key={highlight.title} projectTitle={projectTitle} {...highlight} />
      ))}
    </SimpleGrid>
  </section>
);
