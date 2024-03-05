import NextImage from "next/image";
import ProjectCards from "./project-cards";
import Contact from "./contact";

export default function Home() {
    return (
        <>
            {/* ABOUT ME */}
            <div className="flex flex-col gap-2 md:gap-4">
                <div className="w-full flex flex-col md:flex-row md:mb-8 md:items-center md:justify-center">
                    <div className="w-full md:order-last mb-5 md:mb-0 md:flex md:justify-end">
                        <NextImage
                            className="rounded"
                            src="/images/will-nickson.jpeg"
                            alt="Honey Suckle Cottage Site"
                            height={250}
                            width={250}
                            style={{ width: "auto", height: "auto" }}
                            priority={true}
                        />
                    </div>

                    <div>
                        <h1 className="tracking-wide text-lg md:text-xl mb-2 md:mb-4">
                            Hey I&apos;m Will.
                        </h1>
                        <p className="tracking-wide text-lg md:text-xl mb-4 md:mb-8">
                            I&apos;m a maker, founder and full-stack developer
                            from the UK.
                        </p>
                    </div>
                </div>

                <p className="tracking-wide text-lg md:text-xl">
                    Right now I spend most of my time building{" "}
                    <a
                        className="text-gray-600 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100 underline underline-offset-5 hover:underline-offset-4 decoration-1 decoration-gray-400 dark:decoration-gray-600 hover:decoration-gray-700 dark:hover:decoration-gray-100"
                        href="https://trippp.app"
                        target="_blank"
                    >
                        Trippp
                    </a>
                    .
                </p>

                <p className="tracking-wide text-lg md:text-xl">
                    I also work with clients to create landing pages, bespoke
                    sites and web applications tailored to their needs. Checkout
                    some of my work below!
                </p>
            </div>

            <hr className="my-12" />

            {/* PROJECTS */}
            <ProjectCards />

            <hr className="my-12" />

            {/* EMAIL */}
            <Contact />
        </>
    );
}
