"use client";
import { getNewsByCategory, getSearchedNews } from "@/api-functions/newsApi";
import ArticleModel from "@/components/ArticleModel";
import NewsCard from "@/components/NewsCard";
import Pagination from "@/components/Pagination";
import SmallLoader from "@/components/SmallLoader";
import ToogleButton from "@/components/ToogleButton";
import { buttonCategory } from "@/data/NewsData";
import { NewsCardType } from "@/types/newsCardType";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// news page to show the results according to the search and the category
const NewsClient = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [newsData, setNewsData] = useState<NewsCardType>({
    content: "",
    title: "",
    description: "",
    publishedAt: "",
    author: "",
    url: "",
  });
  const [category, setCategory] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("all");
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const handleClick = (value: NewsCardType) => {
    setNewsData(value);
    setIsOpen(true);
  };
  function handleClose() {
    setIsOpen(false);
  }
  // get the data
  const { isLoading, data, error } = useQuery({
    queryKey: ["searchNews", searchInput, selectedPage, category],
    queryFn: () => {
      if (searchInput !== "all")
        return getSearchedNews({ query: searchInput, page: selectedPage });
      else
        return category
          ? getNewsByCategory({ category: category })
          : getSearchedNews({ query: searchInput, page: selectedPage });
    },
  });
  // if (isLoading) return "loading....";
  const totalResults = data?.totalResults;
  const totalPages = totalResults / 10;
  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center font-bold text-light-black text-xl">
        {error.message}
      </div>
    );
  return (
    <section className="p-5 bg-gray-50">
      {/* ______________________ */}
      {/* toogle button and input search */}
      <div className="flex items-center flex-wrap  gap-3">
        <ToogleButton btnData={buttonCategory} setBtn={setCategory} />
        <div className="ml-auto flex sm:flex-[0] flex-1 items-center px-2 py-1 rounded border border-gray-300">
          <input
            type="text"
            className="flex-1 bg-transparent focus:outline-none text-light-black"
            placeholder="search..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <FaSearch className="text-gray-300" />
        </div>
      </div>
      {/* show the articles in the cards */}
      {isLoading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <SmallLoader />
        </div>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 mt-5">
            {data.articles.map((value: NewsCardType, index: number) => (
              <div
                onClick={() => handleClick(value)}
                key={index + 33}
                className="self-stretch flex flex-col">
                <NewsCard data={value} />
              </div>
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            selectedPage={selectedPage}
            onChangePage={setSelectedPage}
          />
          <ArticleModel open={isOpen} setOpen={handleClose} data={newsData} />
        </>
      )}
    </section>
  );
};

export default NewsClient;
