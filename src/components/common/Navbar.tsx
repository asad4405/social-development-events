"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { PlusCircle, Calendar, Settings, LogOut, LogIn, HandHeart, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { toast } from "sonner";

export default function Navbar() {
    const router = useRouter();
    const { data: session } = useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await signOut({
        fetchOptions: {
            onSuccess: () => {
            toast.success("Successfully logged out!");
            router.push("/login");
            router.refresh();
            },
        },
        });
    };

    return (
        <header className="border-b border-border bg-background sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <nav className="navbar px-0">
                    
                    <div className="navbar-start">
                        <div className="dropdown lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-card text-card-foreground rounded-box w-52 border border-border">
                                <li><Link href="/upcoming-events">Upcoming Events</Link></li>
                            </ul>
                        </div>

                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <HandHeart className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-tight leading-none text-foreground font-heading">
                                UnityPulse
                                </span>
                                <span className="text-[10px] tracking-wider text-muted-foreground font-semibold uppercase mt-0.5">
                                Social Impact
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-medium gap-1">
                            <li>
                                <Link href="/upcoming-events" className="hover:text-primary transition-colors">Upcoming Events</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-end gap-3">
                        <ThemeToggle />

                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-primary transition-all"
                                    title={user.name}
                                >
                                    <div className="w-10 h-10 rounded-full border border-border overflow-hidden relative">
                                        {user.image ? (
                                            <Image
                                                src={user.image}
                                                alt={user.name || "User"}
                                                width={40}
                                                height={40}
                                                className="rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                                <User className="w-5 h-5 text-muted-foreground" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-lg bg-card text-card-foreground rounded-box w-56 border border-border"
                                >
                                    <li className="px-3 py-2 border-b border-border mb-1">
                                        <span className="font-bold text-sm block truncate">{user.name}</span>
                                        <span className="text-xs text-muted-foreground block truncate">{user.email}</span>
                                    </li>
                                    <li>
                                        <Link href="/events/create-event" className="flex items-center gap-2 py-2">
                                            <PlusCircle className="w-4 h-4 text-primary" /> Create Event
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/manage-events" className="flex items-center gap-2 py-2">
                                            <Settings className="w-4 h-4 text-primary" /> Manage Events
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/joined-events" className="flex items-center gap-2 py-2">
                                            <Calendar className="w-4 h-4 text-primary" /> Joined Events
                                        </Link>
                                    </li>
                                    <div className="divider my-1"></div>
                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className="flex items-center gap-2 py-2 text-destructive hover:bg-destructive/10"
                                        >
                                            <LogOut className="w-4 h-4" /> Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link href="/login" className="btn btn-primary btn-sm md:btn-md gap-2 font-medium">
                                <LogIn className="w-4 h-4" /> Login
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}