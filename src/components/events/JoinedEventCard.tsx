import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JoinedEventCardProps {
    item: {
        _id: string;
        eventId: string;
        title: string;
        category: string;
        date: string;
        location: string;
        image?: string;
        description?: string;
        joinedAt?: string; 
    };
}

export default function JoinedEventCard({ item }: JoinedEventCardProps) {
    const formattedJoinedDate = item.joinedAt 
        ? new Date(item.joinedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })
        : null;

    return (
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div>
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                    {item.image ? (
                        <Image
                            src={item.image}
                            alt={item.title || "Event Image"}
                            fill
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                            No Image Available
                        </div>
                    )}
                    <span className="absolute top-3 right-3 z-10 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                        {item.category}
                    </span>
                </div>

                <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-foreground line-clamp-1">
                        {item.title}
                    </h3>
                    
                    <div className="space-y-1.5 text-xs text-muted-foreground font-medium">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>Event Date: {item.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="truncate">{item.location}</span>
                        </div>
                        {formattedJoinedDate && (
                            <div className="flex items-center gap-1.5 text-emerald-600 font-semibold pt-0.5">
                                <Clock className="w-3.5 h-3.5 shrink-0" />
                                <span>Joined on: {formattedJoinedDate}</span>
                            </div>
                        )}
                        {item.description && (
                            <p className="text-muted-foreground line-clamp-1 pt-1">
                                {item.description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-5 pt-0">
                <Link href={`/events/${item.eventId}`}>
                    <Button className="w-full rounded-xl gap-2 cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground">
                        View Details <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}