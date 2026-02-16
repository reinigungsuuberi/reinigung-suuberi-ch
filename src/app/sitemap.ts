import type { MetadataRoute } from "next";
import { getAllServices } from "../data/services";

const baseUrl = "https://suuberi-reinigung.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = getAllServices();
  
  const staticPaths: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number; locales?: string[] }> = [
    { path: "/", changeFrequency: "weekly", priority: 1, locales: ["de", "fr"] },
    { path: "/dienstleistungen", changeFrequency: "monthly", priority: 0.8, locales: ["de", "fr"] },
    { path: "/impressum", changeFrequency: "yearly", priority: 0.2, locales: ["de", "fr"] },
    { path: "/datenschutz", changeFrequency: "yearly", priority: 0.2, locales: ["de", "fr"] },
  ];

  const servicePaths = services.flatMap((service) => [
    { path: `/dienstleistungen/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.7, locales: ["de", "fr"] },
  ]);

  const allPaths = [...staticPaths, ...servicePaths];

  return allPaths.flatMap(({ path, changeFrequency, priority, locales = ["de"] }) =>
    locales.map((locale) => ({
      url: locale === "fr" ? `${baseUrl}/fr${path}` : `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  );
}


