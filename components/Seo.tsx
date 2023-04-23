import Head from "next/head";
import React from "react";

type SeoProps = {
  data: {
    title: string | undefined;
    description: string | undefined;
    url: string | undefined;
    thumbnailUrl: string | undefined;
  };
};

export default function Seo({ data }: SeoProps) {
  const { title, description, thumbnailUrl, url } = data;
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://backoffice.nodemy.vn${thumbnailUrl}`}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={`https://backoffice.nodemy.vn${thumbnailUrl}`}
      />
    </Head>
  );
}
