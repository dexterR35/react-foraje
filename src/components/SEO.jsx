// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Default Title",
  description = "Default description",
  keywords = "",
  author = "Marian Foraje Puțuri",
  ogImage = "https://foraje-exemplu.ro/hero.webp",
  url = "https://foraje-exemplu.ro",
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: author,
    url,
    logo: ogImage,
    description,
    telephone: "+40 740 000 000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Exemplu 123",
      addressLocality: "București",
      postalCode: "012345",
      addressCountry: "RO",
    },
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourprofile",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
