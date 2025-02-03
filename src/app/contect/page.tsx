import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoTime } from "react-icons/io5";

const ContectPage = () => {
  return (
    <section className="w-[60%] mx-auto mt-5">
      <h1 className="text-xl text-center font-extrabold">Contact Us</h1>
      <p className="text-sm text-gray-700 text-center">
        We'd love to hear from you. Please fill out this form.
      </p>
      <div className="flex gap-3 mt-5 mb-10">
        <div className="bg-white p-5 text-xs  text-light-black flex flex-col gap-5 w-[60%] border-gray-200 border rounded-md">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              className=" p-2 border focus:outline-none border-gray-100"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Email Address</label>
            <input
              type="text"
              className="text-sm p-2 border focus:outline-none border-gray-100"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Address</label>
            <textarea
              className="text-sm p-2 border focus:outline-none border-gray-100"
              placeholder="Enter your email"
            />
          </div>
          <button className="text-sm bg-black rounded py-2 text-white px-2">
            Send Message
          </button>
        </div>
        <div className="bg-white p-5 w-[40%] border-gray-200 border rounded-md">
          <h1 className="text-lg  font-semibold">Contact Information </h1>
          <div className="flex flex-col gap-3 mt-5">
            <p className="flex text-sm gap-1 text-light-black font-medium items-center">
              <IoMdMail /> contact@newswebsite.com
            </p>
            <p className="flex text-sm gap-1 text-light-black font-medium items-center">
              <FaPhoneAlt />
              +1 (555) 123-4567
            </p>
            <p className="font-medium items-center flex text-sm gap-1 text-light-black">
              <IoTime />
              Mon - Fri, 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContectPage;
