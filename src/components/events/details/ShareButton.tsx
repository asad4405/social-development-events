"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ShareButton() {
    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Event link copied to clipboard!");
        } catch (error) {
            toast.error("Failed to copy link!");
        }
    };

    return (
        <Button 
            onClick={handleShare} 
            variant="outline" 
            size="icon" 
            className="rounded-xl h-11 w-11 shrink-0 cursor-pointer"
        >
            <Share2 className="w-4 h-4" />
        </Button>
    );
}