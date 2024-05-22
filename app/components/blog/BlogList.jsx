import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs, showAllCards }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        {blogs.slice(0, showAllCards ? blogs.length : 6).map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            penulis={blog.penulis}
            tanggal={blog.tanggal}
            judul={blog.judul}
            deskripsi={blog.deskripsi}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;