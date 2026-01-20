"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is SuperAISuite?",
        answer: "SuperAISuite is a comprehensive AI ecosystem available as a mobile app. It integrates document analysis, market trading insights, conversational AI, and wellness coaching into a single platform."
    },
    {
        question: "How does the Document Intelligence feature work?",
        answer: "Our Document Intelligence uses advanced NLP to scan, summarize, and extract key insights from your documents instantly. It supports various formats including PDF and Word documents."
    },
    {
        question: "Is the Market Analysis feature suitable for beginners?",
        answer: "Yes! Our AI analyzes complex market data and presents it in easy-to-understand insights, making it valuable for both seasoned traders and beginners looking to make data-driven decisions."
    },
    {
        question: "Can I use SuperAISuite for health and fitness?",
        answer: "Absolutely. SuperAISuite includes a dedicated Wellness Support module for mental health guidance and a Fitness Coaching feature that creates personalized workout plans based on your goals."
    },
    {
        question: "Is my data secure?",
        answer: "We prioritize your privacy and security. specific features like health data are processed with the highest standards of data protection, ensuring your personal information remains confidential."
    }
];

export function FAQ() {
    return (
        <section className="container py-24 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground md:text-lg">
                    Get answers to common questions about SuperAISuite.
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
