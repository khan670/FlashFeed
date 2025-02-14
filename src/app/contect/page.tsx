import { Metadata } from "next";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoTime } from "react-icons/io5";
export const metadata: Metadata = {
  title: "Contact Us | Headlinr",
  description:
    "Get in touch with us for any inquiries, feedback, or support. We&apos;re here to help!",
  keywords: "contact, support, news website, inquiries",
  openGraph: {
    title: "Contact Us | Headlinr",
    description: "Reach out to Headlinr for any questions or support.",
    url: "http://localhost:3000/contact",
    siteName: "Headlinr",
    images: [
      {
        url: "/contact-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Headlinr",
    description: "Need assistance? Contact Headlinr today!",
    images: ["/contact-banner.jpg"],
  },
};
const ContectPage = () => {
  return (
    <section className="sm:w-[60%] w-full sm:mx-auto px-3 mt-5">
      <h1 className="text-xl text-center font-extrabold">Contact Us</h1>
      <p className="text-sm text-gray-700 text-center">
        We&apos;d love to hear from you. Please fill out this form.
      </p>
      <div className="flex sm:flex-row flex-col gap-3 mt-5 mb-10">
        <div className="bg-white p-5 text-xs  text-light-black flex flex-col gap-5 sm:w-[60%] w-full border-gray-200 border rounded-md">
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
        <div className="bg-white p-5 sm:w-[40%] w-full border-gray-200 border rounded-md">
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
