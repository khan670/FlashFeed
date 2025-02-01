import { NaevigationData } from "@/data/NavigationData";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdPaper } from "react-icons/io";

const NavigationBar = () => {
  return (
    <nav className="p-5 border-b border-b-black flex items-center justify-between">
      <h1 className="text-2xl font-extrabold text-black flex items-center gap-1 uppercase">
        <IoMdPaper size={25} /> FlashFeed
      </h1>
      <ul className="flex items-center gap-4">
        {NaevigationData.map((value, index) => (
          <li
            key={index}
            className="text-light-black text-sm uppercase font-semibold  cursor-pointer"
          >
            {value.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <button className="border border-light-black hover:bg-light-black hover:text-white transition-all duration-300 py-2 px-4 text-sm text-light-black rounded-2xl">
          Subscribe
        </button>
        <CiSearch size={30} />
      </div>
    </nav>
  );
};

export default NavigationBar;
