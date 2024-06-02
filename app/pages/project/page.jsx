"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/layout/Header";
import ProjectList from "@/app/components/project/ProjectList";

const Project = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const navigateToProjectDashboard = () => {
    router.push("/pages/projectDashboard");
  };

  return (
    <div className="h-full flex flex-col mt-16 md:mt-12">
      <Header>Project</Header>
      <div className="flex flex-col px-6 sm:px-12 pt-12 gap-6 sm:gap-4 md:gap-8 lg:px-28">
        <ProjectList projects={projects} />
        <button
          className="text-[#329f9a] border border-[#329f9a] rounded-lg py-2 px-4 mt-4 self-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          onClick={navigateToProjectDashboard}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Project;
