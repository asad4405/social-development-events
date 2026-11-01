"use client";

import Link from "next/link";
import { Heart, Mail, Phone, MapPin, HandHeart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-card text-card-foreground border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border">

                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-extrabold text-xl font-heading">
                                <HandHeart className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black text-foreground tracking-tight font-heading">
                                UnityPulse
                            </span>
                        </Link>

                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6 font-normal">
                            Empowering local communities by connecting passionate volunteers with impactful social development initiatives across Bangladesh.
                        </p>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-lg bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-colors"
                                aria-label="GitHub"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-lg bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-lg bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-colors"
                                aria-label="Twitter / X"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-lg bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider font-heading mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-sm font-medium text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/upcoming-events" className="hover:text-primary transition-colors">
                                    Explore Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/create-event" className="hover:text-primary transition-colors">
                                    Host an Event
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider font-heading mb-4">
                            Categories
                        </h4>
                        <ul className="space-y-2.5 text-sm font-medium text-muted-foreground">
                            <li>
                                <Link href="/upcoming-events?category=environment" className="hover:text-primary transition-colors">
                                    Environment & Tree Drive
                                </Link>
                            </li>
                            <li>
                                <Link href="/upcoming-events?category=relief" className="hover:text-primary transition-colors">
                                    Relief & Blanket Drives
                                </Link>
                            </li>
                            <li>
                                <Link href="/upcoming-events?category=education" className="hover:text-primary transition-colors">
                                    Education & Youth Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/upcoming-events?category=cleanup" className="hover:text-primary transition-colors">
                                    Neighborhood Cleanup
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider font-heading mb-4">
                            Contact Info
                        </h4>
                        <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                            <li className="flex items-center gap-2.5">
                                <MapPin className="w-4 h-4 text-primary shrink-0" />
                                <span>Mirpur 2, Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-primary shrink-0" />
                                <span>support@unitypulse.org</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-primary shrink-0" />
                                <span>+880 1700-000000</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-foreground">
                    <p>© {new Date().getFullYear()} UnityPulse. All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        <span>Built with</span>
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                        <span>for Social Impact</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}