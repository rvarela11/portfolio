// @vendors
import Link from 'next/link';
import { Text, Title } from '@mantine/core';
import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

// @components
import { HudFrame } from '@/src/components/shared/hud-frame';
import Image from '@/src/components/shared/image';
import { SkillChips } from '@/src/components/shared/skill-chips';

const Timeline = ({ elements = [], title = '' }) => (
  <>
    {title && (
      <Title className='timeline-title' order={2}>
        {title}
      </Title>
    )}
    <VerticalTimeline layout='1-column-left'>
      {elements.map((element) => (
        <VerticalTimelineElement
          key={`${element.employer}-${element.date}`}
          className='timeline-card'
          icon={
            <Image
              alt={`${element.employer} logo`}
              className='timeline-card__image'
              height={200}
              src={element?.image ?? ''}
              width={200}
            />
          }
        >
          <HudFrame>
            <div className='timeline-card__body'>
              <div className='timeline-card__head'>
                <Title className='timeline-card-title' order={3}>
                  {element.title}
                </Title>
                <Text className='timeline-card__dates' component='span'>
                  {element.date}
                </Text>
              </div>
              <Title className='timeline-card-employer' order={4}>{element.employer}</Title>
              <ul className='timeline-card__description'>
                {element.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <SkillChips skills={element.skills} />
              {element.link && (
                <Link className='timeline-card__link' href={element.link.href}>{element.link.text}</Link>
              )}
            </div>
          </HudFrame>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </>
);

export default Timeline;
