import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { JsonLd } from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";

// Mock data fetcher
const getPost = (slug: string) => {
    const posts: Record<string, any> = {
        "future-of-ai-productivity": {
            title: "The Future of AI in Personal Productivity",
            date: "2024-03-15",
            author: "SuperAISuite Team",
            content: `
        <p>Artificial Intelligence is rapidly transforming how we approach our daily tasks. From automated scheduling to intelligent document summarization, AI is no longer just a buzzword—it's a practical tool for efficiency.</p>
        <h2>Automating the Mundane</h2>
        <p>One of the biggest advantages of AI is its ability to handle repetitive tasks. Tools like SuperAISuite allow users to automate email generation, giving them more time to focus on creative and strategic work.</p>
        <h2>Intelligent Document Processing</h2>
        <p>Imagine reading a 50-page report in seconds. With Document Intelligence, AI can extract key insights, making information consumption faster and smarter.</p>
        <h2>Conclusion</h2>
        <p>The future of productivity is here, and it's powered by AI. Embracing these tools is the first step towards a more efficient life.</p>
      `,
        },
        "market-analysis-ai-trading": {
            title: "Leveraging AI for Smarter Market Analysis",
            date: "2024-03-10",
            author: "Market Analyst",
            content: "<p>Coming soon...</p>"
        },
        "mental-health-ai-support": {
            title: "The Role of AI in Mental Wellness",
            date: "2024-03-05",
            author: "Wellness Expert",
            content: "<p>Coming soon...</p>"
        }
    };
    return posts[slug] || null;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | SuperAISuite Blog`,
        description: `Read about ${post.title} on the SuperAISuite blog.`,
        authors: [{ name: post.author }],
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "datePublished": post.date,
        "author": {
            "@type": "Organization",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "SuperAISuite",
            "logo": {
                "@type": "ImageObject",
                "url": "https://superaisuite.xyz/logo.png"
            }
        }
    };

    return (
        <article className="container py-16 px-4 md:px-6 max-w-3xl mx-auto">
            <JsonLd data={jsonLd} />
            <Button variant="ghost" asChild className="mb-8">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>

            <div className="space-y-4 mb-8 text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {format(new Date(post.date), "MMMM d, yyyy")}
                    </span>
                    <span className="flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        {post.author}
                    </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {post.title}
                </h1>
            </div>

            <div
                className="prose prose-gray dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
