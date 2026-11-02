"use client";

import Link from "next/link";
import { ArrowRight, PlusCircle, Sparkles } from "lucide-react";

export default function Banner() {
    return (
        <section className="relative overflow-hidden bg-background py-16 md:py-24 border-b border-border">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-semibold mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>Community-Driven Social Development Platform</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight font-heading mb-6">
                    Gather for Good. <br />
                    <span className="text-primary">
                        Transform Your Neighborhood.
                    </span>
                </h1>

                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
                    Create, discover, and join local social service drives in your neighborhood. From winter clothes and blanket distribution in Mirpur and Mohammadpur to urban tree plantations and cleanups.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Link
                        href="/events"
                        className="btn btn-primary btn-md md:btn-lg gap-2 w-full sm:w-auto shadow-sm"
                    >
                        Explore Upcoming Events <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/events/create-event"
                        className="btn btn-outline border-border hover:bg-muted text-foreground btn-md md:btn-lg gap-2 w-full sm:w-auto"
                    >
                        <PlusCircle className="w-4 h-4 text-primary" /> Create an Event
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center">
                        <span className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">2,500+</span>
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">Community Members</span>
                    </div>

                    <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center">
                        <span className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">320+</span>
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">Successful Drives</span>
                    </div>

                    <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center">
                        <span className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">15,000+</span>
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">Volunteers Joined</span>
                    </div>

                    <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center">
                        <span className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">50+</span>
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">Local Districts Covered</span>
                    </div>
                </div>
            </div>
        </section>
    );
}