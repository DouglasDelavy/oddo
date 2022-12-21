"use client";

import { usePathname } from "next/navigation";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
};

const DEFAULT_META = {
  title: "Oddo",
  description: "I'm code stuffs",
  image: "/images/dog.png",
  type: "website",
};

export const SEO = (props: SEOProps) => {
  const pathname = usePathname();
  const meta = Object.assign(DEFAULT_META, props);

  return (
    <>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="https://oddo.vercel.app/favicon.ico" />
      <link rel="canonical" href={`https://oddo.vercel.app${pathname}`} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="oddo" />
      <meta property="og:url" content={`https://oddo.vercel.app${pathname}`} />
      <meta
        property="og:image"
        content={`https://oddo.vercel.app${meta.image}`}
      />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:site" content="@OddoAkbar" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={`https://oddo.vercel.app${meta.image}`}
      />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </>
  );
};
