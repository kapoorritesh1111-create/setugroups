import './globals.css';

export const metadata = {
  title: 'Setu Groups — Intertwining Trade & Technology',
  description: 'SETU Groups combines global trade expertise with modern SaaS platforms, intelligent workflow systems, and digital execution.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.setugroups.com'),
  openGraph: {
    title: 'Setu Groups — Intertwining Trade & Technology',
    description: 'Trade infrastructure, SaaS systems, and connected operational intelligence.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
