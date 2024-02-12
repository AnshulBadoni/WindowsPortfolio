"use client";
import { Nav, Windows, Exp } from "@/components";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Images } from "@/types";
import Projects from "@/components/Projects";

export default function Home() {
  const bgUrl = `localhost:5000/wallpaper/top`;
  const bgimage = '/main.jpg'
  const [topResult, setTopResult] = useState<string>(bgimage);
  const [bg, setBg] = useState<Images[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [window, setWindow] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);
  const [projects, setProjects] = useState<boolean>(false);
  const [exp, setExp] = useState<boolean>(false);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/wallpaper/search?searchTerm=${searchTerm}`);
      const data = await response.json();

      if (data && Array.isArray(data) && data.length > 0) {
        setBg(data);
        setTopResult(data[0].path);
      } else {
        console.error('Invalid data format or no result found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    console.log(topResult);
  }, [topResult]);

  const backgroundStyle = {
    backgroundImage: `url(${topResult})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    overflow: "hidden",
  };

  const handleClick = () => {
    setWindow(!window);
  };
  const handleSettings = () => {
    setSettings(!settings);
    setProjects(false);
    setExp(false);
    setWindow(false);
  };
  const handleBackground = (imagePath: string) => {
    setTopResult(imagePath);
    setProjects(false);
    setExp(false);
    setWindow(false);
  };
  const handleProjects = () => {
    setProjects(!projects);
    setExp(false);
    setWindow(false);
    setSettings(false);
  };
  const handleExp = () => {
    setProjects(false);
    setWindow(false);
    setSettings(false);
    setExp(!exp);
  };

  return (
    <main style={backgroundStyle} className="absolute w-full">
      <Windows window={window} />
      {/* camera */}
      {isCameraActive && (
        <div className="absolute bottom-5 left-0 w-full h-full flex items-center justify-center">
          <div className="w-full h-14 absolute top-0 left-0 bg-[#222222] shadow-xl border-t-[1px] border-[#383838]">
            <button>
              <Image
                className="invert mt-6 ml-[95svw]"
                src="/search.png"
                width={20}
                height={20}
                alt=""
              />
            </button>
          </div>
          <div className="w-full h-full bg-[#222222] rounded-md ">
            {/* <div>cross</div> */}
            <video
              ref={videoRef}
              playsInline
              autoPlay
              className="w-full h-full "
            />
          </div>
        </div>
      )}
      {settings && (
        <div className="absolute bottom-16 left-20 w-[90%] h-[90%] bg-[#222222] border-[#383838] flex ">
          <div className="w-96 h-full rounded-lg mt-8 ">
            <form className="my-9 flex ml-10" onSubmit={handleSearchSubmit}>
              <input
                className="w-64 rounded-md text bg-[#3f3f3f] border-b-2 border-[#8c8c8c] placeholder:text-slate-400 block py-1 pl-6 pr-3 focus:outline-none focus:border-sky-500 sm:text-sm text-white"
                placeholder="Find a setting..."
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button type="submit">
                <img
                  src="/search.png"
                  className="-translate-x-10 w-4 h-4 invert"
                  alt=""
                />
              </button>
            </form>
            <h1 className="text-lg text-white ml-10">🎨 Personalize</h1>
          </div>
          <div>
            <h1 className="h-10 mx-10 mt-10 font-bold text-3xl text-white">
              Home
            </h1>
            <div className="flex ">
              <img
                className="w-36 h-20 mt-6 ml-10 rounded-lg border-4 object-cover border-black"
                src={topResult}
                alt=""
              />
              <h2 className="font-bold text-white mt-6 ml-6 ">
                {" "}
                DESKTOP-I5RKQT{" "}
              </h2>
            </div>
            <p className="font-light text-sm text-white ml-52 -translate-y-14">
              Inspiron 3576
            </p>
            <div className=" h-[30rem] w-[60rem] mt-2 flex-wrap ">
            {bg.map((bgItem) => (
            <button onClick={() => handleBackground(bgItem.path)} key={bgItem.id} className="">
              <Image
                src={bgItem.path}
                alt=''
                width={100}
                height={100}
                className="w-36 h-20 mt-2 ml-10 rounded-lg border-4 object-cover border-black"
              />
            </button>
          ))}
            </div>
          </div>
        </div>
      )}
      {projects && ( <Projects /> ) }
      {exp && ( <Exp /> ) }
      <div className="absolute bottom-0 w-screen">
        <div className="">
          <Nav
            window={window}
            onButtonClick={handleClick}
            isCameraActive={isCameraActive}
            setIsCameraActive={setIsCameraActive}
            videoRef={videoRef}
            settings={settings}
            onButtonSetting={handleSettings}
            projects={projects}
            onButtonProject={handleProjects}
            exp={exp}
            onButtonExp={handleExp}
          />
        </div>
      </div>
    </main>
  );
}
