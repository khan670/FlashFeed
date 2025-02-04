"use client";
import { getLatestNews } from "@/api-functions/newsApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CiTimer } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";

const LatestNews = () => {
  const { data } = useQuery({
    queryKey: ["latest"],
    queryFn: getLatestNews,
  });
  return (
    <div className="w-[70%] ">
      <h1 className="text-2xl font-semibold ">Latest News</h1>
      {data.articles.slice(
        0,
        4
      )((value, index) => (
        <div key={index} className="flex mt-4 bg-white p-3 rounded-md">
          <img src={value.urlToImage} className="rounded-md" alt="" />
          <div className="p-3 flex  flex-col gap-2">
            <p className="text-xs font-semibold">Science</p>
            <h1 className="text-base font-semibold text-black">
              {value.title}
            </h1>
            <p className="text-sm text-light-black">{value.description}</p>
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
  );
};

export default LatestNews;
