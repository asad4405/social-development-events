"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client"; 
import { EventType } from "@/types/events";

interface JoinEventButtonProps {
    event: EventType;
    isAlreadyJoined: boolean;
}

export default function JoinEventButton({ event, isAlreadyJoined }: JoinEventButtonProps) {
    const router = useRouter();

    const { data: session } = useSession();
    const currentUser = session?.user;

    const handleJoin = async () => {
        if (!currentUser?.id) {
            toast.error("Please login to join this event!");
            router.push("/login");
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/join-event`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    event, 
                    userId: currentUser.id,
                    userName: currentUser.name,
                    userEmail: currentUser.email,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Successfully joined the event!");
                router.refresh(); 
            } else {
                toast.error(data.error || "Failed to join event.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Button 
            onClick={handleJoin}
            disabled={isAlreadyJoined}
            className={`flex-1 sm:flex-initial rounded-xl h-11 px-6 font-semibold gap-2 shadow-md cursor-pointer transition-all ${
                isAlreadyJoined 
                    ? "bg-emerald-600 hover:bg-emerald-600 text-white opacity-90 cursor-not-allowed" 
                    : "bg-primary hover:bg-primary/90 text-white"
            }`}
        >
            <CheckCircle2 className="w-4 h-4" /> 
            {isAlreadyJoined ? "Already Joined" : "Join Event"}
        </Button>
    );
}