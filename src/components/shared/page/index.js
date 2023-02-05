import React from 'react';
import SEO from '../SEO';

const Page = ({ children, SEOProps }) => (
  <>
    <SEO {...SEOProps} />
    {children}
  </>
);

export default Page;
