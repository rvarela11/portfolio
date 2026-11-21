// @vendors
import { Text, Title } from '@mantine/core';
import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

// @components
import Image from '@/src/components/shared/image';

const Timeline = ({ elements = [], title = '' }) => (
  <>
    {title && (
      <Title className='timeline-title' order={4}>
        {title}
      </Title>
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
              height={200}
              src={element?.image ?? ''}
              width={200}
            />
          }
        >
          <Title className='timeline-card-title' order={5}>
            {element.title}
          </Title>
          <Title className='timeline-card-employer' order={6}>{element.employer}</Title>
          <ul>
            {element.description.map((item, i) => (
              <li key={`description-${index}-${i}`}>{item}</li>
            ))}
          </ul>
          <Text className='timeline-card-skills'>
            {element.skills.join(' - ')}
          </Text>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </>
);

export default Timeline;
