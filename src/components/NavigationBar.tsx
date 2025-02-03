import { NaevigationData } from "@/data/NavigationData";
import React from "react";
import { IoMdPaper } from "react-icons/io";

const NavigationBar = () => {
  return (
    <nav className="p-5 border-b bg-white flex items-center gap-7">
      <h1 className="text-xl font-bold text-black flex items-center gap-2 uppercase">
        <IoMdPaper size={20} /> Headlinr
      </h1>
      <ul className="flex items-center gap-4 mr-auto">
        {NaevigationData.map((value, index) => (
          <li
            key={index}
            className="text-light-black text-sm capitalize font-semibold  cursor-pointer"
          >
            {value.name}
          </li>
        ))}
      </ul>
      {/* <button className="text-sm text-light-black font-semibold border border-light-black px-2 py-1 rounded-md">
        Login
      </button>
      <button className="text-sm text-white bg-light-black font-semibold border border-light-black px-2 py-1 rounded-md">
        Signup
      </button> */}
    </nav>
  );
};

export default NavigationBar;
