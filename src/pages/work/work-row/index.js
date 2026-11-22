// @vendors
import React from 'react';
import Link from 'next/link';
import { Text, Title } from '@mantine/core';

// @components
import { HudFrame } from '@/src/components/shared/hud-frame';
import Image from '@/src/components/shared/image';
import { SkillChips } from '@/src/components/shared/skill-chips';

// @constants
import { PHASE_STATUS } from '../constants';

// @utils
import { ROUTES } from '@/src/utils/routes';

// The title's link stretches over the whole row, so the row is one click target with one short accessible name
export const WorkRow = ({
  images = {},
  phases = [],
  slug = '',
  summary = '',
  tech = [],
  title = '',
}) => {
  const isInProgress = phases.some(({ status }) => status === PHASE_STATUS.inProgress);

  return (
    <article className='work-row'>
      <HudFrame>
        <div className='work-row__body'>
          <div className='work-row__image'>
            <Image alt='' height={600} src={images.project ?? ''} width={700} />
          </div>
          <div className='work-row__content'>
            <Title className='work-row__title' order={2}>
              <Link className='work-row__link' href={`${ROUTES.work}/${slug}`}>{title}</Link>
            </Title>
            <Text className='work-row__summary'>{summary}</Text>
            <SkillChips skills={tech} />
            {isInProgress && <Text className='work-row__status'>{PHASE_STATUS.inProgress}</Text>}
          </div>
        </div>
      </HudFrame>
    </article>
  );
};
