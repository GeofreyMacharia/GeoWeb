"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Python for Data Analysis",
      subtitle: "Nov 2022",
      content: [
        <span
          onClick={go_to_cert}
          className="text-blue-300 text-md underline font-abc font-light  inline-block mb-2 cursor-pointer"
        >
          Click to for more details
        </span>,
      ],
    },
    {
      title: "SQL and Databases",
      subtitle: "Dec 2022",
      content: [
        <span
          onClick={go_to_cert}
          className="text-blue-300 text-md underline font-abc font-light  inline-block mb-2 cursor-pointer"
        >
          Click to for more details
        </span>,
      ],
    },
    {
      title: "Fundamentals of Design",
      subtitle: "Jan 2024",
      content: [
        <span
          onClick={go_to_cert}
          className="text-blue-300 text-md underline font-abc font-light  inline-block mb-2 cursor-pointer"
        >
          Click to for more details
        </span>,
      ],
    },
  ];

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const router = useRouter();
  function go_to_cert() {
    router.push("/Longstrip/Certifications");
  }
  return (
    <div className="w-wz mb-2 ml-6 mt-2 mb-1">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-darkerBG text-purpBG rounded-lg text-sm shadow-md mt-2 overflow-hidden "
        >
          {/* Header Section */}
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => onItemClick(index)}
          >
            <div className="flex items-center w-full">
              <div
                className="font-medium text-base text-darkerGreen  mini_s:text-sm"
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

export default Certifications;
