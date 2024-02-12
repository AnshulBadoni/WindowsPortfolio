import { SiWindows11 } from "react-icons/si";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

interface NavProps {
  window: boolean;
  onButtonClick: () => void;
  isCameraActive: boolean;
  setIsCameraActive: React.Dispatch<React.SetStateAction<boolean>>;
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  settings : boolean;
  onButtonSetting: () => void;
  projects : boolean,
  onButtonProject : () => void;
  exp : boolean,
  onButtonExp : () => void;
}

const Nav: React.FC<NavProps> = ({ window, onButtonClick, isCameraActive, setIsCameraActive, videoRef, settings, onButtonSetting, projects, onButtonProject, onButtonExp }) => {
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const handleCameraClick = async () => {
    try {
      if (isCameraActive) {
        // Stop the camera stream if it was active
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
          setStream(null);
        }
      } else {
        // Start the camera stream if it was not active
        const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(newStream);
      }
  
      // Toggle the camera state
      setIsCameraActive(!isCameraActive);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  return (
    <div className="bg-[#222222] shadow-xl border-t-[1px] border-[#383838] flex z-50">
      <div className="flex flex-col mx-6 my-1 text-white">
        <span className="text-[0.8rem]">18°</span>
        <span className="text-[0.75rem]">Sunny</span>
      </div>
      <div className="flex mx-auto">
        <button onClick={onButtonClick} className="hover:bg-[#383636] w-12 rounded-md">
          <SiWindows11 className="text-blue-400 my-2 rounded-sm mx-auto" size={25} />
        </button>
        <button onClick={onButtonClick} className="">
          <div
            className={`rounded-full translate-y-[0.4rem]  text-[0.80rem] text-white w-28 h-8 block py-1 pl-3 shadow-sm ${
              window ? "bg-gradient-to-b from-cyan-500 to-blue-500 " : "bg-[#383838]"
            }`}
          >
            <h1 className="pt-[0.15rem]">Search</h1>
          </div>
          <Image
            className="z-10 -translate-y-4 ml-6 invert"
            src="/search.png"
            width={12}
            height={12}
            alt="search"
          />
        </button>
        <button className="hover:bg-[#383636] w-12 rounded-md">
          <Image
            className=" object-cover my-2 rounded-sm mx-auto w-6 h-6 shadow-xl"
            src="/notepad.png"
            alt=""
            height={100}
            width={100}
          />
        </button>
        <button onClick={handleCameraClick} className="hover:bg-[#383636] w-12 rounded-md">
          <Image
            className=" object-cover my-2 rounded-sm mx-auto w-7 h-7 shadow-xl"
            src="/camera.png"
            alt=""
            height={100}
            width={100}
          />
        </button>
        <button onClick={onButtonProject} className="hover:bg-[#383636] w-12 rounded-md">
          <Image
            className="object-cover my-2 mx-auto w-7 h-[1.56rem]"
            src="/projects.png"
            alt=""
            height={100}
            width={100}
          />
        </button>
        <button onClick={onButtonExp} className="hover:bg-[#383636] w-12 rounded-md">
          <Image
            className="object-cover my-2 mx-auto w-7 h-[1.7rem]"
            src="/experience.png"
            alt=""
            height={100}
            width={100}
          />
        </button>
        <button onClick={onButtonSetting} className="hover:bg-[#383636] w-12 rounded-md">
          <Image
            className="bg-slate-200 invert object-cover my-2 mx-auto rounded-[0.25rem] w-7 h-[1.56rem] "
            src="/terminals.png"
            alt=""
            height={100}
            width={100}
          />
        </button>
      </div>
    </div>
  );
};

export default Nav;
