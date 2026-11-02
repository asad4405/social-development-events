import { JoinEventType } from "@/types/events";

interface JoinEventListProps {
    eventId: string;
}

export default async function VolunteersList({ eventId }: JoinEventListProps) {
    let volunteers: JoinEventType[] = [];

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/join-event/${eventId}`, {
            cache: "no-store",
        });

        if (res.ok) {
            volunteers = await res.json();
        }
    } catch (error) {
        console.error("Failed to fetch volunteers:", error);
    }

    return (
        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
            <h4 className="text-xs font-bold tracking-wider text-muted-foreground uppercase flex items-center justify-between">
                <span>CONFIRMED VOLUNTEERS</span>
                <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    {volunteers.length}
                </span>
            </h4>

            {volunteers.length === 0 ? (
                <p className="text-sm text-muted-foreground italic py-2">
                    No volunteers have joined yet. Be the first one!
                </p>
            ) : (
                <div className="space-y-3">
                    {volunteers.map((vol) => (
                        <div key={vol._id} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                                {vol.userName ? vol.userName.charAt(0).toUpperCase() : "U"}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-foreground">{vol.userName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}