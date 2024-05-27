/* eslint-disable @next/next/no-img-element */
import React from "react";

import "aos/dist/aos.css";
import Link from "next/link";

const ToolsCard = ({ tool }) => {


  return (
    <Link
      href={tool.link}
      className="py-4 md:pl-[40px] h-24 md:h-20 xl:w-full flex justify-center md:justify-start items-center border rounded-lg border-gray-200 border-opacity-60 md:flex-row flex-col gap-1 md:gap-4
      hover:bg-white hover:transition-all hover:duration-300 transition-all duration-500 text-sm md:text-base text-white text-opacity-80 font-medium hover:text-black tracking-wide"
      data-aos="flip-down"
      data-aos-duration="1000"
    >
      <img className="w-9" src={tool.image} alt={tool.nama} />
      <p className="">{tool.nama}</p>
    </Link>
  );
};

export default ToolsCard;
