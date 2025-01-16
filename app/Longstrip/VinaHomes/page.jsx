"use client";
import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";
import home_img from "@public/Home.png";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import vina_snp_1 from "@public/Assets/VN.png";
import vina_snp_2 from "@public/Assets/VN_RESULTS.png";
export default function VinaHomes() {
  const router = useRouter();
  function go_back_to_long() {
    router.push("/Longstrip#Section4");
  }
  return (
    <>
      <div className="flex  w-full early_blk:hidden">
        <div className="flex flex-col  w-full">
          {/* nav */}
          <div className="flex  h-14 w-full border-b-[1px] border-b-purpBG mb-6 relative">
            <div className="flex flex-col h-full w-1/3 pt-2.5  text-lg font-abc font-bold text-bordBG absolute top-0 left-[72px] lx:w-2/3 mx_w:text-sm  mx_w:text-sm mx_w:pt-3 fmd:w-3/4">
              <p>
                Home {">"} Project {">"} Vina Homes <br />
              </p>
            </div>
            <label className="h-full w-1/3 p-3 text-end font-abc font-semibold text-2xl text-purpBG -mt-1 absolute top-0 right-1 lx:text-lg lx:p-4 mx_w:text-sm mx_w:p-4 fmd:hidden ">
              Project Showcase
            </label>
            <div className="back_icon h-12 w-12  absolute top-0 left-1">
              <IoArrowBackCircle
                onClick={go_back_to_long}
                className=" h-full w-full fill-purpBG cursor-pointer hover:fill-blue-300 "
              />
            </div>
          </div>
          <div className="flex flex-row h-full w-full gap-x-4 lx:flex-col lx:gap-y-4">
            <div className="flex flex-col h-full w-1/2 p-2 gap-y-1 lx:w-full">
              <div className="flex flex-col w-full  rounded-xl z-[1]">
                <Image
                  src={home_img}
                  alt="home_img"
                  className=" object-cover h-full  rounded-xl"
                />
              </div>

              <p className="justify-end text-lg font-abc font-bold text-bordBG font-medium text-purpBG pt-2 ">
                Machine Learning Project:{" "}
                <span className="font-xyz font-medium text-gray-300 pt-2 mb-2">
                  A web based system that enables users to predict the prices of
                  homes based on their inputs.
                </span>
              </p>
            </div>
            <div className="flex flex-col h-full w-1/2 pt-3 pr-3 lx:w-full ">
              <div className="flex flex-col  pb-1 w-full pl-3 pr-3 rounded-xl shadow-[0_0_10px_3px_rgba(0,255,0,0.1)] hover:shadow-[0_0_15px_5px_rgba(0,255,0,0.1)] transition-shadow duration-300">
                <p className="flex justify-start text-3xl font-abc font-bold text-bordBG  underline pt-2 mb-2 lx:justify-center lx:items-center mx_w:text-2xl">
                  VINA HOMES
                </p>
                <p className="justify-end text-md font-xyz font-medium text-gray-300 pt-2 mb-2 ">
                  <span className="text-purpBG text-lg font-bold">
                    Problem:{" "}
                  </span>{" "}
                  New home owners feeling overwhelmed with the search of getting
                  a new home due to housing crisis as well as the lack of
                  systems that aid in in-depth home searches.
                </p>
                <p className="justify-end text-md font-xyz font-medium text-gray-300 pt-2 mb-2 ">
                  <span className="text-purpBG text-lg font-bold">
                    Objective:{" "}
                  </span>{" "}
                  Create machine learning algorithims that predict house prices
                  based the enormous criteria home owners inquire when selection
                  the best house.
                </p>
                <p className="justify-end text-md font-xyz font-medium text-gray-300 pt-2 mb-2 ">
                  <span className="text-purpBG text-lg font-bold">
                    Project Type:
                  </span>{" "}
                  Personal
                </p>
                <p className="justify-end text-md font-xyz font-medium text-gray-300 pt-2 mb-2 ">
                  <span className="text-purpBG text-lg font-bold ">
                    Tools Used:
                  </span>{" "}
                  Python Programming, Sckit learn , Streamlit.
                </p>
                <p className="justify-end text-md font-xyz font-medium text-gray-300 pt-2 mb-2">
                  <span className="text-purpBG text-lg font-bold">
                    Methodology: <br />
                  </span>
                </p>
                <ul className="list-disc list-inside text-md font-xyz font-medium text-gray-300">
                  <li>Exploratory Data Analysis</li>
                  <li>Data Pre-processing</li>
                  <li>Predictive Modeling</li>
                  <li>Testing</li>
                  <li>Deployment</li>
                </ul>
              </div>
              <div className="flex justify-end">
                <div
                  className="flex justify-center items-center h-16 w-56 text-bordBG font-abc border-solid border-[2px] border-purpBG cursor-pointer mt-10 
          rounded-xl hover:border-bordBG transition-transform duration-300  hover:scale-105 hover:shadow-lg hover:shadow-bordBG hover:text-purpBG group fmd:w-40"
                >
                  <GrLinkNext className="h-8 w-8 pr-2 group-hover:text-purpBG fmd:h-6 fmd:w-6 " />
                  <Link
                    href="#"
                    className="text-lg font-abc font-md group-hover:text-purpBG fmd:text-base"
                  >
                    Next Project {">>>"}
                  </Link>
                </div>
              </div>
              <div className="flex justify-start">
                <div
                  className="flex justify-center items-center h-16 w-56 text-bordBG font-abc border-solid border-[2px] border-purpBG cursor-pointer -mt-16 ml-0 
          rounded-xl hover:border-bordBG transition-transform duration-300
          hover:scale-105 hover:shadow-lg hover:shadow-bordBG hover:text-purpBG group fmd:w-40"
                >
                  <FaGithub className="h-8 w-8 pr-2 group-hover:text-purpBG fmd:h-6 fmd:w-6" />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/GeofreyMacharia/Vina-House"
                    className="text-lg font-abc font-md group-hover:text-purpBG fmd:text-base"
                  >
                    Open Project
                  </Link>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  w-full early_blk:hidden">
        <div className="flex  h-14 w-full mb-0 relative">
          <label className="h-full w-full p-3 text-center underline font-abc font-semibold text-2xl text-purpBG   ">
            Project Snippet
          </label>
        </div>
        <div className="flex mt-2 w-full p-2 ">
          <Image
            src={vina_snp_1}
            alt="vina_snp_1"
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col  w-full mt-6 early_blk:hidden">
        <div className="flex  h-14 w-full mb-0 relative">
          <label className="h-full w-full p-3 text-center underline font-abc font-semibold text-2xl text-purpBG   ">
            Result Snippet
          </label>
        </div>
        <div className="flex mt-2 w-full p-2 ">
          <Image
            src={vina_snp_2}
            alt="vina_snp_2"
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
