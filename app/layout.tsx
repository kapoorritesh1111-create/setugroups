import type { Metadata } from "next";
import "./globals.css";

const title = "Setu Groups | Intertwining Trade & Technology";
const description = "A modern bridge between global commerce and product-grade software. Setu Groups combines India-led import-export execution with premium web app development and a growing SaaS ecosystem.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.setugroups.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.setugroups.com",
    siteName: "Setu Groups",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Setu Groups',
  url: 'https://www.setugroups.com',
  description,
  slogan: 'Intertwining Trade & Technology',
  knowsAbout: ['Import-export operations', 'Web app development', 'SaaS products'],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Import-export operations' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web app development' } },
    { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Setu Track' } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
