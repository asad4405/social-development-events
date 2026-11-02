const ManageEventLoading = () => {
    return (
        <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8 animate-pulse">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                        <div className="h-8 w-48 bg-muted rounded-xl" />
                        <div className="h-4 w-72 bg-muted rounded-lg" />
                    </div>
                    <div className="h-10 w-32 bg-muted rounded-xl" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div 
                            key={item} 
                            className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between"
                        >
                            <div className="relative h-48 w-full bg-muted" />

                            <div className="p-5 space-y-4">
                                <div className="h-6 w-3/4 bg-muted rounded-lg" />
                                
                                <div className="space-y-2">
                                    <div className="h-3.5 w-1/2 bg-muted rounded-md" />
                                    <div className="h-3.5 w-2/3 bg-muted rounded-md" />
                                </div>
                            </div>

                            <div className="p-5 pt-0 grid grid-cols-3 gap-2">
                                <div className="h-8 bg-muted rounded-xl" />
                                <div className="h-8 bg-muted rounded-xl" />
                                <div className="h-8 bg-muted rounded-xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageEventLoading;