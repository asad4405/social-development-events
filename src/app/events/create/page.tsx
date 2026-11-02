"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Tag, Image as ImageIcon, FileText, Heading, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession } from "@/lib/auth-client"; 

export default function CreateEventPage() {
    const router = useRouter();
    const today = new Date().toISOString().split("T")[0];

    const { data: session } = useSession();
    const user = session?.user;

    const handleCreateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formEntries = Object.fromEntries(formData.entries());

        const selectedDate = new Date(formEntries.date as string);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); 

        if (selectedDate < currentDate) {
            toast.error("Event date cannot be in the past!");
            return;
        }

        const eventData = {
            ...formEntries,
            userName: user?.name || "",
            userEmail: user?.email || "",
            userId: user?.id || "",
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData),
            });

            const data = await res.json();

            if (data.insertedId) {
                toast.success("Event created successfully!");
                router.push("/events");
                router.refresh();
            } else {
                toast.error("Failed to create event.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong! Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <Card className="w-full max-w-3xl border border-border shadow-xl rounded-2xl bg-card text-card-foreground">
                <CardHeader className="flex flex-row items-center justify-between border-b border-border pb-5 mb-5">
                    <div>
                        <CardTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
                            Create a New Event
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mt-1">
                            Fill in the details below to publish your social impact event.
                        </CardDescription>
                    </div>
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="gap-2 cursor-pointer">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </Button>
                    </Link>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleCreateEvent} className="space-y-6">
                        
                        <div className="space-y-2">
                            <Label htmlFor="title" className="text-sm font-semibold flex items-center gap-2">
                                <Heading className="w-4 h-4 text-primary" /> Event Title
                            </Label>
                            <Input
                                id="title"
                                type="text"
                                name="title"
                                required
                                placeholder="Title ..."
                                className="h-11 rounded-xl bg-background"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="category" className="text-sm font-semibold flex items-center gap-2">
                                    <Tag className="w-4 h-4 text-primary" /> Category
                                </Label>
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    defaultValue=""
                                    className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                                >
                                    <option value="" disabled>Select category</option>
                                    <option value="Donation">Donation</option>
                                    <option value="Charity">Charity</option>
                                    <option value="Environment">Environment</option>
                                    <option value="Education">Education</option>
                                    <option value="Health">Health</option>
                                    <option value="Community">Community</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="date" className="text-sm font-semibold flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary" /> Event Date
                                </Label>
                                <Input
                                    id="date"
                                    type="date"
                                    name="date"
                                    min={today}
                                    required
                                    className="h-11 rounded-xl bg-background"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="location" className="text-sm font-semibold flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" /> Location / Venue
                            </Label>
                            <Input
                                id="location"
                                type="text"
                                name="location"
                                required
                                placeholder="Location or Venue ..."
                                className="h-11 rounded-xl bg-background"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image" className="text-sm font-semibold flex items-center gap-2">
                                <ImageIcon className="w-4 h-4 text-primary" /> Banner Image URL
                            </Label>
                            <Input
                                id="image"
                                type="url"
                                name="image"
                                placeholder="https://example.com/banner.jpg"
                                className="h-11 rounded-xl bg-background"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description" className="text-sm font-semibold flex items-center gap-2">
                                <FileText className="w-4 h-4 text-primary" /> Event Description
                            </Label>
                            <Textarea
                                id="description"
                                name="description"
                                rows={4}
                                required
                                placeholder="Description ..."
                                className="rounded-xl bg-background resize-none"
                            />
                        </div>

                        <div className="pt-4">
                            <Button type="submit" size="lg" className="w-full h-11 rounded-xl font-semibold text-base shadow-md cursor-pointer">
                                Publish Event
                            </Button>
                        </div>

                    </form>
                </CardContent>
            </Card>
        </div>
    );
}