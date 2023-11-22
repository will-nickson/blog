import { BiLogoTwitter } from "react-icons/bi";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="font-mono text-xs grow justify-end items-center flex gap-1 md:gap-3">
            <ThemeToggle />

            <Link
                href="/about"
                className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
            >
                About
            </Link>
            <a
                href="https://twitter.com/will__nickson"
                target="_blank"
                className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap -mr-2"
            >
                <BiLogoTwitter style={{ marginRight: 4 }} /> Follow <span className="hidden md:inline">&nbsp;me</span>
            </a>
        </nav>
    );
}
