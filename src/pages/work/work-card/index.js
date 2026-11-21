// @vendors
import React from 'react';
import { Button, Text, UnstyledButton } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

// @components
import { HudFrame } from '@/src/components/shared/hud-frame';
import Image from '@/src/components/shared/image';
import { SkillChips } from '@/src/components/shared/skill-chips';

const WorkCard = ({ handleWorkCardClick, ...project }) => {
  const { images = {}, links = {}, tech = [], title = '' } = project;

  return (
    <HudFrame className='work-card'>
      <UnstyledButton className='work-card__image' onClick={() => handleWorkCardClick(project)}>
        <Image
          alt={`${title} project`}
          height={600}
          src={images?.project || ''}
          width={700}
        />
      </UnstyledButton>
      <div className='work-card__content'>
        <div>
          <Text className='work-card__content-title'>{title}</Text>
          <SkillChips className='work-card__content-tech' skills={tech} />
        </div>
        <div className='work-card__content-actions'>
          {
            Object.entries(links).map(([label, link]) => (
              <Button
                key={label}
                className='work-card__action'
                classNames={{ section: 'work-card__action-icon' }}
                component='a'
                href={link}
                leftSection={<IconExternalLink size={20} />}
                target='_blank'
              >
                {label}
              </Button>
            ))
          }
        </div>
      </div>
    </HudFrame>
  );
};

export default WorkCard;
