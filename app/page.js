import { GoArrowUpRight } from "react-icons/go";
import ProjectCards from "./project-cards";

export default async function Home() {
    return (
        <>
            <h1 className="tracking-wide text-lg md:text-xl mb-2 md:mb-4">
                Hey I&apos;m Will.
            </h1>
            <p className="tracking-wide text-lg md:text-xl mb-4 md:mb-8">
                I&apos;m a freelance software developer and founder with a
                background creating full-stack web applications.
            </p>
            <p className="tracking-wide text-lg md:text-xl flex items-center mb-4 md:mb-8">
                Right now I spend most of my time building{" "}
                <a
                    href="https://trippp.app"
                    target="_blank"
                    className="ml-1 flex items-center underline underline-offset-2 hover:text-gray-400 dark:hover:text-[#313131]"
                >
                    Trippp
                    <GoArrowUpRight className="mb-2" size={12} />
                </a>
                .
            </p>
            <p className="tracking-wide text-lg md:text-xl mb-8 md:mb-10">
                I also work with clients to craft bespoke sites, landing pages
                and full stack web applications tailored to their needs.
            </p>
            <p className="text-lg mb-12 lg:mb-16">
                Email{" "}
                <span className="text-neutral-600 dark:text-neutral-400">
                    will@nickson.uk
                </span>
            </p>
            <ProjectCards />
        </>
    );
}
