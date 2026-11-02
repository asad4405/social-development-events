"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

export default function Gallery() {
    const photos = [
        {
            src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
            title: "Tree Plantation Drive",
            location: "Mirpur, Dhaka",
        },
        {
            src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
            title: "Food Relief Campaign",
            location: "Mohammadpur, Dhaka",
        },
        {
            src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
            title: "Winter Clothes Distribution",
            location: "Old Dhaka",
        },
        {
            src: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80",
            title: "Clean Water Drive",
            location: "Gazipur",
        },
        {
            src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80",
            title: "Education Support Program",
            location: "Dhanmondi, Dhaka",
        },
        {
            src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
            title: "Neighborhood Clean-up",
            location: "Uttara, Dhaka",
        },
    ];

    return (
        <section className="bg-background py-16 md:py-24 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <Camera className="w-6 h-6" />
                    </div>
                    <span className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
                        Impact in Pictures
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight font-heading mb-4">
                        Our Community Gallery
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed">
                        Glimpses of real moments, drive execution, and smiles created across neighborhoods.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="group relative h-64 rounded-2xl overflow-hidden border border-border bg-card shadow-sm"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                <h3 className="text-lg font-bold font-heading mb-1">
                                    {photo.title}
                                </h3>
                                <p className="text-xs font-medium text-gray-300">
                                    {photo.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}