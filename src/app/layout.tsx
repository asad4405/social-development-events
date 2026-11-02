import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Toaster } from "sonner";

const openSans = Open_Sans({
    variable: "--font-open-sans",
});

export const metadata: Metadata = {
    title: "Social Development Events",
    description: "Community-driven event management platform",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${openSans.className} h-full antialiased`}
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col bg-background text-foreground">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer/>
                <Toaster position="bottom-right" richColors />
            </body>
        </html>
    );
}