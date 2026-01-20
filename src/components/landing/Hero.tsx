"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Smartphone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 lg:pt-44 pb-16">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-3xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-4"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              🚀 The Future of AI is Here
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                SuperAISuite
              </span>
              <br />
              <span className="text-foreground">Next-Generation AI Platform</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the ultimate AI ecosystem designed to empower your productivity, health, and financial growth.
              <span className="font-semibold text-foreground"> All in one powerful app.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 min-[400px]:flex-row justify-center"
          >
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <Link href="https://play.google.com/store/apps/details?id=com.superaisuite" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Get it on Google Play
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full hover:scale-105 transition-all">
              <Link href="/features">
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Phone Mockup with Parallax Effect */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-4xl mt-12 relative z-10"
          >
            <div className="relative mx-auto w-[280px] md:w-[320px]">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
                  {/* App Content Preview */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <Smartphone className="w-16 h-16 mb-4 opacity-80" />
                    <p className="text-lg font-semibold">SuperAISuite</p>
                    <p className="text-sm opacity-70 mt-1">AI at your fingertips</p>
                  </div>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-blue-500/30 rounded-[4rem] blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8 text-muted-foreground text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span>4.8 Rating</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>10K+ Downloads</div>
            <div className="h-4 w-px bg-border" />
            <div>Free to Use</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
