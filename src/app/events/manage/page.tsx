import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ManageEventCard from "@/components/events/manage/ManageEventCard";

interface EventType {
    _id: string;
    title: string;
    category: string;
    date: string;
    location: string;
    image?: string;
    description?: string;
}

export default async function ManageEventsPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const currentUserId = session?.user?.id;

    if (!currentUserId) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-bold text-foreground mb-2">Please Login</h2>
                <p className="text-muted-foreground mb-6">You need to log in to manage your events.</p>
                <Link href="/login">
                    <Button>Login Now</Button>
                </Link>
            </div>
        );
    }

    let myEvents: EventType[] = [];

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events/manage/${currentUserId}`, {
            cache: "no-store",
        });

        if (res.ok) {
            myEvents = await res.json();
        }
    } catch (error) {
        console.error("Failed to fetch managed events:", error);
    }

    return (
        <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-foreground font-heading">
                            Manage Events
                        </h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Here are all the events you have created. You can view, edit, or delete them.
                        </p>
                    </div>
                    <Link href="/events/create">
                        <Button className="gap-2 rounded-xl cursor-pointer">
                            <Plus className="w-4 h-4" /> Create Event
                        </Button>
                    </Link>
                </div>
                <hr className="border-border" />

                {myEvents.length === 0 ? (
                    <div className="bg-card border border-border rounded-3xl p-12 text-center space-y-4 shadow-sm">
                        <p className="text-muted-foreground">You haven't created any events yet.</p>
                        <Link href="/events/create">
                            <Button className="gap-2">
                                Create Your First Event <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myEvents.map((event) => (
                            <ManageEventCard key={event._id} event={event} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}