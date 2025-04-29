"use client";

import React from "react";
import Navbar from "./Components/navbar";
import CardProject from "./Components/CardProject";

const Project = () => {
    const [activeTab, setActiveTab] = React.useState("all");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Navbar />
            <div className="bg-[#1A1A1D] min-h-screen flex flex-col items-center overflow-hidden">
                <h2 className="text-balance text-3xl sm:text-6xl tracking-tight text-yellow-400 sm:text-5xl font-BigShoulders font-black pb-5 mt-10 sm:mt-20">
                    Projects.
                </h2>
                <p className="text-white text-base sm:text-2xl font-medium tracking-tight sm:text-xl font-Poppins pb-5">
                    A showcase of creativity and innovation
                </p>
                <div className="px-10 sm:px-1 flex space-x-2 sm:space-x-4 mb-6 sm:mb-8 gap-4 sm:gap-6 justify-center items-center">
                    <button
                        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
                            activeTab === "all"
                                ? "bg-yellow-400 text-black font-semibold"
                                : "bg-transparent text-white"
                        }`}
                        onClick={() => handleTabClick("all")}
                    >
                        All
                    </button>
                    <button
                        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
                            activeTab === "mobile"
                                ? "bg-yellow-400 text-black font-semibold"
                                : "bg-transparent text-white"
                        }`}
                        onClick={() => handleTabClick("mobile")}
                    >
                        Mobile Apps
                    </button>
                    <button
                        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
                            activeTab === "website"
                                ? "bg-yellow-400 text-black font-semibold"
                                : "bg-transparent text-white"
                        }`}
                        onClick={() => handleTabClick("website")}
                    >
                        Website
                    </button>
                    <button
                        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
                            activeTab === "internet of things"
                                ? "bg-yellow-400 text-black font-semibold"
                                : "bg-transparent text-white"
                        }`}
                        onClick={() => handleTabClick("internet of things")}
                    >
                        Internet of Things
                    </button>
                </div>
                <div className="columns-1 sm:columns-2 md:columns-2 gap-4 sm:gap-6 px-2 sm:px-4 px-6 w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 mt-6 sm:mt-10 justify-center items-center pb-6 sm:pb-10">
                    {activeTab === "all" || activeTab === "mobile" ? (
                        <>
                            <CardProject
                                title="Battery Monitoring Apps"
                                description="A Flutter-based Android application for monitoring battery data from IoT devices. It provides real-time insights and analytics for efficient battery management."
                                imageUrl="/assets/bms-wallpaper.png"
                                tags={["Android", "Flutter", "IoT"]}
                            />
                        </>
                    ) : null}
                    {activeTab === "all" || activeTab === "website" ? (
                        <>
                            <CardProject
                                title="Sistem Informasi Penjadwalan Barang"
                                description="A web-based system designed to streamline and automate the scheduling of goods. It helps businesses manage inventory, optimize logistics, and improve operational efficiency."
                                imageUrl="/assets/penjadwalan-wallpaper.jpg"
                                tags={["Bootstrap", "Laravel", "HTMML", "CSS"]}
                            />
                            <a href="https://zegion.site/" target="_blank">
                                <CardProject
                                    title="Zegion Website Landing Page"
                                    description="Zegion is a software house founded by three recent graduates with a focus on creating IT products such as websites, mobile applications, machine learning, and the Internet of Things"
                                    imageUrl="/assets/zegion-wallpaper.png"
                                    tags={[
                                        "TailwindCSS",
                                        "React",
                                        "TypeScript",
                                    ]}
                                />
                            </a>
                        </>
                    ) : null}
                    {activeTab === "all" || activeTab === "mobile" ? (
                        <>
                            <CardProject
                                title="Daily Coach Report Apps"
                                description="A mobile application designed to assist users in managing their daily activities and tasks. It offers features for scheduling, reminders, and productivity tracking."
                                imageUrl="/assets/coachreport-wallpaper.png"
                                tags={["Android", "Koltin"]}
                            />
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default Project;
