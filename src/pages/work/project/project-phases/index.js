// @vendors
import React from 'react';
import { Title } from '@mantine/core';
import classnames from 'classnames';

// @constants
import { PHASE_STATUS } from '@/src/pages/work/constants';

export const ProjectPhases = ({ phases = [] }) => (
  <section className='project-page__section'>
    <Title className='project-page__heading' order={2}>Phases</Title>
    <ol className='project-phases'>
      {phases.map(({ status, title }) => (
        <li
          key={title}
          className={classnames('project-phases__step', {
            'project-phases__step--active': status === PHASE_STATUS.inProgress,
          })}
        >
          <span className='project-phases__title'>{title}</span>
          <span className='project-phases__status'>{status}</span>
        </li>
      ))}
    </ol>
  </section>
);
