import { NaevigationData } from "@/data/NavigationData";
import React from "react";

const NewsCategoryPage = () => {
  return (
    <>
      <section className="bg-[#F3F1E8] py-20 text-center ">
        <h1 className="text-3xl font-semibold">Business</h1>
      </section>
      <section className="p-10 grid grid-cols-[80%_20%]">
        <div className="flex flex-col gap-5">
          {[1, 2, 3, 4].map((value) => (
            <div key={value} className="flex items-center gap-3">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/6457af175d2f1133b79ecaa8/645dd67e50e2b484db57144b_business-thumb-01-p-800.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-xl text-black font-semibold">
                  Sustainability in Business: Balancing Profit and Environmental
                  Responsibility
                </h1>
                <p className="text-sm text-light-black">
                  Regular exercise has been shown to have a significant positive
                  impact on physical and mental health, and a new study has
                </p>
                <p className="text-sm text-light-black mt-6">
                  June 2, 2023 - 10 Min
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <h1 className="text-light-black text-xl font-medium">Categories</h1>
          <ul className="flex flex-col gap-3 font-medium mt-3 text-light-black text-sm">
            {NaevigationData.map((value, index) => (
              <li key={index} className="pb-3 border-b border-b-[#F3F1E8]">
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NewsCategoryPage;
