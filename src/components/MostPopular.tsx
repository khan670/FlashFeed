"use client";
import { getSearchedNews } from "@/api-functions/newsApi";
import { NewsCardType } from "@/types/newsCardType";
import React, { useEffect, useState } from "react";
import SmallLoader from "./SmallLoader";

const MostPopular = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [data, setData] = useState<NewsCardType[] | any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function getPopularResults() {
      setIsLoading(true);
      try {
        const response = await getSearchedNews({ query: "popular", page: 1 });
        if (isMounted) {
          setData(response);
        }
      } catch (error) {
        console.error("Error fetching most popular news:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    getPopularResults();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) return <SmallLoader />;

  if (!data || !data.articles || data.articles.length === 0) {
    return <p>No popular news available.</p>;
  }

  return (
    <div className="p-4 bg-white rounded-md">
      <h1 className="text-lg font-semibold text-light-black">Most Popular</h1>
      {data.articles.slice(0, 4).map((value: NewsCardType, index: number) => (
        <div
          key={value.title || index}
          className="flex items-center gap-3 mt-3">
          <h1 className="text-xl font-semibold">0{index + 1}</h1>
          <div>
            <h1 className="text-base font-semibold text-light-black ">
              {value.title}
            </h1>
            <p className="text-sm text-light-black">
              {value.author || "Unknown"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopular;
