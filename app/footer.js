import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
            <div className="grow text-left">
                Will Nickson (
                <a target="_blank" href="https://twitter.com/will__nickson">
                    @will__nickson
                </a>
                )
            </div>
            <div>
                <a target="_blank" href="https://github.com/will-nickson">
                    <FaGithub className="w-3.5 h-3.5" />
                </a>
            </div>
        </footer>
    );
}
