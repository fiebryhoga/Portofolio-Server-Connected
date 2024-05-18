/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-screen lg:pt-16 pt-36 flex flex-col">
      <div className="w-full flex flex-col md:flex-row">
        <div className="px-12 md:pl-20 lg:pl-28 w-full flex flex-col justify-center gap-2 lg:pb-44">
          <h3 className="py-4 text-sm font-semibold tracking-wider text-[#329f9a]">
            Hello There! I'm
          </h3>
          <h1 className="text-lg font-semibold tracking-wider text-[#c3e7e5]">
            Dimas Fiebry Prayhoga Putra
          </h1>
          <h3 className="text-xs font-medium tracking wide text-[#c3e7e5]">
            Brawijaya University Student
          </h3>
          <p className="text-xs font-normal tracking-wide py-6 opacity-60 leading-5 text-justify text-[#c3e7e5]">
            I am interested in a career as a frontend developer. I dream of
            coding while sipping coffee and enjoying the sunset. I will help you
            to make web or mobile application, I have good team work.
          </p>
          <button className="z-40 mt-0 py-2 text-sm rounded-full bg-[#329f9a] w-32 hover:bg-[#e9eded] hover:text-[#329f9a] transition-all ease-in-out duration-500">
            Contact Me
          </button>
        </div>
      </div>
      <svg
        className="absolute z-20 top-0 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#329f9a"
          fillOpacity="0.2"
          d="M0,256L17.1,224C34.3,192,69,128,103,101.3C137.1,75,171,85,206,112C240,139,274,181,309,192C342.9,203,377,181,411,160C445.7,139,480,117,514,101.3C548.6,85,583,75,617,85.3C651.4,96,686,128,720,133.3C754.3,139,789,117,823,101.3C857.1,85,891,75,926,106.7C960,139,994,213,1029,250.7C1062.9,288,1097,288,1131,256C1165.7,224,1200,160,1234,154.7C1268.6,149,1303,203,1337,234.7C1371.4,267,1406,277,1423,282.7L1440,288L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
        ></path>
      </svg>

      <img
        className="z-40 absolute w-full drop-shadow-sm opacity-50 object-fit bottom-0"
        src="/assets/image/home/Background.png"
        alt="Background"
      />
      <svg
        className="absolute z-0 bottom-0 right-0 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#329f9a"
          fillOpacity="0.2"
          d="M0,64L16,101.3C32,139,64,213,96,218.7C128,224,160,160,192,144C224,128,256,160,288,176C320,192,352,192,384,176C416,160,448,128,480,106.7C512,85,544,75,576,90.7C608,107,640,149,672,181.3C704,213,736,235,768,208C800,181,832,107,864,64C896,21,928,11,960,16C992,21,1024,43,1056,85.3C1088,128,1120,192,1152,192C1184,192,1216,128,1248,128C1280,128,1312,192,1344,181.3C1376,171,1408,85,1424,42.7L1440,0L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;
