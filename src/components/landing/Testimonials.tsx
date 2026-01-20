"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Product Manager",
        content: "SuperAISuite has completely transformed how I manage documents. The AI summaries save me hours every week!",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Day Trader",
        content: "The market analysis feature gives me insights I couldn't get anywhere else. It's like having a financial advisor in my pocket.",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Fitness Enthusiast",
        content: "I love the personalized workout plans. The AI actually understands my goals and adjusts accordingly.",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "Entrepreneur",
        content: "From drafting emails to analyzing contracts, this app handles it all. Absolute game-changer for my business!",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground">
                        💬 What Our Users Say
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-2xl">
                        Loved by <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Thousands</span>
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                        Join our growing community of users who are transforming their lives with AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
