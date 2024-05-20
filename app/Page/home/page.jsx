/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-position: center calc(100% - 25px);
  background-size: 100%;
  background-image: url("/assets/image/home/Background.png");
  background-opacity: 80%;
  position: relative;

  @media (min-width: 768px) {
    height: 120vh;
    background-size: 700px;
    background-position: right calc(100% - 60px);
  }
`;

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BackgroundDiv>
      <svg
        className="z-20 top-0 opacity-20 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#329f9a"
          fillOpacity="0.2"
          d="M0,256L17.1,224C34.3,192,69,128,103,101.3C137.1,75,171,85,206,112C240,139,274,181,309,192C342.9,203,377,181,411,160C445.7,139,480,117,514,101.3C548.6,85,583,75,617,85.3C651.4,96,686,128,720,133.3C754.3,139,789,117,823,101.3C857.1,85,891,75,926,106.7C960,139,994,213,1029,250.7C1062.9,288,1097,288,1131,256C1165.7,224,1200,160,1234,154.7C1268.6,149,1303,203,1337,234.7C1371.4,267,1406,277,1423,282.7L1440,288L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
        ></path>
      </svg>
      <div className="w-full flex flex-col md:flex-row mt-16 sm:mt-6 md:mt-16">
        <div className="px-6 sm:pl-12 sm:pr-72 md:px-12 md:pr-44 lg:px-28 w-full flex flex-col justify-center gap-2 lg:pb-44">
          <h3 className="py-4 text-sm sm:text-base font-semibold tracking-wider text-[#329f9a]">
            Hello There! I'm
          </h3>
          <h4 className="hidden text-white md:flex lg:hidden ">hahaha</h4>
          <h1 className="text-lg sm:text-xl font-semibold tracking-wider text-[#c3e7e5]">
            Dimas Fiebry Prayhoga Putra
          </h1>
          <h3 className="text-xs sm:text-sm font-medium tracking-wide text-[#c3e7e5]">
            Brawijaya University Student
          </h3>
          <p className="text-xs font-normal tracking-wide py-6 opacity-60 leading-5 text-justify md:pr-32 text-[#c3e7e5]">
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
        className="absolute bottom-0 z-0 right-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#080F17"
          fill-opacity="1"
          d="M0,96L21.8,106.7C43.6,117,87,139,131,128C174.5,117,218,75,262,80C305.5,85,349,139,393,154.7C436.4,171,480,149,524,165.3C567.3,181,611,235,655,218.7C698.2,203,742,117,785,122.7C829.1,128,873,224,916,229.3C960,235,1004,149,1047,96C1090.9,43,1135,21,1178,58.7C1221.8,96,1265,192,1309,192C1352.7,192,1396,96,1418,48L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </BackgroundDiv>
  );
};

export default Home;
