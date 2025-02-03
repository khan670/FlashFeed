import NewsCard from "@/components/NewsCard";
import { buttonCategory } from "@/data/NewsData";
import React from "react";

const News = () => {
  return (
    <section className="p-5 bg-gray-50">
      <div className="flex items-center gap-3">
        {buttonCategory.map((value, index) => (
          <button
            key={index}
            className={`text-sm text-white ${
              index === 0
                ? "bg-light-black"
                : "border border-light-black bg-white !text-light-black"
            } py-1 px-3 rounded`}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {[1, 2, 3, 4, 5, 6, 7, 76].map((value) => (
          <NewsCard key={value} />
        ))}
      </div>
    </section>
  );
};

export default News;
