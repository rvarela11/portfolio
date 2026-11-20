// @vendors
import { Typography } from '@mui/material';
import React from 'react';

// @components
import SEO from '../SEO';

const Page = ({ children, className = '', SEOProps = {}, title = '' }) => (
  <>
    <SEO {...SEOProps} />
    <section className={`page ${className}`.trim()}>
      {title && <Typography className='page-title' variant='h2'>{title}</Typography>}
      {children}
    </section>
  </>
);

export default Page;
