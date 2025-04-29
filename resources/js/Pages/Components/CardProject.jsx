"use client";

import React from "react";
import "animate.css";

const CardProject = ({ title, description, imageUrl, tags = [] }) => {
    return (
        <div className="break-inside-avoid relative bg-white rounded-lg shadow-lg hover:shadow-sm transition-shadow duration-300 transform cursor-pointer overflow-hidden group">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto object-cover mt-0 rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-bottom p-4 flex top-0 bottom-0 items-end">
                <div>
                    <h2 className="text-white text-xl font-black">{title}</h2>
                    <p className="text-base text-white">{description}</p>
                    <div
                        className={`${
                            tags.length > 1 ? "flex flex-wrap gap-2" : ""
                        } mt-2`}
                    >
                        {tags.map((tag, index) => (
                            <p
                                key={index}
                                className="rounded-full text-white bg-gray-500 w-fit px-2 py-1 text-sm font-Poppins font-semibold"
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProject;
