// @vendors
import React from 'react';
import Link from 'next/link';
import { Text, Title } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';

// @components
import Image from '@/src/components/shared/image';
import Page from '@/src/components/shared/page';
import { SITE_URL } from '@/src/components/shared/SEO';
import { ProjectFacts } from './project-facts';
import { ProjectHighlight } from './project-highlight';
import { ProjectOutcome } from './project-outcome';
import { ProjectPhases } from './project-phases';

// @constants
import { PROJECTS } from '../constants';

// @utils
import { ROUTES } from '@/src/utils/routes';

export const Project = ({ slug = '' }) => {
  const {
    description = [],
    highlights = [],
    images = {},
    links = {},
    linksNote = '',
    outcome = '',
    phases = [],
    role = '',
    summary = '',
    team = '',
    tech = [],
    title = '',
  } = PROJECTS.find((project) => project.slug === slug) ?? {};

  const seoProps = {
    description: summary,
    image: `${SITE_URL}${images.site}`,
    imageHeight: 1207,
    imageWidth: 2180,
    title: `${title} | Roberto Varela`,
    url: `${SITE_URL}${ROUTES.work}/${slug}`,
  };

  return (
    <Page className='project-page' SEOProps={seoProps}>
      <div className='project-page__container'>
        <Link className='project-page__back' href={ROUTES.work}>
          <IconChevronLeft aria-hidden size={18} />
          All work
        </Link>
        <Title className='page-title project-page__title' order={1}>{title}</Title>
        <Text className='project-page__summary'>{summary}</Text>
        <ProjectFacts links={links} linksNote={linksNote} projectTitle={title} role={role} team={team} tech={tech} />
        <div className='project-screenshot project-page__screenshot'>
          <Image alt={`Screenshot of the ${title} site`} height={1207} priority src={images.site ?? ''} width={2180} />
        </div>
        <div className='project-page__description'>
          {description.map((paragraph) => (
            <Text key={paragraph} className='project-page__text'>{paragraph}</Text>
          ))}
        </div>
        <ProjectOutcome text={outcome} />
        {phases.length > 0 && <ProjectPhases phases={phases} />}
        <section className='project-page__section'>
          <Title className='project-page__heading' order={2}>Highlights</Title>
          <div className='project-page__highlights'>
            {highlights.map((highlight) => (
              <ProjectHighlight key={highlight.title} projectTitle={title} {...highlight} />
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
};
