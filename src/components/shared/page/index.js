// @vendors
import React from 'react';
import { Typography } from '@mui/material';

// @components
import SEO from '../SEO';

const Page = ({ className = '', children, title = '', SEOProps = {} }) => (
  <>
    <SEO {...SEOProps} />
    <section className={`page ${className}`.trim()}>
      {title && <Typography className='page-title' variant='h2'>{title}</Typography>}
      {children}
    </section>
  </>
);

export default Page;
