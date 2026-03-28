import { i18n } from "@/i18n-config";

const baseUrl = "https://systain-algeria.vercel.app";

const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/frameworks", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap() {
  const entries = [];

  for (const locale of i18n.locales) {
    for (const page of pages) {
      const alternates = {};
      for (const alt of i18n.locales) {
        alternates[alt] = `${baseUrl}/${alt}${page.path}`;
      }

      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages: alternates },
      });
    }
  }

  return entries;
}
