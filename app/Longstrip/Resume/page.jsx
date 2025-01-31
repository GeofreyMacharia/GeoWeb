"use client";
import { useRouter } from "next/navigation";
import { IoArrowBackCircle } from "react-icons/io5";

export default function Resume() {
  const router = useRouter();
  function go_back_to_long() {
    router.push("/Longstrip");
  }
  return (
    <div className="flex flex-col h-screen w-full bg-mainBg p-2 pb-4">
      {/* Header */}
      <div className="flex justify-center items-center h-14 w-full relative shadow-md shadow-bordBG mb-6">
        <label className="h-full w-40 p-2 font-abc font-semibold text-2xl text-purpBG border-b-[1px] border-b-purpBG -mt-1">
          MY RESUME
        </label>
        <div className="back_icon h-12 w-12 absolute top-0 left-1">
          <IoArrowBackCircle
            onClick={go_back_to_long}
            className="h-full w-full fill-purpBG cursor-pointer hover:fill-blue-300"
          />
        </div>
      </div>

      {/* Embed the PDF using iframe */}
      <div className="h-full w-full ">
        <iframe
          className="w-full h-full object-cover"
          title="Resume"
          src="/Assets/My_resume.pdf"
        />
      </div>
    </div>
  );
}

// "use client";
// import { useRouter } from "next/navigation";
// import { IoArrowBackCircle } from "react-icons/io5";
// import Image from "next/image";
// import { useState } from "react";

// export default function Resume() {
//   const router = useRouter();
//   function go_back_to_long() {
//     router.push("/Longstrip");
//   }
//   return (
//     <div className="h-screen w-full bg-mainBg p-4">
//       <div className="flex justify-center items-center h-14 w-full relative shadow-md shadow-bordBG mb-6">
//         <label className="h-full w-40 p-2 font-abc font-semibold text-2xl text-purpBG border-b-[1px] border-b-purpBG">
//           MY RESUME
//         </label>
//       </div>
//       <div className="flex justify-center items-center h-full">
//         {/* Embed the PDF using iframe */}
//         <iframe
//           className="w-full h-full bg-blue-500 border-none"
//           title="Resume"
//           src="/Assets/Rez.pdf"
//         />
//       </div>
//     </div>
//   );
// }
