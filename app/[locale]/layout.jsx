import Header from '../(sections)/components/Header';
import Footer from '../(sections)/components/Footer';
import StructuredData from '../(sections)/components/StructuredData';
import { getDictionary } from '../../lib/get-dictionary';
import { i18n } from '../../i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);

  return (
    <div className="siteShell">
      <Header locale={locale} dict={dict} />
      <main>{children}</main>
      <Footer locale={locale} />
      <StructuredData />
    </div>
  );
}
