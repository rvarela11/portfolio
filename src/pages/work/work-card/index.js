// @vendors
import React from 'react';
import Link from 'next/link';
import { Text, Title } from '@mantine/core';

// @components
import { HudFrame } from '@/src/components/shared/hud-frame';
import Image from '@/src/components/shared/image';
import { SkillChips } from '@/src/components/shared/skill-chips';

// @utils
import { ROUTES } from '@/src/utils/routes';

// The card shows the first few, with a count of the rest; the project page lists them all
const MAX_TECH = 5;

// The title's link stretches over the whole card, so the card is one click target with one short accessible name
export const WorkCard = ({
  images = {},
  slug = '',
  summary = '',
  tech = [],
  title = '',
}) => {
  const hiddenCount = tech.length - MAX_TECH;
  const skills = hiddenCount > 0 ? [...tech.slice(0, MAX_TECH), `+${hiddenCount}`] : tech;

  return (
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
          <SkillChips className='work-card__tech' skills={skills} />
        </div>
      </HudFrame>
    </article>
  );
};
