"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Sparkles className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                            SuperAISuite
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button asChild size="sm" className="rounded-full">
                            <Link href="https://play.google.com/store/apps/details?id=com.superaisuite" target="_blank">
                                <Download className="mr-2 h-4 w-4" />
                                Download App
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px]">
                            <div className="flex flex-col space-y-6 mt-8">
                                <Link href="/" className="flex items-center space-x-2 mb-4">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                    <span className="font-bold text-xl">SuperAISuite</span>
                                </Link>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button asChild className="mt-4 rounded-full">
                                    <Link href="https://play.google.com/store/apps/details?id=com.superaisuite" target="_blank">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download App
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
