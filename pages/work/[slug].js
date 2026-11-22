// @vendors
import React from 'react';

// @components
import { Project } from '@/src/pages/work/project';

// @constants
import { PROJECTS } from '@/src/pages/work/constants';

const ProjectPage = ({ slug }) => <Project slug={slug} />;

export const getStaticPaths = () => ({
  fallback: false,
  paths: PROJECTS.map(({ slug }) => ({ params: { slug } })),
});

export const getStaticProps = ({ params }) => ({ props: { slug: params.slug } });

export default ProjectPage;
