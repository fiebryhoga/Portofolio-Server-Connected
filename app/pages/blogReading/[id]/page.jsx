"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";

const BlogReading = () => {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/blogs/${id}`);
        if (!res.ok) {
          throw new Error("Blog not found");
        }
        const data = await res.json();
        setBlog(data);
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
    <div
      className="flex flex-col min-h-screen w-full gap-4 py-12 px-28 bg-[#060911] scroll-smooth"
      style={{ transition: "scroll-behavior 0.5s ease-in-out" }}
    >
      <button onClick={() => router.back()}>
        <GoChevronLeft size={25} color="white" />
      </button>
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-white">{blog.judul}</h1>
        <div className="text-white text-opacity-80 text-sm mb-4">
          {blog.penulis} - {blog.tanggal}
        </div>
        <div className="flex flex-row w-full gap-12">
          <div className="w-full flex flex-col">
            {blog.contents.map((subisi) => (
              <div
                key={subisi.id}
                className="mb-6 text-white"
                id={`subisi-${subisi.id}`}
              >
                <h2 className="text-2xl font-medium mb-2">{subisi.judulsub}</h2>
                <div
                  className="leading-6 flex flex-col gap-4 tracking-wide"
                  dangerouslySetInnerHTML={{ __html: subisi.materi }}
                ></div>
              </div>
            ))}
          </div>
          <div className="w-1/6 min-h-8">
            <div className="fixed">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogReading;
