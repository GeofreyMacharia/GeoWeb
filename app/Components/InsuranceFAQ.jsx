"use client";
import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const InsuranceFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "How to renew policy?",
      subtitle: "Banana",
      content: [
        "- Contact Your Insurance Provider ",
        <br key="1" />,
        "- Update Personal Information.",
      ],
    },
    {
      title: "How to file a claim?",
      subtitle: "Banana",
      content: [
        "- Contact Your Insurance Provider ",
        <br key="1" />,
        "- Gather Necessary Documentation.",
      ],
    },
    {
      title: "What is covered under insurance?",
      subtitle: "Banana",
      content: "Something Important LOL :)",
    },
  ];

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full mb-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg shadow-md mt-2 overflow-hidden"
        >
          {/* Header Section */}
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => onItemClick(index)}
          >
            <div className="flex items-center w-full">
              <div
                className="font-bold text-darkerGreen"
                style={{ fontFamily: "Poppins" }}
              >
                {item.title}
              </div>
              <div
                className="text-sm text-gray-500 ml-auto"
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
              className="p-4 pt-0"
              style={{ fontFamily: "Quicksand", fontWeight: "600" }}
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

export default InsuranceFAQ;
