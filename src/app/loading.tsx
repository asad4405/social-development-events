import { Loader2, HandHeart } from "lucide-react";

export default function GlobalLoading() {
    return (
        <div className="min-h-[80vh] w-full flex flex-col items-center justify-center gap-4 bg-background px-4">
            
            <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary animate-pulse">
                    <HandHeart className="w-8 h-8" />
                </div>
                <Loader2 className="w-20 h-20 text-primary animate-spin absolute -inset-2 opacity-30" />
            </div>

            <div className="flex flex-col items-center gap-1 text-center">
                <span className="text-xl font-bold tracking-tight text-foreground font-heading">
                    UnityPulse
                </span>
                <p className="text-xs text-muted-foreground animate-pulse font-medium">
                    Loading your content...
                </p>
            </div>
        </div>
    );
}