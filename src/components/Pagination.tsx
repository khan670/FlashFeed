"use client"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({ totalPages, selectedPage, onChangePage }: any) => {
  const handlePageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      onChangePage(page);
    }
  };

  const renderPages = () => {
    const pages = [];
    let i = 1;
    while (i <= totalPages) {
      if (
        i <= 3 || //the first three pages
        i >= totalPages - 2 || //the last three pages
        (i >= selectedPage - 1 && i <= selectedPage + 1)
      ) {
        //the selectedPage, the page before and after
        pages.push(i);
        i++;
      } else {
        //any other page should be represented by ...
        pages.push("...");
        //jump to the next page to be linked in the navigation
        i = i < selectedPage ? selectedPage - 1 : totalPages - 2;
      }
    }
    return pages.map((page, index) => {
      const isActive = page === selectedPage;
      const isDots = page === "...";

      return (
        <button
          key={index+54389}
          className={`px-2 sm:px-3 py-1 text-sm rounded-md ${
            isActive ? "bg-cyan-500 text-white" : "bg-white hover:bg-gray-200"
          } ${isDots ? "pointer-events-none" : ""}`}
          disabled={isDots}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-3">
      <button
        className={`rounded-md px-2 sm:px-4 py-2 ${
          selectedPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "bg-white hover:bg-gray-200"
        }`}
        disabled={selectedPage === 1}
        onClick={() => handlePageChange(selectedPage - 1)}
      >
        <div className="flex items-center gap-3 text-sm">
          <BsArrowLeft color="cyan" size="1.3rem" className="font-[700]" />
          Prev
        </div>
      </button>
      {renderPages()}
      <button
        className={`rounded-md px-4 py-2 ${
          selectedPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "bg-white hover:bg-gray-200"
        }`}
        disabled={selectedPage === totalPages}
        onClick={() => handlePageChange(selectedPage + 1)}
      >
        <div className="flex items-center gap-3 text-sm">
          Next <BsArrowRight color="cyan" size="1.3rem" />
        </div>
      </button>
    </div>
  );
};

export default Pagination;