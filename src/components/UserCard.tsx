import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-Purple even:bg-Yellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="bg-white w-[90px] px-2 py-1 rounded-full text-green-600 text-center ">
          2024/05
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="my-4 text-2xl font-semibold">2345</h1>
      <h2 className="capitalize font-medium text-sm text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
