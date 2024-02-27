// @vendors
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Typography } from '@mui/material';

// @components
import Image from '@/src/components/shared/image';

// @constants
import { EXPERIENCES } from './constants';

const Timeline = () => (
  <VerticalTimeline layout='1-column-left'>
    {EXPERIENCES.map((experience, index) => (
      <VerticalTimelineElement
        key={index}
        className='timeline-card'
        date={experience.date}
        icon={
          <Image
            alt={`${experience.title} experience`}
            className='timeline-card__image'
            src={experience?.image ?? ''}
            width={200}
            height={200}
          />
        }
      >
        <Typography className='timeline-card-title' variant='h5'>
          {experience.title}
        </Typography>
        <Typography variant='h6'>{experience.employer}</Typography>
        <ul>
          {experience.description.map((item, i) => (
            <li key={`description-${index}-${i}`}>{item}</li>
          ))}
        </ul>
        <Typography className='timeline-card-skills'>
          {experience.skills.join(' - ')}
        </Typography>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);

export default Timeline;
