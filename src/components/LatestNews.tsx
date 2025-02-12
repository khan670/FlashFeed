"use client";
import { getLatestNews } from "@/api-functions/newsApi";
import { formatDateTime } from "@/helpers/formateDate";
import { NewsCardType } from "@/types/newsCardType";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CiTimer } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";

const LatestNews = ({handleData}:{
  handleData:(data:object)=>void
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["latest"],
    queryFn: getLatestNews,
  });
  if (error) return <>{error.message}</>;
  if (isLoading) return <>Loading...</>;
  return (
    <div className="w-[70%]">
      <h1 className="text-2xl font-semibold ">Latest News</h1>
      {data.articles?.slice(0, 4)?.map((value:NewsCardType, index:number) => (
        <div key={index} onClick={()=>handleData(value)} className="flex cursor-pointer mt-4 bg-white p-3 rounded-md">
          <img
            src={value.urlToImage}
            width={200}
            height={200}
            className="rounded-md"
            alt=""
          />
          <div className="p-3 flex  flex-col gap-2">
            {/* <p className="text-xs font-semibold">Science</p> */}
            <h1 className="text-base font-semibold text-black">
              {value.title}
            </h1>
            <p className="text-sm text-light-black">{value.description}</p>
            <div className="flex items-center justify-between text-sm text-light-black ">
              <p className="flex items-center gap-1">
                <CiTimer />{formatDateTime(value.publishedAt)}
              </p>
              <p className="flex items-center gap-1">
              <TfiWrite />
                {value.author}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;
