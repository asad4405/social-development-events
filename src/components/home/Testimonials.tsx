"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Saima Islam",
      role: "Community Organizer",
      location: "Mirpur, Dhaka",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      content: "UnityPulse boosted our winter blanket distribution drive massively. We gathered over 50 local volunteers within just two days!",
      rating: 5,
    },
    {
      name: "Tanvir Ahmed",
      role: "Active Volunteer",
      location: "Mohammadpur, Dhaka",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "Finding genuine local social drives used to be tough. Now I can easily join weekend tree plantations and cleanup drives around my neighborhood.",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      role: "Youth Lead",
      location: "Dhanmondi, Dhaka",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content: "The clean layout and instant registration feature make managing participant lists smooth and hassle-free for our food relief campaigns.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
            Community Voices
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight font-heading mb-4">
            Loved by Volunteers & Hosts
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed">
            See how UnityPulse empowers everyday citizens and leaders to create meaningful impact together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                <p className="text-muted-foreground text-sm font-normal leading-relaxed mb-6">
                  {review.content}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-border"
                />
                <div>
                  <h4 className="text-sm font-bold text-foreground font-heading">
                    {review.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium">
                    {review.role} • {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}