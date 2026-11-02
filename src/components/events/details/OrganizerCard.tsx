import { ShieldCheck } from "lucide-react";
import { EventType } from "@/types/events";

interface OrganizerCardProps {
    event: EventType;
}

export default function OrganizerCard({ event }: OrganizerCardProps) {
    const organizerName = event.userName || "";
    const organizerEmail = event.userEmail || "";
    const initial = organizerName.charAt(0).toUpperCase();

    return (
        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
            <h4 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                INITIATIVE ORGANIZER
            </h4>
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-lg overflow-hidden relative">
                    <span>{initial}</span>
                </div>
                <div>
                    <h5 className="font-bold text-foreground text-sm">{organizerName}</h5>
                    <p className="text-xs text-muted-foreground">{organizerEmail}</p>
                </div>
            </div>
            <div className="pt-2 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Verified Platform Member</span>
            </div>
        </div>
    );
}