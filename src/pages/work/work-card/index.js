// @vendors
import React from 'react';
import { Button, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// @components
import { Card, CardContent, CardImage } from '@/src/components/shared/card';

const WorkCard = ({ image = '', links = {}, techs = {}, title = '' }) => (
  <Card key={title} className='work-page__project-card'>
    <div className='work-page__project-card-image'>
      <CardImage
        image={{
          alt: `${title} project`,
          src: image,
          width: 3452,
          height: 1919,
        }}
      />
    </div>
    <CardContent className='work-page__project-card-content'>
      <div>
        <Typography className='work-page__project-card-content-title'>{title}</Typography>
        <Typography className='work-page__project-card-content-tech' variant='subtitle2'>{techs.tech.join(' / ')}</Typography>
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

export default WorkCard;
