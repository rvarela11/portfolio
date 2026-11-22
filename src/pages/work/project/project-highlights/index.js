// @vendors
import React from 'react';
import { Title } from '@mantine/core';

// @components
import { ProjectHighlight } from '../project-highlight';

export const ProjectHighlights = ({ highlights = [], projectTitle = '' }) => (
  <section className='project-page__section'>
    <Title className='project-page__heading' order={2}>Highlights</Title>
    <div className='project-highlights'>
      {highlights.map((highlight) => (
        <ProjectHighlight key={highlight.title} projectTitle={projectTitle} {...highlight} />
      ))}
    </div>
  </section>
);
