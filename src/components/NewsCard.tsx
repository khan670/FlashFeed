import { formatDateTime } from "@/helpers/formateDate";
import { NewsCardType } from "@/types/newsCardType";
import React from "react";

const NewsCard = ({ data }: { data: NewsCardType }) => {
  return (
    <div className="rounded-md shadow cursor-pointer items-stretch overflow-hidden bg-white">
      {/* eslint-disable  */}
      <img
        src={data.urlToImage}
        alt=""
        height={300}
        width={500}
        className="w-full  "
      />
      <div className="p-3">
        <div className="flex items-center gap-10">
          <p className="text-xs text-light-black">
            {formatDateTime(data.publishedAt)}
          </p>
        </div>
        <h1 className="sm:text-lg text-base text-black font-semibold leading-[1.2] mt-2">
          {data.title}
        </h1>
        <p className="sm:text-sm text-xs text-light-black">
          {data.description}
        </p>
        <div className="flex justify-between mt-2">
          <p className="sm:text-sm text-xs text-light-black">
            By {data.author}
          </p>
          <p className="text-light-black font-semibold text-sm">Read more →</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
