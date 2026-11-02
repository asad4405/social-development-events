export default function JoinedEventLoading() {
    return (
        <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8 animate-pulse">
                <div className="space-y-2">
                    <div className="h-8 w-48 bg-muted rounded-xl"></div>
                    <div className="h-4 w-96 bg-muted rounded-lg"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div 
                            key={item} 
                            className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between h-95"
                        >
                            <div>
                                <div className="h-48 w-full bg-muted"></div>

                                <div className="p-5 space-y-3">
                                    <div className="h-5 w-3/4 bg-muted rounded-md"></div>
                                    <div className="space-y-2 pt-1">
                                        <div className="h-3.5 w-1/2 bg-muted rounded-md"></div>
                                        <div className="h-3.5 w-2/3 bg-muted rounded-md"></div>
                                        <div className="h-3.5 w-1/3 bg-muted rounded-md"></div>
                                    </div>
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