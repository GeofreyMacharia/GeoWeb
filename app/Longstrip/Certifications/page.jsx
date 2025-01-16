"use client";
import Image from "next/image";
import heart_img from "@public/heart2_.png";
import data_analysis_cert from "@public/Cert_data_analysis.png";
import AI_cert from "@public/Cert_python_AI.png";
import sql_cert from "@public/Cert_Sql.png";
import ML_cert from "@public/ML_cert.png";
import Data_cert from "@public/Data_cert.png";
import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";
export default function cert() {
  const router = useRouter();
  function go_back_to_long() {
    router.push("/Longstrip");
  }
  return (
    <div className="flex flex-col  h-screen w-full xs:gap-y-6 ">
      <div className="flex justify-center items-center h-14 w-full  relative shadow-md shadow-bordBG mb-6">
        <label className="h-full w-64 p-2 font-abc font-semibold text-2xl text-purpBG border-b-[1px] border-b-purpBG -mt-1  ">
          MY CERTIFICATIONS
        </label>
        <div className="back_icon h-12 w-12  absolute top-0 left-1">
          <IoArrowBackCircle
            onClick={go_back_to_long}
            className=" h-full w-full fill-purpBG cursor-pointer hover:fill-blue-300 "
          />
        </div>
      </div>
      {/* ``````````````````````````````````cert 1`````````````````````````````` */}
      <div className="flex flex-row  w-full p-4  relative mt-4 gap-x-12 xs:flex-col xs:gap-y-10">
        <div className="flex h-56 w-80 border-[1px] border-purpBG absolute rounded-md -bottom-2 left-8 xb:w-72 xs:hidden xs:h-0 "></div>
        <div className="flex flex-row h-full w-80 xs:w-full  ">
          <Image
            src={AI_cert}
            alt="AI_cert"
            className=" object-cover h-full  rounded-md z-[1]"
          />
        </div>
        <div className="flex flex-col h-full w-xi  relative xs:w-full ">
          <label className="flex f h-8 w-full  text-xl font-abc font-medium text-purpBG xb:text-[15px]  fmd:text-[12px]">
            Python For Data Science
          </label>
          <label className="flex  h-4 w-full  text-sm font-xyz font-medium text-purpBG fmd-text[11px] fmd:text-light">
            Awarded by: Coursera
          </label>
          <label className="flex  h-20 w-full  mt-4 text-base font-xyz text-justify font-medium text-bordBG pr-2 xb:text-[14px] fmd:text-[11px]">
            A comprehensive introduction to , focusing on data Python
            programming manipulation, visualization, and the use of libraries
            like Pandas and NumPy. It also covered machine learning fundamentals
            and development tools, enhancing my ability to build and implement
            data-driven solutions.
          </label>
          <label className="flex justify-end p-2 h-8 w-36  text-sm font-xyz font-medium text-purpBG absolute top-0 right-0 fmd:text-[13px]">
            Year: 2023
          </label>
        </div>
      </div>
      {/* ``````````````````````````````````cert 2`````````````````````````````` */}
      <div className="flex flex-row  w-full p-4  relative mt-4 gap-x-12 xs:flex-col xs:gap-y-10">
        <div className="flex h-56 w-80 border-[1px] border-purpBG absolute rounded-md -bottom-2 left-8 xb:w-72 xs:hidden xs:h-0"></div>
        <div className="flex flex-row h-full w-80 xs:w-full ">
          <Image
            src={data_analysis_cert}
            alt="data_analysis_cert"
            className=" object-cover h-full  rounded-md z-[1]"
          />
        </div>
        <div className="flex flex-col h-full w-xi  relative xs:w-full">
          <label className="flex f h-8 w-full  text-xl font-abc font-medium text-purpBG xb:text-[15px]  fmd:text-[12px]">
            Data Analysis with Python
          </label>
          <label className="flex  h-4 w-full  text-sm font-xyz font-medium text-purpBG fmd-text[11px] fmd:text-light">
            Awarded by: Coursera
          </label>
          <label className="flex  h-20 w-full  mt-4 text-base font-xyz text-justify font-medium text-bordBG pr-2 xb:text-[14px] fmd:text-[11px]">
            The course focused on essential techniques like data wrangling, data
            visualization and statistical analysis using libraries such as
            Pandas, Matplotlib, and Seaborn. It enhanced my ability to extract
            insights from large datasets and make data-driven decisions, further
            sharpening my expertise in analyzing and interpreting data as a data
            scientist.
          </label>
          <label className="flex justify-end p-2 h-8 w-36  text-sm font-xyz font-medium text-purpBG absolute top-0 right-0 fmd:text-[13px]">
            Year: 2023
          </label>
        </div>
      </div>
      {/* ``````````````````````````````````cert 3`````````````````````````````` */}
      <div className="flex flex-row  w-full p-4  relative mt-4 gap-x-12 xs:flex-col xs:gap-y-10">
        <div className="flex h-56 w-80 border-[1px] border-purpBG absolute rounded-md -bottom-2 left-8 xb:w-72 xs:hidden xs:h-0"></div>
        <div className="flex flex-row h-full w-80 xs:w-full ">
          <Image
            src={sql_cert}
            alt="sql_cert"
            className=" object-cover h-full  rounded-md z-[1]"
          />
        </div>
        <div className="flex flex-col h-full w-xi  relative xs:w-full">
          <label className="flex f h-8 w-full  text-xl font-abc font-medium text-purpBG xb:text-[15px]  fmd:text-[12px]">
            SQL For Data Science
          </label>
          <label className="flex  h-4 w-full  text-sm font-xyz font-medium text-purpBG fmd-text[11px] fmd:text-light">
            Awarded by: Coursera
          </label>
          <label className="flex  h-20 w-full  mt-4 text-base font-xyz text-justify font-medium text-bordBG pr-2 xb:text-[14px] fmd:text-[11px]">
            The course covered SQL fundamentals, Database Management and
            Querying techniques , focusing on how to efficiently handle and
            analyze data stored in relational databases. It strengthened my
            ability to work with large datasets, extract valuable insights, and
            integrate SQL with python
          </label>
          <label className="flex justify-end p-2 h-8 w-36  text-sm font-xyz font-medium text-purpBG absolute top-0 right-0 fmd:text-[13px]">
            Year: 2023
          </label>
        </div>
      </div>
      {/* ``````````````````````````````````cert 2`````````````````````````````` */}
      <div className="flex flex-row  w-full p-4  relative mt-4 gap-x-12 xs:flex-col xs:gap-y-10">
        <div className="flex h-56 w-80 border-[1px] border-purpBG absolute rounded-md -bottom-2 left-8 xb:w-72 xs:hidden xs:h-0 xb:text-[14px]"></div>
        <div className="flex flex-row h-full w-80 xs:w-full ">
          <Image
            src={ML_cert}
            alt="ML_cert"
            className=" object-cover h-full  rounded-md z-[1]"
          />
        </div>
        <div className="flex flex-col h-full w-xi  relative xs:w-full">
          <label className="flex f h-8 w-full  text-xl font-abc font-medium text-purpBG xb:text-[15px]  fmd:text-[12px]">
            Machine Learning with Python
          </label>
          <label className="flex  h-4 w-full  text-sm font-xyz font-medium text-purpBG fmd-text[11px] fmd:text-light">
            Awarded by: 365 Data Science
          </label>
          <label className="flex  h-20 w-full  mt-4 text-base font-xyz text-justify font-medium text-bordBG pr-2 xb:text-[14px] fmd:text-[11px]">
            The course focused on essential techniques like data wrangling, data
            visualization and statistical analysis using libraries such as
            Pandas, Matplotlib, and Seaborn. It enhanced my ability to extract
            insights from large datasets and make data-driven decisions, further
            sharpening my expertise in analyzing and interpreting data as a data
            scientist.
          </label>
          <label className="flex justify-end p-2 h-8 w-36  text-sm font-xyz font-medium text-purpBG absolute top-0 right-0 fmd:text-[13px]">
            Year: 2021
          </label>
        </div>
      </div>
      {/* ``````````````````````````````````cert 2`````````````````````````````` */}
      <div className="flex flex-row  w-full p-4  relative mt-4 gap-x-12 xs:flex-col xs:gap-y-10">
        <div className="flex h-56 w-80 border-[1px] border-purpBG absolute rounded-md -bottom-2 left-8 xb:w-72 xs:hidden xs:h-0"></div>
        <div className="flex flex-row h-full w-80 xs:w-full ">
          <Image
            src={Data_cert}
            alt="Data_cert"
            className=" object-cover h-full  rounded-md z-[1]"
          />
        </div>
        <div className="flex flex-col h-full w-xi  relative xs:w-full">
          <label className="flex f h-8 w-full  text-xl font-abc font-medium text-purpBG xb:text-[15px]  fmd:text-[12px]">
            Introduction to Data and Data Science
          </label>
          <label className="flex  h-4 w-full  text-sm font-xyz font-medium text-purpBG fmd-text[11px] fmd:text-light">
            Awarded by: 365 Data science
          </label>
          <label className="flex  h-20 w-full  mt-4 text-base font-xyz text-justify font-medium text-bordBG pr-2 xb:text-[14px] fmd:text-[11px]">
            The course focused on essential techniques like data wrangling, data
            visualization and statistical analysis using libraries such as
            Pandas, Matplotlib, and Seaborn. It enhanced my ability to extract
            insights from large datasets and make data-driven decisions, further
            sharpening my expertise in analyzing and interpreting data as a data
            scientist.
          </label>
          <label className="flex justify-end p-2 h-8 w-36  text-sm font-xyz font-medium text-purpBG absolute top-0 right-0 fmd:text-[13px]">
            Year: 2021
          </label>
        </div>
      </div>
    </div>
  );
}
