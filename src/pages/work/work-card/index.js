// @vendors
import React from 'react';
import { Button, ButtonBase, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// @components
import { Card, CardContent, CardImage } from '@/src/components/shared/card';

const WorkCard = ({ handleWorkCardClick, ...project }) => {
  const { images = {}, links = {}, tech = [], title = '' } = project;

  return (
    <Card key={title} className='work-page__project-card'>
      <ButtonBase className='work-page__project-card-image' onClick={() => handleWorkCardClick(project)}>
        <CardImage
          image={{
            alt: `${title} project`,
            src: images?.project || '',
            width: 700,
            height: 600,
          }}
        />
      </ButtonBase>
      <CardContent className='work-page__project-card-content'>
        <div>
          <Typography className='work-page__project-card-content-title'>{title}</Typography>
          <Typography className='work-page__project-card-content-tech' variant='subtitle2'>{tech.join(' / ')}</Typography>
        </div>
        <div className='work-page__project-card-content-actions'>
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
