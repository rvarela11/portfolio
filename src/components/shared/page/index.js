import React from 'react';
import SocialNav from '../social-nav';
import SEO from '../SEO';

const Page = ({ children, SEOProps }) => (
  <>
    <SEO {...SEOProps} />
    <SocialNav />
    {children}
  </>
);

export default Page;
