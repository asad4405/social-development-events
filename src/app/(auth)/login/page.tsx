"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Mail, Lock, LogIn, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const credentials = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };

        const { error } = await authClient.signIn.email({
            email: credentials.email,
            password: credentials.password,
        });

        if (error) {
            toast.error(error.message || "Invalid email or password.");
            return;
        }

        toast.success("Welcome back to UnityPulse!");
        
        window.location.href = "/";
    };

    const handleSocialLogin = async (provider: "google" | "github") => {
        toast.success(`Redirecting to ${provider} authentication...`);

        const { error } = await authClient.signIn.social({
            provider,
            callbackURL: "/?authSuccess=true",
        });

        if (error) {
            toast.error(error.message || `Failed to sign in with ${provider}.`);
        }
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
                        <LogIn className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-foreground tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Sign in to access your UnityPulse account
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                        type="button"
                        onClick={() => handleSocialLogin("google")}
                        className="btn btn-outline border-border hover:bg-muted text-foreground rounded-xl flex items-center justify-center gap-2 normal-case font-medium"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                        </svg>
                        <span>Google</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSocialLogin("github")}
                        className="btn btn-outline border-border hover:bg-muted text-foreground rounded-xl flex items-center justify-center gap-2 normal-case font-medium"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>GitHub</span>
                    </button>
                </div>

                <div className="relative flex items-center justify-center my-6">
                    <div className="border-t border-border w-full"></div>
                    <span className="bg-card px-3 text-xs uppercase font-semibold text-muted-foreground absolute">
                        Or continue with
                    </span>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
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
                                Password
                            </span>
                        </label>
                        <div className="relative">
                            <Lock className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                                id="login-password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full pl-10 pr-10 bg-background text-foreground border-border focus:border-primary rounded-xl"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => togglePassword("login-password", "eye-open-login", "eye-closed-login")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                <Eye id="eye-open-login" className="w-4 h-4" />
                                <EyeOff id="eye-closed-login" className="w-4 h-4 hidden" />
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-2 rounded-xl text-primary-foreground font-semibold shadow-sm"
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-center mt-6 text-sm text-muted-foreground">
                    Donot have an account?
                    <Link
                        href="/register"
                        className="text-primary font-bold hover:underline transition-all"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}