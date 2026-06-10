import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function Seo({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  image,
  type = "website",
  jsonLd,
}: SeoProps) {
  const location = useLocation();
  const resolvedPath = path ?? location.pathname;
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonical = `${origin}${resolvedPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="ALIGNWORKS" />
      <meta property="og:site_name" content="ALIGNWORKS" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={ogTitle ?? title} />
      <meta name="twitter:description" content={ogDescription ?? description} />
      <link rel="canonical" href={canonical} />
      {image ? <meta property="og:image" content={`${origin}${image}`} /> : null}
      {image ? <meta name="twitter:image" content={`${origin}${image}`} /> : null}
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}