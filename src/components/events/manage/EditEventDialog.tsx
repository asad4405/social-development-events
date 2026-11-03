"use client";

import { useState } from "react";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

interface EditEventDialogProps {
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

export default function EditEventDialog({ event }: EditEventDialogProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false); 

    const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const updatedData = {
            title: formData.get("title"),
            category: formData.get("category"),
            date: formData.get("date"),
            location: formData.get("location"),
            image: formData.get("image"),
            description: formData.get("description"),
        };

        try {
            const token = await getTokenFromClient();
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${event._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedData),
            });

            if (res.ok) {
                toast.success("Event updated successfully!");
                setOpen(false); 
                router.refresh();
            } else {
                toast.error("Failed to update event.");
            }
        } catch (error) {
            console.error("Error updating event:", error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full rounded-xl gap-1 text-xs cursor-pointer border-emerald-500/30 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 hover:text-emerald-700 dark:text-emerald-400"
                >
                    <Edit className="w-3.5 h-3.5" /> Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg rounded-3xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold font-heading">Edit Event</DialogTitle>
                    <DialogDescription>
                        Make changes to your event details below and save.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleUpdateSubmit} className="space-y-4 pt-2">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase">Event Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={event.title}
                            className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-muted-foreground uppercase">Category</label>
                            <select
                                name="category"
                                defaultValue={event.category}
                                className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            >
                                <option value="Donation">Donation</option>
                                <option value="Charity">Charity</option>
                                <option value="Environment">Environment</option>
                                <option value="Education">Education</option>
                                <option value="Health">Health</option>
                                <option value="Community">Community</option>
                            </select>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-muted-foreground uppercase">Date</label>
                            <input
                                type="date"
                                name="date"
                                defaultValue={event.date}
                                className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase">Location</label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={event.location}
                            className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            defaultValue={event.image || ""}
                            className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase">Description</label>
                        <textarea
                            rows={3}
                            name="description"
                            defaultValue={event.description || ""}
                            className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="submit" className="rounded-xl cursor-pointer">
                            Save Changes
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}