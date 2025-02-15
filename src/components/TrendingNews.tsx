"use client";
import { getTrendingNews } from "@/api-functions/newsApi";
import { formatDateTime } from "@/helpers/formateDate";
import { NewsCardType } from "@/types/newsCardType";
import { getTodayDate } from "@/utils/dateUtils";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CiTimer } from "react-icons/ci";
import SmallLoader from "./SmallLoader";
const TrendingNews = ({
  handleData,
}: {
  handleData: (data: NewsCardType) => void;
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingNews,
  });
  console.log(getTodayDate());
  if (isLoading) return <SmallLoader />;
  if (error) return <>{error.message}</>;
  return (
    <section className="mt-5 p-5">
      <h1 className="text-2xl font-semibold ">Trending Now</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-5">
        {data?.articles.slice(0, 4)?.map((value: NewsCardType) => (
          <div
            key={value.title}
            onClick={() => handleData(value)}
            className="bg-white self-stretch rounded-lg cursor-pointer   overflow-hidden shadow">
            {/*  eslint-disable  */}
            <img
              src={value.urlToImage}
              alt={value.title}
              width={500}
              height={300}
              className="w-full h-4/6 object-cover"
            />
            <div className="p-3 flex  flex-col gap-2">
              <h1 className="sm:text-base text-sm font-semibold text-black">
                {value.title}
              </h1>
              <div className="flex items-center justify-between sm:text-sm text-xs text-light-black ">
                <p className="flex  text-xs items-center gap-1">
                  <CiTimer />
                  {formatDateTime(value.publishedAt)}
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
