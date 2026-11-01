"use client";

import { CalendarCheck, ShieldCheck, HeartHandshake, Compass } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        {
            icon: HeartHandshake,
            title: "Community-Led Drives",
            description: "Organize cleanups, blood donations, winter drives, and food distributions in your neighborhood within minutes.",
        },
        {
            icon: CalendarCheck,
            title: "Seamless RSVP & Joining",
            description: "Join verified social initiatives instantly with a single click and coordinate directly with event leaders.",
        },
        {
            icon: ShieldCheck,
            title: "Creator Event Controls",
            description: "Manage, edit, update details, and monitor participant lists with built-in event organizer authorization.",
        },
        {
            icon: Compass,
            title: "Real-Time Event Discovery",
            description: "Filter and discover upcoming social impact drives tailored by location, date, and category seamlessly.",
        },
    ];

    return (
        <section className="bg-background py-16 md:py-24 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
                        Platform Features
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight font-heading mb-4">
                        Built for Social Impact
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed">
                        A frictionless platform connecting volunteers with verified local community initiatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between hover:border-primary/50 transition-colors"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-3 font-heading">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}