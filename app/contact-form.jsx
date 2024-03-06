"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import clsx from "clsx";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        validateForm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, email, message]);

    const validateForm = () => {
        let errors = {};

        if (!name) {
            errors.name = "Name is required.";
        }

        if (!email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid.";
        }

        if (!message) {
            errors.message = "Message is required.";
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const onSubmit = async () => {
        if (!isFormValid) {
            for (const error in errors) {
                toast.error(errors[error]);
            }
        } else {
            try {
                await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({ name, email, message }),
                });

                setName("");
                setEmail("");
                setMessage("");
                toast.success("Message sent");
            } catch (error) {
                toast.error("Something Went Wrong");
            }
        }
    };

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
                                <label className="leading-7 text-sm">
                                    Name
                                </label>
                                <input
                                    className="w-full bg-gray-100 dark:bg-gray-700 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm">
                                    Email
                                </label>
                                <input
                                    className="w-full bg-gray-100 dark:bg-gray-700 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm">
                                    Message
                                </label>
                                <textarea
                                    className="w-full bg-gray-100 dark:bg-gray-700 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none dark:text-gray-50 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                className={clsx(
                                    "flex mx-auto border-0 py-2 px-8 focus:outline-none bg-gray-200 dark:bg-[#313131] active:bg-gray-400 dark:active:bg-[#575757] rounded text-lg shadow-md dark:shadow-gray-700",
                                    isFormValid && "hover:dark:shadow-gray-600",
                                    !isFormValid && "cursor-not-allowed"
                                )}
                                onClick={onSubmit}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
