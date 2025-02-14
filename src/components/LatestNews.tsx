"use client";
import { getLatestNews } from "@/api-functions/newsApi";
import { formatDateTime } from "@/helpers/formateDate";
import { NewsCardType } from "@/types/newsCardType";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CiTimer } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";

const LatestNews = ({
  handleData,
}: {
  handleData: (data: NewsCardType) => void;
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["latest"],
    queryFn: getLatestNews,
  });
  if (error) return <>{error.message}</>;
  if (isLoading) return <>Loading...</>;
  return (
    <div className="lg:w-[70%] w-full">
      <h1 className="text-2xl font-semibold ">Latest News</h1>
      {data.articles?.slice(0, 4)?.map((value: NewsCardType, index: number) => (
        <div
          key={index}
          onClick={() => handleData(value)}
          className="flex sm:flex-row flex-col cursor-pointer mt-4 bg-white p-3 rounded-md">
          {/*  eslint-disable  */}
          <img
            src={value.urlToImage}
            className="rounded-md sm:w-48 sm:h-48 w-full"
            alt=""
          />
          <div className="p-3 flex flex-col gap-2">
            <h1 className="sm:text-base text-sm font-semibold text-black">
              {value.title}
            </h1>
            <p className="sm:text-sm text-xs text-light-black">
              {value.description}
            </p>
            <div className="flex items-center justify-between sm:text-sm text-xs text-light-black ">
              <p className="flex items-center gap-1">
                <CiTimer />
                {formatDateTime(value.publishedAt)}
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
