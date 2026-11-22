// @vendors
import React from 'react';
import { Text, Title } from '@mantine/core';
import classnames from 'classnames';

// @components
import { HudFrame } from '@/src/components/shared/hud-frame';
import Image from '@/src/components/shared/image';

// A highlight with a screenshot spans the full row, so the image stays large enough to read
export const ProjectHighlight = ({
  image = '',
  projectTitle = '',
  text = '',
  title = '',
}) => (
  <HudFrame className={classnames('project-highlight', { 'project-highlight--wide': image })}>
    <article className='project-highlight__body'>
      <Title className='project-highlight__title' order={3}>{title}</Title>
      <Text className='project-highlight__text'>{text}</Text>
      {image && (
        <div className='project-screenshot project-highlight__image'>
          <Image alt={`Screenshot of the ${projectTitle} ${title}`} height={1207} src={image} width={2180} />
        </div>
      )}
    </article>
  </HudFrame>
);
