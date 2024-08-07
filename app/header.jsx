"use client";

import { BiLogoTwitter } from "react-icons/bi";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { useReadingProgress } from "./use-reading-progress";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
    const pathname = usePathname();
    const progress = useReadingProgress();

    const blogArticleRegex = /^\/\d{4}\/[a-z\-]+(?:-[a-z\-]+)*$/;
    const isBlogArticlePage = blogArticleRegex.test(pathname);

    return (
        <>
            {isBlogArticlePage == true && (
                <div
                    className="sticky top-0 h-1 w-100% bg-gradient-to-r from-black dark:from-white from-30% to-black dark:to-white to-100% transition-all duration-150 ease-in-out"
                    style={{
                        backgroundSize: `${progress}%`,
                        backgroundRepeat: "no-repeat",
                    }}
                />
            )}
            <header className="flex mb-5 md:mb-10 items-center">
                <Logo />
                <nav className="font-mono text-xs grow justify-end items-center flex gap-1 md:gap-3">
                    <ThemeToggle />

                    <Link
                        href="/writing"
                        className={`inline-flex ${
                            pathname === "/writing"
                                ? "bg-gray-200 dark:bg-[#313131]"
                                : ""
                        } hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]`}
                    >
                        Writing
                    </Link>

                    <a
                        href="https://twitter.com/will__nickson"
                        target="_blank"
                        className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap -mr-2"
                    >
                        <BiLogoTwitter style={{ marginRight: 4 }} /> Follow{" "}
                        <span className="hidden md:inline">&nbsp;me</span>
                    </a>
                </nav>
            </header>
        </>
    );
}
