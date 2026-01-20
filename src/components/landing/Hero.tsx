"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Smartphone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              The Future of AI is Here
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              SuperAISuite
              <br />
              Next-Generation AI Platform
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the ultimate AI ecosystem designed to empower your productivity, health, and financial growth. All in one app.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 min-[400px]:flex-row justify-center"
          >
            <Button asChild size="lg" className="h-12 px-8 text-lg rounded-full">
              <Link href="https://play.google.com/store/apps/details?id=com.superaisuite" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Get it on Google Play
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full">
              <Link href="#features">
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7, delay: 0.4 }}
             className="w-full max-w-5xl mt-12 relative z-10"
          >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl border bg-background shadow-2xl">
                {/* Placeholder for a hero image or app screenshot. Using a gradient div for now if no image is available, but the user requested high class aesthetics. */}
                 <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-blue-500/10 flex items-center justify-center">
                    <Smartphone className="w-24 h-24 text-muted-foreground/20" />
                    <p className="absolute bottom-4 text-muted-foreground/40 font-medium">App Dashboard Preview</p>
                 </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
