/* eslint-disable */
// @vendors
import React from 'react';
import Head from 'next/head';

const SEO = ({
  description,
  image,
  openGraphType,
  schemaType,
  social,
  title,
  url,
}) => (
  <Head>
    {/*<!-- Primary Meta Tags -->*/}
    <title>{title}</title>
    <meta name='title' content={title} />
    <meta name='description' content={description} />
    <meta name='medium' content='index' />
    <meta charSet='utf-8' />
    <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, shrink-to-fit=no'
    />

    {/*<!-- Google / Search Engine Tags -->*/}
    <meta itemProp='name' content={title} />
    <meta itemProp='description' content={description} />
    <meta itemProp='image' content={image} />

    {/*<!-- Facebook Meta Tags -->*/}
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={image} />
    <meta property='og:image:width' content='1400' />
    <meta property='og:image:height' content='1061' />
    <meta property='og:url' content={url} />
    <meta property='og:type' content={openGraphType} />
    <meta property='og:site_name' content='Roberto Varela'></meta>

    {/*<!-- Twitter Meta Tags -->*/}
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content={url} />
    <meta name='twitter:creator' content={social.twitter} />
    <meta name='twitter:site' content={social.twitter} />

    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org',
          '@type': schemaType,
          name: title,
          about: description,
          url,
        }),
      }}
    />

    <link rel='icon' type='image/png' href='/images/favicon.png' />
  </Head>
);

SEO.defaultProps = {
  description: 'Roberto Varela portfolio',
  image: 'https://www.robertvarela.com/images/RV_logo_black.png',
  openGraphType: 'website',
  schemaType: 'WebSite',
  social: {
    twitter: '@r083121',
  },
  title: 'Roberto Varela',
  url: 'https://www.robertvarela.com',
};

export default SEO;
