"use client";

import DashNav from "../Components/DashNav";
import Image from "next/image";
import heart_img from "@public/heart2_.png";
import farmfuzion_img from "@public/Farmfuzion.png";
import { RiSpeakFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Dashburger from "../Components/Dashburger";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
const slideInVariant = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeIn" } },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

export default function Testing() {
  const router = useRouter();
  function back_to_selection() {
    router.push("/");
  }
  function go_rez() {
    router.push("/Dashboard/DResume");
  }
  function see_cert() {
    router.push("/Dashboard/DCertifications");
  }
  function see_proj() {
    router.push("/Dashboard/Projects");
  }
  function go_conts() {
    router.push("/Dashboard/Contact");
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="flex h-screen w-full bg-mainBg early_blk:hidden">
        <DashNav />
        <Dashburger isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <motion.div
          className="flex h-screen w-full "
          variants={slideInVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="flex flex-wrap h-screen w-full ">
            <div className="flex justify-start h-16 w-cs ml-3    ">
              <label className="h-full w-1/3  p-2 pt-4 text-2xl font-abc font-semibold text-purpBG fmd:text-xl fmd:w-2/3 xs:pt-2">
                My Overview
              </label>
              <div
                onClick={back_to_selection}
                className="flex justify-center items-center h-12 w-16  absolute top-1.5
       right-3 border-solid border-4 border-bordBG cursor-pointer xs:hidden"
              >
                <label
                  onClick={back_to_selection}
                  className="flex  cursor-pointer  text-4xl text-purpBG font-medium"
                >
                  G
                </label>
              </div>
              <div className="h-10 w-10  absolute top-0 right-0 cursor-pointer hidden xs:block">
                <IoMenuOutline
                  onClick={toggleSidebar}
                  className="h-full w-full text-purpBG"
                />
              </div>
            </div>
            <div className="flex flex-row h-72 w-full fmd:flex-col fmd:h-full ">
              <div className="flex flex-row h-full w-1/2  gap-x-4 p-3 fmd:w-full">
                <div className="flex flex-col h-full w-1/2 gap-y-4">
                  <div className="flex flex-col h-1/2 w-full  border border-[1px] border-purpBG rounded-lg ">
                    <label className="flex justify-center items-center pt-4 h-2/4 w-full  text-4xl text-white font-abc font-bold">
                      20+
                    </label>
                    <label className="flex justify-center items-center h-1/4 w-full text-sm text-bordBG font-abc font-light lx:text-[12px] fmd:text-[16px] fmd:font-md fmd:text-[14px]">
                      Projects
                    </label>
                    <label
                      onClick={see_proj}
                      className="flex justify-center items-center h-1/4 w-full text-sm text-bordBG font-abc font-light hover:text-blue-300 hover:text-semibold cursor-pointer"
                    >
                      View All {">>>"}
                    </label>
                  </div>
                  <div className="flex flex-col h-1/2 w-full  border border-[1px] border-purpBG rounded-lg">
                    <label className="flex justify-center items-center pt-4 h-2/4 w-full  text-4xl text-white font-abc font-bold">
                      5+
                    </label>
                    <label className="flex justify-center items-center h-1/4 w-full text-sm text-bordBG font-abc font-light lx:text-[12px] fmd:text-[16px] fmd:font-md fmd:text-[14px]">
                      Year's Programming
                    </label>
                  </div>
                </div>
                <div className="flex flex-col h-full w-1/2  gap-y-4 ">
                  <div className="flex flex-col h-1/2 w-full  border border-[1px] border-purpBG rounded-lg">
                    <label className="flex justify-center items-center pt-4 h-2/4 w-full  text-4xl text-white font-abc font-bold">
                      10+
                    </label>
                    <label className="flex justify-center items-center h-1/4 w-full text-sm text-bordBG font-abc font-light lx:text-[12px] fmd:text-[16px] fmd:font-md fmd:text-[14px]">
                      Certifications
                    </label>
                    <label
                      onClick={see_cert}
                      className="flex justify-center items-center h-1/4 w-full text-sm text-bordBG font-abc font-light cursor-pointer hover:text-blue-300 hover:text-semibold lx:text-[12px]  "
                    >
                      View All {">>>"}
                    </label>
                  </div>
                  <div className="flex flex-col h-1/2 w-full  border border-[1px] border-purpBG rounded-lg">
                    <label className="flex justify-center items-center pt-4 h-2/4 w-full  text-4xl text-white font-abc font-bold ">
                      30+
                    </label>
                    <label className="flex justify-center items-center h-1/4 w-full text-sm text-bordBG font-abc font-light lx:text-[12px] fmd:text-[16px] fmd:font-md fmd:text-[14px] ">
                      Acquired Skills
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  h-full w-1/2   p-3 fmd:w-full">
                <div
                  onClick={go_rez}
                  className="h-16 w-full mb-2  border border-[1px] border-purpBG rounded-lg group hover:border-customGreen  "
                >
                  <label className="flex justify-center items-center  h-full w-full  text-3xl text-bordBG font-abc font-medium group-hover:text-blueHov cursor-pointer">
                    My Resume
                  </label>
                </div>

                <div className="flex flex-col h-ex w-full   border border-[1px] border-purpBG rounded-lg">
                  <label
                    className="flex p-4 pt-3 text-justify h-3/4  w-full  text-sm text-white font-abc font-light lx:text-[12px] lx:font-xyz xb:text-[10px]
                  xs:text-[11px] mx_w:text-[9px] fmd:text-[14px]"
                  >
                    My expertise spans both creative web development and
                    data-driven solutions, combining technical skills with
                    analytical thinking to deliver impactful results. <br />
                    <br />
                    My expertise spans both creative web development and
                    data-driven solutions, combining technical skills with
                    analytical thinking to deliver impactful results.
                  </label>

                  <label
                    onClick={go_conts}
                    className="flex p-4 pt-1 text-justify h-1/4 w-full  text-sm text-bordBG font-abc font-light cursor-pointer hover:text-blueHov"
                  >
                    Get In Touch {">>>"}
                  </label>
                </div>
              </div>
            </div>
            <div className="flex h-72 w-full">
              {/* `````````````````````Section 2``````````````````````````````````````` */}
              <div className="flex flex-row h-full w-full   gap-x-4 p-3 xs:flex-col xs:gap-y-4">
                <div className="flex flex-col h-full w-1/2  border border-[1px] border-purpBG rounded-lg p-3 xs:w-full">
                  <div className=" flex justify-center items-center  text-2xl text-bordBG font-abc font-medium h-12 w-full mb-2  ">
                    Featured Project
                  </div>

                  <div className="flex h-ex w-full bg-black opacity-85 z-[1] rounded-xl">
                    <Image
                      src={farmfuzion_img}
                      alt="farmfuzion_img"
                      className=" object-cover h-full  rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex flex-col h-full w-1/2  border border-[1px] border-purpBG rounded-lg p-3 xs:w-full">
                  <div className="flex justify-center items-center  text-2xl text-bordBG font-abc font-medium h-12 w-full mb-2  ">
                    Endorsements
                  </div>

                  <div className="flex flex-col h-ex w-full  rounded-xl gap-y-1">
                    <div className="flex h-16 w-full    ">
                      <div className="flex justify-start h-full w-10  pt-5">
                        <RiSpeakFill className="ml-4 h-5 w-5 text-purpBG" />
                      </div>
                      <label className="h-full w-full  p-3 text-sm text-white font-abc font-light lx:text-[12px] lx:font-xyz xb:text-[11px] xs:text-[12px] mx_w:text-[10px] fmd:text-[14px]">
                        Geofrey has continuously shown himself to be a capable
                        problem solver and collaborative ...
                      </label>
                    </div>
                    <div className="flex h-16 w-full   ">
                      <div className="flex justify-start h-full w-10  pt-5">
                        <RiSpeakFill className="ml-4 h-5 w-5 text-purpBG" />
                      </div>
                      <label className="h-full w-full  p-3 text-sm text-white font-abc font-light lx:text-[12px] lx:font-xyz xb:text-[11px]xs:text-[12px] mx_w:text-[10px] fmd:text-[14px]">
                        He approaches data from multiple perspectives, utilizing
                        a wide range of ...
                      </label>
                    </div>
                    <div className="flex h-16 w-full   ">
                      <div className="flex justify-start h-full w-10  pt-5">
                        <RiSpeakFill className="ml-4 h-5 w-5 text-purpBG" />
                      </div>
                      <label className="h-full w-full  p-3 text-sm text-white font-abc font-light lx:text-[12px] lx:font-xyz xb:text-[11px] xs:text-[12px] mx_w:text-[10px] fmd:text-[14px]">
                        Geofrey's incredible eye for design and an innate
                        understanding of user needs as well as his...
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
