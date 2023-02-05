import React from 'react';
import SEO from '../SEO';
import SocialNav from '../social-nav';

const Page = ({ children, SEOProps }) => (
  <>
    <SEO {...SEOProps} />
    <SocialNav />
    {children}
  </>
);

export default Page;
