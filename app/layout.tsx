import type { Metadata } from "next";
import "./globals.css";  // Global styles already defined here

export const metadata: Metadata = {
    title: "Women In Tech",
    description: "Empowering Women in Technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
