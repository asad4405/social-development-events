"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { User, Mail, Lock, Image as ImageIcon, UserCheck, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function RegisterPage() {
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
            image: string;
        };

        if (user.password !== user.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        const hasUppercase = /[A-Z]/.test(user.password);
        const hasLowercase = /[a-z]/.test(user.password);
        const isLongEnough = user.password.length >= 6;

        if (!isLongEnough || !hasUppercase || !hasLowercase) {
            toast.error("Password must be at least 6 characters long with 1 uppercase & 1 lowercase letter.");
            return;
        }

        const { error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image || undefined,
        });

        if (error) {
            toast.error(error.message || "Failed to register account.");
            return;
        }

        toast.success("Account created successfully!");
        router.push("/events");
        router.refresh();
    };

    const togglePassword = (inputId: string, eyeOpenId: string, eyeClosedId: string) => {
        const input = document.getElementById(inputId) as HTMLInputElement;
        const eyeOpen = document.getElementById(eyeOpenId);
        const eyeClosed = document.getElementById(eyeClosedId);

        if (input && eyeOpen && eyeClosed) {
            if (input.type === "password") {
                input.type = "text";
                eyeOpen.classList.add("hidden");
                eyeClosed.classList.remove("hidden");
            } else {
                input.type = "password";
                eyeOpen.classList.remove("hidden");
                eyeClosed.classList.add("hidden");
            }
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-md bg-card text-card-foreground border border-border rounded-2xl shadow-sm p-6 sm:p-8">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                        <UserCheck className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-foreground tracking-tight">
                        Create an Account
                    </h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Join UnityPulse to organize and volunteer in drives
                    </p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-foreground text-xs uppercase tracking-wider">
                                Full Name
                            </span>
                        </label>
                        <div className="relative">
                            <User className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full pl-10 bg-background text-foreground border-border focus:border-primary rounded-xl"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-foreground text-xs uppercase tracking-wider">
                                Email Address
                            </span>
                        </label>
                        <div className="relative">
                            <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                                name="email"
                                type="email"
                                placeholder="email@example.com"
                                className="input input-bordered w-full pl-10 bg-background text-foreground border-border focus:border-primary rounded-xl"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-foreground text-xs uppercase tracking-wider">
                                Profile Photo URL (Optional)
                            </span>
                        </label>
                        <div className="relative">
                            <ImageIcon className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                                name="image"
                                type="url"
                                placeholder="https://example.com/avatar.jpg"
                                className="input input-bordered w-full pl-10 bg-background text-foreground border-border focus:border-primary rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-foreground text-xs uppercase tracking-wider">
                                Password
                            </span>
                        </label>
                        <div className="relative">
                            <Lock className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                                id="reg-password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full pl-10 pr-10 bg-background text-foreground border-border focus:border-primary rounded-xl"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => togglePassword("reg-password", "eye-open-1", "eye-closed-1")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                <Eye id="eye-open-1" className="w-4 h-4" />
                                <EyeOff id="eye-closed-1" className="w-4 h-4 hidden" />
                            </button>
                        </div>
                        <span className="text-[11px] text-muted-foreground mt-1">
                            At least 6 characters with 1 uppercase (A-Z) & 1 lowercase (a-z).
                        </span>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-foreground text-xs uppercase tracking-wider">
                                Confirm Password
                            </span>
                        </label>
                        <div className="relative">
                            <Lock className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                                id="reg-confirm-password"
                                name="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full pl-10 pr-10 bg-background text-foreground border-border focus:border-primary rounded-xl"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => togglePassword("reg-confirm-password", "eye-open-2", "eye-closed-2")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                <Eye id="eye-open-2" className="w-4 h-4" />
                                <EyeOff id="eye-closed-2" className="w-4 h-4 hidden" />
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-2 rounded-xl text-primary-foreground font-semibold shadow-sm"
                    >
                        Register Account
                    </button>
                </form>

                <div className="text-center mt-6 text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-primary font-bold hover:underline transition-all"
                    >
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
}