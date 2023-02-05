// @vendors
import React from 'react';

// @components
import SEO from '../SEO';
import SocialNav from '../social-nav';

const Page = ({ className = '', children, SEOProps = {} }) => (
  <>
    <SEO {...SEOProps} />
    <SocialNav />
    <section className={`page ${className}`.trim()}>
      {children}
    </section>
  </>
);

export default Page;
