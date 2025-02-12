"use client";
import { getHeadline, getNewsByCategory, getSearchedNews } from "@/api-functions/newsApi";
import ArticleModel from "@/components/ArticleModel";
import Model from "@/components/Model";
import NewsCard from "@/components/NewsCard";
import Pagination from "@/components/Pagination";
import ToogleButton from "@/components/ToogleButton";
import { buttonCategory } from "@/data/NewsData";
import { NewsCardType } from "@/types/newsCardType";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// news page to show the results according to the search and the category
const News = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [newsData,setNewsData]=useState({
    content: "",
    title: "",
    description: "",
    publishedAt: "",
    author: "",
    url: ""
})
  const [category,setCategory]=useState("");
  const [searchInput,setSearchInput]=useState<string>("all");
  const [selectedPage,setSelectedPage]=useState(1)
  const handleClick=(value)=>{
    setNewsData(value)
    setIsOpen(true)
  }
  function handleClose(){
    setIsOpen(false)
  }
  // get the data 
  const { isLoading, data, error } = useQuery({
    queryKey: ["searchNews",searchInput,selectedPage,category],
    queryFn:()=>category?getNewsByCategory({category:category}):getSearchedNews({query:searchInput,page:selectedPage}),
  });
  // if (isLoading) return "loading....";
  const totalResults=data?.totalResults
  const totalPages=totalResults/10
  if (error) return <>{error.message}</>;
  return (
    <section className="p-5 bg-gray-50">
      {/* toogle button and input search */}
      <div className="flex items-center gap-3">
        <ToogleButton btnData={buttonCategory} setBtn={setCategory}  />
        <div className="ml-auto flex items-center px-2 py-1 rounded border border-gray-300">
          <input type="text" className="flex-1 bg-transparent focus:outline-none text-light-black" placeholder="search..." onChange={(e)=>setSearchInput(e.target.value)} />
          <FaSearch className="text-gray-300" />
        </div>
      </div>
      {/* show the articles in the cards */}
      {isLoading? "loading":<>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {data.articles.map((value:NewsCardType, index:number) => (
          <div onClick={()=>handleClick(value)}>
          <NewsCard key={index+33} data={value} />
          </div>
        ))}
      </div>
      <Pagination totalPages={totalPages} selectedPage={selectedPage} onChangePage={setSelectedPage}  />
      <ArticleModel open={isOpen} setOpen={handleClose} data={newsData} />
      </>}
    </section>
  );
};

export default News;
