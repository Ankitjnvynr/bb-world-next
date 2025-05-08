// SeoHelmet.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoHelmet = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    {/* {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {canonical && <meta property="og:url" content={canonical} />}
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} /> */}
  </Helmet>
);

export default SeoHelmet;
