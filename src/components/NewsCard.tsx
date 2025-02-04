import React from "react";

const NewsCard = ({ data }) => {
  return (
    <div className="rounded-md shadow overflow-hidden bg-white">
      <img src={data.urlToImage} alt="" />
      <div className="p-3">
        <div className="flex items-center gap-10">
          {/* <button className="bg-[#DBEAFE] rounded-md text-xs px-2 py-1 font-semibold text-black">
            Technology
          </button> */}
          <p className="text-xs text-light-black">{data.publishedAt}</p>
        </div>
        <h1 className="text-lg text-black font-semibold leading-[1.2] mt-2">
          {data.title}
        </h1>
        <p className="text-sm text-light-black">{data.description}</p>
        <div className="flex justify-between mt-2">
          <p className="text-sm text-light-black">By {data.author}</p>
          <p className="text-light-black font-semibold text-sm">Read more →</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
