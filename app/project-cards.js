export default function ProjectCards() {
    return (
        <div className="flex flex-col gap-4">
            <a
                className="p-8 h-64 flex border rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-[#313131]"
                href="https://trippp.app"
                target="_blank"
            >
                <div className="w-1/2">
                    <h3 className="text-lg md:text-xl font-bold">Trippp</h3>
                    <p className="font-thin mb-4">Founder - 2023</p>
                    <p className="text-base">
                        Trippp is a site for design lovers or anyone who enjoys
                        checking out the coolest spots while they're away
                        travelling in some of the world's best cities.
                    </p>
                </div>
                <div className="w-1/2">image</div>
            </a>
            <a
                className="p-8 h-64 flex border rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-[#313131]"
                href="https://honeysucklecottage.co.uk"
                target="_blank"
            >
                <div className="w-1/2">
                    <h3 className="text-lg md:text-xl font-bold">
                        Honeysuckle Cottage
                    </h3>
                    <p className="font-thin mb-4">Freelance - 2024</p>
                    <p className="text-base">
                        This project was a complete redesign and build for a
                        client's holiday rental site in order to drive more
                        bookings.
                    </p>
                </div>
                <div className="w-1/2">image</div>
            </a>
        </div>
    );
}
