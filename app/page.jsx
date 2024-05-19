"use client";

import Navbar from "./components/Navbar";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Page/home/page";
import About from "./Page/about/page";
import Blog from "./Page/blog/page";
// import About from "@/app/Pages/About/page";

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="bg-[#060911]">
      {/* <Navbar /> */}
      <div className="flex flex-col">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="blog">
          <Blog />
        </div>
        <div className="h-screen">hahaha</div>
        
      </div>
    </main>
  );
};

export default Page;
