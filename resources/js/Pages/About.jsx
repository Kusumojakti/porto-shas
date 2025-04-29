"use client";

import React from "react";
import Navbar from "./Components/navbar";
import TimelineCard from "./Components/TimelineCard";
import EducationCard from "./Components/EducationCard";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import PublicationCard from "./Components/PublicationCard";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#1A1A1D] min-h-full flex flex-col overflow-hidden sm:px-10 lg:px-40 py-1 items-center">
                <div className="grid lg:grid-cols-2 gap-10 items-start mt-10 px-4 sm:px-0 w-full h-full">
                    <div className="flex flex-col items-start justify-between lg:items-start lg:justify-between h-full pb-10">
                        <div>
                            <h2 className="text-balance text-xl text-yellow-400 sm:text-5xl font-BigShoulders font-black pb-2">
                                Mochamad Aqsha Pasalewa Kusumojakti
                            </h2>
                            <h5 className="text-white text-2xl font-Poppins mt-2 sm:text-base pb-5">
                                Junior Android Developer, Website Developer
                            </h5>
                        </div>
                        <div>
                            <h2 className="text-yellow-400 text-xl sm:text-2xl font-BigShoulders font-black pb-2">
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
                                                src=".\assets\icons\Instagram_Glyph_White.png"
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
                                                src=".\assets\icons\InBug-White.png"
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
                                                src=".\assets\icons\github-mark-white.png"
                                                alt="github logo"
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
                                            href="mailto:aqsha.kusumojakti@gmail.com"
                                            target="_blank"
                                        >
                                            <img
                                                src=".\assets\icons\communication.png"
                                                alt="github logo"
                                                width={40}
                                                height={40}
                                                className="mt-4"
                                            />
                                        </a>
                                    </motion.button>
                                </div>
                                <div className="w-3 h-full bg-white"></div>
                                <a
                                    href="/assets/CV_Mochamad%20Aqsha%20Pasalewa%20Kusumojakti.pdf"
                                    target="_blank"
                                >
                                    <motion.button
                                        whileHover={{ scale: 0.9 }}
                                        onHoverStart={(event) => {}}
                                        onHoverEnd={(event) => {}}
                                    >
                                        <div className="flex justify-start mt-4 gap-2">
                                            <h6 className="font-Poppins text-sm text-white font-normal mt-4">
                                                Or View My Resume
                                            </h6>

                                            <ArrowUpRightIcon className="h-5 w-5 text-white mt-4 ms-2" />
                                        </div>
                                    </motion.button>
                                </a>
                            </h2>
                        </div>
                    </div>

                    {/* information side */}
                    <motion.div
                        className="overflow-y-auto max-h-screen sm:max-h-[calc(100vh-8rem)] pr-2 [&::-webkit-scrollbar]:hidden scrollbar-hide"
                        initial={{ opacity: 2 }}
                        animate={{ opacity: 3 }}
                        exit={{ opacity: 2 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-white font-normal text-xl font-medium sm:text-base font-Poppins pb-3 text-start leading-8">
                            Hi! I’m a Junior Programmer and Freelancer from
                            Indonesia with a strong interest in Android mobile
                            development, web development, and emerging
                            technologies like IoT (Internet of Things).
                        </p>
                        <p className="text-white font-normal text-xl font-medium sm:text-base font-Poppins pb-3 text-start leading-8">
                            I’ve been working on various tech projects since my
                            university days from creating mobile apps and
                            websites to building systems that connect with
                            real-world hardware. One of my proudest moments was
                            developing a "Sistem Monitoring Kondisi Baterai
                            menggunakan Internet of Things" as my final thesis
                            project. That experience really sparked my curiosity
                            for bridging software with the physical world.
                        </p>
                        <p className="text-white font-normal text-xl font-medium sm:text-base font-Poppins pb-3 text-start leading-8">
                            Outside of academics, I was also actively involved
                            in campus organizations, where I grew both
                            personally and professionally—collaborating in
                            teams, leading small projects, and communicating
                            with diverse people.
                        </p>
                        <p className="text-white font-normal text-xl font-medium sm:text-base font-Poppins pb-5 text-start leading-8">
                            I’m always eager to learn and explore new
                            technologies, and collaborate on impactful projects!
                        </p>
                        <div className="mt-20 mb-10 flex flex-col gap-5">
                            <h2 className="text-yellow-400 text-xl sm:text-2xl font-BigShoulders font-black pb-2">
                                Educations.
                            </h2>
                            <EducationCard
                                date="2021 - 2025"
                                colleges="Universitas Teknologi Yogyakarta"
                                gpa="3.69/4.00"
                                title="Bachelor of Computer Science, Major in Informatics Engineering"
                                descriptions={[
                                    "Served as the President of the Informatics Student Association (HIMATIKA UTY) for the 2023/2024 period.",
                                    "Worked as an event division staff member in the 2023 Community Service program organized by HIMATIKA, held in Bantul, Yogyakarta.",
                                    "Acted as Session Coordinator for the Flutter Bootcamp during the HiCamp: Flutter 2023 event.",
                                    "Served as the Master of Ceremony (MC) for the Flutter Workshop organized by HIMATIKA UTY.",
                                    "Successfully published a SINTA 4-accredited journal titled 'Deteksi Real-Time Kondisi Baterai Menggunakan Sistem Monitoring Berbasis Perangkat Bergerak'",
                                ]}
                            />
                            <EducationCard
                                date="2018 - 2021"
                                colleges="SMA Negeri 1 Sewon"
                                title="Natural Sciences (IPA) Major"
                                descriptions={[
                                    "Served as the Head of the Student Council (OSIS) for the 2020/2021 period.",
                                    "Served as Vice Chairperson for the Kartini Day SMASE event organized by the SMASE Student Council (OSIS).",
                                    "Acted as the Field Division Coordinator for the SMASE Tryout event in 2019.",
                                ]}
                            />
                        </div>
                        <div className="mt-20 mb-10 flex flex-col gap-5">
                            <h2 className="text-yellow-400 text-xl sm:text-2xl font-BigShoulders font-black pb-2">
                                Experience.
                            </h2>
                            <TimelineCard
                                date="June 2024 - Present"
                                title="Freelance Android Developer and Web Developer"
                                description="Developed Android-based and web applications, such as a teaching material notes app for teachers and an inventory scheduling information system. Collaborated with a team to build applications tailored to client requirements, ensuring functionality aligned with user needs."
                                company="Own Company, Zegion.site"
                                tags={[
                                    "Android",
                                    "Flutter",
                                    "Kotlin",
                                    "Laravel",
                                    "React",
                                    "Tailwind CSS",
                                    "Express JS",
                                ]}
                            />
                            <TimelineCard
                                date="August 2024 - October 2024"
                                title="Flutter Junior Android Developer"
                                description="Developing a mobile application for managing item and room bookings within an institution in Yogyakarta, including displaying booking schedules and coordinating the registration of local UMKM products to be showcased within the mobile app."
                                company="Ylabs Indonesia"
                                tags={["Android", "Flutter"]}
                            />
                        </div>
                        <div className="mt-20 mb-10 flex flex-col gap-5">
                            <h2 className="text-yellow-400 text-xl sm:text-2xl font-BigShoulders font-black pb-2">
                                Publication.
                            </h2>
                            <PublicationCard
                                title="Deteksi Real Time Kondisi Baterai Menggunakan Sistem Monitoring Berbasis Perangkat Bergerak"
                                date="2024"
                                description="A system that monitors battery conditions using IoT technology, providing real-time data and alerts."
                                link="https://jurnal.uts.ac.id/index.php/JINTEKS/article/view/4866"
                                img="/assets/cover-journal.png"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default About;
