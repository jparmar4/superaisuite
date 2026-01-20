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
        borderColor: "hover:border-blue-500/50",
    },
    {
        title: "Market Analysis",
        description: "Make data-driven decisions with AI-powered trading insights and predictive market analytics.",
        icon: TrendingUp,
        color: "text-green-500",
        bg: "bg-green-500/10",
        borderColor: "hover:border-green-500/50",
    },
    {
        title: "Conversational AI",
        description: "Engage with an intelligent assistant that understands context and provides meaningful responses.",
        icon: MessageSquare,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        borderColor: "hover:border-purple-500/50",
    },
    {
        title: "Smart Communications",
        description: "Generate professional emails, messages, and content tailored to your specific needs and tone.",
        icon: Mail,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        borderColor: "hover:border-yellow-500/50",
    },
    {
        title: "Wellness Support",
        description: "Access personalized mental health resources and guidance powered by empathetic AI technology.",
        icon: Heart,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        borderColor: "hover:border-pink-500/50",
    },
    {
        title: "Fitness Coaching",
        description: "Achieve your health goals with customized workout plans and AI-powered motivation.",
        icon: Activity,
        color: "text-red-500",
        bg: "bg-red-500/10",
        borderColor: "hover:border-red-500/50",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function Features() {
    return (
        <section id="features" className="container py-24 px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground">
                    ✨ Powerful Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-2xl">
                    Everything You Need to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Excel</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    From productivity to personal well-being, SuperAISuite covers every aspect of your life with cutting-edge AI.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {features.map((feature, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Card className={`h-full border-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${feature.borderColor} group cursor-pointer`}>
                            <CardHeader>
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${feature.bg} group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
