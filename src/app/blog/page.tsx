import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SuperAISuite Blog | Latest AI Insights",
    description: "Stay updated with the latest trends in AI, productivity tips, market analysis strategies, and wellness guides from the SuperAISuite team.",
};

// Mock data for now - in a real app this would come from MDX files or a CMS
const posts = [
    {
        slug: "future-of-ai-productivity",
        title: "The Future of AI in Personal Productivity",
        description: "Discover how AI tools are reshaping the way we work and manage our daily tasks for maximum efficiency.",
        date: "2024-03-15",
        category: "Productivity",
    },
    {
        slug: "market-analysis-ai-trading",
        title: "Leveraging AI for Smarter Market Analysis",
        description: "Learn how predictive algorithms can help you make better trading decisions and understand market trends.",
        date: "2024-03-10",
        category: "Finance",
    },
    {
        slug: "mental-health-ai-support",
        title: "The Role of AI in Mental Wellness",
        description: "Exploring how compassionate AI can provide accessible support and daily check-ins for better mental health.",
        date: "2024-03-05",
        category: "Wellness",
    },
];

export default function BlogIndex() {
    return (
        <div className="container py-16 px-4 md:px-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    SuperAISuite Blog
                </h1>
                <p className="text-muted-foreground md:text-xl max-w-[700px]">
                    Insights, guides, and news about Artificial Intelligence, Productivity, and Wellness.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/20">
                            <CardHeader>
                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                    <Calendar className="mr-1 h-3 w-3" />
                                    {format(new Date(post.date), "MMMM d, yyyy")}
                                    <span className="mx-2">•</span>
                                    <span className="text-primary font-medium">{post.category}</span>
                                </div>
                                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="line-clamp-3 text-base">
                                    {post.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
