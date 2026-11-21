// @vendors
import React from 'react';
import { Badge, Group } from '@mantine/core';

export const SkillChips = ({ className = '', skills = [] }) => (
  <Group aria-label='Skills' className={`skill-chips ${className}`.trim()} component='ul' gap='0.4rem'>
    {skills.map((skill) => (
      <Badge key={skill} component='li'>{skill}</Badge>
    ))}
  </Group>
);
