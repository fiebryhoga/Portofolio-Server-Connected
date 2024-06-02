"use client";

import React, { useState, useEffect } from "react";
import Header from "@/app/components/layout/Header";
import { GoChevronLeft } from "react-icons/go";
import Link from "next/link";
import ProjectList from "@/app/components/project/ProjectList";

const Page = () => {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/projects");
        const data = await response.json();
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) =>
        project.nama.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, projects]);

  return (
    <div className="flex flex-col min-h-screen w-full gap-4 py-12 bg-[#060911] lg:px-0 xl:px-12">
      <Link href="/#blog">
        <GoChevronLeft
          className="md:ml-12 lg:ml-28 ml-6 sm:ml-12"
          size={25}
          color="white"
        />
      </Link>
      <Header>Project Dashboard</Header>
      <div className="w-full md:px-12 sm:px-12 px-6 lg:px-28 mt-8 gap-10 flex flex-col">
        <input
          className="w-full border-opacity-60 border border-[#b2b8b7] bg-transparent py-2 px-6 rounded-lg outline-none text-[#b2b8b7] tracking-wider placeholder:tracking-wider"
          placeholder="Search Here"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
};

export default Page;
