"use client";

import { Mail, Send } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="bg-background py-16 md:py-24 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-7 h-7" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight font-heading mb-4 max-w-2xl mx-auto">
                        Stay Updated on Nearby Drives
                    </h2>

                    <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed max-w-xl mx-auto mb-8">
                        Subscribe to our weekly newsletter to get instant notifications about new social development events and volunteer opportunities in your area.
                    </p>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
                    >
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="input input-md md:input-lg w-full bg-background border border-border focus:border-primary text-foreground placeholder:text-muted-foreground rounded-xl"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-md md:btn-lg gap-2 w-full sm:w-auto rounded-xl shadow-sm"
                        >
                            Subscribe <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}