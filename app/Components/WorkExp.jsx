"use client";
import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const WorkExp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Software Developer",
      subtitle: "May 2024 - Current",
      content: [
        <span className="text-purpBG text-md font-abc font-medium  inline-block mb-2">
          ~ Msimbo DevHub
        </span>,
        <br key="1" />,
        "- Designed and developed an intuitive, user-friendly web platform that provides farmers with access to agronomy , insurance, loans, veterinary services, and a virtual market.",
        <br key="2" />,
        "- Integrated payment gateways and loan management systems, allowing farmers to easily manage their finances within the platform.",
        <br key="3" />,
        "-Optimized front-end performance and SEO to increase site visibility and ensure a smooth, fast experience for all users.",
      ],
    },
    {
      title: "UI UX Designer",
      subtitle: "Jan 2024 - May 2024",
      content: [
        <span className="text-purpBG text-md font-abc font-medium inline-block mb-2">
          ~ Msimbo DevHub
        </span>,
        <br key="1" />,
        "- Designed and developed an intuitive, user-friendly web platform that provides farmers with access to agronomy , insurance, loans, veterinary services, and a virtual market.",
        <br key="2" />,
        "- Integrated payment gateways and loan management systems, allowing farmers to easily manage their finances within the platform.",
        <br key="3" />,
        "-Optimized front-end performance and SEO to increase site visibility and ensure a smooth, fast experience for all users.",
      ],
    },
    {
      title: "Data Analyst",
      subtitle: "July 2022 - Aug 2023",
      content: [
        <span className="text-purpBG text-md font-abc font-medium inline-block mb-2">
          ~ Upwork
        </span>,
        <br key="1" />,
        "- Designed and developed an intuitive, user-friendly web platform that provides farmers with access to agronomy , insurance, loans, veterinary services, and a virtual market.",
        <br key="2" />,
        "- Integrated payment gateways and loan management systems, allowing farmers to easily manage their finances within the platform.",
        <br key="3" />,
        "-Optimized front-end performance and SEO to increase site visibility and ensure a smooth, fast experience for all users.",
      ],
    },
    {
      title: "Software Development Intern",
      subtitle: "Sept 2021 - Dec 2021",
      content: [
        <span className="text-purpBG text-md font-abc font-medium inline-block mb-2">
          ~ ICT Authority
        </span>,
        <br key="1" />,
        "- Developed python scripts for monitoring network performance and automating maintenance alerts  across all 53 regions under the organisation, reducing downtime and improving response time for connectivity issues.",
        <br key="2" />,
        "- Configured backups for the Government Common Core Network and National Optical Fiber Backbone, increasing network uptime by 12%",
        <br key="3" />,
        "- Collaborated with the tech lead to integrate and deploy a new Libre Network Management System, enhancing network monitoring by 50%",
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
                className="text-sm text-gray-500 ml-auto xs:text-lg mini_s:text-[10px]"
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

export default WorkExp;
