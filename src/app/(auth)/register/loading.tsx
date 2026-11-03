export default function RegisterLoading() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-sm p-6 sm:p-8 space-y-6 animate-pulse">
                
                <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-muted"></div>
                    <div className="h-6 w-48 bg-muted rounded-md"></div>
                    <div className="h-3.5 w-64 bg-muted rounded-md"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="h-10 bg-muted rounded-xl"></div>
                    <div className="h-10 bg-muted rounded-xl"></div>
                </div>

                <div className="flex items-center justify-center my-4">
                    <div className="h-2.5 w-32 bg-muted rounded-md"></div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="h-3 w-20 bg-muted rounded-md"></div>
                        <div className="h-10 w-full bg-muted rounded-xl"></div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-3 w-24 bg-muted rounded-md"></div>
                        <div className="h-10 w-full bg-muted rounded-xl"></div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-3 w-28 bg-muted rounded-md"></div>
                        <div className="h-10 w-full bg-muted rounded-xl"></div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-3 w-20 bg-muted rounded-md"></div>
                        <div className="h-10 w-full bg-muted rounded-xl"></div>
                        <div className="h-2.5 w-44 bg-muted rounded-md mt-1"></div>
                    </div>

                    <div className="h-11 w-full bg-muted rounded-xl mt-4"></div>
                </div>

                <div className="flex justify-center pt-2">
                    <div className="h-3.5 w-48 bg-muted rounded-md"></div>
                </div>
            </div>
        </div>
    );
}