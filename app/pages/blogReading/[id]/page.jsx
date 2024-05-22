"use client";
import React from "react";
import { useParams } from "next/navigation";
import blogs from "@/app/data/blog";

const BlogReading = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.judul}</h1>
      <div className="text-gray-500 mb-4">
        {blog.penulis} - {blog.tanggal}
      </div>
      <div dangerouslySetInnerHTML={{ __html: blog.isi }}></div>
    </div>
  );
};

export default BlogReading;
