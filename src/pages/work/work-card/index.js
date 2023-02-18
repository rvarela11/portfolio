// @vendors
import React from 'react';
import { Button, ButtonBase, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// @components
import { Card, CardContent } from '@/src/components/shared/card';
import Image from '@/src/components/shared/image';

const WorkCard = ({ handleWorkCardClick, ...project }) => {
  const { images = {}, links = {}, tech = [], title = '' } = project;

  return (
    <Card key={title} className='work-card'>
      <ButtonBase className='work-card__image' onClick={() => handleWorkCardClick(project)}>
        <Image
          alt={`${title} project`}
          src={images?.project || ''}
          width={700}
          height={600}
        />
      </ButtonBase>
      <CardContent className='work-card__content'>
        <div>
          <Typography className='work-card__content-title'>{title}</Typography>
          <Typography className='work-card__content-tech' variant='subtitle2'>{tech.join(' / ')}</Typography>
        </div>
        <div className='work-card__content-actions'>
          {
            Object.entries(links).map(([label, link]) => (
              <Button
                key={label}
                component='a'
                href={link}
                target='_blank'
                startIcon={<OpenInNewIcon />}
                variant='contained'
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
