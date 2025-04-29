"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
            const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;

            setCursorPosition({
                x: normalizedX * 15,
                y: normalizedY * 15,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-[#1A1A1D] sm:min-h-full min-h-full flex flex-col sm:justify-between justify-center items-center relative overflow-hidden">
                <div className="mx-4 my-6 sm:my-3 sm:mx-auto max-w-full sm:max-w-2xl py-6 sm:py-20 lg:py-20">
                    <div className="mb-8 flex flex-col sm:flex sm:justify-center items-center text-center">
                        <div className="text-center relative">
                            <p className="text-gray-200 font-Poppins">
                                A Junior Developer who is interested in Mobile
                                Application and Wesbite Development
                            </p>

                            <div className="flex justify-center gap-8 columns-3 mt-6">
                                <a href="/project">
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        onHoverStart={(event) => {}}
                                        onHoverEnd={(event) => {}}
                                    >
                                        <div className="flex justify-center align-center ">
                                            <ArrowRightCircleIcon
                                                aria-hidden="true"
                                                className="size-6 text-white me-3"
                                            />
                                            <p className="text-white">
                                                See My Project
                                            </p>
                                        </div>
                                    </motion.button>
                                </a>
                                <a href="/about">
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        onHoverStart={(event) => {}}
                                        onHoverEnd={(event) => {}}
                                    >
                                        <div className="flex justify-center align-center">
                                            <ArrowRightCircleIcon
                                                aria-hidden="true"
                                                className="size-6 text-white me-3"
                                            />
                                            <p className="text-white">
                                                More About Me
                                            </p>
                                        </div>
                                    </motion.button>
                                </a>
                            </div>

                            <div className="relative">
                                <motion.div
                                    style={{
                                        x: cursorPosition.x,
                                        y: cursorPosition.y,
                                    }}
                                    className="hidden sm:block absolute mx-auto inset-x-0 top-1/2 z-10 pointer-events-none"
                                    transition={{
                                        type: "spring",
                                        stiffness: 50,
                                    }}
                                >
                                    <img
                                        alt="Profile"
                                        src="/assets/foto-profile.png"
                                        className="w-2/12 mx-auto absolute mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                                    />
                                </motion.div>

                                {/* <motion.div
                                    style={{
                                        x: cursorPosition.x,
                                        y: cursorPosition.y,
                                    }}
                                    className="absolute mx-auto inset-x-0 top-1/2 z-10 pointer-events-none"
                                    transition={{
                                        type: "spring",
                                        stiffness: 50,
                                    }}
                                >
                                    <img
                                        alt="Profile"
                                        src="/assets/foto-profile.png"
                                        className="w-32 sm:w-2/12 mx-auto absolute mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                                    />
                                </motion.div> */}
                                <h1 className="text-balance text-7xl sm:text-[220px] tracking-tight text-yellow-400 font-BigShoulders font-black pb-0 sm:pb-0 lg:pb-10 mt-4">
                                    AQSHA
                                </h1>
                                <h1 className="text-balance text-7xl sm:text-4xl lg:text-[220px] tracking-tight text-yellow-400 font-BigShoulders font-black mt-0 sm:mt-0 lg:mt-10">
                                    KUSUMOJAKTI
                                </h1>
                                <div className="block sm:hidden mt-6">
                                    <img
                                        alt="Profile"
                                        src="/assets/foto-profile.png"
                                        className="w-32 mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
