// @vendors
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Typography } from '@mui/material';

// @components
import Image from '@/src/components/shared/image';

const Timeline = ({ elements = [], title = '' }) => (
  <>
    {title && (
      <Typography className='timeline-title' variant='h4'>
        {title}
      </Typography>
    )}
    <VerticalTimeline layout='1-column-left'>
      {elements.map((element, index) => (
        <VerticalTimelineElement
          key={index}
          className='timeline-card'
          date={element.date}
          icon={
            <Image
              alt={`${element.title} logo`}
              className='timeline-card__image'
              src={element?.image ?? ''}
              width={200}
              height={200}
            />
          }
        >
          <Typography className='timeline-card-title' variant='h5'>
            {element.title}
          </Typography>
          <Typography variant='h6'>{element.employer}</Typography>
          <ul>
            {element.description.map((item, i) => (
              <li key={`description-${index}-${i}`}>{item}</li>
            ))}
          </ul>
          <Typography className='timeline-card-skills'>
            {element.skills.join(' - ')}
          </Typography>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </>
);

export default Timeline;
