/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
};

const BlogCard = ({ id, penulis, tanggal, judul, deskripsi, image }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pages/blogReading/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-row w-full border-[0.1px] md:h-40 border-white border-opacity-20 lg:h-40 py-4 px-8 justify-between rounded-lg bg-[#080F17] lg:gap-4 cursor-pointer"
    >
      <div className="flex flex-col gap-2 text-xs w-3/4">
        <p className="text-white text-opacity-40 lg:text-sm text-xs">
          {penulis}, {tanggal}
        </p>
        <h4 className="text-base font-bold text-white md:text-base">
          {truncateText(judul, 5)}
        </h4>
        <p className="lg:text-sm font-normal text-white text-opacity-80 tracking-wide md:text-xs">
          {truncateText(deskripsi, 8)}
        </p>
      </div>
      <div className="w-32 rounded-lg h-32">
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
