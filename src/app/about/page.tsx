import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Users, Zap, Download } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about SuperAISuite - our mission to democratize AI and empower individuals with cutting-edge technology for productivity, health, and financial growth.",
};

export default function AboutPage() {
    return (
        <div className="pt-24 pb-16">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "SuperAISuite",
                "url": "https://superaisuite.xyz",
                "description": "Next-Generation AI Platform for productivity, health, and financial growth.",
            }} />

            {/* Hero */}
            <section className="container px-4 md:px-6 py-16 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                    About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">SuperAISuite</span>
                </h1>
                <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
                    We believe everyone deserves access to powerful AI tools. Our mission is to democratize artificial intelligence
                    and make it accessible to individuals everywhere.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="container px-4 md:px-6 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-primary/10 bg-gradient-to-br from-white via-white to-primary/5 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                        <CardContent className="p-8">
                            <Target className="w-12 h-12 text-primary mb-6" />
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                To empower individuals with AI-powered tools that enhance productivity, support mental and physical wellness,
                                and provide intelligent insights for better decision-making in all aspects of life.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-primary/10 bg-gradient-to-br from-white via-white to-purple-500/5 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
                        <CardContent className="p-8">
                            <Sparkles className="w-12 h-12 text-purple-500 mb-6" />
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                A world where advanced AI technology is not reserved for large corporations, but available to every individual
                                who wants to work smarter, live healthier, and achieve their goals.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Values */}
            <section className="container px-4 md:px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Users, title: "User-First", desc: "Every feature is designed with our users in mind." },
                        { icon: Zap, title: "Innovation", desc: "We push the boundaries of what AI can do." },
                        { icon: Target, title: "Accessibility", desc: "Powerful AI should be available to everyone." },
                        { icon: Sparkles, title: "Quality", desc: "We deliver only the highest quality experiences." },
                    ].map((value, index) => (
                        <Card key={index} className="text-center border-primary/10 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5">
                            <CardContent className="pt-8 pb-6">
                                <value.icon className="w-10 h-10 mx-auto text-primary mb-4" />
                                <h3 className="font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                                <p className="text-muted-foreground text-sm">{value.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container px-4 md:px-6 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Download SuperAISuite today and experience the future of AI-powered personal assistance.
                </p>
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full">
                    <Link href="https://play.google.com/store/apps/details?id=com.superaisuite" target="_blank">
                        <Download className="mr-2 h-5 w-5" />
                        Download Now
                    </Link>
                </Button>
            </section>
        </div>
    );
}
