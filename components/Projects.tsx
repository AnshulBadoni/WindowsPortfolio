import { useState } from "react";
import { projects } from "@/constants";
import Image, {StaticImageData} from "next/image";
import ProjectDetail from "./ProjectDetail";

interface Project {
  image: string | StaticImageData;
  name: string;
  description: string;
  tags: string;
  source_link: string;
  source_code_link: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="absolute bottom-16 left-20 w-[90%] h-[90%] border-2 bg-[#222222] border-[#383838] ">
      <div>
        { !selectedProject && (<div><h1 className="h-10 mx-24  mt-10 font-bold text-3xl text-white">
          Projects
        </h1>
        <div className="my-10 mx-24 w-full flex flex-wrap text-white">
          {projects.map((project) => (
            <div key={project.name} className="h-52 w-64 ">
              <button
                onClick={() => handleProjectClick(project)}
              >
                <Image
                  src={project.image}
                  alt=""
                  width={500}
                  height={500}
                  className="w-48 h-36 mt-2 mx-auto rounded-lg object-cover"
                />
                <p className="my-2 text-center text-sm">{project.name}</p>
              </button>
            </div>
          ))}
        </div></div>)}
      </div>
   
      {selectedProject && (
        <ProjectDetail
          image={selectedProject.image}
          name={selectedProject.name}
          detail={selectedProject.description}
          tags={selectedProject.tags}
          source_link={selectedProject.source_link}
          source_code_link={selectedProject.source_code_link}
        />
      )}
    </div>
  );
};

export default Projects;
