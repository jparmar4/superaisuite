import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
    product: [
        { href: "/features", label: "Features" },
        { href: "/blog", label: "Blog" },
        { href: "https://play.google.com/store/apps/details?id=com.superaisuite", label: "Download App" },
    ],
    company: [
        { href: "/about", label: "About Us" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
    ],
    social: [
        { href: "#", label: "Twitter", icon: Twitter },
        { href: "#", label: "LinkedIn", icon: Linkedin },
        { href: "#", label: "GitHub", icon: Github },
    ],
};

export function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Sparkles className="h-6 w-6 text-primary" />
                            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                                SuperAISuite
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-4">
                            The ultimate AI ecosystem for productivity, health, and financial growth.
                        </p>
                        {/* Play Store Badge */}
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.superaisuite"
                            target="_blank"
                            className="inline-block"
                        >
                            <img
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                alt="Get it on Google Play"
                                className="h-12"
                            />
                        </Link>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            {footerLinks.social.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} SuperAISuite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
