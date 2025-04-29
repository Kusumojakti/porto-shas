import React from "react";

const EducationCard = ({ date, colleges, gpa, title, descriptions = [] }) => {
    return (
        <div className="bg-transparent shadow-md hover:bg-[#2E2E30] p-4 rounded-md items-center">
            <div className="flex flex-row justify-between mb-2">
                <div className="mt-1">
                    <h4 className="text-sm text-gray-300 font-Poppins w-full me-20">
                        {date}
                    </h4>
                </div>
                <div className="mt-0">
                    <div className="flex flex-rows justify-between gap-2">
                        <h3 className="text-lg font-semibold text-white font-Poppins">
                            {colleges}
                        </h3>
                        <p className="text-sm text-gray-200 font-Poppins font-semibold mt-1">
                            {gpa}
                        </p>
                    </div>
                    <p className="font-normal text-gray-300 mt-2 font-Poppins w-full text-sm pb-4">
                        {title}
                    </p>
                    <ul className="font-normal text-gray-300 mt-0 font-Poppins w-full text-sm pb-4 list-disc pl-5 ">
                        {descriptions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
