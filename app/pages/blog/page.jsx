/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/layout/Header";
import BlogList from "@/app/components/blog/BlogList";
import blogsData from "@/app/data/blog"; // pastikan import dari lokasi yang benar

const Blog = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState(blogsData); // langsung set data dari blog.js
  const [error, setError] = useState(null);

  // Tidak perlu fetch data dari API, karena kita sudah memiliki data dari blogsData
  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  const navigateToBlogDashboard = () => {
    router.push("/pages/blogDashboard");
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

      <div className="flex flex-col px-6 sm:px-12 pt-12 gap-6 sm:gap-4 md:gap-8 lg:px-28">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <BlogList blogs={blogs.slice(0, 6)} showAllCards={false} />
        )}
        <button
          className="text-[#329f9a] border border-[#329f9a] rounded-lg py-2 px-4 mt-4 self-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          onClick={navigateToBlogDashboard}
        >
          Go to Blog Dashboard
        </button>
      </div>
    </div>
  );
};

export default Blog;
