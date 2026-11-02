import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EventType } from "@/app/types/events";

interface EventCardProps {
    event: EventType;
}

export default function EventCard({ event }: EventCardProps) {
    
    return (
        <Card className="overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl bg-card flex flex-col justify-between">
            <div>
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                    {event.image && (
                        <div className="relative h-48 w-full overflow-hidden bg-muted">
                            <Image
                                src={event.image}
                                alt={event.title || "Event Image"}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                            />
                            <span className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                                {event.category}
                            </span>
                        </div>
                    )}
                    <span className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                        {event.category}
                    </span>
                </div>

                <CardHeader className="p-5 pb-3">
                    <h3 className="text-xl font-bold tracking-tight text-foreground line-clamp-1 font-heading">
                        {event.title}
                    </h3>
                </CardHeader>

                <CardContent className="px-5 pb-3 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary shrink-0" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <p className="text-xs line-clamp-2 pt-1 text-muted-foreground/80">
                        {event.description}
                    </p>
                </CardContent>
            </div>

            <CardFooter className="p-5 border-t border-border/50">
                <Link href={`/events/${event._id}`} className="w-full">
                    <Button className="w-full rounded-xl cursor-pointer text-xs font-semibold h-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all">
                        View Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}