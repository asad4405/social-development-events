"use client";

import Link from "next/link";
import { ArrowRight, PlusCircle, Sparkles } from "lucide-react";

export default function Banner() {
    return (
        <section className="relative overflow-hidden bg-background py-16 md:py-24 border-b border-border">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-155 h-88 bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-semibold mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>Social Development Events Platform</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-[1.15] font-heading mb-6">
                    Unite for Impact. <br />
                    <span className="text-primary">
                        Empower Every Community.
                    </span>
                </h1>

                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
                    UnityPulse brings together individuals and organizations to organize, discover, and participate in impactful social development initiatives across local neighborhoods.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/upcoming-events"
                        className="btn btn-primary btn-md md:btn-lg gap-2 w-full sm:w-auto shadow-sm"
                    >
                        Explore Events <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/create-event"
                        className="btn btn-outline border-border hover:bg-muted text-foreground btn-md md:btn-lg gap-2 w-full sm:w-auto"
                    >
                        <PlusCircle className="w-4 h-4 text-primary" /> Create Event
                    </Link>
                </div>
            </div>
        </section>
    );
}