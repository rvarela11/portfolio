// @vendors
import React from 'react';
import { Title } from '@mantine/core';

// @components
import SEO from '../SEO';

const Page = ({ children, className = '', SEOProps = {}, title = '' }) => (
  <>
    <SEO {...SEOProps} />
    <section className={`page ${className}`.trim()}>
      {title && <Title className='page-title' order={2}>{title}</Title>}
      {children}
    </section>
  </>
);

export default Page;
