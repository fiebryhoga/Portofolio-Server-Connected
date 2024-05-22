/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const BlogCard = ({ id, penulis, tanggal, judul, deskripsi, image }) => {
  const router = useRouter(); // Initialize useRouter

  const handleClick = () => {
    router.push(`/pages/blogReading/${id}`); // Redirect to the blog reading page with the blog id
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-row w-full border-[0.1px] border-white border-opacity-20 h-40 py-4 px-8 justify-between rounded-lg bg-[#080F17] lg:gap-4 cursor-pointer" // Add cursor-pointer to indicate it's clickable
    >
      <div className="flex flex-col gap-2 text-xs w-3/4">
        <p className="text-white text-opacity-40">
          {penulis}, {tanggal}
        </p>
        <h4 className="text-xl font-bold text-white">{judul}</h4>
        <p className="text-sm font-normal text-white text-opacity-80 tracking-wide">
          {deskripsi}
        </p>
      </div>
      <div className="w-32 rounded-lg">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={image}
          alt={judul}
        />
      </div>
    </div>
  );
};

export default BlogCard;
