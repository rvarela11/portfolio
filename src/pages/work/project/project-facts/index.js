// @vendors
import React from 'react';
import { Text } from '@mantine/core';

// @components
import { HudFrame } from '@/src/components/shared/hud-frame';
import { SkillChips } from '@/src/components/shared/skill-chips';
import { ProjectLinks } from '../project-links';

export const ProjectFacts = ({
  links = {},
  linksNote = '',
  projectTitle = '',
  role = '',
  team = '',
  tech = [],
}) => (
  <HudFrame className='project-facts'>
    <div className='project-facts__body'>
      <dl className='project-facts__list'>
        <div>
          <dt className='project-facts__label'>Role</dt>
          <dd className='project-facts__value'>{role}</dd>
        </div>
        <div>
          <dt className='project-facts__label'>Team</dt>
          <dd className='project-facts__value'>{team}</dd>
        </div>
        <div className='project-facts__tech'>
          <dt className='project-facts__label'>Tech</dt>
          <dd className='project-facts__value'>
            <SkillChips skills={tech} />
          </dd>
        </div>
      </dl>
      <ProjectLinks links={links} projectTitle={projectTitle} />
      {linksNote && <Text className='project-facts__note'>{linksNote}</Text>}
    </div>
  </HudFrame>
);
