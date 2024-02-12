import Image, { StaticImageData } from "next/image";
import { experiences } from "@/constants";
import { useState } from "react";
import ExpDetail from "./ExpDetail";

  interface Experience {
    title: string;
    company_name: string;
    icon: string | StaticImageData;
    iconBg: string;
    date: string;
    points: string | string[];
  }

  const Exp = () => {
    const [selectedExp, setSelectedExp] = useState<Experience | null>(null);


    const handleExpClick=(experience :Experience) =>{
      setSelectedExp(experience);
    }
    return (
      <div className="absolute bottom-16 left-20 w-[90%] h-[90%] border-2 bg-[#222222] border-[#383838] ">
        <div>
        { !selectedExp && ( <div>
            <h1 className="h-10 mx-24  mt-10 font-bold text-3xl text-white">
              Work Experince
            </h1>
            <div className="my-10 mx-24 w-full flex flex-wrap text-white">
              {experiences.map((experience) => (
                <div key="" className="h-52 w-64 ">
                  <button onClick={() => handleExpClick(experience)}>
                    <Image
                      src={experience.icon}
                      alt=""
                      width={500}
                      height={500}
                      className="w-48 h-36 mt-2 mx-auto rounded-lg object-cover"
                    />
                    <p className="my-2 text-center text-sm">
                      {experience.title}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
        {selectedExp && (
          <ExpDetail
            title={selectedExp.title}
            company_name={selectedExp.company_name}
            icon={selectedExp.icon}
            iconBg={selectedExp.iconBg}
            date={selectedExp.date}
            points={selectedExp.points}
          />
        )}
      </div>
    );
  };

  export default Exp;
