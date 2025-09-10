import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto. flex md:flex items-center ring-[1.5px] ring-gray-300 rounded-full gap-3 text-xs px-2">
      <Image width={12} height={12} src="/search.png" alt="serach" />
      <input
        name="search"
        placeholder="Search...."
        type="text"
        className="p-2 bg-transparent w-[200px] outline-none"
      />
    </div>
  );
};

export default TableSearch;
