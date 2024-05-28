/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import ImageContainer from "@/app/components/blog/ImageContainer";
import blogsData from "@/app/data/blog"; // pastikan import dari lokasi yang benar

const BlogReading = () => {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = () => {
      try {
        const blog = blogsData.find((blog) => blog.id === parseInt(id));
        if (!blog) {
          throw new Error("Blog not found");
        }
        setBlog(blog);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlog();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen w-full pt-8 pb-10 lg:py-12 px-6 xl:px-28 bg-[#060911]">
      <button onClick={() => router.back()} className="mb-4">
        <GoChevronLeft size={25} color="white" />
      </button>
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-lg xl:text-3xl text-opacity-90 font-bold tracking-wider text-[#329f9a]">
          {blog.judul}
        </h1>
        <div className="text-white text-opacity-60 font-medium text-xs mb-4">
          {blog.penulis} - {blog.tanggal}
        </div>
        <ImageContainer src={blog.image} alt="AI - Image" />

        <div className="flex flex-row w-full">
          <div className="w-full flex flex-col gap-10">
            {blog.contents.map((subisi) => (
              <div
                key={subisi.id}
                className="text-white flex flex-col gap-3"
                id={`subisi-${subisi.id}`}
              >
                <h2 className="text-base font-semibold mb-2 text-[#329f9a]">
                  {subisi.judulsub}
                </h2>
                <div
                  className="leading-6 flex flex-col gap-4 tracking-wide text-xs text-justify text-opacity-80 text-white"
                  dangerouslySetInnerHTML={{ __html: subisi.materi }}
                ></div>
              </div>
            ))}
          </div>
          {/* <div className="w-1/4">
            <div className="sticky top-12">
              <h4 className="text-white text-lg font-semibold">On This Page</h4>
              <div className="flex flex-col gap-2 mt-4">
                {blog.contents.map((subisi) => (
                  <Link
                    href={`#subisi-${subisi.id}`}
                    key={subisi.id}
                    legacyBehavior
                  >
                    <a className="text-white font-medium text-sm hover:text-[#329f9a]">
                      {subisi.judulsub}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogReading;
