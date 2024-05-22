import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs = [], showAllCards }) => {
  // Menambahkan nilai default untuk blogs
  const visibleBlogs = showAllCards ? blogs.length : 6;

  return (
    <div className="w-full flex flex-col">
      <div className="grid grid-cols-2 gap-8">
        {blogs.slice(0, visibleBlogs).map((blog) => (
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