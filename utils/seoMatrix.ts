import { Metadata } from 'next';

type SEOProps = {
  title: string;
  description: string;
  urlPath: string;
  locale?: 'en' | 'ar';
};

const BASE_URL = 'https://acservicebahrain.com';

export function constructMetadata({ title, description, urlPath, locale = 'en' }: SEOProps): Metadata {
  // Ensure the URL path doesn't result in double slashes if it's strictly empty or '/'
  const cleanPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;
  const fullUrl = `${BASE_URL}${cleanPath === '/' ? '' : cleanPath}`;
  
  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-BH': `${BASE_URL}/en${cleanPath.replace(/^\/(en|ar)/, '')}`,
        'ar-BH': `${BASE_URL}/ar${cleanPath.replace(/^\/(en|ar)/, '')}`,
      },
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: 'website',
      siteName: 'AC Service Bahrain',
      images: [
        {
          url: `${BASE_URL}/images/logo.webp`,
          width: 800,
          height: 600,
          alt: 'AC Service Bahrain - Premium HVAC Network',
        },
      ],
      locale: locale === 'ar' ? 'ar_BH' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/images/logo.webp`],
    },
  };
}
