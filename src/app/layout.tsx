import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuperAISuite - Next-Generation AI Platform",
  description: "Transform your productivity and creativity with SuperAISuite - the world's most advanced AI suite featuring document intelligence, market analysis, conversational AI, and more.",
  keywords: ["SuperAISuite", "AI", "artificial intelligence", "document analysis", "market analysis", "productivity", "GPT-5", "AI assistant"],
  authors: [{ name: "SuperAISuite Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "SuperAISuite - Next-Generation AI Platform",
    description: "Transform your productivity with the world's most advanced AI suite",
    url: "https://superaisuite.xyz",
    siteName: "SuperAISuite",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperAISuite - Next-Generation AI Platform",
    description: "Transform your productivity with the world's most advanced AI suite",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
