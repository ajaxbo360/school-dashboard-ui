import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center ring-[1.5px] ring-gray-300 rounded-full gap-3 text-xs px-2">
        <Image width={12} height={12} src="/search.png" alt="serach" />
        <input
          name="search"
          placeholder="Search...."
          type="text"
          className="p-2 bg-transparent w-[200px] outline-none"
        />
      </div>
      {/* ICCONS AND USERS */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer relative">
          <Image src="/announcement.png" alt="message" width={20} height={20} />
          <div className="absolute -top-3 -right-3 flex justify-center items-center bg-purple-500 text-white rounded-full text-xs w-5 h-5">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Mike Ajax</span>
          <span className="text-[10px] text-right text-gray-500">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
