"use client";
import { motion } from "framer-motion";
import animtion_3 from "@public/Animations/laptop_animation.json";
import animtion_4 from "@public/Animations/Contact.json";
import animtion_5 from "@public/Animations/contacting.json";
import Image from "next/image";
import test_img from "@public/under_death.png";
import React, { useState, useEffect } from "react";
import WorkExp from "../Components/WorkExp";
import Certifications from "../Components/Certifications";
import home_img from "@public/Home.png";
import heart_img from "@public/heart2_.png";
import farmfuzion_img from "@public/Farmfuzion.png";
import stonks_img from "@public/stonks.png";
import translate_img from "@public/Assets/translations.png";
import blues_img from "@public/Assets/blues_label.png";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaRegHandPointUp } from "react-icons/fa";
import Education from "../Components/Education";
import LongstripNav from "../Components/LongstripNav";
import { IoPieChartSharp } from "react-icons/io5";
import { MdImportantDevices } from "react-icons/md";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";
import vgame_Lab from "@public/Assets/GM_Lab.png";
import LongMiniDash from "../Components/LongMiniDash";
import Link from "next/link";
import joe_img from "@public/Assets/Joe.jpeg";
import bram_img from "@public/Assets/bram.jpeg";
import ron_img from "@public/Assets/ron.png";
import me_img from "@public/Assets/box_face.png";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function longstrip_view() {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle which experience is open
  const toggleExperience = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  const router = useRouter();
  function back_to_selection() {
    router.push("/");
  }
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle_long_Sidebar = () => setIsOpen(!isOpen);

  // ````````````````````````````
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

  return (
    <>
      <div className="flex flex-col bg-mainBg h-screen w-full">
        <div
          onClick={back_to_selection}
          className="flex justify-center items-center h-12 w-16  absolute top-1.5
       left-6 border-solid border-4 border-bordBG cursor-pointer"
        >
          <label
            onClick={back_to_selection}
            className="flex  cursor-pointer  text-4xl text-purpBG font-medium"
          >
            G
          </label>
        </div>
        <div className="h-12 w-12  absolute top-1 right-2 cursor-pointer hidden xs:block">
          <IoMenuOutline
            onClick={toggle_long_Sidebar}
            className="h-full w-full text-purpBG"
          />
        </div>

        <div className="flex justify-center items-center h-16 w-full xs:hidden">
          <LongstripNav />
        </div>
        <LongMiniDash
          isOpen={isOpen}
          toggle_long_Sidebar={toggle_long_Sidebar}
        />
        {/* ```````````````````````````````me and lotti computer```````````````````````````````````` */}
        <div
          id="Section1"
          className="flex flex-row h-2/3 w-full mainBg gap-x-4 mt-16 xs:flex-col"
        >
          <div className="flex flex-col justify-start h-full w-1/2 xs:w-full">
            <label className=" text-6xl text-white font-bold font-abc mt-8 ml-6 spr:text-5xl xb:text-3xl xs:text-4xl xs:text-center mini_s:text-xl very_s:text-lg early_blk:hidden">
              GEOFREY MACHARIA
            </label>

            <label className="flex justify-start  text-2xl text-white font-light font-abc mt-4 mb-2 ml-6 spr:text-xl xb:text-md xs:justify-center mini_s:text-sm very_s:text-[11px] early_blk:hidden ">
              Data Scientist | Web Developer | UI UX Developer
            </label>

            <label className="flex justify-start  text-lg text-justify text-bordBG font-light font-abc mt-0 mb-2 ml-6 w-2/3 xb:text-md xs:justify-center xs:w-cs xs:ml-2 xs:mt-2 mini_s:text-[14px] early_blk:hidden">
              I develop functional websites with visually compelling designs,
              and harness data to drive informed decisions.
            </label>
            {/* <button
              className=" h-16 w-56  text-bordBG font-abc font-light border-solid border-2 border-purpBG cursor-pointer mt-6 ml-6 
          rounded-3xl xs:hidden"
            >
              Get In Touch {">>>"}
            </button> */}
            <div
              className="flex justify-center items-center h-16 w-56  text-bordBG font-abc border-solid border-2 border-purpBG cursor-pointer mt-6 ml-6 
          rounded-3xl hover:border-bordBG xs:hidden"
            >
              <Link
                href="#Section5"
                className=" text-lg text-bordBG font-abc font-md hover:text-purpBG"
              >
                Get In Touch {">>>"}
              </Link>
            </div>
          </div>
          <div className="flex justify-center h-full w-1/2  xs:w-full early_blk:hidden ">
            <div
              className=" opacity-25 rounded-full z-1 absolute top-32 right-32 h-2/3 w-1/3 bg-blue-200 spr:w-[40%] spr:right-24 lx:w-[45%] 
            lx:right-12 xb:right-4 xb:w-[40%] xs:hidden"
            ></div>
            <Lottie
              animationData={animtion_3}
              className="flex justify-center items-center mt-0"
              loop={true}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        {isVisible && (
          <div
            onClick={scrollToTop}
            className={`flex h-14 w-14 justify-center items-center fixed bottom-4 right-4 z-[1] 
              bg-darkerBG  transition-transform transition-opacity ease-in-out 
               duration-1000 cursor-pointer hover:shadow-lg  hover:shadow-bordBG early_blk:hidden`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <FaRegHandPointUp className="h-7 w-7 text-purpBG fill-white" />
          </div>
        )}
      </div>
      {/* `````````````````````````````````My Expertise`````````````````````````````````````````````````````` */}
      <div
        id="Section2"
        className="flex flex-col items-center bg-mainBg h-2/3 w-full p-4 xs:h-screen early_blk:hidden"
      >
        <label
          className="flex justify-center items-center text-4xl text-bordBG font-bold border-b-[1px] border-b-purpBG  h-12 w-64 mb-6 "
          // style={{ borderBottom: "solid", borderBottomColor: "#B490CC" }}
        >
          MY EXPERTISE
        </label>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-row h-72 w-full mt-4 border-4 rounded-3xl border-solid border-purpBG xb:h-80 xs:flex-col xb:relative xs:h-mz"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col h-full w-1/3 border border-[1px] border-purpBG rounded-s-xl z-[1] relative xs:w-full xb:h-full xs:h-1/3"
          >
            <label className="flex justify-center items-center text-3xl text-white font-abc font-semibold mt-4 h-12 w-full underline decoration-[1px] lx:text-xl">
              Data Analysis
            </label>
            <IoPieChartSharp className="h-10 w-10 top-5 left-3 absolute text-white lx:h-7 lx:w-7 lx:top-6" />
            <label
              className="flex flex-col text-lg text-bordBG font-xyz font-base text-justify mt-2 h-44 w-full p-6  lx:pt-1 lx:text-[15px] lx:h-52
            xb:font-base xb:text[11px] xb:mt-2 xs:font-medium mini_s:text-[10px]"
            >
              <p>
                Skilled in exploration of data, utilizing statistical,
                analytical and visualization techniques to unravel actionable
                insights. Achieved through tools as:{" "}
                <span className="text-purpBG">
                  Python, R, SQL, PowerBI and Tableau.
                </span>
              </p>
            </label>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex flex-col h-full w-1/3 border border-[1px] border-purpBG relative xs:w-full xb:h-full xs:h-1/3"
          >
            <label className="flex justify-center items-center text-3xl text-white font-abc font-semibold mt-4 h-12 w-full underline decoration-[1px] lx:text-xl">
              Front-end Dev
            </label>
            <MdImportantDevices className="h-10 w-10 top-5 left-3 absolute text-white lx:h-7 lx:w-7 lx:top-6" />
            <label
              className="flex flex-col text-lg text-bordBG font-xyz font-base text-justify mt-2 h-44 w-full p-6 lx:pt-1 lx:text-[15px] lx:h-52
             xb:font-base xb:text[11px] xb:font-xyz xb:mt-2 xs:font-medium mini_s:text-[10px]"
            >
              <p>
                Adept at developing intractive interfaces as well as optimizing
                cross platform performance. Tools and frameworks used encompase:{" "}
                <span className="text-purpBG">
                  NextJS, Typescript, Javascript, Tailwind css & HTML.{" "}
                </span>
              </p>
            </label>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex flex-col h-full w-1/3 border border-[1px] border-purpBG rounded-r-2xl relative xs:w-full xb:h-full xs:h-1/3"
          >
            <label className="flex justify-center items-center text-3xl text-white font-abc font-semibold mt-4 h-12 w-full underline decoration-[1px] lx:text-xl">
              UI UX Design
            </label>
            <FaFireFlameCurved className="h-10 w-10 top-5 left-3 absolute text-white lx:h-7 lx:w-7 lx:top-6" />
            <label
              className="flex flex-col text-lg text-bordBG font-base font-xyz text-justify mt-2 h-44 w-full p-6  lx:pt-1 lx:text-[15px] lx:h-52
            xb:font-base xb:text[11px] xb:font-xyz xb:mt-2 xs:font-medium mini_s:text-[10px]"
            >
              <p>
                Proficient in designing intuitive and eyecatching interfaces
                with focus on user experience. Achieved through the following
                tools:{" "}
                <span className="text-purpBG">
                  Figma, Uizard, Adobe Illustrator & Photoshop
                </span>
              </p>
            </label>
          </motion.div>
        </motion.div>
      </div>
      {/* `````````````````````````````````About Me`````````````````````````````````````````````````````` */}
      <div
        id="Section3"
        className="flex flex-col items-center bg-mainBg h-[200vh] w-full p-4 lx:h-[170vh] early_blk:hidden"
      >
        <label className="flex justify-center items-center text-4xl text-bordBG font-bold  border-b-[1px] border-b-purpBG h-12 w-48 mt-8">
          ABOUT ME
        </label>
        <div className="flex flex-row h-52 w-full  mt-8 gap-x-4 relative xs:flex-col  xs:h-80 mini_s:mb-12">
          <div className="flex h-resize_w w-72  border-[1px] border-purpBG absolute top-4 left-6 rounded-xl  xs:w-56 xs:collapse"></div>
          <div className="flex flex-row h-resize_w mt-8 w-72 xs:collapse">
            <div className="flex h-full w-72 xs:w-56">
              <Image
                src={me_img}
                alt="me_img"
                className="rounded-xl  object-cover z-[1]"
              />
            </div>
          </div>

          <div className="flex h-full w-ex p-1  mb-4">
            <label
              className="flex justify-center  text-base font-abc text-bordBG  font-md text-justify  h-44 w-full mt-8 ml-6 lx:text-[14px]
            xb:font-medium xb:text[12px] xb:mt-2 xb:font-xyz xs:absolute xs:top-2 xs:left-0.1 xs:ml-0 xs:mt-0 mini_s:text-[10px] mini_s:h-full "
            >
              <p>
                At first glance, it may seem like I’m a “unicorn,” balancing
                three distinct fields{" "}
                <span className="text-purpBG">
                  — data science, web development, and design —
                </span>
                but my true passion has always been data science. I find
                excitement in diving deep into data, analyzing complex datasets,
                and uncovering the stories. <br />
                While{" "}
                <span className="text-purpBG">
                  Data science and Analytics
                </span>{" "}
                remain my core expertise, my skills in{" "}
                <span className="text-purpBG">design and web development</span>
                emerged organically from various projects and collaborations
                over the years. These additional skills have allowed me to build
                functional, user-friendly websites while applying a data-driven
                mindset to optimize performance and user experience.
              </p>
            </label>
          </div>
        </div>
        {/* `````````````````````````````````````````Work Experience```````````````````````````````````````` */}
        <div className=" h-80 w-full mt-10 gap-x-4 relative lx:mt-14">
          <div className="h-80 w-full mb-4  mt-0 gap-x-4 relative  border-[1px] border-purpBG rounded-2xl ">
            <div className="absolute -top-4 left-16 transform -translate-x-10 z-[1]  px-4">
              <h2 className="text-bordBG bg-mainBg text-xl pl-1 pr-1 font-abc font-semibold lx:text-lg">
                Work Experience
              </h2>
            </div>
            <div className="flex flex-col h-full w-full  p-4  overflow-auto xs:w-wz   mini_s:w-resize_w">
              <WorkExp />
            </div>
          </div>
        </div>
        <div className="h-80 w-full   mt-4 gap-x-4 relative">
          <div className="h-64 w-full  mt-8 gap-x-4 relative  border-[1px] border-purpBG rounded-2xl ">
            <div className="absolute -top-4 left-16 transform -translate-x-10 z-[1]  px-4">
              <h2 className="text-bordBG bg-mainBg text-xl pl-1 pr-1 font-abc font-semibold lx:text-lg ">
                My Certifications
              </h2>
            </div>
            <div className="flex flex-col h-full w-full  p-4  overflow-auto xs:w-wz    mini_s:w-resize_w ">
              <Certifications />
            </div>
          </div>
        </div>
        <div className="h-80 w-full   mt-4 gap-x-4 relative">
          <div className=" h-52 w-full bg- mt-8 gap-x-4 relative  border-[1px] border-purpBG rounded-2xl ">
            <div className="absolute -top-4 left-16 transform -translate-x-10 z-[1]  px-4">
              <h2 className="text-bordBG bg-mainBg text-xl pl-1 pr-1 font-abc font-semibold lx:text-lg">
                My Education
              </h2>
            </div>
            <div className="flex flex-col h-full w-full  p-4  overflow-auto xs:w-wz  mini_s:w-resize_w">
              <Education />
            </div>
          </div>
        </div>
      </div>

      {/* `````````````````````````````````````````Projects```````````````````````````````````````` */}
      <div
        id="Section4"
        className="flex flex-col items-center  h-[150vh] w-full p-4 lx:h-screen xs:h-[350vh] mini_s:h-[290vh]  early_blk:hidden"
      >
        <label className="flex justify-center items-center text-4xl text-bordBG font-bold  border-b-[1px] border-b-purpBG h-12 w-64 mt-2">
          MY PROJECTS
        </label>
        {/* ````````````````````````section 1```````````````````````````````````` */}
        <motion.div
          initial={{ scale: 0.8 }} // Initial small scale
          whileInView={{ scale: 1 }} // Zoom-in effect when section comes into view
          transition={{ duration: 0.7 }} // Transition duration for smooth effect
          className="flex flex-row h-96 w-full gap-x-8  mt-8 gap-x-4 relative lx:h-80 xb:h-72 xs:flex-col xs:gap-x-0 xs:gap-y-4 xs:h-1/2   "
        >
          <div
            className="flex flex-col h-full w-1/3  bg-darkerBG rounded-xl z-[1] group cursor-pointer transition-transform duration-300
           hover:scale-105 hover:shadow-lg hover:shadow-bordBG xs:w-full xs:h-96"
          >
            <div
              onClick={go_vina}
              className="flex flex-col h-3/4 w-full  rounded-xl bg-black opacity-105 z-[1]"
            >
              <Image
                src={home_img}
                alt="home_img"
                className=" object-cover h-full  rounded-t-xl"
              />
            </div>
            <div className="h-24 w-full   ">
              <div className="flex flex-row h-12 0 w-full p-2 gap-x-4">
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  ML
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Python
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Streamlit
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Scit learn
                </label>
              </div>
              <div className="flex flex-row h-8  w-full pl-1 gap-x-4">
                <label
                  onClick={go_vina}
                  className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer  group-hover:text-blueHov "
                >
                  Vina Homes
                </label>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col h-full w-1/3  bg-darkerBG rounded-xl z-[1] group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-bordBG
          xs:w-full xs:h-96"
          >
            <div
              onClick={go_game}
              className="flex flex-col h-3/4 w-full  rounded-xl bg-black opacity-85 z-[1]"
            >
              <Image
                src={vgame_Lab}
                alt="vgame_Lab"
                className=" object-cover h-full w-full rounded-t-xl"
              />
            </div>
            <div className="h-24 w-full   ">
              <div className="flex flex-row h-12 0 w-full p-2 gap-x-4">
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  ML
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Python
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  PowerBI
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Git
                </label>
              </div>
              <div className="flex flex-row h-8  w-full pl-1 gap-x-4">
                <label
                  onClick={go_game}
                  className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer  group-hover:text-blueHov"
                >
                  Video Game Analysis
                </label>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col h-full w-1/3  bg-darkerBG rounded-xl z-[1] group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-bordBG
          xs:w-full xs:h-96"
          >
            <div
              onClick={go_farm}
              className="flex flex-col h-3/4 w-full  rounded-xl bg-black opacity-85 z-[1]"
            >
              <Image
                src={farmfuzion_img}
                alt="farmfuzion_img"
                className=" object-cover h-full  rounded-t-xl"
              />
            </div>
            <div className="h-24 w-full   ">
              <div className="flex flex-row h-12 0 w-full p-2 gap-x-4">
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  UI UX
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Uizard
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Figma
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Next JS
                </label>
              </div>
              <div className="flex flex-row h-8  w-full pl-1 gap-x-4">
                <label
                  onClick={go_farm}
                  className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer  group-hover:text-blueHov"
                >
                  Farm Fuzion
                </label>
              </div>
            </div>
          </div>
        </motion.div>
        {/* ````````````````````````section 2```````````````````````````````````` */}
        <motion.div
          initial={{ scale: 0.8 }} // Initial small scale
          whileInView={{ scale: 1 }} // Zoom-in effect when section comes into view
          transition={{ duration: 0.7 }} // Transition duration for smooth effect
          className="flex flex-row h-96 w-full gap-x-8  mt-8 gap-x-4 relative mb-6 lx:h-80 xb:h-72 xs:flex-col xs:h-1/2 xs:gap-x-0 xs:gap-y-6"
        >
          <div
            className="flex flex-col h-full w-1/3  bg-darkerBG rounded-xl z-[1] group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-bordBG
          xs:w-full xs:h-96"
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
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  UI UX
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Uizard
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Adobe
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Figma
                </label>
              </div>
              <div className="flex flex-row h-8  w-full pl-1 gap-x-4">
                <label
                  onClick={go_blue}
                  className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer  group-hover:text-blueHov"
                >
                  Blus and Blue
                </label>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col h-full w-1/3  bg-darkerBG rounded-xl z-[1] group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-bordBG 
          xs:w-full xs:h-96"
          >
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
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  ML
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Python
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Streamlit
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Tensorflow
                </label>
              </div>
              <div
                onClick={go_heart}
                className="flex flex-row h-8  w-full pl-1 gap-x-4"
              >
                <label className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer  group-hover:text-blueHov">
                  Disease Detection
                </label>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col h-full w-1/3  bg-darkerBG rounded-xl z-[1] group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-bordBG
          xs:w-full xs:h-96"
          >
            <div
              onClick={go_speech}
              className="flex flex-col h-3/4 w-full  rounded-xl"
            >
              <Image
                src={translate_img}
                alt="translate_img"
                className=" object-cover h-full  w-full rounded-t-xl"
              />
            </div>
            <div className="h-24 w-full   ">
              <div className="flex flex-row h-12 0 w-full p-2 gap-x-4">
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  NLP
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Python
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Streamlit
                </label>
                <label className="flex  justify-center items-center rounded-lg text-md text-bordBG font-light  border-[1px] border-purpBG h-8 w-1/4 cursor-pointer lx:text-[13px] xb:hidden">
                  Google T
                </label>
              </div>
              <div
                onClick={go_speech}
                className="flex flex-row h-8  w-full pl-1 gap-x-4"
              >
                <label className="flex  justify-start pl-2 rounded-lg text-lg text-bordBG font-semibold font-abc underline h-8 w-full cursor-pointer  group-hover:text-blueHov">
                  Multi-translator
                </label>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* `````````````````````````````````Endorsements`````````````````````````````````````````````````````` */}
      <div
        id="Section6"
        className="flex flex-col items-center w-full p-4 mt-2 mb-12 early_blk:hidden"
      >
        <label
          className="flex justify-center items-center text-4xl text-bordBG font-bold border-b-[1px] border-b-purpBG  h-12 w-64 mb-6 "
          // style={{ borderBottom: "solid", borderBottomColor: "#B490CC" }}
        >
          Endorsements
        </label>
        <div className="flex flex-row  h-3/4 w-full mt-4 gap-x-4 xs:flex-col xs:gap-x-0 xs:gap-y-4 ">
          <div className="flex flex-col h-full w-1/3  bg-darkerBG rounded-s-xl z-[1] xs:w-full">
            <div className="flex justify-center items-center h-40 w-full mt-4  ">
              <div className="image h-36 w-36 rounded-full border-4 border-purpBG ">
                <Image
                  src={ron_img}
                  alt="ron_img"
                  className="rounded-full h-full w-full object-cover "
                />
              </div>
            </div>

            <label
              className="flex  text-lg text-bordBG font-xyz  font-base text-justify mt-2 h-44  w-full p-4 lx:text-[13px] lx:font-medium xb:text-[11px] xb:font-base
            xs:text-[14px]"
            >
              Geofrey has continuously shown himself to be a capable problem
              solver and collaborative team player as we worked together. His
              work as a developer and creative designer enabled our organisation
              to launch successful projects to the live market.
            </label>
            <label className="flex justify-start  text-lg text-bordBG  font-abc font-semibold text-justify mt-1 mb-4 h-20  w-full p-4 lx:text-[15px] xb:text-[13px] xb:font-medium xs:text-[16px]">
              <ul className="list-disc list-inside text-md font-abc font-medium text-gray-300">
                <li>
                  Ronald Otwama <br />{" "}
                </li>
                <li className="text-purpBG">Full Stack Developer</li>
              </ul>
            </label>
          </div>
          <div className="flex flex flex-col h-full w-1/3  bg-darkerBG xs:w-full">
            <div className="flex justify-center items-center h-40 w-full mt-4  ">
              <div className="image h-36 w-36 rounded-full border-4 border-purpBG">
                <Image
                  src={joe_img}
                  alt="joe_img"
                  className="rounded-full h-full w-full object-cover "
                />
              </div>
            </div>
            <label className="flex   text-lg text-bordBG font-xyz  font-base text-justify mt-2 h-44 w-full p-4 lx:text-[13px] lx:font-medium xb:text-[11px] xb:font-base xs:text-[14px]">
              I can confidently say Geofrey's data analysis skills are
              exceptional. He approaches data from multiple perspectives,
              utilizing a wide range of statistical techniques to uncover
              meaningful insights.
            </label>
            <label className="flex justify-start  text-lg text-bordBG  font-abc font-semibold text-justify mt-1 mb-4 h-20  w-full p-4  lx:text-[15px] xb:text-[13px] xb:font-medium xs:text-[16px]">
              <ul className="list-disc list-inside text-md font-abc font-medium text-gray-300">
                <li>
                  {" "}
                  Muraya Joe <br />{" "}
                </li>
                <li className="text-purpBG">Software Engineer</li>
              </ul>
            </label>
          </div>
          <div className="flex flex flex-col h-full w-1/3   bg-darkerBG rounded-r-2xl xs:w-full">
            <div className="flex justify-center items-center h-40 w-full mt-4  ">
              <div className="image h-36 w-36 rounded-full border-4 border-purpBG">
                <Image
                  src={bram_img}
                  alt="bram_img"
                  className="rounded-full h-full w-full object-cover "
                />
              </div>
            </div>
            <label className="flex  text-lg font-xyz text-bordBG   font-base text-justify mt-2 h-44 w-full p-4 lx:text-[13px] lx:font-medium xb:text-[11px] xb:font-base xs:text-[14px]">
              Since his hire, Geofrey's incredible eye for design and an innate
              understanding of user needs as well as his insight as a developer
              not only resulted in visually stunning designs but also intuitive
              and highly functional systems.
            </label>
            <label className="flex justify-start  text-lg text-bordBG  font-abc font-semibold text-justify mt-1 mb-4 h-20  w-full p-4 lx:text-[15px] xb:text-[13px] xb:font-medium  xs:text-[16px] ">
              <ul className="list-disc list-inside text-md font-abc font-medium text-gray-300">
                <li>
                  Abraham Nyabera <br />{" "}
                </li>
                <li className="text-purpBG">Managing Parnter</li>
              </ul>
            </label>
          </div>
        </div>
      </div>
      {/* `````````````````````````````````````````Contacts```````````````````````````````````````` */}
      <div
        id="Section5"
        className="flex flex-col items-center  h-screen w-full p-4 mt-4 early_blk:hidden"
      >
        <label className="flex justify-center items-center text-4xl text-bordBG font-bold  border-b-[1px] border-b-purpBG h-12 w-64 mt-1">
          Contact Me
        </label>
        <div className="flex flex-row h-full w-full  pl-4 pr-4 pt-2 gap-x-6 relative mt-4 xs:flex-col">
          <div className="flex flex-col h-full w-1/2 xs:w-full ">
            <label className="flex  text-base text-bordBG  font-light font-abc text-justify  h-24 w-full pr-4 pt-2 xs:mb-6 ">
              I’d love to hear from you! Whether you’ve got a project idea or
              just want to chat about possibilities, feel free to reach out.
              Let’s make something awesome together!
            </label>

            <Lottie
              animationData={animtion_5}
              className="flex justify-center items-center h-72 w-xi mt-0  xs:w-full"
              loop={true}
              style={{ marginTop: "-5%" }}
            />
            <div className="flex flex-row gap-x-12 h-16 w-2/3 p-3 xs:hidden">
              <FiFacebook className="h-full w-16  text-purpBG" />
              <FaInstagram className="h-full w-16 text-purpBG" />
              <a
                href="https://www.linkedin.com/in/geofrey-macharia-52b172226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="h-full w-16 text-purpBG cursor-pointer hover:text-blueHov" />
              </a>
              <a
                href="https://github.com/GeofreyMacharia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="h-full w-16 text-purpBG cursor-pointer hover:text-blueHov" />
              </a>
            </div>
          </div>
          <div className="flex h-wz  w-1/2  pt-2 xb:h-3/4 xs:w-full">
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
              <div className="flex flex-col h-48 w-full pl-6 pr-6  mb-4">
                <textarea
                  name="txtarea"
                  id="cont_text"
                  placeholder="Your Message"
                  className="text-light font-abc resize-none font-sm h-full w-full rounded-xl border-none bg-gray-200 outline-none cursor-text p-2 pt-4"
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
    </>
  );
}
