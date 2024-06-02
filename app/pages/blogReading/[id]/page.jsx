/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { GoChevronLeft } from "react-icons/go";
import ImageContainer from "@/app/components/blog/ImageContainer";
import CopyRight from "@/app/components/footer/CopyRight";

const BlogReading = () => {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [blogContents, setBlogContents] = useState([]);
  const [error, setError] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchBlogContents = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/blogContents?blog_id=${id}`
        );
        if (!response.ok) {
          throw new Error("Blog contents not found");
        }
        const data = await response.json();
        setBlogContents(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlog();
    fetchBlogContents();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen w-full pt-8 lg:py-12 px-6 sm:px-12 md:px-16 lg:px-16 xl:px-28 bg-[#060911]">
      <button onClick={() => router.back()} className="mb-4">
        <GoChevronLeft size={25} color="white" />
      </button>
      <div className="w-full flex flex-col gap-4 pb-10">
        <h1 className="text-lg sm:text-xl xl:text-3xl text-opacity-90 font-bold tracking-wider text-[#329f9a]">
          {blog.judul}
        </h1>
        <div className="text-white text-opacity-60 font-medium text-xs text-[14px] mb-4 md:text-base ">
          {blog.penulis} - {blog.tanggal}
        </div>
        <ImageContainer src={blog.image} alt="Blog Image" />

        <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-12 md:mt-12">
          {blogContents.map((subisi) => (
            <div
              key={subisi.id}
              className="text-white flex flex-col gap-3"
              ref={(el) => (contentRefs.current[subisi.id] = el)}
            >
              <h2 className="text-base font-semibold mb-2 text-[#329f9a] sm:text-lg">
                {subisi.judulsub}
              </h2>
              <div
                className="leading-6 flex flex-col gap-4 tracking-wide text-[13px] text-justify text-opacity-80 text-white"
                dangerouslySetInnerHTML={{ __html: subisi.materi }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <CopyRight>Written by Dimasfiebry 2024</CopyRight>
    </div>
  );
};

export default BlogReading;
