import NewsCard from "@/components/NewsCard";
import React from "react";
import { CiTimer } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";

const HomePage = () => {
  return (
    <>
      <section className="flex items-start gap-3 px-5 py-3">
        <div className="w-[70%] flex flex-col gap-3">
          {[1, 2].map((value) => (
            <div
              key={value}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 50%), url("/breakNews.png")`,
              }}
              className="bg-no-repeat text-white rounded-md flex flex-col justify-end items-start bg-cover p-5 h-80 overflow-hidden"
            >
              <button className="text-xs text-gray-50 bg-light-black rounded-lg px-2 py-1">
                Breaking News
              </button>
              <h1 className="text-gray-50 font-semibold text-2xl">
                Global Leaders Reach Historic Climate Agreement at UN Summit
              </h1>
              <p className="text-sm text-[#E5E7EB] ">
                World leaders have agreed to unprecedented measures to combat
                climate change, setting ambitious targets for emission
                reductions by 2030.
              </p>
            </div>
          ))}
        </div>
        <div className="w-[30%] flex flex-col gap-3">
          <NewsCard />
          <NewsCard />
        </div>
      </section>
      {/* Trending News */}
      <section className="mt-5 p-5">
        <h1 className="text-2xl font-semibold ">Trending Now</h1>
        <div className="grid grid-cols-4 gap-3 mt-5">
          {[1, 2, 3, 4].map((value) => (
            <div
              key={value}
              className="bg-white rounded-lg overflow-hidden shadow"
            >
              <img src="/science.png" alt="" />
              <div className="p-3 flex  flex-col gap-2">
                <p className="text-xs font-semibold">Science</p>
                <h1 className="text-base font-semibold text-black">
                  Breakthrough in Quantum Computing Promises New Era
                </h1>
                <div className="flex items-center justify-between text-sm text-light-black ">
                  <p className="flex items-center gap-1">
                    <CiTimer />5 min read
                  </p>
                  <p className="flex items-center gap-1">
                    <IoMdShareAlt />
                    2.5k shares
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-5 flex gap-3 p-5">
        <div className="w-[70%] ">
          <h1 className="text-2xl font-semibold ">Latest News</h1>
          {[1, 2, 3].map((value) => (
            <div key={value} className="flex mt-4 bg-white p-3 rounded-md">
              <img src="/science.png" className="rounded-md" alt="" />
              <div className="p-3 flex  flex-col gap-2">
                <p className="text-xs font-semibold">Science</p>
                <h1 className="text-base font-semibold text-black">
                  Breakthrough in Quantum Computing Promises New Era
                </h1>
                <p className="text-sm text-light-black">
                  The historic $1.2 trillion infrastructure package aims to
                  rebuild roads, bridges, and expand broadband access across the
                  nation.
                </p>
                <div className="flex items-center justify-between text-sm text-light-black ">
                  <p className="flex items-center gap-1">
                    <CiTimer />5 min read
                  </p>
                  <p className="flex items-center gap-1">
                    <IoMdShareAlt />
                    2.5k shares
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[30%]">
          <div className="p-4 bg-white rounded-md">
            <h1 className="text-lg font-semibold text-light-black">
              Most Popular
            </h1>
            {[1, 2, 3].map((value) => (
              <div key={value} className="flex items-center gap-3 mt-3">
                <h1 className="text-xl font-semibold">0{value}</h1>
                <div>
                  <h1 className="text-base font-semibold text-light-black ">
                    Global Economy Shows Signs of Recovery Post- Pandemic
                  </h1>
                  <p className="text-sm text-light-black">4.2k reads</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white rounded-md flex flex-col gap-3 mt-3">
            <h1 className="text-lg font-semibold text-light-black">
              Newsletter
            </h1>
            <p className="text-sm text-gray-400">
              Stay updated with our daily news digest
            </p>
            <input
              type="text"
              className="text-sm p-2 border focus:outline-none border-gray-100"
              placeholder="Enter your email"
            />
            <button className="text-sm bg-black rounded-md py-2 text-white px-2">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
