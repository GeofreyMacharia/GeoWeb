"use client";
import Image from "next/image";
import test_img from "@public/under_death.png";
import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import heart_img from "@public/heart2_.png";
import { RiSpeakFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
// import me_img from "@public/Assets/Profile_face.png";
import me_img from "@public/Assets/box_face.png";
export default function DashNav() {
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
  function go_to_linkd() {
    router.push("/Dashboard/Projects");
  }
  function go_to_git() {
    router.push("/Dashboard/Projects");
  }

  return (
    <div className="flex flex-col h-full w-1/4 bg-darkerBG  shadow-lg shadow-bordBG xs:collapse xs:w-0">
      <div className="flex justify-center items-center h-40 w-full  ">
        <div className="image h-36 w-36 rounded-full ">
          <Image
            src={me_img}
            alt="me_img"
            className="rounded-full h-full w-full object-cover   "
          />
        </div>
      </div>
      <label className="h-12 w-full  text-3xl font-abc font-semibold text-center p-2 text-purpBG lx:text-xl ">
        Geofrey Macharia
      </label>
      <label className="h-6 w-full  text-sm font-abc font-light text-center pl-3 pr-3 text-purpBG lx:text-[14px]">
        Data Scientist | Web Developer
      </label>

      <div className="flex flex-col h-mid w-full p-3">
        <div className="flex h-12 w-full mb-4 cursor-pointer">
          <div className="flex justify-center h-full w-10 items-center">
            <TiHome className="ml-4 h-12 w-12 text-purpBG" />
          </div>
          <label
            onClick={go_to_dash}
            className="h-full w-3/4 p-3 ml-2 text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-green-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG"
          >
            Home
          </label>
        </div>

        <div className="flex h-12 w-full mb-4 cursor-pointer">
          <div className="flex justify-center h-full w-10 items-center">
            <FaUser className="ml-4 h-5 w-5 text-purpBG" />
          </div>
          <label
            onClick={go_about}
            className="h-full w-3/4 p-3 ml-2 text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG"
          >
            About
          </label>
        </div>

        <div className="flex h-12 w-full mb-4 cursor-pointer">
          <div className="flex justify-center h-full w-10 items-center">
            <FaFolder className="ml-4 h-5 w-5 text-purpBG" />
          </div>
          <label
            onClick={go_to_projects}
            className="h-full w-3/4 p-3 ml-2 text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:via-teal-400 hover:to-blue-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG"
          >
            Projects
          </label>
        </div>

        <div className="flex h-12 w-full mb-4 cursor-pointer">
          <div className="flex justify-center h-full w-10 items-center">
            <FaSquarePhone className="ml-4 h-5 w-5 text-purpBG" />
          </div>
          <label
            onClick={go_to_contact}
            className="h-full w-3/4 p-3 ml-2 text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG"
          >
            Contact
          </label>
        </div>

        <div className="flex h-12 w-full mb-4">
          <div className="flex justify-center h-full w-10 items-center">
            <RiCheckboxMultipleFill className="ml-2 h-5 w-5 text-purpBG" />
          </div>
          <label
            onClick={go_home}
            className="h-full w-3/4 p-3 ml-2 text-lg text-purpBG font-abc font-medium cursor-pointer rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 hover:border-b-blue-500 hover:border-b-[1px] hover:shadow-md hover:shadow-bordBG"
          >
            Selection
          </label>
        </div>
      </div>

      <div className="flex h-14 w-full   p-3 gap-x-4">
        <FiFacebook className="h-full w-16  text-purpBG" />
        <FaInstagram className="h-full w-16 text-purpBG" />
        <a
          href="https://www.linkedin.com/in/geofrey-macharia-52b172226/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandLinkedin className="h-full w-20 text-purpBG cursor-pointer hover:text-blueHov" />
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
  );
}
