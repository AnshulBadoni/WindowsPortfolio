import Image from "next/image";
import { ProjectDetailProps } from "@/types";
import { TbBrandVscode } from "react-icons/tb";
import { FaShareFromSquare } from "react-icons/fa6";
import { Highlighter } from ".";

const ProjectDetail = ({
  image,
  name,
  detail,
  tags,
  source_link,
  source_code_link,
}: ProjectDetailProps) => {
  return (
    <div className="border-2 border-[#383838] w-full flex">
      <div className="w-[70%] h-full">
        <div className="flex mx-16">
          <a
            className="text-white w-36 my-16 h-24 hover:bg-[rgb(119,119,119)] rounded-md"
            href={source_link}
            target="_blank"
          >
            <TbBrandVscode className="text-white mx-auto mt-2" size={50} />
            <p className="mx-8">Project.exe</p>
          </a>
          <a
            className="text-white w-36 my-16 h-24 hover:bg-[#777777] rounded-md"
            href={source_code_link}
            target="_blank"
          >
            <TbBrandVscode className="text-white mx-auto mt-2" size={50} />
            <p className="mx-4  ">SourceCode.exe</p>
          </a>
        </div>
      </div>
      <div className="h-full w-[30%] ml-[69.5%] border-l-2 border-[#383838] absolute">
        <div className="bg-[#191919] h-64 flex item-center justify-center">
          <Image
            className="w-72 h-52 my-5"
            width={1000}
            height={1000}
            src={image}
            alt={name}
          />
        </div>
        <div className="text-white flex mx-5 my-5 ">
          <TbBrandVscode size={30} className="text-blue-500" />
          <h1 className="mx-4">{name}</h1>
        </div>
        <button className="flex my-5 mx-5 text-[0.75rem] text-white w-20 h-8 bg-[#777777] rounded-md">
          <FaShareFromSquare
            size={15}
            className="text-blue-500 ml-auto my-auto"
          />
          <span className="mx-auto my-auto">Share</span>
        </button>
        <span className="my-5 mx-5 text-sm text-white">Details</span>
        <p className="my-5 mx-5 text-sm text-white">{detail}</p>
        <div className="flex">
          {tags.map((tag) => (
            <Highlighter
              key={tag.name}
              title={tag.name}
              containerStyles={`text-center h-[2svh] text-xs font-bold duration-500 ${tag.color} mx-6`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
