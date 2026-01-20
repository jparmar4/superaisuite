import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { format } from "date-fns";
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Blog",
    description: "Stay updated with the latest trends in AI, productivity tips, market analysis strategies, and wellness guides from the SuperAISuite team.",
};

// Blog posts data - in production this would come from a CMS or MDX files
export const blogPosts = [
    {
        slug: "what-is-superaisuite-complete-guide",
        title: "What is SuperAISuite? Complete Guide 2024",
        description: "Discover everything you need to know about SuperAISuite - the all-in-one AI platform for productivity, wellness, and financial insights.",
        date: "2024-01-20",
        category: "Product",
        readTime: "8 min read",
        featured: true,
    },
    {
        slug: "how-ai-revolutionizing-personal-productivity",
        title: "How AI is Revolutionizing Personal Productivity in 2024",
        description: "Learn how artificial intelligence is transforming the way we work, organize, and accomplish our daily goals more efficiently than ever.",
        date: "2024-01-18",
        category: "Productivity",
        readTime: "10 min read",
        featured: true,
    },
    {
        slug: "top-10-ai-apps-android-2024",
        title: "Top 10 AI Apps for Android in 2024",
        description: "A comprehensive comparison of the best AI-powered apps available on Android, featuring productivity tools, health apps, and more.",
        date: "2024-01-15",
        category: "Reviews",
        readTime: "12 min read",
        featured: false,
    },
    {
        slug: "mental-health-apps-ai-support",
        title: "Mental Health Apps: How AI Provides Compassionate Support",
        description: "Explore how AI technology is making mental health support more accessible and how apps like SuperAISuite are leading the way.",
        date: "2024-01-12",
        category: "Wellness",
        readTime: "9 min read",
        featured: false,
    },
    {
        slug: "ai-trading-tools-beginners-guide",
        title: "AI Trading Tools: A Beginner's Guide to Smart Investing",
        description: "Learn how AI-powered market analysis tools can help you make better investment decisions, even if you're new to trading.",
        date: "2024-01-10",
        category: "Finance",
        readTime: "11 min read",
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
                                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group overflow-hidden">
                                        {/* Gradient Banner */}
                                        <div className="h-32 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20" />
                                        <CardHeader>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                                <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs">
                                                    {post.category}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {format(new Date(post.date), "MMM d, yyyy")}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base line-clamp-2 mb-4">
                                                {post.description}
                                            </CardDescription>
                                            <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read Article <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Recent Posts */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 group">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                                            <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="line-clamp-3">
                                            {post.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
