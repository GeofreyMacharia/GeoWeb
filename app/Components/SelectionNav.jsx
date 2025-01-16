"use client";
import Link from "next/link";
export default function SelectionNav() {
  return (
    <div className="flex flex-row gap-x-12 mini_s:gap-x-6 very_s:gap-x-3 blank:hidden">
      <Link
        href="#"
        className="text-lg font-abc text-bordBG group-hover:text-white font-semibold mini_s:text-sm very_s:text-[12px] "
        style={{
          borderBottom: "solid",
          borderBottomColor: "#B490CC",
        }}
      >
        Selection
      </Link>
      <Link
        href="/Longstrip"
        className="text-lg  font-abc text-bordBG group-hover:text-white font-semibold hover:text-blue-400 transition-colors duration-300 mini_s:text-sm very_s:text-[12px] "
      >
        Longstrip
      </Link>
      <Link
        href="/Dashboard"
        className="text-lg font-abc text-bordBG group-hover:text-white font-semibold hover:text-blue-400 transition-colors duration-300 mini_s:text-sm very_s:text-[12px] "
      >
        Dashboard
      </Link>
    </div>
  );
}
