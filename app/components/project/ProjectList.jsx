import React from "react";

import ProjectCard from "./ProjectCard";
import project from "@/app/data/project";
import useWindowSize from "@/app/hooks/useWindowSize";

const ProjectList = () => {


  const size = useWindowSize();

  const getAosData = (index) => {
    if (size.width < 768) {
      return {
        "data-aos": "fade-up",
        "data-aos-duration": "1000",
      };
    } else {
      return {
        "data-aos": index % 2 === 0 ? "zoom-in-right" : "zoom-in-left",
        "data-aos-duration": "1000",
      };
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        {project.map((project, index) => (
          <div key={project.id} {...getAosData(index)}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
