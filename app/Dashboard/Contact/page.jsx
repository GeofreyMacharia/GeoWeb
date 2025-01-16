"use client";
import Image from "next/image";
import { RiSpeakFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import DashNav from "@/app/Components/DashNav";
import Lottie from "lottie-react";
import animtion_3 from "@public/Animations/contacting.json";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Dashburger from "@/app/Components/Dashburger";
export default function Contact() {
  const router = useRouter();
  function back_to_selection() {
    router.push("/");
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
          <div className="flex flex-col h-screen w-full  overflow-scroll gap-y-2 p-2 pl-4 ">
            <div className=" h-full w-full  gap-y-2 ">
              <div className="flex justify-start h-14 w-full  relative  mb-1  ">
                <label className="h-full w-1/3 pt-3  text-2xl font-abc font-semibold text-purpBG mx_w:w-2/3 mx_w:text-xl mx_w:pt-2 ">
                  Contact Me
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
              {/* `````````````````````````````````````````Contacts```````````````````````````````````````` */}

              <div className="flex flex-row h-resize_w w-full mt-4  gap-x-6 relative xs:flex-col">
                <div className="flex flex-col h-full w-1/2 xs:w-full ">
                  <label className="flex  text-base text-bordBG  font-light font-abc text-justify  h-24 w-full pt-2 pl-2">
                    I’d love to hear from you! Whether you’ve got a project idea
                    or just want to chat about possibilities, feel free to reach
                    out. Let’s make something awesome together!
                  </label>

                  <Lottie
                    animationData={animtion_3}
                    className="flex justify-center items-center h-96  mt-0"
                    loop={false}
                    style={{ width: "100%", marginTop: "-6%" }}
                  />
                </div>
                <div className="flex   w-1/2  pt-2 xs:w-full">
                  <div className="flex flex-col h-full w-full bg-white rounded-3xl ">
                    <label className="flex  text-2xl text-darkPP font-abc font-semibold text-justify h-10 w-full pt-3 pb-2 pl-6 pr-6">
                      Get In Touch
                    </label>
                    <label className="flex  text-sm text-darkPP font-abc font-light text-justify  h-10 w-full  pt-3 pb-2 pl-6 pr-6 mb-2">
                      You can reach me anytime
                    </label>
                    <div className="flex flex-row gap-x-8 h-14 w-full pl-6 pr-6 mb-4">
                      <input
                        type="text"
                        name="first"
                        id="cont_first"
                        placeholder="First Name"
                        className="text-light font-abc font-sm h-full w-1/2 rounded-xl  bg-gray-200 border-none outline-none cursor-text p-2 "
                      />
                      <input
                        type="text"
                        name="last"
                        id="cont_last"
                        placeholder="Last Name"
                        className="text-light font-abc font-sm h-full w-1/2 rounded-xl border-none outline-none bg-gray-200 cursor-text p-2"
                      />
                    </div>
                    <div className="flex flex-row h-14 w-full pl-6 pr-6  mb-4">
                      <input
                        type="email"
                        name="emaill"
                        id="cont_email"
                        placeholder="Email Address"
                        className="text-light font-abc font-sm h-full w-full rounded-xl border-none bg-gray-200 outline-none cursor-text p-2"
                      />
                    </div>
                    <div className="flex flex-col h-56 w-full pl-6 pr-6  mb-4">
                      <textarea
                        name="txtarea"
                        id="cont_text"
                        placeholder="Your Message"
                        className="text-light resize-none font-abc font-sm h-full w-full rounded-xl border-none bg-gray-200 outline-none cursor-text p-2 pt-4"
                      ></textarea>
                    </div>
                    <div className="flex flex-col h-14 w-full  pl-6 pr-6  ">
                      <button
                        className="text-light font-abc font-sm h-full w-full rounded-3xl text-white border-none outline-none cursor-pointer p-2 bg-blue-500
              transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500"
                      >
                        Submit
                      </button>
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
