export default async function Contact() {
    return (
        <section className="relative">
            <div className="container">
                <div className="flex flex-col w-full mb-12">
                    <h1 className="text-xl md:text-2xl font-medium title-font mb-4">
                        Contact Me
                    </h1>
                    <p className="leading-relaxed text-base">
                        If you would like to work together then drop me a
                        message and I&apos;d be happy to chat.
                    </p>
                </div>
                <div className="w-full">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="name" className="leading-7 text-sm">
                                    Name
                                </label>
                                <input
                                    className="w-full bg-gray-100 dark:bg-gray-700 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label
                                    className="leading-7 text-sm"
                                    for="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="w-full bg-gray-100 dark:bg-gray-700 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label
                                    for="message"
                                    className="leading-7 text-sm"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="w-full bg-gray-100 dark:bg-gray-700 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none dark:text-gray-50 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    id="message"
                                    name="message"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto border-0 py-2 px-8 focus:outline-none bg-gray-200 dark:bg-[#313131] active:bg-gray-400 dark:active:bg-[#575757] rounded text-lg shadow-md dark:shadow-gray-700">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
