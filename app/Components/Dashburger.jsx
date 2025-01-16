"use client";
import { useState } from "react";
import Image from "next/image";
import test_img from "@public/under_death.png";
import { TiHome } from "react-icons/ti";
import { FaUser, FaFolder } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Dashburger({ isOpen, toggleSidebar }) {
  const router = useRouter();
  function go_home() {
    router.push("/");
  }
  function go_about() {
    router.push("/Dashboard/About");
  }
  function go_to_dash() {
    router.push("/Dashboard");
  }
  function go_to_contact() {
    router.push("/Dashboard/Contact");
  }
  function go_to_projects() {
    router.push("/Dashboard/Projects");
  }
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[40] transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar} // Close the sidebar when clicking outside
      ></div>

      {/* Sidebar */}
      <div
        id="side_nav"
        className={`fixed flex flex-col rounded-md w-72 bg-darkerBG top-1 right-0 z-[50] p-2 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex flex-row w-full h-14 gap-x-1 relative z-[1]">
          <IoCloseCircleOutline
            onClick={toggleSidebar}
            className="h-7 w-7 text-blue-400 mt-[1%] cursor-pointer absolute top-0 right-0 hover:text-red-600"
          />
          <div className="image h-full w-16 rounded-lg">
            <Image
              src={test_img}
              alt="test_img"
              className="rounded-lg h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col w-3/4 h-full">
            <label className="h-6 w-full text-lg font-abc font-semibold text-start text-purpBG mb-2">
              Geofrey Macharia
            </label>
            <label className="h-6 w-full font-abc font-light text-start text-purpBG text-[12px]">
              Data Scientist | Web Dev
            </label>
          </div>
        </div>

        {/* Separator */}
        <div className="h-1 w-full mt-1 border-b-purpBG border-b-[1px]"></div>

        {/* Links */}
        <div className="flex flex-col w-full pt-2 mt-2 gap-y-3">
          {/* Example link */}
          <div className="flex flex-row h-10 pl-2 pt-1.5 w-full gap-x-3 cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG">
            <TiHome className="h-5 w-5 text-purpBG mt-[1%] cursor-pointer" />
            <label
              onClick={go_to_dash}
              className="flex flex-row w-full text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500"
            >
              Home
            </label>
          </div>
          {/* Repeat for other links */}
          <div className="flex flex-row h-10 pl-2 pt-1.5 w-full gap-x-3   cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG">
            <FaUser className="h-4 w-5 text-purpBG mt-[1.5%] cursor-pointer" />

            <label
              onClick={go_about}
              className="flex flex-row  w-full text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500"
            >
              About
            </label>
          </div>

          <div className="flex flex-row h-10 pl-2 pt-1.5 w-full gap-x-3   cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG">
            <FaFolder className="h-4 w-5 text-purpBG mt-[2%] cursor-pointer" />

            <label
              onClick={go_to_projects}
              className="flex flex-row  w-full text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500"
            >
              Projects
            </label>
          </div>

          <div className="flex flex-row h-10 pl-2 pt-1.5 w-full gap-x-3   cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG">
            <FaSquarePhone className="h-4 w-5 text-purpBG mt-[2%] cursor-pointer" />

            <label
              onClick={go_to_contact}
              className="flex flex-row  w-full text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500"
            >
              Contact
            </label>
          </div>

          <div className="flex flex-row h-10 pl-2 pt-1.5 w-full gap-x-3   cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG">
            <RiCheckboxMultipleFill className="h-5 w-5 text-purpBG mt-[1%] cursor-pointer" />

            <label
              onClick={go_home}
              className="flex flex-row  w-full text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500"
            >
              Selection
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function Dashburger() {
//   // ``````````Functions`````````````````````````
//   const router = useRouter();
//   function go_home() {
//     router.push("/");
//   }
//   function go_about() {
//     router.push("/Dashboard/About");
//   }
//   function go_to_dash() {
//     router.push("/Dashboard");
//   }
//   function go_to_contact() {
//     router.push("/Dashboard/Contact");
//   }
//   function go_to_projects() {
//     router.push("/Dashboard/Projects");
//   }
//   const closeNav = () =>
//     (document.getElementById("side_nav").style.right = "-100%");

//   return (
//     <>
//       <div
//         id="side_nav"
//         className="flex flex-col rounded-md w-72 bg-darkerBG absolute top-1 right-3 z-[1] p-2"
//       >
//         <div className="flex flex-row w-full h-14  gap-x-1 relative z-[1]">
//           <IoCloseCircleOutline
//             onClick={closeNav}
//             className="h-7 w-7 text-purpBG mt-[1%] text-blue-400 cursor-pointer absolute top-0 right-0 hover:text-red-600"
//           />
//           <div className="image h-full w-16 rounded-lg">
//             <Image
//               src={test_img}
//               alt="test_img"
//               className="rounded-lg h-full w-full object-cover "
//             />
//           </div>
//           <div className="flex flex-col w-3/4  h-full">
//             <label className="h-6 w-full  text-lg font-abc font-semibold text-start  text-purpBG  mb-2 ">
//               Geofrey Macharia
//             </label>
//             <label className="h-6 w-full   font-abc font-light text-start text-purpBG text-[12px]">
//               Data Scientist | Web Dev
//             </label>
//           </div>
//         </div>
//         {/* ``````line``````````` */}
//         <div className="h-1 w-full mt-1 border-b-purpBG border-b-[1px]"></div>
//         {/* ``````links`````````````` */}
//         <div className="flex flex-col  w-full pt-2  mt-2 gap-y-3">
//           <div className="flex flex-row h-10 pl-2 pt-1.5 w-full gap-x-3   cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG">
//             <TiHome className="h-5 w-5 text-purpBG mt-[1%] cursor-pointer" />
//             <label className="flex flex-row  w-full text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500">
//               Home
//             </label>
//           </div>
//           <div className="flex flex-row h-10 pl-2 pt-1.5 w-full gap-x-3   cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG">
//             <FaUser className="h-4 w-5 text-purpBG mt-[1.5%] cursor-pointer" />
//             <label className="flex flex-row  w-full text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500">
//               About
//             </label>
//           </div>
//           <div className="flex flex-row h-10 pl-2 pt-1.5 w-full gap-x-3   cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG">
//             <FaFolder className="h-4 w-5 text-purpBG mt-[2%] cursor-pointer" />
//             <label className="flex flex-row  w-full text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500">
//               Projects
//             </label>
//           </div>
//           <div className="flex flex-row h-10 pl-2 pt-1.5 w-full gap-x-3   cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG">
//             <FaSquarePhone className="h-4 w-5 text-purpBG mt-[2%] cursor-pointer" />
//             <label className="flex flex-row  w-full text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500">
//               Contact
//             </label>
//           </div>
//           <div className="flex flex-row h-10 pl-2 pt-1.5 w-full gap-x-3   cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG">
//             <RiCheckboxMultipleFill className="h-5 w-5 text-purpBG mt-[1%] cursor-pointer" />
//             <label className="flex flex-row  w-full text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500">
//               Selection
//             </label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
