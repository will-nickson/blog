import "./globals.css";
import Header from "./components/Header";
import ProfilePicture from "./components/ProfilePicture";

export const metadata = {
    title: "Will's Blog",
    description: "Created by Will Nickson",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={``}>
                <Header />
                <ProfilePicture />
                {children}
            </body>
        </html>
    );
}
