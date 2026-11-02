import EventCard from "@/components/events/EventCard";
import { CalendarDays } from "lucide-react";
import { EventType } from "../types/events";

export default async function UpcomingEventsPage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events`, {
        cache: "no-store",
    });

    const events = await res.json();
    
    return (
        <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                
                <div className="border-b border-border pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-foreground">
                            Upcoming Events 
                        </h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Explore upcoming community and social impact events happening soon.
                        </p>
                    </div>
                </div>

                {events.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event: EventType) => (
                            <EventCard key={event._id} event={event} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center space-y-3 bg-card border border-border rounded-2xl p-8 shadow-sm">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <CalendarDays className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-foreground">No Upcoming Events</h3>
                        <p className="text-sm text-muted-foreground max-w-sm">
                            There are no upcoming events at the moment. Please check back later!
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}