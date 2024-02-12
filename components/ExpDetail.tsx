import { FC } from "react";
import Image from "next/image";
import { Highlighter } from ".";

interface ExpDetailProps {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string;
}

const ExpDetail: FC<ExpDetailProps> = ({ title, company_name, icon, iconBg, date, points,}: ExpDetailProps) => {
  return (
    <div className="grid grid-rows-3 h-full grid-flow-col gap-4 text-white ">
      <div className="row-span-3 w-96">
        <Image className="mx-auto mt-40 rounded-md w-52" src={icon} alt="" height={100} width={100} />
        <h1 className="mx-28 mt-8 font-medium">{company_name}</h1>
      </div>
      <div className="col-span-2 my-20">
        <div className="my-16 mx-16">
        <h1 className="font-bold my-6 text-xl">Role : {title}</h1>
        <p>Duration : {date}</p>
        </div>
      </div>
      <div className="row-span-2 col-span-2 w-[50rem] my-20 ml-16">
          <p className="whitespace-pre-line">{points}</p>
      </div>
    </div>
  );
};

export default ExpDetail;
