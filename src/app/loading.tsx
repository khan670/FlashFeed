import SmallLoader from "@/components/SmallLoader";
import React from "react";

const Loading = () => {
  return (
    <div className="bg-white/20 absolute top-0 left-0 h-screen flex items-center justify-center">
      <SmallLoader />
    </div>
  );
};

export default Loading;
