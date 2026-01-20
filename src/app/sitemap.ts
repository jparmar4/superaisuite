import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://superaisuite.xyz";

    // In a real app, you would fetch these from your CMS/Database
    const blogPosts = [
        "future-of-ai-productivity",
        "market-analysis-ai-trading",
        "mental-health-ai-support",
    ];

    const blogUrls = blogPosts.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        ...blogUrls,
    ];
}
