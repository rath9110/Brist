import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/results", "/api/"],
    },
    sitemap: "https://peiling.se/sitemap.xml",
  };
}
