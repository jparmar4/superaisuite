import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuperAISuite - Next-Generation AI Platform",
  description: "Experience the ultimate AI ecosystem designed to empower your productivity, health, and financial growth. Features Document Intelligence, Market Analysis, and more.",
  keywords: ["AI", "Artificial Intelligence", "Productivity", "Health", "Finance", "Wellness", "SuperAISuite", "Android App"],
  authors: [{ name: "SuperAISuite Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://superaisuite.xyz",
    siteName: "SuperAISuite",
    title: "SuperAISuite - Next-Generation AI Platform",
    description: "The ultimate AI ecosystem for productivity, health, and finance.",
    images: [
      {
        url: "/og-image.jpg", // We should create this later
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
