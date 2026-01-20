import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, TrendingUp, MessageSquare, Mail, Heart, Activity, Download, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Features",
    description: "Explore all the powerful features of SuperAISuite - Document Intelligence, Market Analysis, Conversational AI, Smart Communications, Wellness Support, and Fitness Coaching.",
};

const features = [
    {
        title: "Document Intelligence",
        description: "Instantly analyze, summarize, and extract insights from any document with advanced natural language processing.",
        icon: FileText,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        capabilities: [
            "PDF, Word, and text file analysis",
            "Automatic summarization",
            "Key insights extraction",
            "Multi-language support",
        ],
    },
    {
        title: "Market Analysis",
        description: "Make data-driven decisions with AI-powered trading insights and predictive market analytics.",
        icon: TrendingUp,
        color: "text-green-500",
        bg: "bg-green-500/10",
        capabilities: [
            "Real-time market data",
            "Predictive trend analysis",
            "Risk assessment tools",
            "Portfolio recommendations",
        ],
    },
    {
        title: "Conversational AI",
        description: "Engage with an intelligent assistant that understands context and provides meaningful responses.",
        icon: MessageSquare,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        capabilities: [
            "Natural language understanding",
            "Context-aware responses",
            "Multi-turn conversations",
            "Personal assistant features",
        ],
    },
    {
        title: "Smart Communications",
        description: "Generate professional emails, messages, and content tailored to your specific needs and tone.",
        icon: Mail,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        capabilities: [
            "Email drafting",
            "Message templates",
            "Tone adjustment",
            "Grammar correction",
        ],
    },
    {
        title: "Wellness Support",
        description: "Access personalized mental health resources and guidance powered by empathetic AI technology.",
        icon: Heart,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        capabilities: [
            "Mood tracking",
            "Guided meditation",
            "Stress management tips",
            "Daily check-ins",
        ],
    },
    {
        title: "Fitness Coaching",
        description: "Achieve your health goals with customized workout plans and AI-powered motivation.",
        icon: Activity,
        color: "text-red-500",
        bg: "bg-red-500/10",
        capabilities: [
            "Custom workout plans",
            "Progress tracking",
            "Nutrition guidance",
            "Goal setting",
        ],
    },
];

export default function FeaturesPage() {
    return (
        <div className="pt-24 pb-16">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "SuperAISuite Features",
                "itemListElement": features.map((f, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": f.title,
                    "description": f.description,
                })),
            }} />

            {/* Hero */}
            <section className="container px-4 md:px-6 py-12 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                    Powerful <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Features</span>
                </h1>
                <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
                    Discover all the AI-powered capabilities that make SuperAISuite the ultimate productivity and wellness platform.
                </p>
            </section>

            {/* Features Grid */}
            <section className="container px-4 md:px-6 py-12">
                <div className="space-y-16">
                    {features.map((feature, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Content */}
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${feature.bg}`}>
                                            <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h2>
                                        <p className="text-muted-foreground text-lg mb-6">{feature.description}</p>
                                        <ul className="space-y-3">
                                            {feature.capabilities.map((cap, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <CheckCircle className={`w-5 h-5 ${feature.color}`} />
                                                    <span>{cap}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Visual Placeholder */}
                                    <div className={`${feature.bg} flex items-center justify-center min-h-[300px]`}>
                                        <feature.icon className={`w-32 h-32 ${feature.color} opacity-20`} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container px-4 md:px-6 py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full">
                    <Link href="https://play.google.com/store/apps/details?id=com.superaisuite" target="_blank">
                        <Download className="mr-2 h-5 w-5" />
                        Download SuperAISuite
                    </Link>
                </Button>
            </section>
        </div>
    );
}
