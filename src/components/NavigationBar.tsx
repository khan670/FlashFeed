"use client";
import { NaevigationData } from "@/data/NavigationData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <nav className="p-5 border-b bg-white justify-between flex items-center gap-7">
      <h1 className="text-xl font-extrabold text-black flex items-center gap-2 uppercase">
        {/* <IoMdPaper size={20} /> */}
        <Image width={32} height={32} src="/favicon-32x32.png" alt="" />
        Headlinr
      </h1>
      <ul className="sm:flex text-sm hidden  items-center gap-4 ">
        {NaevigationData.map((value) => (
          <li
            key={value.link}
            className="text-light-black text-sm capitalize font-semibold  cursor-pointer">
            <Link href={value.link}>{value.name}</Link>
          </li>
        ))}
      </ul>
      <RxHamburgerMenu
        onClick={handleIsOpen}
        size={20}
        className="sm:hidden block cursor-pointer"
      />
      {/* <button className="text-sm text-light-black font-semibold border border-light-black px-2 py-1 rounded-md">
        Login
      </button>
      <button className="text-sm text-white bg-light-black font-semibold border border-light-black px-2 py-1 rounded-md">
        Signup
      </button> */}
      {isOpen && (
        <div
          onClick={handleIsOpen}
          className="bg-black/30 fixed  top-0 right-0 h-screen w-full"></div>
      )}
      <div
        className={`bg-light-black w-1/2 ${
          isOpen ? "right-0" : "-right-full"
        } transition-all duration-300 flex flex-col py-5  fixed top-0  h-full`}>
        <IoMdCloseCircle
          className="absolute top-2 left-2 cursor-pointer text-white"
          size={20}
          onClick={handleIsOpen}
        />
        <h1 className="text-xl font-extrabold  justify-center text-white flex items-center gap-2 uppercase">
          <Image
            width={32}
            height={32}
            src="/newspaper-folded (1).png"
            alt=""
          />{" "}
          Headlinr
        </h1>
        <ul className="mt-5 ">
          {NaevigationData.map((value) => (
            <li key={value.link}>
              <Link
                href={value.link}
                onClick={handleIsOpen}
                className="text-white   p-3 text-sm capitalize font-semibold  cursor-pointer">
                {value.name}
              </Link>
              <hr />
            </li>
          ))}
        </ul>
        <ul className="flex items-center mt-auto  justify-center gap-5  text-[#9CA3AF]">
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
    </nav>
  );
};

export default NavigationBar;
