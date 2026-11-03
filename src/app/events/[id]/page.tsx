import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, MapPin, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventType } from "@/types/events";
import ShareButton from "@/components/events/details/ShareButton";
import JoinEventButton from "@/components/events/details/JoinEventButton";
import OrganizerCard from "@/components/events/details/OrganizerCard";
import VolunteersList from "@/components/events/details/VolunteersList";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

interface EventDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EventDetailsPage({ params }: EventDetailsPageProps) {
    const { id } = await params;

    let event: EventType | null = null;
    let isAlreadyJoined = false;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return notFound();
        }

        event = await res.json();

        const session = await auth.api.getSession({
            headers: await headers()
        });
        const currentUserId = session?.user?.id;

        if (currentUserId && event) {
            const token = await getTokenFromServer();
            const eventId = event._id;
            const volRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/join-event/${eventId}`, {
                cache: "no-store",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (volRes.ok) {
                const joinEvents = await volRes.json();
                isAlreadyJoined = joinEvents.some((e: { userId: string }) => e.userId === currentUserId);
            }
        }
    } catch (error) {
        console.error("Failed to fetch event details:", error);
        return notFound();
    }

    if (!event) {
        return notFound();
    }


    return (
        <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-6">

                <div>
                    <Link href="/events">
                        <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground pl-0 cursor-pointer">
                            <ArrowLeft className="w-4 h-4" /> Back to Events
                        </Button>
                    </Link>
                </div>

                <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-xl">
                    <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-muted">
                        {event.image && (
                            <Image
                                src={event.image}
                                alt={event.title || "Event Details Image"}
                                fill
                                priority
                                className="object-cover w-full h-full"
                            />
                        )}
                        <div className="absolute inset-0 from-background/90 via-background/30 to-transparent"></div>

                        <span className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md">
                            {event.category}
                        </span>

                        <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-heading">
                                {event.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-medium">
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span>{event.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Users className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-foreground">Volunteers Initiative</p>
                            <p className="text-xs text-muted-foreground">Join and make an impact</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <ShareButton />
                        <JoinEventButton event={event} isAlreadyJoined={isAlreadyJoined} />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-8 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold font-heading text-foreground">About this Social Initiative</h3>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                                {event.description}
                            </p>
                        </div>

                        <hr className="border-border/60" />

                        <div className="space-y-4">
                            <h4 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                VOLUNTEER GUIDELINES
                            </h4>
                            <ul className="space-y-2.5 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                                    <span>Please arrive 15 minutes before the scheduled time at the designated location.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                                    <span>Wear comfortable clothing suitable for physical social work and distribution.</span>
                                    <span>Bring any pre-coordinated relief packages or distribution items if requested.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <OrganizerCard event={event} />
                        <VolunteersList eventId={event._id} />
                    </div>

                </div>

            </div>
        </div>
    );
}