// @vendors
import React from 'react';
import { Stepper, Title } from '@mantine/core';

// @constants
import { PHASE_STATUS } from '@/src/pages/work/constants';

// Read-only: no onStepClick, so the steps aren't clickable or focusable
export const ProjectPhases = ({ phases = [] }) => {
  const activeIndex = phases.findIndex(({ status }) => status === PHASE_STATUS.inProgress);

  return (
    <section className='project-page__section'>
      <Title className='project-page__heading' order={2}>Phases</Title>
      <Stepper
        active={activeIndex}
        classNames={{
          content: 'project-phases__content',
          separator: 'project-phases__separator',
          step: 'project-phases__step',
          stepBody: 'project-phases__body',
          stepDescription: 'project-phases__status',
          stepIcon: 'project-phases__icon',
          stepLabel: 'project-phases__title',
          steps: 'project-phases',
        }}
        iconSize={32}
        labelPosition='bottom'
        wrap={false}
      >
        {phases.map(({ status, title }) => (
          <Stepper.Step key={title} description={status} label={title} />
        ))}
      </Stepper>
    </section>
  );
};
