"use client";
// import NewsCard from "@/components/NewsCard";
import { getHeadline } from "@/api-functions/newsApi";
import NewsCard from "@/components/NewsCard";
import { buttonCategory } from "@/data/NewsData";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const News = () => {
  const [category, setCategory] = useState("All News");
  const { isLoading, data, error } = useQuery({
    queryKey: ["headline"],
    queryFn: getHeadline,
  });
  if (isLoading) return "loading....";
  if (error) return <>{error.message}</>;
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
        {data.articles.map((value, index) => (
          <NewsCard key={index} data={value} />
        ))}
      </div>
    </section>
  );
};

export default News;
