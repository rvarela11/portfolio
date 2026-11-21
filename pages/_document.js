// @vendors
import * as React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

const Document = () => (
  <Html lang="en" {...mantineHtmlProps}>
    <Head>
      <ColorSchemeScript forceColorScheme="dark" />
      <meta content="#1976d2" name="theme-color" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
