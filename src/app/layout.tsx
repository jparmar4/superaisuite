import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SuperAISuite - Next-Generation AI Platform",
    template: "%s | SuperAISuite",
  },
  description: "Experience the ultimate AI ecosystem designed to empower your productivity, health, and financial growth. Features Document Intelligence, Market Analysis, and more.",
  keywords: ["AI", "Artificial Intelligence", "Productivity", "Health", "Finance", "Wellness", "SuperAISuite", "Android App", "AI Assistant", "Document Analysis", "Market Trading"],
  authors: [{ name: "SuperAISuite Team" }],
  creator: "SuperAISuite",
  publisher: "SuperAISuite",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://superaisuite.xyz",
    siteName: "SuperAISuite",
    title: "SuperAISuite - Next-Generation AI Platform",
    description: "The ultimate AI ecosystem for productivity, health, and finance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SuperAISuite Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperAISuite - Next-Generation AI Platform",
    description: "The ultimate AI ecosystem for productivity, health, and finance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
