"use client";

import React, { useState, useEffect } from "react";
import BlogList from "@/app/components/blog/BlogList";
import Header from "@/app/components/layout/Header";
import { GoChevronLeft } from "react-icons/go";
import Link from "next/link";

const BlogDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllCards, setShowAllCards] = useState(true);
  const [prevShowAllCards, setPrevShowAllCards] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/blogs");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    setPrevShowAllCards(showAllCards);
  }, [showAllCards]);

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
        <GoChevronLeft className=" md:ml-12 lg:ml-28 ml-6 sm:ml-12" size={25} color="white" />
      </Link>
      <Header>Blog Dashboard</Header>
      <div className="w-full md:px-12 sm:px-12 px-6 lg:px-28 mt-8 gap-10 flex flex-col">
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
        <BlogList blogs={filteredBlogs} showAllCards={true} />
        
      </div>
    </div>
  );
};

export default BlogDashboard;
