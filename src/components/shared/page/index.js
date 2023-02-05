// @vendors
import React from 'react';

// @components
import SEO from '../SEO';

const Page = ({ className = '', children, SEOProps = {} }) => (
  <>
    <SEO {...SEOProps} />
    <section className={`page ${className}`.trim()}>
      {children}
    </section>
  </>
);

export default Page;
