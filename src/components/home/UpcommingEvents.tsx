import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EventType } from "@/types/events";
import EventCard from "../events/EventCard";

const UpcomingEvents = async () => {
    let events: EventType[] = [];

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events`, {
            cache: "no-store",
        });
        
        if (res.ok) {
            const data = await res.json();
            events = Array.isArray(data) ? data.slice(0, 6) : (data.events || []).slice(0, 6);
        }
    } catch (error) {
        console.error("Failed to fetch events:", error);
    }

    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Explore & Join
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-foreground mt-2 tracking-tight">
                            Recent Upcoming Events
                        </h2>
                        <p className="text-muted-foreground text-sm mt-1 max-w-xl">
                            Discover social impact initiatives, community drives, and meaningful events happening near you.
                        </p>
                    </div>
                    <Link
                        href="/events"
                        className="btn btn-outline border-border hover:bg-muted text-foreground rounded-xl flex items-center gap-2 font-medium w-fit px-4 py-2"
                    >
                        <span>View All Events</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {events.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event) => (
                            <EventCard key={event._id} event={event} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 border border-dashed border-border rounded-2xl bg-card p-6">
                        <p className="text-muted-foreground text-sm">No upcoming events found right now.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default UpcomingEvents;