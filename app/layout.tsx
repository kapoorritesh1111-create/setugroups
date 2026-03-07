import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Setu Groups — Trade, Technology, and SaaS Products',
  description:
    'Setu Groups builds across import-export operations, web app development, and modern SaaS products including Setu Track and Setu CRM.',
  openGraph: {
    title: 'Setu Groups',
    description:
      'Intertwining trade and technology across import-export, custom web apps, and SaaS products.',
    type: 'website'
  },
  icons: {
    icon: [
      { url: '/brand/setu-groups/favicons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/setu-groups/favicons/favicon-16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/brand/setu-groups/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
