import React from "react";
import BlogCard from "./BlogCard";
import useWindowSize from "@/app/hooks/useWindowSize";

const BlogList = ({ blogs, showAllCards, enableAos }) => {
  const size = useWindowSize();

  const getAosData = (index) => {
    if (!enableAos) return {};
    if (size.width < 768) {
      return {
        "data-aos": "zoom-in-up",
        "data-aos-duration": "1000",
        "data-aos-anchor-placement": "top-center",
      };
    } else {
      return {
        "data-aos": index % 2 === 0 ? "zoom-in-right" : "zoom-in-left",
        "data-aos-duration": "1000",
        "data-aos-anchor-placement": "top-center",
      };
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        {blogs.slice(0, showAllCards ? blogs.length : 6).map((blog, index) => (
          <div key={blog.id} {...getAosData(index)}>
            <BlogCard
              id={blog.id}
              penulis={blog.penulis}
              tanggal={blog.tanggal}
              judul={blog.judul}
              deskripsi={blog.deskripsi}
              image={blog.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
