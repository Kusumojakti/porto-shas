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
        <div className="bg-[#1A1A1D] min-h-screen flex flex-col justify-between relative overflow-hidden">
            <Navbar />
            <div className="mx-auto max-w-2xl py-2 sm:py-20 lg:py-20">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="text-center relative">
                        <p className="text-gray-200 font-Poppins">
                            A Junior Developer who is interested in Mobile
                            Application and Front End Development
                        </p>
                        <div className="flex justify-center gap-8 columns-3 mt-6">
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
                                    <p className="text-white">See My Project</p>
                                </div>
                            </motion.button>
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
                                    <p className="text-white">More About Me</p>
                                </div>
                            </motion.button>
                        </div>
                        <div className="relative">
                            <motion.div
                                style={{
                                    x: cursorPosition.x,
                                    y: cursorPosition.y,
                                }}
                                className="absolute mx-auto inset-x-0 top-1/2 z-10 pointer-events-none"
                                transition={{ type: "spring", stiffness: 50 }}
                            >
                                <img
                                    alt="Profile"
                                    src="/assets/foto-profile.png"
                                    className="w-2/12 mx-auto absolute mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                                />
                            </motion.div>
                            <h1 className="text-balance text-9xl tracking-tight text-yellow-400 sm:text-[220px] font-BigShoulders font-black pb-20 mt-4">
                                AQSHA
                            </h1>
                            <h1 className="text-balance text-xl tracking-tight text-yellow-400 sm:text-[200px] font-BigShoulders font-black">
                                KUSUMOJAKTI
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
