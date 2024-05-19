/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import blogs from "@/app/data/blog";

const Blog = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);
  const [showMore, setShowMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleShowMore = () => {
    setVisibleBlogs(visibleBlogs + 4);
    setShowMore(visibleBlogs + 4 < blogs.length);
  };

  const toggleHide = () => {
    setVisibleBlogs(4);
    setShowMore(true);
    setSearchTerm("");
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
    return text;
  };

  return (
    <div className="h-full flex flex-col">
      <svg
        className="z-20 top-0 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#329f9a"
          fillOpacity="0.2"
          d="M0,256L17.1,224C34.3,192,69,128,103,101.3C137.1,75,171,85,206,112C240,139,274,181,309,192C342.9,203,377,181,411,160C445.7,139,480,117,514,101.3C548.6,85,583,75,617,85.3C651.4,96,686,128,720,133.3C754.3,139,789,117,823,101.3C857.1,85,891,75,926,106.7C960,139,994,213,1029,250.7C1062.9,288,1097,288,1131,256C1165.7,224,1200,160,1234,154.7C1268.6,149,1303,203,1337,234.7C1371.4,267,1406,277,1423,282.7L1440,288L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
        ></path>
      </svg>

      <Header>Blog</Header>

      <div className="flex flex-col px-6 pt-6 gap-6">
        <input
          className="w-full border border-[#b2b8b7] bg-transparent py-2 px-6 rounded-lg outline-none text-[#b2b8b7] tracking-wider placeholder:tracking-wider"
          placeholder="Search Here"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
          <div key={blog.id} className="flex flex-col w-full">
            <div className="flex flex-row w-full min-h-28 rounded-xl gap-3">
              <div className="flex flex-col w-full">
                <p className="text-white text-[10px] font-medium">
                  {blog.penulis},{" "}
                  {new Date(blog.tanggal).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-white text-sm font-semibold mt-3">
                  {truncateText(blog.judul, 5)}
                </h3>
                <p className="text-white text-xs font-medium mt-2">
                  {truncateText(blog.deskripsi, 8)}
                </p>
              </div>
              <div className="h-full w-40 flex items-end">
                <img
                  src={blog.image}
                  alt={blog.judul}
                  className="h-24 w-full rounded-lg object-cover"
                />
              </div>
            </div>
            <hr className="text-white border-[0.1px] mt-2" />
          </div>
        ))}

        <div className="flex flex-row w-full justify-center ietms-center gap-2">
          {blogs.length > visibleBlogs && showMore && (
            <button
              className="text-[#329f9a] border border-[#329f9a] rounded-lg py-2 px-4 mt-4 self-center"
              onClick={toggleShowMore}
            >
              See More
            </button>
          )}

          {visibleBlogs > 4 && (
            <button
              className="text-[#329f9a] border border-[#329f9a] rounded-lg py-2 px-4 mt-4 self-center"
              onClick={toggleHide}
            >
              Hide
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
