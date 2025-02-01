import { NaevigationData } from "@/data/NavigationData";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black  ">
      <div className="text-white flex gap-5 px-5 py-7">
        <div className="flex flex-col gap-2 w-1/4">
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-1 uppercase">
            <IoMdPaper size={27} /> FlashFeed
          </h1>
          <p className="text-sm font-medium ">
            A reporter gathers, investigates, and presents news and current
            events through various media platforms
          </p>
          <ul className="flex items-center gap-5 mt-auto">
            <li className="p-2 border border-white rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-500">
              <FaTwitter size={15} />
            </li>
            <li className="p-2 border transition-all duration-500 border-white rounded-full hover:bg-white hover:text-black cursor-pointer">
              <FaFacebookF size={15} />
            </li>
            <li className="p-2 border border-white rounded-full transition-all duration-500 hover:bg-white hover:text-black cursor-pointer">
              <FaYoutube size={15} />
            </li>
            <li className="p-2 border border-white rounded-full hover:bg-white transition-all duration-500 hover:text-black cursor-pointer">
              <AiOutlineInstagram size={15} />
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col gap-5">
            {NaevigationData.map((value, index) => (
              <li className="text-base font-medium" key={index}>
                {value.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col gap-5">
            {NaevigationData.map((value, index) => (
              <li className="text-base font-medium" key={index}>
                {value.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col gap-5">
            {NaevigationData.map((value, index) => (
              <li className="text-base font-medium" key={index}>
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-600 h-[1px] w-full"></div>
      <div className="text-white flex justify-between p-5 text-sm">
        <p>Develped by Rayan khan. Powered by RayanBytes.</p>
        <p className="text-sm font-medium ">
          Copyright © 2023 FlashFeed. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
