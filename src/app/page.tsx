import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import { FAQ } from "@/components/landing/FAQ";
import { Testimonials } from "@/components/landing/Testimonials";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SuperAISuite",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  },
  "description": "The ultimate AI ecosystem designed to empower your productivity, health, and financial growth.",
  "installUrl": "https://play.google.com/store/apps/details?id=com.superaisuite"
};

export default function Home() {
  return (
    <div className="flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <JsonLd data={jsonLd} />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Life with <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">AI?</span>
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed max-w-2xl">
              Join thousands of users who are using SuperAISuite to work smarter, live healthier, and grow faster. Download now and experience the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Link href="https://play.google.com/store/apps/details?id=com.superaisuite" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download Free App
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full hover:scale-105 transition-all">
                <Link href="/features">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
