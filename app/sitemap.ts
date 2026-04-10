import { MetadataRoute } from "next";
import { cities } from "../data/cities";
import { services } from "../data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://acservicebahrain.com";
  const locales = ["en", "ar"];

  // Helper to slugify city names
  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

  const urls: MetadataRoute.Sitemap = [];

  // 1. Root & basic locale paths
  urls.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  });

  locales.forEach((locale) => {
    urls.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    });

    urls.push({
      url: `${baseUrl}/${locale}/areas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    urls.push({
      url: `${baseUrl}/${locale}/cost`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    urls.push({
      url: `${baseUrl}/${locale}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // 2. City base paths & City + Service paths
    cities.forEach((city) => {
      const citySlug = slugify(city);
      
      // City main page
      urls.push({
        url: `${baseUrl}/${locale}/${citySlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });

      // Services within each city
      services.forEach((service) => {
        urls.push({
          url: `${baseUrl}/${locale}/${citySlug}/${service.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      });
    });

    // 3. Independent Service pages
    services.forEach((service) => {
      urls.push({
        url: `${baseUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  return urls;
}
