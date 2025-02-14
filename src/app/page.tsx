"use client";
import { getHeadline } from "@/api-functions/newsApi";
import ArticleModel from "@/components/ArticleModel";
import LatestNews from "@/components/LatestNews";
import MostPopular from "@/components/MostPopular";
import NewsCard from "@/components/NewsCard";
import SmallLoader from "@/components/SmallLoader";
import TrendingNews from "@/components/TrendingNews";
import { NewsCardType } from "@/types/newsCardType";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const HomePage = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["headline"],
    queryFn: getHeadline,
  });
  const [newsData, setNewsData] = useState<NewsCardType | string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleData(data: NewsCardType) {
    setNewsData(data);
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  if (isLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <SmallLoader />
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center font-bold text-xl capitalize">
        {error.message}
      </div>
    );

  return (
    <>
      <section className="flex items-start lg:flex-row flex-col gap-3 px-5 py-3">
        <div className="lg:w-[70%] w-full flex flex-col gap-3">
          {data?.articles
            .slice(0, 4)
            ?.map((value: NewsCardType, index: number) => (
              <div
                key={index}
                onClick={() => handleData(value)}
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 50%), url("${value.urlToImage}")`,
                }}
                className="bg-no-repeat cursor-pointer text-white rounded-md flex flex-col justify-end items-start bg-cover p-5 h-80 overflow-hidden">
                <button className="text-xs text-gray-50 bg-light-black rounded-lg px-2 py-1">
                  Breaking News
                </button>
                <h1 className="text-gray-50 font-semibold sm:text-2xl text-xl">
                  {value.title}
                </h1>
                <p className="sm:text-sm text-xs text-[#E5E7EB] ">
                  {value.description}
                </p>
              </div>
            ))}
        </div>
        <div className="lg:w-[30%] w-full grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-3">
          {data.articles
            .slice(4, 7)
            .map((value: NewsCardType, index: number) => (
              <div onClick={() => handleData(value)} key={index + 2}>
                <NewsCard data={value} />
              </div>
            ))}
        </div>
      </section>
      {/* Trending News */}
      <TrendingNews handleData={handleData} />
      {/* latest News */}
      <section className="mt-5 flex flex-col lg:flex-row  gap-3 p-5">
        <LatestNews handleData={handleData} />
        <div className="lg:w-[30%] w-full">
          <MostPopular />
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

      <ArticleModel data={newsData} open={isOpen} setOpen={handleClose} />
    </>
  );
};

export default HomePage;
