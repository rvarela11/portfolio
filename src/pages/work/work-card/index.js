// @vendors
import React from 'react';
import { Button, ButtonBase, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// @components
import { Card, CardContent, CardImage } from '@/src/components/shared/card';

const WorkCard = ({ image = '', links = {}, title = '' }) => (
  <Card key={title} className='work-page__project-card'>
    <ButtonBase className='work-page__project-card-image' onClick={() => {}}>
      <CardImage
        image={{
          alt: `${title} project`,
          src: image,
          width: 3452,
          height: 1919,
        }}
      />
    </ButtonBase>
    <CardContent className='work-page__project-card-content'>
      <Typography>{title}</Typography>
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
