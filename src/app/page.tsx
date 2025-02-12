"use client";
import { getHeadline } from "@/api-functions/newsApi";
import ArticleModel from "@/components/ArticleModel";
import LatestNews from "@/components/LatestNews";
import NewsCard from "@/components/NewsCard";
import TrendingNews from "@/components/TrendingNews";
import { NewsCardType } from "@/types/newsCardType";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense, useState } from "react";

const HomePage = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["headline"],
    queryFn: getHeadline,
  });
 const [newsData,setNewsData]=useState("");
 const [isOpen,setIsOpen]=useState(false)
 function handleData(data){
  setNewsData(data);
  setIsOpen(true);
 }
 function handleClose(){
  setIsOpen(false)
 }
  if (isLoading) return "loading....";
  if (error) return <>{error.message}</>;
  
  return (
    <>
      <section className="flex items-start gap-3 px-5 py-3">
        <div className="w-[70%] flex flex-col gap-3">
          {data?.articles.slice(0, 4)?.map((value:NewsCardType, index:number) => (
            <div
              key={index}
              onClick={()=>handleData(value)}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 50%), url("${value.urlToImage}")`,
              }}
              className="bg-no-repeat cursor-pointer text-white rounded-md flex flex-col justify-end items-start bg-cover p-5 h-80 overflow-hidden"
            >
              <button className="text-xs text-gray-50 bg-light-black rounded-lg px-2 py-1">
                Breaking News
              </button>
              <h1 className="text-gray-50 font-semibold text-2xl">
                {value.title}
              </h1>
              <p className="text-sm text-[#E5E7EB] ">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="w-[30%] flex flex-col gap-3">
          {data.articles.slice(4, 7).map((value:NewsCardType, index:number) => (
            <div onClick={()=>handleData(value)}>
            <NewsCard key={index + 2} data={value} />
            </div>
          ))}
        </div>
      </section>
      {/* Trending News */}
      <Suspense fallback={<p>loading...</p>}>
        <TrendingNews handleData={handleData} />
      </Suspense>
      {/* latest News */}
      <section className="mt-5 flex gap-3 p-5">
        <LatestNews handleData={handleData} />
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
      <ArticleModel data={newsData} open={isOpen} setOpen={handleClose} />
    </>
  );
};

export default HomePage;
