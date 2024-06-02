/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  const { nama, gambar, deskripsi, link, tags = [] } = project; // Ensure tags is an array

  return (
    <Link
      href={link}
      passHref
      className="flex flex-col min-h-96 border-[0.1px] border-opacity-40 border-rounded-xl rounded-xl border-gray-100"
    >
      <div className="flex items-end rounded-t-xl h-56 sm:h-64 md:h-56 lg:h-64">
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={gambar}
          alt={nama}
        />
        <div className="absolute flex flex-wrap py-2 px-4 bg-opacity-30 gap-2">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="py-1 px-4 rounded-full text-white bg-gray-600 bg-opacity-60 text-[9px] font-semibold tracking-wide cursor-pointer"
            >
              {tag.nameTags}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-b-xl py-4 px-4 h-full">
        <h4 className="font-semibold text-white text-lg tracking-wide lg:text-xl">
          {nama}
        </h4>
        <p className="text-sm lg:text-base text-white text-opacity-80 tracking-wider mt-2">
          {deskripsi}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
