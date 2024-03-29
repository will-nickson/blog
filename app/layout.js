import "./globals.css";
import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import Toaster from "./toast";
import Header from "./header";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Will Nickson",
    description:
        "Will Nickson founder of Trippp, a software engineer, and the creator of the open source payments framework Bolt.",
    openGraph: {
        title: "Will Nickson",
        description:
            "Will Nickson founder of Trippp, a software engineer, and the creator of the open source payments framework Bolt.",
        url: "https://nickson.uk",
        siteName: "Will Nickson",
    },
    twitter: {
        card: "summary_large_image",
        site: "@will__nickson",
        creator: "@will__nickson",
    },
    metadataBase: new URL("https://nickson.uk"),
};

export const viewport = {
    themeColor: "transparent",
};

export default function RootLayout({ children }) {
    return (
        <html
            className={`${inter.className} antialiased`}
            lang="en"
            suppressHydrationWarning={true}
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(${themeEffect.toString()})();`,
                    }}
                />
            </head>
            <body className="text-gray-700 dark:text-gray-100 max-w-3xl m-auto min-w-[20rem]">
                <main className="p-6 pt-3 md:pt-6 min-h-screen">
                    <Toaster />
                    <Header />
                    {children}
                </main>

                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
