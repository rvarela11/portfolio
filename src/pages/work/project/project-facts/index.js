// @vendors
import React from 'react';

// @components
import { SkillChips } from '@/src/components/shared/skill-chips';

export const ProjectFacts = ({ role = '', team = '', tech = [] }) => (
  <dl className='project-facts'>
    <div>
      <dt className='project-facts__label'>Role</dt>
      <dd className='project-facts__value'>{role}</dd>
    </div>
    <div>
      <dt className='project-facts__label'>Team</dt>
      <dd className='project-facts__value'>{team}</dd>
    </div>
    <div>
      <dt className='project-facts__label'>Tech</dt>
      <dd className='project-facts__value'>
        <SkillChips skills={tech} />
      </dd>
    </div>
  </dl>
);
