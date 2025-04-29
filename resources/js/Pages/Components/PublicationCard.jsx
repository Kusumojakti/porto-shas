import React from "react";

const PublicationCard = ({ title, img, description, link }) => {
    return (
        <div className="bg-transparent shadow-md hover:bg-[#2E2E30] p-4 rounded-md items-center">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm"
            >
                <div className="flex flex-row justify-between ">
                    <div>
                        <img src={img} className="w-[600px]" />
                    </div>
                    <div className="mt-0 ms-4 w-screen">
                        <div className=" flex justify-between items-center mb-1">
                            <h3 className="text-sm font-semibold text-white font-Poppins w-full">
                                {title}
                            </h3>
                        </div>
                        <p className="text-gray-300 w-full mt-2 text-sm font-Poppins">
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PublicationCard;
