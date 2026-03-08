import Script from 'next/script';

export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.setugroups.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SETU Groups',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'SETU Groups combines trade execution, SaaS products, and connected operational systems.',
    slogan: 'Intertwining Trade & Technology'
  };

  return (
    <Script
      id="setu-org-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
