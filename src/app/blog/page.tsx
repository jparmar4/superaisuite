import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { format } from "date-fns";
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Blog",
    description: "Stay updated with the latest AI productivity tools, document summarizers, trading apps, mental health solutions, and study helpers from the SuperAISuite team.",
};

// Blog posts data - optimized for high-CPC keywords and app promotion
export const blogPosts = [
    {
        slug: "best-ai-productivity-apps-2026",
        title: "Best AI Apps for Productivity in 2026: Top 15 Tools",
        description: "Discover the top AI productivity apps for 2026, including document analysis, task automation, and smart assistants. SuperAISuite ranks #1 with 18+ AI-powered features.",
        date: "2026-01-18",
        category: "Productivity",
        readTime: "12 min read",
        featured: true,
    },
    {
        slug: "ai-document-summarizer-tools-2026",
        title: "AI Document Summarizer: 10 Best Tools to Save Time in 2026",
        description: "Compare the best AI document summarizer tools for PDF, Word, and text files. Learn how SuperAISuite's document intelligence can summarize any file in seconds.",
        date: "2026-01-15",
        category: "Productivity",
        readTime: "10 min read",
        featured: true,
    },
    {
        slug: "best-ai-trading-apps-2026",
        title: "Best AI Trading Apps 2026: Smart Investing for Beginners",
        description: "Find the best AI trading apps with market analysis and stock predictions. SuperAISuite offers real-time insights and beginner-friendly investment guidance.",
        date: "2026-01-12",
        category: "Finance",
        readTime: "11 min read",
        featured: false,
    },
    {
        slug: "best-mental-health-apps-ai-2026",
        title: "Best Mental Health Apps with AI Support 2026 (Free & Paid)",
        description: "Explore top mental health apps using AI for therapy, meditation, and wellness tracking. SuperAISuite combines mental health support with fitness coaching.",
        date: "2026-01-10",
        category: "Wellness",
        readTime: "9 min read",
        featured: false,
    },
    {
        slug: "free-ai-tutor-apps-students-2026",
        title: "Free AI Tutor Apps 2026: Best AI Study Help for Students",
        description: "Discover the best free AI tutor apps with homework help, math solvers, and study assistance. SuperAISuite offers AI tutoring plus career advice for students.",
        date: "2026-01-08",
        category: "Education",
        readTime: "10 min read",
        featured: false,
    },
];

export default function BlogIndex() {
    const featuredPosts = blogPosts.filter(p => p.featured);
    const recentPosts = blogPosts.filter(p => !p.featured);

    return (
        <div className="pt-24 pb-16">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Blog",
                "name": "SuperAISuite Blog",
                "description": "AI insights, productivity tips, and wellness guides",
                "url": "https://superaisuite.xyz/blog",
            }} />

            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        SuperAISuite <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Blog</span>
                    </h1>
                    <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
                        Insights, guides, and news about Artificial Intelligence, Productivity, and Wellness.
                    </p>
                </div>

                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredPosts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`}>
                                    <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                                        <CardHeader>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>{format(new Date(post.date), "MMM dd, yyyy")}</span>
                                                <span>•</span>
                                                <Clock className="h-4 w-4" />
                                                <span>{post.readTime}</span>
                                            </div>
                                            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </CardTitle>
                                            <CardDescription className="text-base">
                                                {post.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center text-primary font-medium">
                                                Read article
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Recent Posts */}
                {recentPosts.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {recentPosts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`}>
                                    <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                                        <CardHeader>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>{format(new Date(post.date), "MMM dd, yyyy")}</span>
                                            </div>
                                            <CardTitle className="text-lg mb-2">
                                                {post.title}
                                            </CardTitle>
                                            <CardDescription>
                                                {post.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center text-primary font-medium text-sm">
                                                Read more
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
