import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import JoinedEventCard from "@/components/events/JoinedEventCard";
import { JoinEventType } from "@/types/events";

export default async function JoinedEventsPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const currentUserId = session?.user?.id;

    if (!currentUserId) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-bold text-foreground mb-2">Please Login</h2>
                <p className="text-muted-foreground mb-6">You need to log in to view your joined events.</p>
                <Link href="/login">
                    <Button>Login Now</Button>
                </Link>
            </div>
        );
    }

    let joinedEvents: JoinEventType[] = [];

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/joined-event/${currentUserId}`, {
            cache: "no-store",
        });

        if (res.ok) {
            joinedEvents = await res.json();
        }
    } catch (error) {
        console.error("Failed to fetch joined events:", error);
    }

    return (
        <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-foreground font-heading">
                        My Joined Events
                    </h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Here are all the social initiatives and events you have committed to volunteer for.
                    </p>
                </div>
                <hr className="border-border" />

                {joinedEvents.length === 0 ? (
                    <div className="bg-card border border-border rounded-3xl p-12 text-center space-y-4 shadow-sm">
                        <p className="text-muted-foreground">You haven't joined any events yet.</p>
                        <Link href="/events">
                            <Button className="gap-2">
                                Explore Events <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {joinedEvents.map((item) => (
                            <JoinedEventCard key={item._id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}