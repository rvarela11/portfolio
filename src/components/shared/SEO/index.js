// @vendors
import React from 'react';
import Head from 'next/head';

// @utils
import { SOCIAL_LINKS } from '@/src/utils/links';

const DEFAULT_DESCRIPTION = 'Roberto Varela is a senior front-end engineer with a passion for UI/UX, scaling platforms, and creating intuitive and dynamic user experiences.';
const DEFAULT_TITLE = 'Roberto Varela | Senior Front-End Engineer';
const SITE_URL = 'https://www.robertvarela.com';

// Describes Roberto for search engines, so a search for his name can link this site to his GitHub and LinkedIn
const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  jobTitle: 'Senior Front-End Engineer',
  name: 'Roberto Varela',
  sameAs: Object.values(SOCIAL_LINKS),
  url: SITE_URL,
};

// React 19 ignores defaultProps on function components, so defaults live in the parameters
const SEO = ({
  description = DEFAULT_DESCRIPTION,
  image = `${SITE_URL}/images/RV_logo_black.png`,
  openGraphType = 'website',
  title = DEFAULT_TITLE,
  url = SITE_URL,
}) => (
  <Head>
    <title>{title}</title>
    <meta content={description} name='description' />
    <meta content='width=device-width, initial-scale=1' name='viewport' />
    <link href={url} rel='canonical' />

    {/* Link previews (LinkedIn, Slack, X and others read the og: tags) */}
    <meta content={title} property='og:title' />
    <meta content={description} property='og:description' />
    <meta content={image} property='og:image' />
    <meta content='1400' property='og:image:width' />
    <meta content='1061' property='og:image:height' />
    <meta content={url} property='og:url' />
    <meta content={openGraphType} property='og:type' />
    <meta content='Roberto Varela' property='og:site_name' />
    <meta content='summary_large_image' name='twitter:card' />

    {/* JSON-LD must be the script's raw text; `<` is escaped so the data can never close the script tag (Next.js docs) */}
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA).replace(/</g, '\\u003c') }}
      type='application/ld+json'
    />

    <link href='/images/favicon.png' rel='icon' type='image/png' />
  </Head>
);

export default SEO;
