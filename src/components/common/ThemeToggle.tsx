"use client";

import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const handleToggle = () => {
        const root = document.documentElement;
        const isDark = root.classList.contains("dark");
        const nextTheme = isDark ? "light" : "dark";

        root.setAttribute("data-theme", nextTheme);

        if (nextTheme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", nextTheme);
    };

    return (
        <button
            onClick={handleToggle}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle Theme"
            type="button"
        >
            <Sun className="h-5 w-5 text-amber-500 hidden dark:block" />
            <Moon className="h-5 w-5 text-sky-400 block dark:hidden" />
        </button>
    );
}