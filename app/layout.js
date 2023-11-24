import "./globals.css";
import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Will Nickson's Blog",
    description:
        "Will Nickson founder of Trippp, a software engineer, and the creator of the open source payments framework Bolt.",
    openGraph: {
        title: "Will Nickson's blog",
        description:
            "Will Nickson founder of Trippp, a software engineer, and the creator of the open source payments framework Bolt.",
        url: "https://nickson.uk",
        siteName: "Will Nickson's blog",
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
            lang="en"
            className={`${inter.className} antialiased`}
            suppressHydrationWarning={true}
        >
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
                    {children}
                </main>

                {/* <Footer />
                <Analytics /> */}
            </body>
        </html>
    );
}
