import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mopify.uz";
  const locales = ["ru", "uz"];

  const pages = [""];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page ? `/${page}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru${page ? `/${page}` : ""}`,
          uz: `${baseUrl}/uz${page ? `/${page}` : ""}`,
        },
      },
    }))
  );
}
