"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, TrendingUp, MessageSquare, Mail, Heart, Activity } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Document Intelligence",
        description: "Instantly analyze, summarize, and extract insights from any document with advanced natural language processing.",
        icon: FileText,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "Market Analysis",
        description: "Make data-driven decisions with AI-powered trading insights and predictive market analytics.",
        icon: TrendingUp,
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
    {
        title: "Conversational AI",
        description: "Engage with an intelligent assistant that understands context and provides meaningful responses.",
        icon: MessageSquare,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        title: "Smart Communications",
        description: "Generate professional emails, messages, and content tailored to your specific needs and tone.",
        icon: Mail,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
    },
    {
        title: "Wellness Support",
        description: "Access personalized mental health resources and guidance powered by empathetic AI technology.",
        icon: Heart,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
    },
    {
        title: "Fitness Coaching",
        description: "Achieve your health goals with customized workout plans and AI-powered motivation.",
        icon: Activity,
        color: "text-red-500",
        bg: "bg-red-500/10",
    },
];

export function Features() {
    return (
        <section id="features" className="container py-24 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Everything You Need to Excel
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    From productivity to personal well-being, SuperAISuite covers every aspect of your life.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-2 hover:border-primary/50 transition-colors duration-300">
                            <CardHeader>
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.bg}`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
