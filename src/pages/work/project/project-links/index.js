// @vendors
import React from 'react';
import { Button, Group } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

// What each link opens, for its accessible name; the visible text stays CODE / SITE
const LINK_NAMES = {
  code: 'code on GitHub',
  demo: 'demo',
  site: 'live site',
};

export const ProjectLinks = ({ links = {}, projectTitle = '' }) => {
  const entries = Object.entries(links);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Group gap='0.5rem'>
      {entries.map(([label, link]) => (
        <Button
          key={label}
          aria-label={`${projectTitle} ${LINK_NAMES[label] ?? label} (opens in a new tab)`}
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
    </Group>
  );
};
