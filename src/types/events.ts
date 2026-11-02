export interface EventType {
    _id: string;
    title: string;
    category: string;
    date: string;
    location: string;
    image?: string;
    description: string;
    userName?: string;
    userEmail?: string;
    userId?: string;
}

export interface JoinEventType {
    _id: string;
    title: string;
    category: string;
    date: string;
    location: string;
    image?: string;
    description: string;
    userName?: string;
    userEmail?: string;
    userId?: string;
    joinedAt?: string;
    eventId: string;
}