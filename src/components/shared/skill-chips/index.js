// @vendors
import React from 'react';

export const SkillChips = ({ className = '', skills = [] }) => (
  <ul aria-label='Skills' className={`skill-chips ${className}`.trim()}>
    {skills.map((skill) => (
      <li key={skill}>{skill}</li>
    ))}
  </ul>
);
