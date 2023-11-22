import "./globals.css";
import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import Header from "./components/Header";
import ProfilePicture from "./components/ProfilePicture";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Will's Blog",
    description: "Created by Will Nickson",
    // openGraph: {}
    twitter: {
        card: "",
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
        <html lang="en" className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(${themeEffect.toString()})();`,
                    }}
                />
            </head>
            <body className="dark:text-gray-100 max-w-2xl m-auto">
                <main className="p-6 pt-3 md:pt-6 min-h-screen">
                    <Header />
                    <ProfilePicture />
                    {children}
                </main>
            </body>
        </html>
    );
}
