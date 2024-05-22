"use client";

import React, { useState } from "react";
import BlogList from "@/app/components/blog/BlogList";
import Header from "@/app/components/layout/Header";
import { GoChevronLeft } from "react-icons/go";
import Link from "next/link";
import blogs from "@/app/data/blog";

const BlogDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllCards, setShowAllCards] = useState(false);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);

    if (inputValue === "") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) =>
        blog.judul.toLowerCase().includes(inputValue)
      );
      setFilteredBlogs(filtered);
    }
  };

  const handleSeeMoreClick = () => {
    setShowAllCards(true);
  };

  const handleHideClick = () => {
    setShowAllCards(false);
  };

  return (
    <div className="flex flex-col min-h-screen w-full gap-4 py-12 bg-[#060911]">
      <Link href="/#blog">
        <GoChevronLeft className="ml-28" size={25} color="white" />
      </Link>
      <Header>Blog Dashboard</Header>
      <div className="w-full px-28 mt-8 gap-10 flex flex-col">
        <input
          className="w-full border-opacity-60 border border-[#b2b8b7] bg-transparent py-2 px-6 rounded-lg outline-none text-[#b2b8b7] tracking-wider placeholder:tracking-wider"
          placeholder="Search Here"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {searchTerm !== "" && filteredBlogs.length === 0 && (
          <p className="text-white">Tidak ada blog yang ditemukan</p>
        )}
        <BlogList blogs={filteredBlogs} showAllCards={showAllCards} />
        {searchTerm === "" && (
          <button
            className="text-[#329f9a] border border-[#329f9a] rounded-lg py-2 px-4 mt-4 self-center"
            onClick={showAllCards ? handleHideClick : handleSeeMoreClick}
          >
            {showAllCards ? "Hide" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogDashboard;
