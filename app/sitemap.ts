import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://setugroups.com';
  return [
    '',
    '/setu-track',
    '/pricing',
    '/setu-crm',
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
