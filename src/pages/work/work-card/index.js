// @vendors
import React from 'react';
import { Button, Text, UnstyledButton } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

// @components
import { Card, CardContent } from '@/src/components/shared/card';
import Image from '@/src/components/shared/image';

const WorkCard = ({ handleWorkCardClick, ...project }) => {
  const { images = {}, links = {}, tech = [], title = '' } = project;

  return (
    <Card key={title} className='work-card'>
      <UnstyledButton className='work-card__image' onClick={() => handleWorkCardClick(project)}>
        <Image
          alt={`${title} project`}
          height={600}
          src={images?.project || ''}
          width={700}
        />
      </UnstyledButton>
      <CardContent className='work-card__content'>
        <div>
          <Text className='work-card__content-title'>{title}</Text>
          <Text className='work-card__content-tech'>{tech.join(' / ')}</Text>
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
      </CardContent>
    </Card>
  );
};

export default WorkCard;
