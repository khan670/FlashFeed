"use client";
import { getTrendingNews } from "@/api-functions/newsApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CiTimer } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";

const TrendingNews = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingNews,
  });
  if (isLoading) return <>Loading...</>;
  return (
    <section className="mt-5 p-5">
      <h1 className="text-2xl font-semibold ">Trending Now</h1>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {data.articles.map((value) => (
          <div
            key={value.title}
            className="bg-white rounded-lg overflow-hidden shadow"
          >
            <img src={value.urlToImage} alt="" />
            <div className="p-3 flex  flex-col gap-2">
              {/* <p className="text-xs font-semibold">Science</p> */}
              <h1 className="text-base font-semibold text-black">
                {value.title}
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
  );
};

export default TrendingNews;
