"use client";
import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Bachelors In Information Technology",
      subtitle: "Sept 2018 - Nov 2022",
      content: [
        <span className="text-blue-300 text-md  font-abc font-light  inline-block mb-2">
          GPA: 3.5 <br />
          Second Class Upper Honors Division
        </span>,
        <br key="1" />,
        "- Attained the foundations in Computer programming, Data and Statistical Analysis.",
        <br key="2" />,
        "- Developed Food recommendation system by utilizing machine learning techniques.",
      ],
    },
    {
      title: "HighSchool Certificate",
      subtitle: "Feb 2014 - Dec 2017",
      content: [
        <span className="text-blue-300 text-md font-abc font-light  inline-block mb-2">
          Final Grade: B-
        </span>,
      ],
    },
  ];

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-wz mb-2 ml-6 mt-2 mb-1">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-darkerBG text-purpBG rounded-lg text-sm shadow-md mt-2 overflow-hidden"
        >
          {/* Header Section */}
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => onItemClick(index)}
          >
            <div className="flex items-center w-full">
              <div
                className="font-medium text-base text-darkerGreen mini_s:text-sm"
                style={{ fontFamily: "Poppins" }}
              >
                {item.title}
              </div>
              <div
                className="text-sm text-gray-500 ml-auto mini_s:text-[10px]"
                style={{ fontFamily: "Poppins" }}
              >
                {item.subtitle}
              </div>
            </div>
            <div>
              {index === activeIndex ? <MdExpandMore /> : <MdExpandLess />}
            </div>
          </div>

          {/* Expandable Content */}
          <div
            className={`transition-max-height duration-500 ease-in-out ${
              index === activeIndex ? "max-h-[500px]" : "max-h-0"
            }`}
            style={{
              overflow: "hidden",
            }}
          >
            <div
              className="p-4 -mt-4"
              style={{
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#378C8F",
              }}
            >
              {Array.isArray(item.content)
                ? item.content.map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>{line}</React.Fragment>
                  ))
                : item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
