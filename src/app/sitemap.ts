import type { MetadataRoute } from "next";

const baseUrl = "https://suuberi-reinigung.ch";

const staticPaths: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.2 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}


