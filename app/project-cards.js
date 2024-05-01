import NextImage from "next/image";

export default function ProjectCards() {
    return (
        <div className="flex flex-col gap-4">
            <a
                className="p-4 md:p-8 flex flex-col md:flex-row gap-2 border rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-[#313131] shadow-xl dark:shadow-gray-900 hover:dark:shadow-gray-800/90"
                href="https://trippp.app"
                target="_blank"
            >
                <div className="w-full md:w-1/2">
                    <h3 className="text-lg md:text-xl font-bold">Trippp</h3>
                    <p className="font-thin mb-4">Founder - 2023</p>
                    <p className="text-sm md:text-base">
                        Trippp is a site I built for people who love design and
                        travel. It&apos;s a collection of hundreds of the
                        coolest spots to checkout while you&apos;re away
                        travelling in some of the worlds best cities.
                    </p>
                </div>
                <div className="w-full h-full md:w-1/2">
                    <div className="flex items-center justify-center overflow-hidden">
                        {/* MOBILE */}
                        <NextImage
                            className="md:hidden block rounded"
                            src="/images/trippp-mobile.png"
                            alt="Honey Suckle Cottage Site"
                            height={300}
                            width={300}
                        />
                        {/* DESKTOP */}
                        <NextImage
                            className="hidden md:visible md:block rounded w-full h-full"
                            src="/images/trippp-desktop.png"
                            alt="Honey Suckle Cottage Site"
                            height={600}
                            width={400}
                        />
                    </div>
                </div>
            </a>
            <a
                className="p-4 md:p-8 flex flex-col md:flex-row gap-2 border rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-[#313131] shadow-xl dark:shadow-gray-900 hover:dark:shadow-gray-800/90"
                href="https://honeysucklecottage.co.uk"
                target="_blank"
            >
                <div className="w-full md:w-1/2">
                    <h3 className="text-lg md:text-xl font-bold">
                        Honeysuckle Cottage
                    </h3>
                    <p className="font-thin mb-4">Freelance - 2024</p>
                    <p className="text-sm md:text-base">
                        This project was a complete redesign, build and
                        optimisation of a client&apos;s holiday cottage site and
                        Google My Business profile in order to drive more
                        bookings to their rental during the off season.
                    </p>
                </div>
                <div className="w-full h-full md:w-1/2">
                    <div className="flex items-center justify-center overflow-hidden">
                        {/* MOBILE */}
                        <NextImage
                            className="md:hidden block rounded"
                            src="/images/honeysuckle-cottage-mobile.png"
                            alt="Honey Suckle Cottage Site"
                            height={300}
                            width={300}
                        />
                        {/* DESKTOP */}
                        <NextImage
                            className="hidden md:visible md:block rounded w-full h-full"
                            src="/images/honeysuckle-cottage-desktop.png"
                            alt="Honey Suckle Cottage Site"
                            height={450}
                            width={400}
                        />
                    </div>
                </div>
            </a>
        </div>
    );
}
