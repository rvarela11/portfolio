// @vendors
import React from 'react';
import { Text, Title } from '@mantine/core';

// @components
import { HudFrame } from '@/src/components/shared/hud-frame';
import Image from '@/src/components/shared/image';

export const ProjectHighlight = ({
  image = '',
  projectTitle = '',
  text = '',
  title = '',
}) => (
  <article className='project-highlight'>
    <Title className='project-highlight__title' order={3}>{title}</Title>
    <Text className='project-highlight__text'>{text}</Text>
    {image && (
      <HudFrame className='project-highlight__image'>
        <Image alt={`Screenshot of the ${projectTitle} ${title}`} height={1207} src={image} width={2180} />
      </HudFrame>
    )}
  </article>
);
