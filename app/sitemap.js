const staticRoutes = ['', '/products', '/products/setu-track', '/products/setu-crm', '/solutions', '/company', '/contact', '/case-studies', '/newsroom'];

export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.setugroups.com';
  const locales = ['en', 'hi'];
  return locales.flatMap((locale) =>
    staticRoutes.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date()
    }))
  );
}
