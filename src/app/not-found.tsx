import Link from "next/link";
import { Ghost, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-[85vh] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-background text-foreground">
            <div className="max-w-md w-full text-center space-y-6">
                
                <div className="relative flex items-center justify-center">
                    <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-inner animate-bounce duration-1000">
                        <Ghost className="w-12 h-12" />
                    </div>
                    <div className="absolute inset-0 w-24 h-24 mx-auto rounded-3xl bg-primary/20 blur-xl -z-10 animate-pulse"></div>
                </div>

                <div className="space-y-2">
                    <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                        Error 404
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
                        Page Not Found
                    </h1>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <Link href="/" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto gap-2 cursor-pointer rounded-xl font-semibold shadow-md h-11 px-6">
                            <Home className="w-4 h-4" /> Back to Home
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}