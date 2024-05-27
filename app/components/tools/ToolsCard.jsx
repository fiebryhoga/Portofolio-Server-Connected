/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const ToolsCard = ({ tool }) => {
  return (
    <Link
      href={tool.link}
      className="py-4 pl-[40px] h-20 xl:w-full flex justify-start items-center border rounded-lg border-gray-200 border-opacity-60 flex-row gap-4
      hover:bg-white hover:transition-all hover:duration-300 transition-all duration-500 text-base text-white text-opacity-80 font-medium hover:text-black tracking-wide"
    >
      <img className="w-9" src={tool.image} alt={tool.nama} />
      <p className="">{tool.nama}</p>
    </Link>
  );
};

export default ToolsCard;
