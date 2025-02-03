import { query } from "@/api-functions/summarization";
import { AboutData, Commitment } from "@/data/AboutData";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
//api key of the model
// "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"
const AboutPage = async () => {
  return (
    <>
      <section className="w-[60%] mx-auto mt-5">
        <h1 className="text-xl text-center font-extrabold">About Headlinr</h1>
        <div className="bg-white p-5 rounded-md mt-5 border border-gray-200">
          <h1 className="text-lg font-semibold">Your Trusted News Source</h1>
          <p className="text-xs text-gray-400 mt-2">
            Global News is your premier destination for comprehensive news
            coverage from around the world. We are dedicated to delivering
            accurate, timely, and unbiased reporting on the stories that matter
            most to you. <br />
            <br />
            Founded with a mission to inform and empower our readers, we bring
            you breaking news, in-depth analysis, and expert perspectives across
            a wide spectrum of topics.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="bg-white p-5 border-gray-200 border rounded-md">
            <h1 className="text-lg font-semibold">Our Coverage</h1>
            <ul className="flex gap-3 flex-col mt-3 text-sm text-light-black">
              {AboutData.map((value) => (
                <li key={value} className="flex gap-2 items-center ">
                  <IoIosCheckmarkCircle />
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-5 border border-gray-200 rounded-md">
            <h1 className="text-lg font-semibold">Our Commitment</h1>
            <ul className="flex gap-3 flex-col mt-3 text-sm text-light-black">
              {Commitment.map((value) => {
                const Icon = value.icon;
                return (
                  <li key={value.text} className="flex gap-2 items-center ">
                    <Icon />
                    {value.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="p-5 mt-5 bg-white border border-gray-200 rounded-md">
          <h1 className="text-lg font-semibold">Editorial Standards</h1>
          <p className="text-xs text-gray-400 mt-2">
            Our team of experienced journalists and editors follows strict
            editorial guidelines to ensure the highest quality of reporting. We
            verify all information through multiple sources and maintain
            transparency in our reporting process. <br />
            <br />
            We believe in the power of well-researched, factual journalism to
            inform, educate, and empower our readers to make better decisions.
          </p>
        </div>
        <div className="p-5 mt-5 mb-10 text-center  border border-gray-200 bg-gray-300 rounded-md">
          <h1 className="text-lg text-black text-center font-semibold">
            Join Our Community
          </h1>
          <p className="text-xs text-light-black mt-2 text-center">
            Stay informed with our daily updates and become part of our growing
            community of informed readers who value quality journalism.
          </p>
          <button className="text-sm text-white bg-black px-2 py-2 mt-3 rounded">
            Subscribe to Our Newsletter
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
