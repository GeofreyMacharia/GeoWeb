"use client";
import Image from "next/image";
import home_img from "@public/Home.png";
import heart_img from "@public/heart2_.png";
import farmfuzion_img from "@public/Farmfuzion.png";
import stonks_img from "@public/Assets/GM_Lab.png";
import translate_img from "@public/Assets/translations.png";
import blues_img from "@public/Assets/blues_label.png";
import { useRouter } from "next/navigation";
import DashNav from "@/app/Components/DashNav";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Dashburger from "@/app/Components/Dashburger";

export default function About() {
  const router = useRouter();
  function back_to_selection() {
    router.push("/");
  }

  // ````````Project Links``````````````
  function go_vina() {
    router.push("/Longstrip/VinaHomes");
  }
  function go_game() {
    router.push("/Longstrip/Videogames");
  }
  function go_farm() {
    router.push("/Longstrip/FarmFuzion");
  }
  function go_blue() {
    router.push("/Longstrip/Blues");
  }
  function go_heart() {
    router.push("/Longstrip/Disease");
  }
  function go_speech() {
    router.push("/Longstrip/MultiTranslator");
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <div className="flex flex-col h-screen w-full  overflow-scroll gap-y-2 p-2 pl-4  ">
            <div className="h-full w-full pb-2  ">
              <div className="flex justify-start h-14 w-full  relative  mb-1  ">
                <label className="h-full w-1/3 pt-3  text-2xl font-abc font-semibold text-purpBG xs:pt-2 xs:w-2/3">
                  My Projects
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
              {/* ````````````````````````section 1```````````````````````````````````` */}
              <div className="flex flex-row h-80 w-full gap-x-8  mt-8 gap-x-4 relative mx_w:flex-col mx_w:gap-y-4 mx_w:h-screen mx_w:mb-4  ">
                <div
                  onClick={go_farm}
                  className="flex flex-col h-full w-2/4 group  border border-[1px] border-purpBG rounded-xl z-[1] cursor-pointer transition-transform duration-300  hover:shadow-xl hover:shadow-bordBG
                mx_w:w-full"
                >
                  <div className="flex flex-col h-3/4 w-full  rounded-xl bg-black opacity-85 z-[1]">
                    <Image
                      src={farmfuzion_img}
                      alt="farmfuzion_img"
                      className=" object-cover h-full  rounded-t-xl"
                    />
                  </div>
                  <div className="h-24 w-full   ">
                    <div className="flex flex-row h-12 0 w-full p-2 gap-x-4">
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        UI UX
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Uizard
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Figma
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Next JS
                      </label>
                    </div>
                    <div className="flex flex-row h-8  w-full pl-1 gap-x-4">
                      <label
                        onClick={go_farm}
                        className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer group-hover:text-blueHov"
                      >
                        Farm Fuzion
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col h-full w-2/4 group border border-[1px] border-purpBG rounded-xl z-[1] cursor-pointer transition-transform duration-300  hover:shadow-xl hover:shadow-bordBG
                mx_w:w-full"
                >
                  <div
                    onClick={go_blue}
                    className="flex flex-col h-3/4 w-full  rounded-xl bg-black opacity-85 z-[1]"
                  >
                    <Image
                      src={blues_img}
                      alt="blues_img"
                      className=" object-cover h-full  rounded-t-xl"
                    />
                  </div>
                  <div className="h-24 w-full   ">
                    <div className="flex flex-row h-12 0 w-full p-2 gap-x-4">
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        UI UX
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Uizard
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Adobe
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Figma
                      </label>
                    </div>
                    <div className="flex flex-row h-8  w-full pl-1 gap-x-4">
                      <label
                        onClick={go_blue}
                        className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer group-hover:text-blueHov"
                      >
                        Blus and Blue
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* ````````````````````````section 1```````````````````````````````````` */}
              <div className="flex flex-row h-80 w-full gap-x-8  mt-8 gap-x-4 relative mx_w:flex-col mx_w:gap-y-4 mx_w:h-screen mx_w:mb-4 ">
                <div
                  onClick={go_vina}
                  className="flex flex-col h-full w-2/4  border border-[1px] group border-purpBG rounded-xl z-[1] cursor-pointer transition-transform duration-300  hover:shadow-xl hover:shadow-bordBG  mx_w:w-full"
                >
                  <div className="flex flex-col h-3/4 w-full  rounded-xl bg-black opacity-85 z-[1]">
                    <Image
                      src={home_img}
                      alt="home_img"
                      className=" object-cover h-full  rounded-t-xl"
                    />
                  </div>
                  <div className="h-24 w-full   ">
                    <div className="flex flex-row h-12 0 w-full p-2 gap-x-4">
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        ML
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Python
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Streamlit
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Scit learn
                      </label>
                    </div>
                    <div className="flex flex-row h-8  w-full pl-1 gap-x-4">
                      <label
                        onClick={go_vina}
                        className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer group-hover:text-blueHov"
                      >
                        Vina Homes
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-full w-2/4  border border-[1px] group border-purpBG rounded-xl z-[1] cursor-pointer transition-transform duration-300  hover:shadow-xl hover:shadow-bordBG  mx_w:w-full">
                  <div
                    onClick={go_game}
                    className="flex flex-col h-3/4 w-full  rounded-xl bg-black opacity-85 z-[1]"
                  >
                    <Image
                      src={stonks_img}
                      alt="stonks_img"
                      className=" object-cover h-full  rounded-t-xl"
                    />
                  </div>
                  <div className="h-24 w-full   ">
                    <div className="flex flex-row h-12 0 w-full p-2 gap-x-4">
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        ML
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Python
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        PowerBI
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Git
                      </label>
                    </div>
                    <div className="flex flex-row h-8  w-full pl-1 gap-x-4">
                      <label
                        onClick={go_game}
                        className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer group-hover:text-blueHov"
                      >
                        Video Game Analysis
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* ````````````````````````section 1```````````````````````````````````` */}
              <div className="flex flex-row h-80 w-full gap-x-8  mt-8 gap-x-4 relative mx_w:flex-col mx_w:gap-y-4 mx_w:h-screen mx_w:mb-4  ">
                <div className="flex flex-col h-full w-2/4  border border-[1px] group border-purpBG rounded-xl z-[1] cursor-pointer transition-transform duration-300  hover:shadow-xl hover:shadow-bordBG  mx_w:w-full">
                  <div
                    onClick={go_heart}
                    className="flex flex-col h-3/4 w-full  rounded-xl bg-black opacity-85 z-[1]"
                  >
                    <Image
                      src={heart_img}
                      alt="heart_img"
                      className=" object-cover h-full  rounded-t-xl"
                    />
                  </div>
                  <div className="h-24 w-full   ">
                    <div className="flex flex-row h-12 0 w-full p-2 gap-x-4">
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        ML
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Python
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Streamlit
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Tensorflow
                      </label>
                    </div>
                    <div className="flex flex-row h-8  w-full pl-1 gap-x-4">
                      <label
                        onClick={go_heart}
                        className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer group-hover:text-blueHov"
                      >
                        Disease Detection
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-full w-2/4  border border-[1px] group border-purpBG rounded-xl z-[1] cursor-pointer transition-transform duration-300  hover:shadow-xl hover:shadow-bordBG  mx_w:w-full">
                  <div
                    onClick={go_speech}
                    className="flex flex-col h-3/4 w-full  rounded-xl"
                  >
                    <Image
                      src={translate_img}
                      alt="translate_img"
                      className=" object-cover h-full  rounded-t-xl"
                    />
                  </div>
                  <div className="h-24 w-full   ">
                    <div className="flex flex-row h-12 0 w-full p-2 gap-x-4">
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        NLP
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Python
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Streamlit
                      </label>
                      <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer mx_w:font-medium">
                        Google T
                      </label>
                    </div>
                    <div className="flex flex-row h-8  w-full pl-1 gap-x-4">
                      <label
                        onClick={go_speech}
                        className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer group-hover:text-blueHov"
                      >
                        Multi-translator
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
