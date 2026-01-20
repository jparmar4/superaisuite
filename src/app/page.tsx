import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import { FAQ } from "@/components/landing/FAQ";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { Download } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

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
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <JsonLd data={jsonLd} />
      <Hero />
      <Features />
      <FAQ />

      {/* CTA Section */}
      <section className="border-t bg-muted/40 py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Life?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Join thousands of users who are using SuperAISuite to work smarter, live healthier, and grow faster.
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-xl rounded-full mt-6 shadow-lg hover:shadow-xl transition-all">
              <Link href="https://play.google.com/store/apps/details?id=com.superaisuite" target="_blank">
                <Download className="mr-2 h-6 w-6" />
                Download App Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
