import React from "react";
import { TypeAnimation } from "react-type-animation";
import fimg from "../img/lap.png";
const First = () => {
  return (
    <div>
      {/* <div className="flex justify-center my-8">
        <div className="grid grid-rows-3 grid-cols-4 gap-3 w-4/5">
          <div className="row-span-1 col-span-1 h-20 rounded-md border-2 border-sky-300 bg-gradient-to-tl from-sky-300 to-inheritblack hover:bg-transparent "></div>
          <div className=" col-span-2 row-span-1 rounded-md border-2 border-[#9600ff] "></div>
          <div className=" col-span-1 row-span-2 rounded-md border-2 border-[#9600ff]"></div>
          <div className=" col-span-2 row-span-1 rounded-md border-2 border-[#9600ff] bg-gradient-to-tl from-purple-600 to-inheritblack]"></div>
          <div className=" col-span-1 row-span-1 rounded-md border-2 border-sky-300"></div>
          <div className=" col-span-1 row-span-1 rounded-md border-2 border-sky-300 bg-gradient-to-tl from-sky-300 to-inheritblack]"></div>
          <div className=" col-span-1 row-span-1 rounded-md border-2 border-sky-300 bg-gradient-to-tl from-sky-300 to-inheritblack]"></div>
          <div className=" col-span-1 row-span-1 rounded-md border-2 border-[#ff00c1] bg-gradient-to-tl from-[#ff00c1] to-inheritblack]"></div>
          <div className=" col-span-1 row-span-1 rounded-md border-2 border-sky-300"></div>
        </div>
      </div> */}
      <div>
        <img src={fimg} className="" />
      </div>
      <div className="w-full p-2 text-white text-center text-3xl mt-5">
        Hi myself <span className="text-yellow-500">Rumman Chowdhury</span> and,
      </div>
      <div className="flex justify-center flex-col items-center">
        <TypeAnimation
          sequence={[
            "I am a FrontEnd Developer",
            1000,
            "I am a BackEnd Developer",
            1000,
            "I am a Web Designer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1.8em", display: "inline-block" }}
          repeat={Infinity}
          className="text-white mt-1 mb-10 p-1"
        />
      </div>
      <div className="flex justify-center gap-7 ">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 ">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#15051a] rounded-md group-hover:bg-opacity-0">
            Download Resume
          </span>
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default First;
