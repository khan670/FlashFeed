import React from "react";

const NewsCard = () => {
  return (
    <div className="rounded-md shadow overflow-hidden bg-white">
      <img
        src="https://cdn.vox-cdn.com/thumbor/W_lGO8eNlUcEjBmUJg7KMYgT8-c=/0x0:2040x1360/1200x628/filters:focal(1081x561:1082x562)/cdn.vox-cdn.com/uploads/chorus_asset/file/25531809/STK175_DONALD_TRUMP_CVIRGINIA_C.jpg"
        alt=""
      />
      <div className="p-3">
        <div className="flex items-center gap-10">
          <button className="bg-[#DBEAFE] rounded-md text-xs px-2 py-1 font-semibold text-black">
            Technology
          </button>
          <p className="text-xs text-light-black">2 hours ago</p>
        </div>
        <h1 className="text-lg text-black font-semibold leading-[1.2] mt-2">
          AI Revolution: How Machine Learning is Transforming Industries
        </h1>
        <p className="text-sm text-light-black">
          Artificial Intelligence continues to reshape various sectors, from
          healthcare to finance. Latest developments show promising results in
          improving efficiency and decision-making processes.
        </p>
        <div className="flex justify-between mt-2">
          <p className="text-sm text-light-black">By TechNews Daily</p>
          <p className="text-light-black font-semibold text-sm">Read more →</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
