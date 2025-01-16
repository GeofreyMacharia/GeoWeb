"use client";
import Link from "next/link";
export default function LongstripNav() {
  return (
    <div className="flex flex-row gap-x-10">
      <Link
        href="#Section1"
        className="text-base font-abc text-bordBG  font-semibold  "
        style={{
          borderBottom: "solid",
          borderBottomColor: "#B490CC",
        }}
      >
        Home
      </Link>
      <Link
        href="#Section2"
        className="text-base  font-abc text-bordBG  font-semibold hover:text-blue-400 transition-colors duration-300"
      >
        Expertise
      </Link>
      <Link
        href="#Section3"
        className="text-base font-abc text-bordBG  font-semibold hover:text-blue-400 transition-colors duration-300"
      >
        About
      </Link>
      <Link
        href="#Section4"
        className="text-base font-abc text-bordBG  font-semibold hover:text-blue-400 transition-colors duration-300 "
      >
        Projects
      </Link>
      <Link
        href="#Section6"
        className="text-base font-abc text-bordBG  font-semibold hover:text-blue-400 transition-colors duration-300"
      >
        Endorsmt
      </Link>

      <Link
        href="#Section5"
        className="text-base font-abc text-bordBG  font-semibold hover:text-blue-400 transition-colors duration-300"
      >
        Contact
      </Link>
      <Link
        href="/Longstrip/Resume"
        className="text-base font-abc text-bordBG  font-semibold hover:text-blue-400 transition-colors duration-300"
      >
        Resume
      </Link>
      <Link
        href="/"
        className="text-base font-abc text-bordBG  font-semibold hover:text-blue-400 transition-colors duration-300"
      >
        Selection
      </Link>
    </div>
  );
}
