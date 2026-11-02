"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useTransition } from "react";

const categories = ["All", "Donation", "Charity", "Environment", "Education", "Health", "Community"];

export default function EventFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const currentCategory = searchParams.get("category") || "All";
    const currentSearch = searchParams.get("search") || "";

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams.toString());
        
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }

        startTransition(() => {
            router.push(`/events?${params.toString()}`);
        });
    };

    return (
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-card/50 p-4 rounded-2xl border border-border/60">
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {categories.map((cat) => {
                    const isActive = currentCategory === cat;
                    const queryParams = new URLSearchParams(searchParams.toString());

                    if (cat !== "All") {
                        queryParams.set("category", cat);
                    } else {
                        queryParams.delete("category");
                    }

                    const href = `/events?${queryParams.toString()}`;

                    return (
                        <Link
                            key={cat}
                            href={href}
                            scroll={false}
                            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                                isActive
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                        >
                            {cat}
                        </Link>
                    );
                })}
            </div>

            <div className="relative min-w-65 sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                    type="text"
                    defaultValue={currentSearch}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search events or areas..."
                    className={`w-full pl-9 pr-4 py-2 rounded-xl bg-muted/40 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/60 ${
                        isPending ? "opacity-70" : ""
                    }`}
                />
            </div>
        </div>
    );
}