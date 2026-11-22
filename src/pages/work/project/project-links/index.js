// @vendors
import React from 'react';
import { Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

export const ProjectLinks = ({ links = {} }) => {
  const entries = Object.entries(links);

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className='project-links'>
      {entries.map(([label, link]) => (
        <Button
          key={label}
          className='project-links__action'
          classNames={{ section: 'project-links__action-icon' }}
          component='a'
          href={link}
          leftSection={<IconExternalLink size={20} />}
          rel='noreferrer'
          target='_blank'
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
