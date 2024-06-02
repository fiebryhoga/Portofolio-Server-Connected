"use client";

// import Navbar from "./components/layout/Navbar";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home/page";
import About from "./pages/about/page";
import Blog from "./pages/blog/page";
import Project from "./pages/project/page";
import Tools from "./pages/tools/page";
import NavbarBox from "./components/layout/NavbarBox";
import Footer from "./components/layout/Footer";

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="bg-[#060911]">
      <NavbarBox/>
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
        <div id="project">
          <Project />
        </div>
        <div id="tools">
          <Tools />
        </div>
               
      </div>
      <Footer />
    </main>
  );
};

export default Page;
