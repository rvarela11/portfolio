// @vendors
import React from 'react';
import Link from 'next/link';
import { Text, Title } from '@mantine/core';

// @components
import { HudFrame } from '@/src/components/shared/hud-frame';
import Image from '@/src/components/shared/image';

// @utils
import { ROUTES } from '@/src/utils/routes';

// The title's link stretches over the whole card, so the card is one click target with one short accessible name
export const WorkCard = ({
  images = {},
  slug = '',
  summary = '',
  title = '',
}) => (
  <article className='work-card'>
    <HudFrame>
      <div className='work-card__image'>
        <Image alt='' height={600} src={images.project ?? ''} width={700} />
      </div>
      <div className='work-card__content'>
        <Title className='work-card__title' order={2}>
          <Link className='work-card__link' href={`${ROUTES.work}/${slug}`}>{title}</Link>
        </Title>
        <Text className='work-card__summary'>{summary}</Text>
      </div>
    </HudFrame>
  </article>
);
