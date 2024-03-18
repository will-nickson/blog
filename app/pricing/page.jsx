"use client";

import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function Pricing() {
    const [simplePackage, setSimplePackage] = useState(false);

    return (
        <main>
            <h1 className="text-2xl mb-5">
                Simple,{" "}
                <span className="italic tracking-wide text-gray-500">
                    transparent{" "}
                </span>{" "}
                pricing. <br></br> No headaches, no hassle.
            </h1>

            {/* PACKAGE INFO */}
            <div className="p-4 bg-gray-100 dark:bg-gray-700/80 dark:text-gray-200 rounded-3xl shadow-xl dark:shadow-gray-800">
                {/* SELECT & LOGO'S */}
                <div className="flex items-center place-content-between">
                    {/* Logos */}
                    <div className="flex gap-1">
                        <svg
                            fill="#000000"
                            width="25px"
                            height="25px"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>react icon logo</title>
                            <path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z" />
                            <path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z" />
                        </svg>
                        <svg
                            viewBox=".5 -.2 1023 1024.1"
                            width="25px"
                            height="25px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>nextjs icon logo</title>
                            <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
                            <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
                        </svg>
                    </div>

                    {/* BUTTON */}
                    <div className="p-1 w-auto h-fit flex items-center bg-gray-300 rounded-full">
                        <button
                            className={`py-2 px-5 ${
                                simplePackage
                                    ? "bg-gray-600/90 text-white focus:outline-none rounded-3xl"
                                    : "focus:outline-none text-gray-700"
                            }`}
                            onClick={() => {
                                setSimplePackage(true);
                            }}
                        >
                            Simple
                        </button>
                        <button
                            className={`py-2 px-5 ${
                                !simplePackage
                                    ? "bg-gray-600/90 text-white focus:outline-none rounded-3xl"
                                    : "focus:outline-none text-gray-700"
                            }`}
                            onClick={() => {
                                setSimplePackage(false);
                            }}
                        >
                            Advanced
                        </button>
                    </div>
                </div>

                {/* PACKAGE TITLE */}
                <h2 className="font-bold text-lg mt-3 mb-2">
                    {simplePackage ? "Single " : "Multi "} Page Site
                </h2>

                {/* INCLUDES */}
                <div className="h-80">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-1.5">
                            <IoIosCheckmarkCircleOutline /> Design
                        </li>
                        <li className="flex items-center gap-1.5">
                            <IoIosCheckmarkCircleOutline />
                            Development
                        </li>
                        <li className="flex items-center gap-1.5">
                            <IoIosCheckmarkCircleOutline />
                            Hosting & Setup
                        </li>
                        <li className="flex items-center gap-1.5">
                            <IoIosCheckmarkCircleOutline />
                            Site Optimization
                        </li>
                        <li className="flex items-center gap-1.5">
                            <IoIosCheckmarkCircleOutline />
                            Support
                        </li>
                        <li className="flex items-center gap-1.5">
                            <IoIosCheckmarkCircleOutline />
                            Unlimited Updates
                        </li>
                        {!simplePackage && (
                            <>
                                <li className="flex items-center gap-1.5">
                                    <IoIosCheckmarkCircleOutline />
                                    Request a Review
                                </li>
                                <li className="flex items-center gap-1.5">
                                    <IoIosCheckmarkCircleOutline />
                                    Whatsapp Chat Box
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* PRICE */}
                <div className="px-4">
                    <span className="text-4xl font-semibold">
                        {simplePackage ? "£999" : "£2999"}{" "}
                    </span>
                    <span className="text-sm font-extralight tracking-wide">
                        one time purchase
                    </span>
                </div>

                {/* DIVIDER */}
                <div className="my-4 w-auto h-px bg-gray-300"></div>

                {/* MAINTENANCE FEE */}
                <p className="px-4 my-2 text-sm font-extralight tracking-wide">
                    This package has a
                    {simplePackage ? " £40/month " : " £90/month "} maintenance
                    fee. This fee covers domain, email & website hosting, server
                    maintenance & support, plus unlimited content updates to
                    your site.
                </p>
            </div>
        </main>
    );
}
