"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

interface DeleteEventDialogProps {
    eventId: string;
}

export default function DeleteEventDialog({ eventId }: DeleteEventDialogProps) {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const token = await getTokenFromClient();
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${eventId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.ok) {
                toast.success("Event deleted successfully!");
                router.refresh();
            } else {
                toast.error("Failed to delete event.");
            }
        } catch (error) {
            console.error("Error deleting event:", error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full rounded-xl gap-1 text-xs cursor-pointer border-rose-500/30 bg-rose-500/10 text-rose-600 hover:bg-rose-500/20 hover:text-rose-700 dark:text-rose-400"
                >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-3xl">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-heading text-xl">Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your event and remove its data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="rounded-xl cursor-pointer">Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                        onClick={handleDelete}
                        className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl cursor-pointer"
                    >
                        Yes, Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}