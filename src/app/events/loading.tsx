export default function EventsLoading() {
    return (
        <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8 animate-pulse">
            <div className="max-w-7xl mx-auto space-y-8">
                
                <div className="border-b border-border pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                        <div className="h-9 w-64 bg-muted rounded-xl"></div>
                        <div className="h-4 w-96 bg-muted/60 rounded-lg"></div>
                    </div>
                    <div className="h-10 w-32 bg-muted rounded-xl"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-card/50 p-4 rounded-2xl border border-border/60">
                    
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
                        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <div key={i} className="h-8 w-20 bg-muted rounded-full shrink-0"></div>
                        ))}
                    </div>

                    <div className="h-10 w-full sm:w-72 bg-muted rounded-xl"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div 
                            key={i} 
                            className="overflow-hidden border border-border rounded-2xl bg-card flex flex-col justify-between h-105"
                        >
                            <div>
                                <div className="h-48 w-full bg-muted"></div>

                                <div className="p-5 space-y-3">
                                    <div className="h-6 w-3/4 bg-muted rounded-lg"></div>
                                    <div className="h-4 w-1/2 bg-muted/60 rounded-md"></div>
                                    <div className="h-4 w-2/3 bg-muted/60 rounded-md"></div>
                                </div>
                            </div>

                            <div className="p-5 pt-0">
                                <div className="h-10 w-full bg-muted rounded-xl"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}