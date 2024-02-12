import { technologies } from "@/constants";
import Image from "next/image";

interface WindowProps {
  window: boolean;
}

const Windows: React.FC<WindowProps> = ({ window }) => {
  return (
    <div
      className={`w-[42svw] h-[85svh] flex items-center justify-center mx-auto ${
        window ? "translate-y-16 relative z-10" : "translate-y-[500rem]"
      } duration-200 `}
    >
      <div className="bg-[#222222] w-full h-full my-[4%] rounded-lg border-[1px] border-[#292929] backdrop-blur-xl bg-opacity-90">
        <form className="mt-4 mb-10 ml-10" action="">
          <img
            src="/search.png"
            className="translate-y-6 mx-4 w-4 h-4 invert"
            alt=""
          />
          <input
            className="w-[36svw] h-8 rounded-full text bg-[#222222] border-[1px] border-[#383838] text-white  placeholder:text-slate-400 block py-1 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything... "
            type="text"
          />
        </form>
        <p className="text-white my-6 pl-12 text-sm font-medium">Skills</p>
        <div className="w-full h-[20rem] mt-2 mx-4 ">
          {technologies.map((technology) => (
            <button className="w-24 h-20 rounded-md hover:bg-[#383636]">
              <Image
                className="object-contain mx-auto rounded-sm w-10 h-10"
                src={technology.icon}
                width={100}
                height={100}
                alt=""
              />
              <p className="text-white text-[0.75rem]">{technology.name}</p>
            </button>
          ))}
        </div>
        <div className="">
          <p className="text-white pl-12 font-medium text-sm my-2">Recommended</p>
          <div className="flex text-white my-6">
            <a
              className=" w-64 rounded-md ml-16 flex hover:bg-[#383636]"
              href="resume.pdf"
              target="_blank"
            >
              <Image
                src="/pdf.png"
                alt=""
                width={100}
                height={100}
                className="object-contain w-12 h-8 my-3"
              />
              <div className="ml-1 my-2 text-sm">
                <p className="">anshul badoni resume.pdf</p>
                <p className="text-slate-300">yesterday</p>
              </div>
            </a>
            <a
              className=" w-64 flex h-16 rounded-md hover:bg-[#383636]"
              href="https://github.com/AnshulBadoni"
              target="_blank"
            >
              <Image
                src="/github.png"
                alt=""
                width={100}
                height={100}
                className="object-contain w-14 h-10 ml-6 my-3"
              />
              <div className="ml-1 text-sm my-2">
                <p className="">Follow on Github</p>
                <p className=" text-slate-300">yesterday</p>
              </div>
            </a>
          </div>
          <div className="bg-[#1c1b1b] shadow-inner w-full h-14 rounded-b-md bottom-0 absolute">
            <div className="flex mx-16 py-3 text-white text-[0.75rem] w-36 h-full rounded-lg duration-150">
              <Image
                className=" rounded-full w-8 h-8 object-cover"
                src="/logo.svg"
                alt=""
                width={100}
                height={100}
              />
              <p className="mx-2 my-2">Anshul Badoni</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Windows;
