"use client";

import React, { useEffect } from "react";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, MoonIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { gsap } from "gsap";
import { motion } from "framer-motion";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    useEffect(() => {
        const tl = gsap.timeline({ paused: true, reversed: true });
        tl.to(".box", {
            height: "100vh",
            duration: 0.5,
            transformOrigin: "bottom",
            stagger: 0.3,
        })
            .to(".mobile-logo", { opacity: 1 })
            .to(".nav-main__content", {
                opacity: 1,
                visibility: "visible",
                yPercent: -5,
                duration: 0.5,
                transformOrigin: "bottom",
                stagger: 0.3,
            })
            .to(
                ".nav-icon .bars-icon",
                {
                    opacity: 0,
                    duration: 0.2,
                },
                "<"
            )
            .to(
                ".nav-icon .xmark-icon",
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                },
                "<"
            );

        const toggleAnimation = () => {
            if (tl.reversed()) {
                tl.play();
                document.body.classList.add("noScroll");
            } else {
                tl.reverse();
                document.body.classList.remove("noScroll");
            }
        };

        const buttons = document.querySelectorAll(
            ".nav-icon, .disclosure-button"
        );
        buttons.forEach((button) => {
            button.addEventListener("click", toggleAnimation);
        });

        // Cleanup event listeners on component unmount
        return () => {
            buttons.forEach((button) => {
                button.removeEventListener("click", toggleAnimation);
            });
        };
    }, []);

    return (
        <div>
            <div className="relative z-20">
                <button className="nav-icon relative">
                    <Bars3Icon className="bars-icon absolute h-6 w-6 text-white" />
                    <XMarkIcon className="xmark-icon absolute h-6 w-6 text-white opacity-0 transform translate-x-[-100%]" />
                </button>
                <div className="nav-main">
                    <div className="box-wrapper">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="nav-main__content opacity-0 invisible">
                        <div>
                            <h2 className="text-black font-BigShoulders font-bold text-3xl tracking-wide">
                                CATCH ME ON SOCIAL MEDIA
                            </h2>
                            <div className="flex justify-start gap-8">
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    onHoverStart={(event) => {}}
                                    onHoverEnd={(event) => {}}
                                >
                                    <a
                                        href="https://www.instagram.com/aqsha.kusumojakti_/"
                                        target="_blank"
                                    >
                                        <img
                                            src=".\assets\icons\instagram (2).png"
                                            alt="instagram logo"
                                            width={30}
                                            height={30}
                                            className="mt-4"
                                        />
                                    </a>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    onHoverStart={(event) => {}}
                                    onHoverEnd={(event) => {}}
                                >
                                    <a
                                        href="https://www.linkedin.com/in/aqsha-kusumojakti/"
                                        target="_blank"
                                    >
                                        <img
                                            src=".\assets\icons\linkedin.png"
                                            alt="linkedin logo"
                                            width={30}
                                            height={30}
                                            className="mt-4"
                                        />
                                    </a>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    onHoverStart={(event) => {}}
                                    onHoverEnd={(event) => {}}
                                >
                                    <a
                                        href="https://github.com/Kusumojakti"
                                        target="_blank"
                                    >
                                        <img
                                            src=".\assets\icons\github-logo.png"
                                            alt="github logo"
                                            width={30}
                                            height={30}
                                            className="mt-4"
                                        />
                                    </a>
                                </motion.button>
                            </div>
                        </div>

                        <ul>
                            <li className="py-2">
                                <a
                                    href="#home"
                                    className="font-BigShoulders font-bold text-4xl tracking-wide"
                                >
                                    HOME
                                </a>
                            </li>
                            <li className="py-2">
                                <a
                                    href="#projects"
                                    className="font-BigShoulders font-bold text-4xl tracking-wide"
                                >
                                    PROJECT
                                </a>
                            </li>
                            <li className="py-2">
                                <a
                                    href="#contact"
                                    className="font-BigShoulders font-bold text-4xl tracking-wide"
                                >
                                    CONTACT
                                </a>
                            </li>
                        </ul>

                        {/* <div>
                            <h4>or you can check my resume</h4>
                        </div> */}
                    </div>
                </div>
            </div>
            <Disclosure as="nav" className="bg-[#1A1A1D]">
                <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-40">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <DisclosureButton className="disclosure-button group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="bars-icon absolute h-6 w-6 text-white" />
                                <XMarkIcon className="xmark-icon absolute h-6 w-6 text-white opacity-0 transform translate-x-[-100%]" />
                            </DisclosureButton> */}
                        </div>
                        <div className="flex flex-2 items-center justify-center sm:items-stretch sm:justify-start">
                            {/* <DisclosureButton className="disclosure-button group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <Bars3Icon className="bars-icon absolute h-6 w-6 text-white" />
                                <XMarkIcon className="xmark-icon absolute h-6 w-6 text-white opacity-0 transform translate-x-[-100%]" />
                            </DisclosureButton> */}
                        </div>
                        <img
                            alt="Logo"
                            src="/assets/shas-logo-dekstop.png"
                            className="w-3/12 hidden sm:block"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <MoonIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </Disclosure>
        </div>
    );
};

export default Navbar;
