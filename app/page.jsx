"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SelectionNav from "./Components/SelectionNav";
import animtion_1 from "@public/Animations/dashboard.json";
import animtion_2 from "@public/Animations/scrolling.json";
import { useRef } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function Restart() {
  const lottieRef = useRef(null); // Reference to the Lottie instance
  const lottieRef2 = useRef(null);
  const handleMouseEnter = () => {
    lottieRef2.current.play(); // Start playing on hover
  };

  const handleMouseLeave = () => {
    lottieRef2.current.stop(); // Stop playing when hover ends
  };

  const handleMouseEnter2 = () => {
    lottieRef.current.play(); // Start playing on hover
  };

  const handleMouseLeave2 = () => {
    lottieRef.current.stop(); // Stop playing when hover ends
  };
  // Navigation `````````````````````````
  const router = useRouter();
  function long_selected() {
    router.push("/Longstrip");
  }
  function dash_selected() {
    router.push("/Dashboard");
  }
  return (
    // Selection Page
    // `````````````````````````````````````````````````````````````````````````````````````
    <div className="flex flex-col h-screen w-full bg-mainBg ">
      <div
        className="flex justify-center items-center h-12 w-16  absolute top-1.5
       left-1 border-solid border-4 border-bordBG mx_w:hidden"
      >
        <label className="flex  text-4xl text-purpBG font-medium">G</label>
      </div>
      <div className="flex justify-center items-center h-24 w-full bg-mainBg p-1">
        <SelectionNav />
      </div>

      <label className="flex justify-center items-center text-7xl text-white font-bold mt-6 xb:text-5xl mx_w:text-3xl mx_w:mt-2 mini_s:text-2xl very_s:text-lg blank:hidden">
        GEOFREY MACHARIA
      </label>
      <label className="flex justify-center items-center text-3xl text-white font-light mt-4 mb-2 xb:text-xl mx_w:text-md mini_s:text-sm very_s:text-[10px] blank:hidden">
        Data Scientist | Web Developer | UI UX Developer
      </label>

      {/* ````````````````````````````````````````````````````````````````````````````` */}
      {/* Longstrip Side */}
      <div className="flex flex-row gap-x-8 mt-10 h-full w-full  mx_w:flex-col mx_w:p-2 mx_w:pl-6 mx_w:pr-6  blank:hidden">
        <div className="flex justify-end  h-full w-1/2 mainBg  mx_w:w-full mx_w:h-1/2  ">
          <div
            onClick={long_selected}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex relative h-2/3 w-2/4 mr-4 mt-4 rounded-3xl bg-darkerBG border-solid 
            border-2 border-bordBG cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500
            xb:w-mz mx_w:w-full  mx_w:h-resize_w mx_w:mr-0 mx_w:mt-0"
          >
            <Lottie
              lottieRef={lottieRef2}
              animationData={animtion_2}
              className="flex justify-center items-center"
              loop={false}
              style={{ width: "100%" }}
            />
            <button className=" h-10 w-full absolute top-1 text-bordBG font-abc font-light">
              LongStrip View
            </button>
          </div>
        </div>
        {/* ````````````````````````````````````````````````````````````````````````````` */}
        {/* Dashboard Side */}
        <div className="flex justify-start  h-full w-1/2   mx_w:w-full mx_w:h-1/2 ">
          <div
            onClick={dash_selected}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className="flex relative  h-2/3 w-2/4 ml-6 -4 mt-4 rounded-3xl bg-darkerBG 
            border-solid border-2 border-bordBG cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500
           xb:w-mz mx_w:w-full   mx_w:h-resize_w xb:ml-0 mx_w:mt-0 "
          >
            <Lottie
              lottieRef={lottieRef}
              animationData={animtion_1}
              className="flex justify-center items-center"
              loop={false}
              style={{ width: "100%" }}
            />
            <button className=" h-10 w-full border-none absolute top-1  text-bordBG font-abc font-light mx_w:hidden">
              Dashboard View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
