import React from "react";

const TimelineCard = ({ date, title, description, company, tags = [] }) => {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="bg-transparent shadow-md hover:bg-[#2E2E30] p-4 rounded-md items-center flex-1">
                <div className="flex flex-row justify-between mb-2">
                    <div>
                        <h4 className="text-sm text-gray-300 font-Poppins w-full me-20">
                            {date}
                        </h4>
                    </div>
                    <div className="mt-0">
                        <h3 className="text-lg font-semibold text-white font-Poppins">
                            {title} - {company}
                        </h3>
                        <p className="font-normal text-gray-300 mt-2 font-Poppins w-full text-sm pb-4">
                            {description}
                        </p>
                        <div>
                            <div className="flex flex-row gap-2 flex-wrap">
                                {tags.map((tag, index) => (
                                    <p
                                        key={index}
                                        className="rounded-full text-white bg-gray-500 w-fit px-2 py-1 mt-2 text-sm font-Poppins font-semibold"
                                    >
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;
