import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditEventDialog from "./EditEventDialog";
import DeleteEventDialog from "./DeleteEventDialog";

interface ManageEventCardProps {
    event: {
        _id: string;
        title: string;
        category: string;
        date: string;
        location: string;
        image?: string;
        description?: string;
    };
}

export default function ManageEventCard({ event }: ManageEventCardProps) {
    return (
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div>
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                    {event.image ? (
                        <Image
                            src={event.image}
                            alt={event.title || "Event Image"}
                            fill
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                            No Image Available
                        </div>
                    )}
                    <span className="absolute top-3 right-3 z-10 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                        {event.category}
                    </span>
                </div>

                <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-foreground line-clamp-1">
                        {event.title}
                    </h3>
                    
                    <div className="space-y-1.5 text-xs text-muted-foreground font-medium">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="truncate">{event.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5 pt-0 grid grid-cols-3 gap-2">
                <Link href={`/events/${event._id}`} className="w-full">
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full rounded-xl gap-1 text-xs cursor-pointer border-blue-500/30 bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 hover:text-blue-700 dark:text-blue-400"
                    >
                        <Eye className="w-3.5 h-3.5" /> View
                    </Button>
                </Link>

                <EditEventDialog event={event} />

                <DeleteEventDialog eventId={event._id} />
            </div>
        </div>
    );
}