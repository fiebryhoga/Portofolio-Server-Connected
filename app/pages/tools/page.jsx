"use client";

import React, { useState, useEffect } from "react";
import Header from "@/app/components/layout/Header";
import ToolsCard from "@/app/components/tools/ToolsCard";

const Tools = () => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [toolsData, setToolsData] = useState([]);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize(); // Check the screen size on initial render
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const responseTools = await fetch("http://localhost:8000/api/tools");
        const toolsData = await responseTools.json();
        setToolsData(toolsData);
      } catch (error) {
        console.error("Error fetching tools:", error);
      }
    };

    fetchTools();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleTools =
    isSmallScreen && !showAll ? toolsData.slice(0, 8) : toolsData;

  return (
    <div className="h-full flex flex-col mt-16 md:mt-12 pb-6">
      <Header>Technology And Tools</Header>
      <div className="lg:px-28 md:px-12 sm:px-12 px-6 mt-12 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {visibleTools.map((tool) => (
          <ToolsCard key={tool.id} tool={tool} />
        ))}
      </div>
      {isSmallScreen && (
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleShowAll}
            className="text-[#329f9a] border border-[#329f9a] rounded-lg py-2 px-4 mt-4 self-center"
            data-aos="zoom-up"
            data-aos-duration="1000"
          >
            {showAll ? "Hide" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Tools;
