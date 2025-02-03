"use client";
import React from "react";
import { useCollapse } from "react-collapsed";
import { GoPlusCircle } from "react-icons/go";

const Faqs = ({
  content,
}: {
  content: { question: string; answer: string };
}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="mt-3">
      <h1
        className="text-light-black font-semibold flex items-center justify-between mb-1"
        {...getToggleProps()}
      >
        {content.question}
        <GoPlusCircle
          size={20}
          className={`transform ${
            isExpanded ? "rotate-45" : ""
          } transition-all duration-300`}
        />
      </h1>
      <hr />
      <p className="text-sm text-light-black mt-1" {...getCollapseProps()}>
        {content.answer}
      </p>
    </div>
  );
};

export default Faqs;
