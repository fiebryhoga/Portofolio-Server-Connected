import React from "react";
import ProjectCard from "./ProjectCard";
import project from "@/app/data/project";

const ProjectList = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        {project.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
