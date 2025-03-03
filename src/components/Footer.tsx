import { NaevigationData } from "@/data/NavigationData";
import { buttonCategory } from "@/data/NewsData";
import Image from "next/image";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-t-gray-200  ">
      <div className="flex sm:flex-row flex-col gap-5 px-5 py-7">
        <div className="flex flex-col gap-2 sm:w-1/4 w-full">
          <h1 className="text-2xl font-extrabold  flex items-center gap-2 uppercase">
            <Image
              width={40}
              height={40}
              src="/newspaper-folded (1).png"
              alt=""
            />
            Headlinr
          </h1>
          <p className="text-sm font-medium text-[#9CA3AF]">
            Your trusted source for the latest news and in- depth reporting from
            around the world.
          </p>
        </div>
        <div className="sm:w-1/4 w-full">
          <h1 className="text-lg font-semibold ">Categories</h1>
          <ul className="flex flex-col gap-2 mt-2 text-[#9CA3AF]">
            {buttonCategory.map((value, index) => (
              <li className="text-sm font-medium" key={index}>
                {value.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:w-1/4 w-full">
          <h1 className="text-lg font-semibold ">Company</h1>
          <ul className="flex flex-col mt-2 gap-2 text-[#9CA3AF]">
            {NaevigationData.map((value, index) => (
              <li className="text-sm font-medium" key={index}>
                {value.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:w-1/4 w-full">
          <h1 className="text-lg font-semibold ">Follow Us</h1>
          <ul className="flex items-center gap-5 mt-2 text-[#9CA3AF]">
            <li className=" cursor-pointer transition-all duration-500">
              <FaTwitter size={18} />
            </li>
            <li className=" cursor-pointer transition-all duration-500">
              <FaFacebookF size={18} />
            </li>
            <li className=" cursor-pointer transition-all duration-500">
              <FaYoutube size={18} />
            </li>
            <li className=" cursor-pointer transition-all duration-500">
              <AiOutlineInstagram size={18} />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white h-[1px] w-full"></div>
      <div className="text-[#9CA3AF] flex flex-col gap-2 sm:flex-row justify-between p-5 text-sm">
        <p>Develped by Rayan khan. Powered by RayanBytes.</p>
        <p className="text-sm ml-auto text-[#9CA3AF] font-medium ">
          Copyright © 2023 FlashFeed. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
