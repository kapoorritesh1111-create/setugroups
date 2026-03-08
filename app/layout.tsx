import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://setugroups.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Setu Groups | Intertwining Trade & Technology',
  description:
    'A modern bridge between global commerce and product-grade software. Setu Groups combines import-export execution, web app development, and a growing SaaS ecosystem.',
  openGraph: {
    title: 'Setu Groups',
    description:
      'Import-export operations, web app development, Setu Track, and Setu CRM under one master brand.',
    url: siteUrl,
    siteName: 'Setu Groups',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setu Groups',
    description:
      'Intertwining Trade & Technology across import-export, web app development, and SaaS products.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Setu Groups',
  url: siteUrl,
  slogan: 'Intertwining Trade & Technology',
  description:
    'Setu Groups operates across import-export operations, web app development, and SaaS products including Setu Track and Setu CRM.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
