import { MetadataRoute } from "next";
import { cities } from "../data/cities";
import { services } from "../data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://acservicebahrain.com";
  const locales = ["en", "ar"];

  // Helper to slugify city names
  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

  const urls: MetadataRoute.Sitemap = [];

  // Helper to construct alternate languages
  const getAlternates = (path: string) => ({
    languages: {
      en: `${baseUrl}/en${path}`,
      ar: `${baseUrl}/ar${path}`,
    },
  });

  // 1. Root
  urls.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
    alternates: getAlternates(''),
  });

  locales.forEach((locale) => {
    // We only push locale-specific URLs mapping to themselves + alternates
    // Actually, each path only needs to be defined once with alternates!
    // However, to keep it comprehensive and exactly like the user wants:
    
    const localePath = `/${locale}`;

    urls.push({
      url: `${baseUrl}${localePath}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
      alternates: getAlternates(''),
    });

    urls.push({
      url: `${baseUrl}${localePath}/areas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: getAlternates('/areas'),
    });

    urls.push({
      url: `${baseUrl}${localePath}/cost`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: getAlternates('/cost'),
    });

    urls.push({
      url: `${baseUrl}${localePath}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: getAlternates('/guides'),
    });

    // 2. City base paths & City + Service paths
    cities.forEach((city) => {
      const citySlug = slugify(city);
      
      urls.push({
        url: `${baseUrl}${localePath}/${citySlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: getAlternates(`/${citySlug}`),
      });

      services.forEach((service) => {
        urls.push({
          url: `${baseUrl}${localePath}/${citySlug}/${service.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.7,
          alternates: getAlternates(`/${citySlug}/${service.slug}`),
        });
      });
    });

    // 3. Independent Service pages
    services.forEach((service) => {
      urls.push({
        url: `${baseUrl}${localePath}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: getAlternates(`/services/${service.slug}`),
      });
    });
  });

  return urls;
}
