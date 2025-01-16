"use client";
import Image from "next/image";
import heart_img from "@public/heart2_.png";
import { RiSpeakFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import DashNav from "@/app/Components/DashNav";
import WorkExp from "@/app/Components/WorkExp";
import Certifications from "@/app/Components/Certifications";
import Education from "@/app/Components/Education";
import { motion } from "framer-motion";
import Dashburger from "@/app/Components/Dashburger";
import { IoMenuOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import me_img from "@public/Assets/all_me.png";

const slideInVariant = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeIn" } },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

export default function About() {
  const router = useRouter();
  function back_to_selection() {
    router.push("/");
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  function test() {
    console.log("pressed");
  }
  const handleall = () => {
    toggleSidebar();
    test();
  };
  return (
    <>
      <div className="flex h-screen w-full bg-mainBg  early_blk:hidden relative">
        <DashNav />
        <Dashburger isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <motion.div
          className="flex h-screen w-full "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <div className="flex flex-col h-screen w-full  overflow-scroll gap-y-2 p-2 pl-4 ">
            <div className="h-full w-full ">
              <div className="flex justify-start h-14 w-full  relative  mb-1  ">
                <label className="h-full w-1/3 pt-3  text-2xl font-abc font-semibold text-purpBG mx_w:w-1/2 mx_w:text-xl mx_w:pt-2">
                  About Me
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
                    onClick={handleall}
                    className="h-full w-full text-purpBG"
                  />
                </div>
              </div>
              <div className="flex flex-row  w-full  gap-x-4 relative mx_w:flex-col ">
                <div className="flex h-full w-ix border-[1px] border-purpBG absolute rounded-md -bottom-3 left-3 mx_w:w-0 mx_w:hidden"></div>
                <div className="flex flex-row h-52 w-ix  mx_w:h-72 mx_w:w-full mx_w:mt-4">
                  <Image
                    src={me_img}
                    alt="me_img"
                    className=" object-cover h-full  rounded-md z-[1]"
                  />
                </div>
                <div className="flex h-full w-xi  pt-4 p-2  mx_w:w-full mx_w:p-0 mx_w:pt-2">
                  <label className="h-full w-full  p-2 pt-3 text-justify pl-5 text-sm  text-bordBG font-abc font-light lx:text-[12px] xs:text-[11px] mx_w:p-0 mini_s:text-[10px]">
                    <p>
                      At first glance, it may seem like I’m a “unicorn,”
                      balancing three distinct fields{" "}
                      <span className="text-purpBG">
                        — data science, web development, and design —
                      </span>
                      but my true passion has always been data science. I find
                      excitement in diving deep into data, analyzing complex
                      datasets, and uncovering the stories. <br /> <br />
                      While{" "}
                      <span className="text-purpBG">
                        Data science and Analytics
                      </span>{" "}
                      remain my core expertise, my skills in{" "}
                      <span className="text-purpBG">
                        design and web development
                      </span>
                      emerged organically from various projects and
                      collaborations over the years. These additional skills
                      have allowed me to build functional, user-friendly
                      websites while applying a data-driven mindset to optimize
                      performance and user experience.
                    </p>
                  </label>
                </div>
              </div>
              <div className="flex flex-row h-80 w-full mb-4  mt-0 gap-x-4 relative  border-[1px] border-purpBG rounded-2xl mt-8">
                <div className="absolute -top-4 left-10 transform -translate-x-10 z-[1]  px-4">
                  <h2 className="text-bordBG bg-mainBg text-xl pl-1 pr-1 font-abc font-semibold">
                    Work Experience
                  </h2>
                </div>
                <div className="flex flex-col h-full w-full  p-4  overflow-auto  ">
                  <WorkExp />
                </div>
              </div>

              <div className="flex flex-row h-64 w-full  mt-8 gap-x-4 relative  border-[1px] border-purpBG rounded-2xl ">
                <div className="absolute -top-4 left-10 transform -translate-x-10 z-[1]  px-4">
                  <h2 className="text-bordBG bg-mainBg text-xl pl-1 pr-1 font-abc font-semibold">
                    My Certifications
                  </h2>
                </div>
                <div className="flex flex-col h-full w-full  p-4  overflow-auto  ">
                  <Certifications />
                </div>
              </div>
              <div className="flex flex-row h-44 w-full  mt-8 gap-x-4 relative  border-[1px] border-purpBG rounded-2xl ">
                <div className="absolute -top-4 left-10 transform -translate-x-10 z-[1]  px-4">
                  <h2 className="text-bordBG bg-mainBg text-xl pl-1 pr-1 font-abc font-semibold">
                    My Education
                  </h2>
                </div>
                <div className="flex flex-col h-full w-full  p-4  overflow-auto  ">
                  <Education />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
