import React from "react";
import { CiCalendar, CiMail } from "react-icons/ci";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <section className="flex items-center gap-10 p-5 group cursor-pointer">
        <div className="w-1/2 flex flex-col gap-5 items-start">
          <button className="text-sm rounded-lg bg-color-theme text-white py-1 px-4">
            Science
          </button>
          <h1 className="text-black text-5xl leading-[1.3] font-medium group-hover:text-color-theme transition-all duration-300">
            Scientists Develop Artificial Leaf That Turns Carbon Dioxide into
            Fuel
          </h1>
          <p className="text-light-black text-base">
            In the face of climate change, scientists around the world are
            looking for ways to mitigate the negative impacts of human activity
            on the environment.
          </p>
        </div>
        <div className="w-1/2 rounded-lg overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/6457af175d2f1133b79ecaa8/645dd15ad70f00fded732de1_science-thumb-01-p-800.jpg"
            alt=""
            className="group-hover:scale-105 transition-all duration-300"
          />
        </div>
      </section>
      <section className="p-5">
        <h1 className="text-black text-4xl font-medium">Top News</h1>
        <div className="grid mt-5 grid-cols-2 gap-10 ">
          <div className="flex flex-col items-start gap-3 group cursor-pointer">
            <div className=" flex-1 rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/6457af175d2f1133b79ecaa8/645dd67e50e2b484db57144b_business-thumb-01-p-800.jpg"
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <h1 className="text-black text-3xl leading-[1.3] font-medium group-hover:text-color-theme transition-all duration-500">
              Sustainability in Business: Balancing Profit and Environmental
              Responsibility
            </h1>
            <p className="text-light-black ">
              Regular exercise has been shown to have a significant positive
              impact on physical and mental health, and a new study has
              reinforced these findings.
            </p>
            <div className="flex items-center gap-2 w-full">
              <img
                src="https://cdn.prod.website-files.com/6457af175d2f1133b79ecaa8/645dd1447027d8b7406caf28_authors-thumb-02.jpg"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />{" "}
              <span> by Devon Lane</span>{" "}
              <p className="text-sm text-light-black ml-auto">
                May 9, 2023 . 10 Min
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((value) => (
              <div
                className="flex flex-col items-start gap-2 group cursor-pointer"
                key={value}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://cdn.prod.website-files.com/6457af175d2f1133b79ecaa8/645dd6c7760958bae81ef8f4_health-thumb-02-p-500.jpg"
                    alt=""
                    className="rounded-lg group group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <p className="flex gap-1 items-center text-sm text-light-black">
                  <CiCalendar /> May 20, 2023
                </p>
                <h2 className="text-black text-xl font-medium group-hover:text-color-theme transition-all duration-500">
                  The Benefits and Risks of Herbal Supplements
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-5 grid grid-cols-3 gap-10 mt-5">
        {[
          "Sports",
          "Entertainment",
          "Politics",
          "Health",
          "Business",
          "Technology",
        ].map((value) => (
          <>
            <div key={value}>
              <h1 className="text-black text-2xl font-medium mb-2">{value}</h1>
              <img
                src="https://cdn.prod.website-files.com/6457af175d2f1133b79ecaa8/645dd5ae9820721956f314ff_sports-thumb-04-p-500.jpg"
                alt=""
                className="rounded-lg"
              />
              <p className="flex gap-1 mt-1 items-center text-sm font-medium text-light-black">
                <CiCalendar /> May 20, 2023
              </p>
              <h2 className="text-light-black text-xl font-semibold mt-2 group-hover:text-color-theme transition-all duration-500">
                New Study Shows Regular Exercise Can Improve Health
              </h2>
              {[1, 2, 3].map((index) => (
                <>
                  <div
                    key={index}
                    className="flex gap-1 cursor-pointer items-center text-sm font-medium mt-3
               text-light-black group"
                  >
                    <h2 className="text-light-black text-base font-semibold  group-hover:text-color-theme transition-all duration-500">
                      New Study Shows Regular Exercise Can Improve Health
                    </h2>
                    <div className="w-24 h-24 overflow-hidden rounded-lg ">
                      <img
                        src="https://cdn.prod.website-files.com/6457af175d2f1133b79ecaa8/645dd5ae9820721956f314ff_sports-thumb-04-p-500.jpg"
                        alt=""
                        className="rounded-lg w-full h-full group-hover:scale-105 transform transition-all duration-300"
                      />
                    </div>
                  </div>
                </>
              ))}
              <button className="flex mt-3 items-center gap-1 text-base text-light-black font-semibold ml-auto">
                Go to {value}
                <IoIosArrowDroprightCircle
                  className="text-color-theme"
                  size={18}
                />
              </button>
            </div>
          </>
        ))}
      </section>
      <div className="w-full bg-light-black h-[1px] mt-5 "></div>
      <section className="mt-5 px-10 py-20 flex items-center justify-center flex-col">
        <h1 className="text-black text-4xl font-semibold">
          Subscribe Our Newsletter
        </h1>
        <p className="text-light-black font-medium mt-2">
          Stay updated with the latest news and exclusive content by subscribing
          to our newsletter.
        </p>
        <div className="flex items-center gap-3 w-2/5 mt-3">
          <div className="border border-light-black flex-1 rounded-lg flex items-center p-3 w-full  gap-2">
            <CiMail />
            <input
              type="text"
              placeholder="Enter your email"
              className="focus:outline-none flex-1 placeholder:text-light-black text-sm"
            />
          </div>
          <button className="bg-color-theme font-medium text-white flex items-center gap-1 rounded-lg p-3 text-sm">
            Subscribe <MdArrowOutward />{" "}
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
