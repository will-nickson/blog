import Image from "next/image";

export default function page() {
    return (
        <>
            <h1>About</h1>
            <a href="https://twitter.com/will__nickson" target="_blank">
                <Image
                    className="rounded-xl bg-gray-100 block mt-2 mb-5 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
                    src="/images/will-nickson.jpeg"
                    width="160"
                    height="160"
                    alt="Will Nickson"
                    priority
                    unoptimized
                />
            </a>
            <p>
                I&rsquo;m a software engineer and founder of Trippp. I&rsquo;m originally from Lancaster, United
                Kingdom.
            </p>
        </>
    );
}
