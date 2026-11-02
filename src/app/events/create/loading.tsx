import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CreateEventLoading() {
    return (
        <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <Card className="w-full max-w-3xl border border-border shadow-xl rounded-2xl bg-card text-card-foreground animate-pulse">
                
                <CardHeader className="flex flex-row items-center justify-between border-b border-border pb-5 mb-5">
                    <div className="space-y-2">
                        <div className="h-7 w-48 bg-muted rounded-lg"></div>
                        <div className="h-4 w-72 bg-muted/60 rounded-md"></div>
                    </div>
                    <div className="h-9 w-16 bg-muted rounded-lg"></div>
                </CardHeader>

                <CardContent className="space-y-6">
                    
                    <div className="space-y-2">
                        <div className="h-4 w-24 bg-muted rounded-md"></div>
                        <div className="h-11 w-full bg-muted/60 rounded-xl"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <div className="h-4 w-20 bg-muted rounded-md"></div>
                            <div className="h-11 w-full bg-muted/60 rounded-xl"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-24 bg-muted rounded-md"></div>
                            <div className="h-11 w-full bg-muted/60 rounded-xl"></div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-4 w-28 bg-muted rounded-md"></div>
                        <div className="h-11 w-full bg-muted/60 rounded-xl"></div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-4 w-32 bg-muted rounded-md"></div>
                        <div className="h-11 w-full bg-muted/60 rounded-xl"></div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-4 w-32 bg-muted rounded-md"></div>
                        <div className="h-28 w-full bg-muted/60 rounded-xl"></div>
                    </div>

                    <div className="pt-4">
                        <div className="h-11 w-full bg-muted rounded-xl"></div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}