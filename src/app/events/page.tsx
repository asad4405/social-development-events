import Link from "next/link";
import EventCard from "@/components/events/EventCard";
import EventFilters from "@/components/events/EventFilter";
import { EventType } from "@/types/events";
import { CalendarDays, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
    searchParams: Promise<{
        category?: string;
        search?: string;
    }>;
}

export default async function EventsPage({ searchParams }: PageProps) {
    const resolvedParams = await searchParams;
    const currentCategory = resolvedParams.category || "All";
    const searchQuery = resolvedParams.search || "";

    let events: EventType[] = [];
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events`, {
            cache: "no-store",
        });
        events = await res.json();
    } catch (error) {
        console.error("Failed to fetch events:", error);
    }

    const filteredEvents = events.filter((event) => {
        const matchesCategory =
            currentCategory === "All" ||
            event.category.toLowerCase() === currentCategory.toLowerCase();

        const matchesSearch =
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.location.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

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
                    <Link href="/events/create-event">
                        <Button className="rounded-xl gap-2 font-semibold shadow-md">
                            <Plus className="w-4 h-4" /> Create Event
                        </Button>
                    </Link>
                </div>

                <EventFilters />

                {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.map((event: EventType) => (
                            <EventCard key={event._id} event={event} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center space-y-3 bg-card border border-border rounded-2xl p-8 shadow-sm">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <CalendarDays className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-foreground">No Events Found</h3>
                        <p className="text-sm text-muted-foreground max-w-sm">
                            No events match your selected category or search keyword. Try changing your filters!
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}